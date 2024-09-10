/**
 * mixedVar can have type string or number
 */ 
let mixedVar: string | number;
// let mixedVar: string | number = 'dasha';
// let mixedVar: string | number = 24;
// console.log(mixedVar);



/**
 * status can have literal type Enable or Disable
 */
enum EnabledStatus {
  Enable = "enable",
  Disable = "disable",
}

let status = EnabledStatus;
console.log(status.Enable);
console.log(status.Disable);
