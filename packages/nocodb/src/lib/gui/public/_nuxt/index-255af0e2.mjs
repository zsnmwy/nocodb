import { cS as shallowRef, a6 as watchEffect } from "./entry-3fb260b7.mjs";
import { S as Spin, s as setDefaultIndicator } from "./index-d7455a19.mjs";
function eagerComputed(fn) {
  var result = shallowRef();
  watchEffect(function() {
    result.value = fn();
  }, {
    flush: "sync"
  });
  return result;
}
Spin.setDefaultIndicator = setDefaultIndicator;
Spin.install = function(app) {
  app.component(Spin.name, Spin);
  return app;
};
export { eagerComputed as e };
