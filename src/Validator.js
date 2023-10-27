/* eslint-disable class-methods-use-this */
import Numbers from './NumberSchema.js';
import Arrays from './ArraySchema.js';
import Objects from './ObjectSchema.js';

class Validator {
  number() {
    return new Numbers([(value) => typeof value === 'number']);
  }

  array() {
    return new Arrays([(value) => Array.isArray(value)]);
  }

  object() {
    return new Objects();
  }
}

export default Validator;
