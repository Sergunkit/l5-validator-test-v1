class Objects {
  constructor(schema) {
    this.schema = schema;
    this.returnTrue = {
      isValid() {
        return true;
      },
    };
  }

  isValid(obj) {
    const { id, basket, payment = this.returnTrue } = this.schema;
    const schemaLength = Object.keys(this.schema).length;
    if (schemaLength !== Object.keys(obj).length) {
      return false;
    }
    // eslint-disable-next-line max-len
    return id.isValid(obj.id) && basket.isValid(obj.basket) && payment.isValid(obj.payment);
  }

  // eslint-disable-next-line class-methods-use-this
  shape(sch) {
    return new Objects(sch);
  }
}

export default Objects;
