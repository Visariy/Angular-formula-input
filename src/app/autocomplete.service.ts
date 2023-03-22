import {Injectable} from '@angular/core';
import {mathOperators, booleanOperators, mathFunctions} from "./interfaces";


@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  constructor() {
  }

  private mathOperators: mathOperators = [
    '+', '-', '*', '/', '%', '^'
  ]
  private booleanOperators: booleanOperators = [
    '=', '!=', '<>', '<', '<=', '>', '>=', '&&', '||'
  ]
  private mathFunctions: mathFunctions = [
    'NOT()', 'IF()', 'R()', 'MIN()', 'MAX()', 'ABS()',
    'ROUND()', 'FLOOR()', 'CEILING()', 'LOG()', 'LOG10()', 'SQRT()', 'SINR()',
    'COSR()', 'TANR()', 'COTR()', 'SECR()', 'CSCR()', 'ASINR()', 'ACOSR()',
    'ATANR()', 'ACOTR()', 'ATAN2R()', 'SIN()', 'COS()', 'TAN()',
    'COT()', 'SEC()', 'CSC()', 'ASIN()', 'ACOS()', 'ATAN()', 'ACOT()',
    'ATAN2()', 'SINH()', 'COSH()', 'TANH()', 'COTH()', 'SECH()', 'CSCH()',
    'ASINH()', 'ACOSH()', 'ATANH()', 'RAD()', 'DEG()', 'FACT()',
  ]
  private constants = [
    'e', 'PI', 'TRUE', 'FALSE', 'NULL'
  ]

  getMathFunctions() {
    return this.mathFunctions
  }

  getMathOperators() {
    return this.mathOperators
  }

  getBooleanOperators() {
    return this.booleanOperators
  }
}
