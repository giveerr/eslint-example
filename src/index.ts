import { data as AData } from './a'
import { data as BData } from './b'

import _ from 'lodash'

console.log('TypeScript Eslint Prettier Starter Template!')
console.log('A project by Caelin Sutch, follow him at @caelin_sutch')

const sum = (x: number, y: number): number => {
  if (x > 5) {
    return x + y
  }

  return 5
}

console.log(sum(15, 16))
console.log(AData, BData)

console.log(_.map([], x => x))

export {}
