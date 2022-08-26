import { cS as shallowRef, a6 as watchEffect } from "./entry-d9bc2aad.mjs";
import { S as Spin, s as setDefaultIndicator } from "./index-c696756a.mjs";
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
