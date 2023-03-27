import { Component, OnDestroy, OnInit } from '@angular/core';
import { SymbolService } from "../services/symbol.service";
import { autocompleteData } from "../types/datatypes";
import { debounceTime, Observable, fromEvent, Subscription } from "rxjs";
import { map } from "rxjs/operators"
import { FormControl } from "@angular/forms";



@Component({
  selector: 'component-formula-input',
  templateUrl: './formulaInput.component.html',
  styleUrls: ['./formulaInput.component.scss']
})
export class FormulaInputComponent implements OnInit, OnDestroy {

  mathMethodsAndConstants: autocompleteData;

  operators: autocompleteData;

  doubleOperators: autocompleteData;

  constructor(private autoCompleteService: SymbolService) {

    this.mathMethodsAndConstants = this.autoCompleteService.getMathMethods();

    this.operators = this.autoCompleteService.getOperators();

    this.doubleOperators = this.autoCompleteService.getDoubleOperators();

  }

  private doubleOperatorsArrayForCompute: string[] = [];

  private keydownSubscription$!: Subscription;

  myControl = new FormControl();

  mathFilteredMethodsAndConstantsArray$!: Observable<string[]>;

  operatorsTooltip: string = '';

  isTooltipDisabled: boolean = true;

  mathMethodsAndConstantsTooltip = '';

  private mathMethodsAndConstantsFilter() {

    this.mathFilteredMethodsAndConstantsArray$ = this.myControl.valueChanges

      .pipe(

        debounceTime(200),

        map(value => value.replace(/.*[\/\-+*%^=!<>&|]/, '').trim()),

        map(name => this.filterDropdownOptions(name, this.mathMethodsAndConstants))

      );
  }

  private filterDropdownOptions(name: string, arr: autocompleteData): string[] {

    const filterValue = name.toUpperCase();

    return arr.filter(value => value.name.toUpperCase().includes(filterValue))
    
      .map(value => value.name);
    
  }

  transferMessageToDropdownTooltip(event: MouseEvent) {

    const eventTarget = event.target as HTMLInputElement;

    for(let value of this.mathMethodsAndConstants) {

      if(value.name === eventTarget.innerText) {

        this.mathMethodsAndConstantsTooltip = value.message;

      }
    }
  };

  private keyListener() {

    const input = document.getElementsByClassName('autocomplete-input');

    const keydown = fromEvent(input, 'keydown');

    this.keydownSubscription$ = keydown.pipe(debounceTime(50)).subscribe(value => {

      const keyboardEvent = value as KeyboardEvent;

      this.computeOperatorsTooltip(keyboardEvent.key, this.operators, this.doubleOperators);

    })
  };

 private transferMessageToOperatorsTooltip(name: string, arr: autocompleteData) {

    for(let operator of arr) {

      if(operator.name === name) {

        this.isTooltipDisabled = false;

        this.operatorsTooltip = operator.message;

      }
    }
  }

  private computeOperatorsTooltip(key: string, arr: autocompleteData, secondArr: autocompleteData) {

    if(key.length === 1) {

      this.doubleOperatorsArrayForCompute.push(key);

    }

    if(this.doubleOperatorsArrayForCompute.length >= 2) {

      this.doubleOperatorsArrayForCompute[0] = this.doubleOperatorsArrayForCompute[1];

      this.doubleOperatorsArrayForCompute[1] = key;

      while(this.doubleOperatorsArrayForCompute.length > 2) {

        this.doubleOperatorsArrayForCompute.pop();
        
      }
    }

    const doubleKey = this.doubleOperatorsArrayForCompute.join('');

    this.transferMessageToOperatorsTooltip(key, arr);

    this.transferMessageToOperatorsTooltip(doubleKey, secondArr);

  };

  normalizeInputValue(operator: string): string {

    const match = this.myControl.value.match(/[^-+*%^=!<>&|]+$/g);

    if(match) {

      return this.myControl.value.replace(match, ' ') + operator;

    } else {

      return this.myControl.value + operator;

    }
  }


  ngOnInit() {

    this.mathMethodsAndConstantsFilter();

    this.keyListener();

  }

  ngOnDestroy() {

    if(this.keydownSubscription$) {

      this.keydownSubscription$.unsubscribe();

    }
  }
}

