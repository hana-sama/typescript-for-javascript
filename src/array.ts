export {};

let numbers: number[] = [1, 2, 3];
console.log({ numbers })
let numbers2: Array<number> = [4, 5, 6];
console.log({ numbers2 })
let names: Array<string> = ["Angela", "Bob", "Hana"];
console.log({ names })

let strings: string[] = ["TypeScript", "JavaScript", "CSS3"]
console.log({ strings })

let secondDimentionArray: number[][] = [
  [50, 100],
  [150, 400]
]

console.log({ secondDimentionArray })

let hairetsu: (string | number | boolean)[]  = [1, "Japan", false]
console.log({ hairetsu })
