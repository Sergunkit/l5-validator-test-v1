class Arrays {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(arr) {
    return this.validators.every((validator) => validator(arr));
  }

  length(num) {
    const val = (arr) => !!(arr.length === num);
    return new Arrays([...this.validators, val]);
  }
}

export default Arrays;
