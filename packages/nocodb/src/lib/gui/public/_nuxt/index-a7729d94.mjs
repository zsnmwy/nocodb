import { M as Modal, d as destroyFns } from "./Modal-affdb140.mjs";
import { r as ref, a_ as onBeforeUnmount, d as defineComponent, s as onMounted, g as createVNode, aK as _objectSpread2, bg as useLocaleReceiver, b0 as _slicedToArray, aD as classNames, aJ as _defineProperty, cL as getTransitionName, aC as _extends, ce as InfoCircleOutlined, cd as CheckCircleOutlined, cf as CloseCircleOutlined, cg as ExclamationCircleOutlined, db as render, dM as ConfigProvider, dN as globalConfigForApi } from "./entry-649fbf77.mjs";
import "./index-a2900c1e.mjs";
import { c as convertLegacyProps, B as Button } from "./button-65b4020b.mjs";
import { o as omit } from "./omit-52a539d6.mjs";
var useDestroyed = function useDestroyed2() {
  var destroyed = ref(false);
  onBeforeUnmount(function() {
    destroyed.value = true;
  });
  return destroyed;
};
var useDestroyed$1 = useDestroyed;
var actionButtonProps = {
  type: {
    type: String
  },
  actionFn: Function,
  close: Function,
  autofocus: Boolean,
  prefixCls: String,
  buttonProps: Object,
  emitEvent: Boolean,
  quitOnNullishReturnValue: Boolean
};
function isThenable(thing) {
  return !!(thing && !!thing.then);
}
var ActionButton = defineComponent({
  name: "ActionButton",
  props: actionButtonProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var clickedRef = ref(false);
    var buttonRef = ref();
    var loading = ref(false);
    var timeoutId;
    var isDestroyed = useDestroyed$1();
    onMounted(function() {
      if (props.autofocus) {
        timeoutId = setTimeout(function() {
          var _a;
          return (_a = buttonRef.value.$el) === null || _a === void 0 ? void 0 : _a.focus();
        });
      }
    });
    onBeforeUnmount(function() {
      clearTimeout(timeoutId);
    });
    var handlePromiseOnOk = function handlePromiseOnOk2(returnValueOfOnOk) {
      var close = props.close;
      if (!isThenable(returnValueOfOnOk)) {
        return;
      }
      loading.value = true;
      returnValueOfOnOk.then(function() {
        if (!isDestroyed.value) {
          loading.value = false;
        }
        close.apply(void 0, arguments);
        clickedRef.value = false;
      }, function(e) {
        console.error(e);
        if (!isDestroyed.value) {
          loading.value = false;
        }
        clickedRef.value = false;
      });
    };
    var onClick = function onClick2(e) {
      var actionFn = props.actionFn, _props$close = props.close, close = _props$close === void 0 ? function() {
      } : _props$close;
      if (clickedRef.value) {
        return;
      }
      clickedRef.value = true;
      if (!actionFn) {
        close();
        return;
      }
      var returnValueOfOnOk;
      if (props.emitEvent) {
        returnValueOfOnOk = actionFn(e);
        if (props.quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
          clickedRef.value = false;
          close(e);
          return;
        }
      } else if (actionFn.length) {
        returnValueOfOnOk = actionFn(close);
        clickedRef.value = false;
      } else {
        returnValueOfOnOk = actionFn();
        if (!returnValueOfOnOk) {
          close();
          return;
        }
      }
      handlePromiseOnOk(returnValueOfOnOk);
    };
    return function() {
      var type = props.type, prefixCls = props.prefixCls, buttonProps = props.buttonProps;
      return createVNode(Button, _objectSpread2(_objectSpread2(_objectSpread2({}, convertLegacyProps(type)), {}, {
        "onClick": onClick,
        "loading": loading.value,
        "prefixCls": prefixCls
      }, buttonProps), {}, {
        "ref": buttonRef
      }), slots);
    };
  }
});
function renderSomeContent(someContent) {
  if (typeof someContent === "function") {
    return someContent();
  }
  return someContent;
}
var ConfirmDialog = defineComponent({
  name: "ConfirmDialog",
  inheritAttrs: false,
  props: ["icon", "onCancel", "onOk", "close", "closable", "zIndex", "afterClose", "visible", "keyboard", "centered", "getContainer", "maskStyle", "okButtonProps", "cancelButtonProps", "okType", "prefixCls", "okCancel", "width", "mask", "maskClosable", "okText", "cancelText", "autoFocusButton", "transitionName", "maskTransitionName", "type", "title", "content", "direction", "rootPrefixCls", "bodyStyle", "closeIcon", "modalRender", "focusTriggerAfterClose", "wrapClassName"],
  setup: function setup2(props, _ref) {
    var attrs = _ref.attrs;
    var _useLocaleReceiver = useLocaleReceiver("Modal"), _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1), locale = _useLocaleReceiver2[0];
    return function() {
      var icon = props.icon, onCancel = props.onCancel, onOk = props.onOk, close = props.close, _props$closable = props.closable, closable = _props$closable === void 0 ? false : _props$closable, zIndex = props.zIndex, afterClose = props.afterClose, visible = props.visible, keyboard = props.keyboard, centered = props.centered, getContainer = props.getContainer, maskStyle = props.maskStyle, okButtonProps = props.okButtonProps, cancelButtonProps = props.cancelButtonProps, _props$okCancel = props.okCancel, okCancel = _props$okCancel === void 0 ? true : _props$okCancel, _props$width = props.width, width = _props$width === void 0 ? 416 : _props$width, _props$mask = props.mask, mask = _props$mask === void 0 ? true : _props$mask, _props$maskClosable = props.maskClosable, maskClosable = _props$maskClosable === void 0 ? false : _props$maskClosable, type = props.type, title = props.title, content = props.content, direction = props.direction, closeIcon = props.closeIcon, modalRender = props.modalRender, focusTriggerAfterClose = props.focusTriggerAfterClose, rootPrefixCls = props.rootPrefixCls, bodyStyle = props.bodyStyle, wrapClassName = props.wrapClassName;
      var okType = props.okType || "primary";
      var prefixCls = props.prefixCls || "ant-modal";
      var contentPrefixCls = "".concat(prefixCls, "-confirm");
      var style = attrs.style || {};
      var okText = renderSomeContent(props.okText) || (okCancel ? locale.value.okText : locale.value.justOkText);
      var cancelText = renderSomeContent(props.cancelText) || locale.value.cancelText;
      var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || "ok";
      var classString = classNames(contentPrefixCls, "".concat(contentPrefixCls, "-").concat(type), "".concat(prefixCls, "-").concat(type), _defineProperty({}, "".concat(contentPrefixCls, "-rtl"), direction === "rtl"), attrs.class);
      var cancelButton = okCancel && createVNode(ActionButton, {
        "actionFn": onCancel,
        "close": close,
        "autofocus": autoFocusButton === "cancel",
        "buttonProps": cancelButtonProps,
        "prefixCls": "".concat(rootPrefixCls, "-btn")
      }, {
        default: function _default() {
          return [cancelText];
        }
      });
      return createVNode(Modal, {
        "prefixCls": prefixCls,
        "class": classString,
        "wrapClassName": classNames(_defineProperty({}, "".concat(contentPrefixCls, "-centered"), !!centered), wrapClassName),
        "onCancel": function onCancel2(e) {
          return close({
            triggerCancel: true
          }, e);
        },
        "visible": visible,
        "title": "",
        "footer": "",
        "transitionName": getTransitionName(rootPrefixCls, "zoom", props.transitionName),
        "maskTransitionName": getTransitionName(rootPrefixCls, "fade", props.maskTransitionName),
        "mask": mask,
        "maskClosable": maskClosable,
        "maskStyle": maskStyle,
        "style": style,
        "bodyStyle": bodyStyle,
        "width": width,
        "zIndex": zIndex,
        "afterClose": afterClose,
        "keyboard": keyboard,
        "centered": centered,
        "getContainer": getContainer,
        "closable": closable,
        "closeIcon": closeIcon,
        "modalRender": modalRender,
        "focusTriggerAfterClose": focusTriggerAfterClose
      }, {
        default: function _default() {
          return [createVNode("div", {
            "class": "".concat(contentPrefixCls, "-body-wrapper")
          }, [createVNode("div", {
            "class": "".concat(contentPrefixCls, "-body")
          }, [renderSomeContent(icon), title === void 0 ? null : createVNode("span", {
            "class": "".concat(contentPrefixCls, "-title")
          }, [renderSomeContent(title)]), createVNode("div", {
            "class": "".concat(contentPrefixCls, "-content")
          }, [renderSomeContent(content)])]), createVNode("div", {
            "class": "".concat(contentPrefixCls, "-btns")
          }, [cancelButton, createVNode(ActionButton, {
            "type": okType,
            "actionFn": onOk,
            "close": close,
            "autofocus": autoFocusButton === "ok",
            "buttonProps": okButtonProps,
            "prefixCls": "".concat(rootPrefixCls, "-btn")
          }, {
            default: function _default2() {
              return [okText];
            }
          })])])];
        }
      });
    };
  }
});
var confirm = function confirm2(config) {
  var container = document.createDocumentFragment();
  var currentConfig = _extends(_extends({}, omit(config, ["parentContext", "appContext"])), {
    close,
    visible: true
  });
  var confirmDialogInstance = null;
  function destroy() {
    if (confirmDialogInstance) {
      render(null, container);
      confirmDialogInstance.component.update();
      confirmDialogInstance = null;
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var triggerCancel = args.some(function(param) {
      return param && param.triggerCancel;
    });
    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, args);
    }
    for (var i = 0; i < destroyFns.length; i++) {
      var fn = destroyFns[i];
      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }
  function close() {
    var _this = this;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    currentConfig = _extends(_extends({}, currentConfig), {
      visible: false,
      afterClose: function afterClose() {
        if (typeof config.afterClose === "function") {
          config.afterClose();
        }
        destroy.apply(_this, args);
      }
    });
    update(currentConfig);
  }
  function update(configUpdate) {
    if (typeof configUpdate === "function") {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = _extends(_extends({}, currentConfig), configUpdate);
    }
    if (confirmDialogInstance) {
      _extends(confirmDialogInstance.component.props, currentConfig);
      confirmDialogInstance.component.update();
    }
  }
  var Wrapper = function Wrapper2(p) {
    var global = globalConfigForApi;
    var rootPrefixCls = global.prefixCls;
    var prefixCls = p.prefixCls || "".concat(rootPrefixCls, "-modal");
    return createVNode(ConfigProvider, _objectSpread2(_objectSpread2({}, global), {}, {
      "notUpdateGlobalConfig": true,
      "prefixCls": rootPrefixCls
    }), {
      default: function _default() {
        return [createVNode(ConfirmDialog, _objectSpread2(_objectSpread2({}, p), {}, {
          "rootPrefixCls": rootPrefixCls,
          "prefixCls": prefixCls
        }), null)];
      }
    });
  };
  function render$1(props) {
    var vm = createVNode(Wrapper, _extends({}, props));
    vm.appContext = config.parentContext || config.appContext || vm.appContext;
    render(vm, container);
    return vm;
  }
  confirmDialogInstance = render$1(currentConfig);
  destroyFns.push(close);
  return {
    destroy: close,
    update
  };
};
var confirm$1 = confirm;
function withWarn(props) {
  return _extends(_extends({
    icon: function icon() {
      return createVNode(ExclamationCircleOutlined, null, null);
    },
    okCancel: false
  }, props), {
    type: "warning"
  });
}
function withInfo(props) {
  return _extends(_extends({
    icon: function icon() {
      return createVNode(InfoCircleOutlined, null, null);
    },
    okCancel: false
  }, props), {
    type: "info"
  });
}
function withSuccess(props) {
  return _extends(_extends({
    icon: function icon() {
      return createVNode(CheckCircleOutlined, null, null);
    },
    okCancel: false
  }, props), {
    type: "success"
  });
}
function withError(props) {
  return _extends(_extends({
    icon: function icon() {
      return createVNode(CloseCircleOutlined, null, null);
    },
    okCancel: false
  }, props), {
    type: "error"
  });
}
function withConfirm(props) {
  return _extends(_extends({
    icon: function icon() {
      return createVNode(ExclamationCircleOutlined, null, null);
    },
    okCancel: true
  }, props), {
    type: "confirm"
  });
}
function modalWarn(props) {
  return confirm$1(withWarn(props));
}
Modal.info = function infoFn(props) {
  return confirm$1(withInfo(props));
};
Modal.success = function successFn(props) {
  return confirm$1(withSuccess(props));
};
Modal.error = function errorFn(props) {
  return confirm$1(withError(props));
};
Modal.warning = modalWarn;
Modal.warn = modalWarn;
Modal.confirm = function confirmFn(props) {
  return confirm$1(withConfirm(props));
};
Modal.destroyAll = function destroyAllFn() {
  while (destroyFns.length) {
    var close = destroyFns.pop();
    if (close) {
      close();
    }
  }
};
Modal.install = function(app) {
  app.component(Modal.name, Modal);
  return app;
};
