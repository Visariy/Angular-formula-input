import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaInputComponent } from "../component/formulaInput.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";



@NgModule({
  declarations: [
    FormulaInputComponent,
  ],
  exports: [
    FormulaInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule
  ],
})
export class FormulaInputModule { }
