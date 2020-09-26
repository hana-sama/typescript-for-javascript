import axios from 'axios'
export { };
  
const func = (): number => 43;

let numberAny: any = func();
let numberUnknown: unknown = func();
console.log(numberAny);
console.log(numberUnknown);

let sumAny = numberAny + 10;
console.log(sumAny);
console.log(typeof sumAny);
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown);
}
