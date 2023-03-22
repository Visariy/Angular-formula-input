export interface mathOperators extends Array<string> {
  [0]: '+';
  [1]: '-';
  [2]: '*';
  [3]: '/';
  [4]: '%';
  [5]: '^';
}

export interface booleanOperators extends Array<string> {
 [0]: '=';
 [1]: '!=';
 [2]: '<>';
 [3]: '<';
 [4]: '<=';
 [5]: '>';
 [6]: '>=';
 [7]: '&&';
 [8]: '||';
}

export interface mathFunctions extends Array<string> {
  [0]:'NOT()'
  [1]:'IF()'
  [2]:'R()'
  [3]:'MIN()'
  [4]:'MAX()'
  [5]:'ABS()'
  [6]:'ROUND()'
  [7]:'FLOOR()'
  [8]:'CEILING()'
  [9]:'LOG()'
  [10]:'LOG10()'
  [11]:'SQRT()'
  [12]:'SINR()'
  [13]:'COSR()'
  [14]:'TANR()'
  [15]:'COTR()'
  [16]:'SECR()'
  [17]:'CSCR()'
  [18]:'ASINR()'
  [19]:'ACOSR()'
  [20]:'ATANR()'
  [21]:'ACOTR()'
  [22]:'ATAN2R()'
  [23]:'SIN()'
  [24]:'COS()'
  [25]:'TAN()'
  [26]:'COT()'
  [27]:'SEC()'
  [28]:'CSC()'
  [29]:'ASIN()'
  [30]:'ACOS()'
  [31]:'ATAN()'
  [32]:'ACOT()'
  [33]:'ATAN2()'
  [34]:'SINH()'
  [35]:'COSH()'
  [36]:'TANH()'
  [37]:'COTH()'
  [38]:'SECH()'
  [39]:'CSCH()'
  [40]:'ASINH()'
  [41]:'ACOSH()'
  [42]:'ATANH()'
  [43]:'RAD()'
  [44]:'DEG()'
  [45]:'FACT()'
}
