/* eslint-disable class-methods-use-this */
export default class Numbers {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(sign) {
    return this.validators.every((validator) => validator(sign));
  }

  even() {
    const val = (num) => !!(num % 2 === 0);
    return new Numbers([...this.validators, val]);
  }

  odd() {
    const val = (num) => !!(num % 2 !== 0);
    return new Numbers([...this.validators, val]);
  }
}
