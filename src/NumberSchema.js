class Numbers {
  constructor(results = { even: true, odd: true }) {
    this.respons = results;
  }

  isValid(sign) {
    let { even, odd } = this.respons;
    if (odd === false) {
      even = (sign % 2 === 0);
    } else if (even === false) {
      odd = (sign % 2 !== 0);
    }
    return !!(((typeof sign === 'number') && (even || odd)));
  }

  // eslint-disable-next-line class-methods-use-this
  even() {
    const even = { even: true, odd: false };
    return new Numbers(even);
  }

  // eslint-disable-next-line class-methods-use-this
  odd() {
    const odd = { odd: true, even: false };
    return new Numbers(odd);
  }
}

export default Numbers;
