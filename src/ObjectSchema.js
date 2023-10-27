/* eslint-disable class-methods-use-this */
class Objects {
  constructor(schems) {
    this.validators = schems;
  }

  isValid(obj) {
    const schemaKeys = Object.keys(this.validators);
    if (schemaKeys.length !== Object.keys(obj).length) {
      return false;
    }
    return schemaKeys.every((key) => this.validators[key].isValid(obj[key]));
  }

  shape(schema) {
    return new Objects(schema);
  }
}

export default Objects;
