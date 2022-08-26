import { aC as _extends } from "./entry-d9bc2aad.mjs";
function omit(obj, fields) {
  var shallowCopy = _extends({}, obj);
  for (var i = 0; i < fields.length; i += 1) {
    var key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}
export { omit as o };
