import { Component } from '@angular/core';
import { AutocompleteService } from "../autocomplete.service";
import { mathFunctions } from "../interfaces";


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent{

  constructor( private autoCompleteService: AutocompleteService ) {}

  formula: string = '';
  mathFunctionArray: string[] = []

  filterFormula(formula: string) {
    return formula.replace(/^.*[\/\-+*%^(=!)<>&|]/, '')
  }

  newFormula(newValue: string) {
    newValue = this.filterFormula(this.formula)
    const symbolArray: mathFunctions = this.getMathFunctions()
    this.mathFunctionArray.length = 0;
    for(let i = 0; i < symbolArray.length; i++) {
      if(symbolArray[i].includes(newValue.toUpperCase())){
        this.mathFunctionArray.push(symbolArray[i])
        console.log(this.mathFunctionArray)
      }
    }
  }

  getMathFunctions(): mathFunctions {
    return this.autoCompleteService.getMathFunctions()
  }

  showAutocomplete(){

  }

  ngOnInit() {
  }
}
