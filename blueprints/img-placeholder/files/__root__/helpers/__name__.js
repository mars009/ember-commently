import Ember from 'ember';

const { Helper } = Ember;

// Now we start adding the code necessary to create our blueprint and add on top of our base
// NOTE: The open brackets, percent and equals are text interpolations, which will not interfere with ES6 interpolations
// you can't write them in comments since that will trigger an 'Unexpected Token' error when running with EmberCli
export function <%= camelizedModuleName %>(params, hash) {  
  
  return `http://<%= baseUrl %>/${hash.w}/${hash.h}`;
}

export default Helper.helper(<%= camelizedModuleName %>);
