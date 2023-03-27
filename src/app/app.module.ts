import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { FormulaInputModule } from "./module/formulaInput.module";


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        FormulaInputModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
