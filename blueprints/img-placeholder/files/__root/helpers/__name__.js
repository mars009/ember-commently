import Ember from 'ember';

const { Helper } = Ember;

// We grabbed this code from the 'helper blueprint' in the ember-cli project
// export function <%= camelizedModuleName %>(params, hash) {
//   return `http://<%= baseUrl %>/${hash.w}/${hash.h}`;
// }

// Now we start adding the code necessary to create our blueprint and add on top of our base
export function <%= camelizedModuleName %>(params, hash) {
  // NOTE: "<%= >" are text interpolations, which will not interfere with ES6 interpolations
  return `http://placekitten.com/${hash.w}/ ${hash.h}`;
}

export default Helper.helper(<%= camelizedModuleName %>);