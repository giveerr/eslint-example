console.log('TypeScript Eslint Prettier Starter Template!')
console.log('A project by Caelin Sutch, follow him at @caelin_sutch')

const sum = (x: number, y: number): number | undefined => {
  if (x > 5) {
    return x + y
  }
}

console.log(sum(15, 16))

export {}
