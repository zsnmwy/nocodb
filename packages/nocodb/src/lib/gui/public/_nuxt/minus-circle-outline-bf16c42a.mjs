import { _ as _export_sfc, d as defineComponent, e as computed, r as ref, s as onMounted, de as editor, df as languages, w as watch, o as openBlock, c as createElementBlock, b as createBaseVNode } from "./entry-3fb260b7.mjs";
import { d as deepCompare } from "./deepCompare-c3a57270.mjs";
function WorkerWrapper$2() {
  return new Worker("/__NUXT_BASE__/json.worker.93e06976.js", {
    "type": "module"
  });
}
function WorkerWrapper$1() {
  return new Worker("/__NUXT_BASE__/editor.worker.85acecf3.js", {
    "type": "module"
  });
}
function WorkerWrapper() {
  return new Worker("/__NUXT_BASE__/ts.worker.204bcb97.js", {
    "type": "module"
  });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Editor",
  props: {
    modelValue: null,
    hideMinimap: { type: Boolean },
    lang: { default: "json" },
    validate: { type: Boolean, default: true },
    disableDeepCompare: { type: Boolean, default: false },
    readOnly: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    let vModel = computed({
      get: () => {
        if (typeof __props.modelValue === "object") {
          return JSON.stringify(__props.modelValue, null, 2);
        } else {
          return __props.modelValue;
        }
      },
      set: (newVal) => {
        if (typeof __props.modelValue === "object") {
          try {
            emits("update:modelValue", typeof newVal === "object" ? newVal : JSON.parse(newVal));
          } catch (e) {
            console.error(e);
          }
        } else {
          emits("update:modelValue", newVal);
        }
      }
    });
    const isValid = ref(true);
    self.MonacoEnvironment = {
      getWorker(_, label) {
        switch (label) {
          case "json":
            return new WorkerWrapper$2();
          case "typescript":
            return new WorkerWrapper();
          default:
            return new WorkerWrapper$1();
        }
      }
    };
    const root = ref();
    let editor$1;
    const format = () => {
      editor$1.setValue(JSON.stringify(JSON.parse(editor$1 == null ? void 0 : editor$1.getValue()), null, 2));
    };
    expose({
      format,
      isValid
    });
    onMounted(() => {
      if (root.value && __props.lang) {
        const model = editor.createModel(vModel.value, __props.lang);
        if (__props.lang === "json") {
          languages.json.jsonDefaults.setDiagnosticsOptions({
            validate: __props.validate
          });
        }
        editor$1 = editor.create(root.value, {
          model,
          theme: "vs",
          foldingStrategy: "indentation",
          selectOnLineNumbers: true,
          scrollbar: {
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8
          },
          tabSize: 2,
          automaticLayout: true,
          readOnly: __props.readOnly,
          minimap: {
            enabled: !__props.hideMinimap
          }
        });
        editor$1.onDidChangeModelContent(async () => {
          try {
            isValid.value = true;
            if (__props.disableDeepCompare) {
              vModel.value = editor$1.getValue();
            } else {
              const obj = JSON.parse(editor$1.getValue());
              if (!obj || !deepCompare(vModel.value, obj))
                vModel.value = obj;
            }
          } catch (e) {
            isValid.value = false;
            console.log(e);
          }
        });
      }
    });
    watch(vModel, (v) => {
      if (!editor$1 || !v)
        return;
      const editorValue = editor$1 == null ? void 0 : editor$1.getValue();
      if (!__props.disableDeepCompare) {
        if (!editorValue || !deepCompare(JSON.parse(v), JSON.parse(editorValue))) {
          editor$1.setValue(v);
        }
      } else {
        if (editorValue !== v)
          editor$1.setValue(v);
      }
    });
    const __returned__ = { emits, vModel, isValid, root, editor: editor$1, format };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { ref: "root" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, null, 512);
}
var __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const _hoisted_1$1 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m1 5h-2v4H7v2h4v4h2v-4h4v-2h-4V7Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var MdiPlusIcon = { name: "mdi-plus-circle-outline", render: render$1 };
const _hoisted_1 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7 13h10v-2H7"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
var MdiMinusIcon = { name: "mdi-minus-circle-outline", render };
export { MdiPlusIcon as M, __nuxt_component_0 as _, MdiMinusIcon as a };
