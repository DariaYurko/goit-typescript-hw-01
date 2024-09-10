let mixedVar: string | number = 'dasha';

enum EnabledStatus {
  ENABLE = "enable",
  DISABLE = "disable",
}

let status = EnabledStatus.ENABLE;
console.log(status);
console.log(mixedVar);
