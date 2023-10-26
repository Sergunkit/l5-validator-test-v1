import Numbers from './NumberSchema.js';
import Arrays from './ArraySchema.js';
import Objects from './ObjectSchema.js';

class Validator {
  // eslint-disable-next-line class-methods-use-this
  number() {
    return new Numbers();
  }

  // eslint-disable-next-line class-methods-use-this
  array() {
    return new Arrays();
  }

  // eslint-disable-next-line class-methods-use-this
  object() {
    return new Objects();
  }
}

export default Validator;
