export {};

function bmi(height: number, weight: number): number {
  return Math.floor(weight / (height * height));
}
console.log(bmi(1.60, 45));
