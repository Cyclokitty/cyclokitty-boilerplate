// @flow

class Cat {
  name: string
  constructor(name: string) {
    this.name = name
  }

  meow() {
    return `Mew! Mew! I am ${this.name}`
  }
}

export default Cat
