class Arrays {
  constructor(num) {
    this.num = num || false;
  }

  isValid(sign) {
    if (this.num !== false) {
      return Array.isArray(sign) && (sign.length === this.num);
    }
    return !!(Array.isArray(sign));
  }

  // eslint-disable-next-line class-methods-use-this
  length(num) {
    return new Arrays(num);
  }
}

export default Arrays;
