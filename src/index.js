/* eslint-disable no-console */
// @flow
import catName from 'cat-namer'
import Cat from './cat'

const name = catName.random()
console.log(`Hello, ${name}`)

const str = 'ES6'
console.log(`hello ${str}`)

// const pusskins = new Cat('Pusskins');
const pusskins = new Cat(name)
console.log(pusskins.meow())
