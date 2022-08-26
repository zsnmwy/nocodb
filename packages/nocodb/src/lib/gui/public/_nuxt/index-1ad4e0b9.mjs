import { aR as dayjs, o as openBlock, c as createElementBlock, b as createBaseVNode, T as normalizeStyle, b_ as resolveComponent, g as createVNode, c6 as TinyColor, B as withDirectives, bQ as vModelText, v as toDisplayString, b6 as debounce, c7 as isObject, A as normalizeClass, j as createBlock, k as createCommentVNode, aq as vShow } from "./entry-d9bc2aad.mjs";
const timeAgo = (date) => {
  return dayjs.utc(date).fromNow();
};
const dateFormats = [
  "DD-MM-YYYY",
  "MM-DD-YYYY",
  "YYYY-MM-DD",
  "DD/MM/YYYY",
  "MM/DD/YYYY",
  "YYYY/MM/DD",
  "DD MM YYYY",
  "MM DD YYYY",
  "YYYY MM DD"
];
const handleTZ = (val) => {
  if (!val) {
    return;
  }
  if (typeof val !== "string") {
    return val;
  }
  return val.replace(/((?:-?(?:[1-9][0-9]*)?[0-9]{4})-(?:1[0-2]|0[1-9])-(?:3[01]|0[1-9]|[12][0-9])T(?:2[0-3]|[01][0-9]):(?:[0-5][0-9]):(?:[0-5][0-9])(?:\.[0-9]+)?(?:Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9]))/g, (i, v) => {
    return dayjs(v).format("YYYY-MM-DD HH:mm");
  });
};
function validateDateWithUnknownFormat(v) {
  let res = 0;
  for (const format of dateFormats) {
    res |= dayjs(v, format, true).isValid();
  }
  return res;
}
const _hoisted_1$5 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M9 3h2v2H9V3m4 0h2v2h-2V3M9 7h2v2H9V7m4 0h2v2h-2V7m-4 4h2v2H9v-2m4 0h2v2h-2v-2m-4 4h2v2H9v-2m4 0h2v2h-2v-2m-4 4h2v2H9v-2m4 0h2v2h-2v-2Z"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
}
var __unplugin_components_4 = { name: "mdi-drag-vertical", render: render$6 };
const prefix = "";
function styleInject(css, ref) {
  if (ref === void 0)
    ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
const install = function(app, options) {
  const { componentPrefix = prefix } = options || {};
  app.component(`${componentPrefix}${this.name}`, this);
};
const _checkboardCache = {};
var script$5 = {
  name: "Checkboard",
  props: {
    size: {
      type: [Number, String],
      default: 8
    },
    white: {
      type: String,
      default: "#fff"
    },
    grey: {
      type: String,
      default: "#e6e6e6"
    }
  },
  computed: {
    bgStyle() {
      return {
        "background-image": `url(${getCheckboard(this.white, this.grey, this.size)})`
      };
    }
  }
};
function renderCheckboard(c1, c2, size) {
  if (typeof document === "undefined") {
    return null;
  }
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size * 2;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return null;
  }
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
}
function getCheckboard(c1, c2, size) {
  const key = `${c1},${c2},${size}`;
  if (_checkboardCache[key]) {
    return _checkboardCache[key];
  }
  const checkboard = renderCheckboard(c1, c2, size);
  _checkboardCache[key] = checkboard;
  return checkboard;
}
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "vc-checkerboard",
    style: normalizeStyle($options.bgStyle)
  }, null, 4);
}
var css_248z$5 = ".vc-checkerboard{background-size:contain;bottom:0;left:0;position:absolute;right:0;top:0}";
styleInject(css_248z$5);
script$5.render = render$5;
script$5.__file = "src/components/checkboard/checkboard.vue";
script$5.install = install;
var script$4 = {
  name: "Alpha",
  props: {
    value: Object,
    onChange: Function
  },
  components: {
    checkboard: script$5
  },
  computed: {
    colors() {
      return this.value;
    },
    gradientColor() {
      const { rgba } = this.colors;
      const rgbStr = [rgba.r, rgba.g, rgba.b].join(",");
      return `linear-gradient(to right, rgba(${rgbStr}, 0) 0%, rgba(${rgbStr}, 1) 100%)`;
    }
  },
  methods: {
    handleChange(e, skip) {
      !skip && e.preventDefault();
      const { container } = this.$refs;
      if (!container) {
        return;
      }
      const containerWidth = container.clientWidth;
      const xOffset = container.getBoundingClientRect().left + window.pageXOffset;
      const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
      const left = pageX - xOffset;
      let a;
      if (left < 0) {
        a = 0;
      } else if (left > containerWidth) {
        a = 1;
      } else {
        a = Math.round(left * 100 / containerWidth) / 100;
      }
      if (this.colors.a !== a) {
        this.$emit("change", {
          h: this.colors.hsl.h,
          s: this.colors.hsl.s,
          l: this.colors.hsl.l,
          a,
          source: "rgba"
        });
      }
    },
    handleMouseDown(e) {
      this.handleChange(e, true);
      window.addEventListener("mousemove", this.handleChange);
      window.addEventListener("mouseup", this.handleMouseUp);
    },
    handleMouseUp() {
      this.unbindEventListeners();
    },
    unbindEventListeners() {
      window.removeEventListener("mousemove", this.handleChange);
      window.removeEventListener("mouseup", this.handleMouseUp);
    }
  }
};
const _hoisted_1$4 = { class: "vc-alpha" };
const _hoisted_2$4 = { class: "vc-alpha-checkboard-wrap" };
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("div", { class: "vc-alpha-picker" }, null, -1);
const _hoisted_4$3 = [
  _hoisted_3$4
];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_checkboard = resolveComponent("checkboard");
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createBaseVNode("div", _hoisted_2$4, [
      createVNode(_component_checkboard)
    ]),
    createBaseVNode("div", {
      class: "vc-alpha-gradient",
      style: normalizeStyle({ background: $options.gradientColor })
    }, null, 4),
    createBaseVNode("div", {
      class: "vc-alpha-container",
      ref: "container",
      onMousedown: _cache[0] || (_cache[0] = (...args) => $options.handleMouseDown && $options.handleMouseDown(...args)),
      onTouchmove: _cache[1] || (_cache[1] = (...args) => $options.handleChange && $options.handleChange(...args)),
      onTouchstart: _cache[2] || (_cache[2] = (...args) => $options.handleChange && $options.handleChange(...args))
    }, [
      createBaseVNode("div", {
        class: "vc-alpha-pointer",
        style: normalizeStyle({ left: $options.colors.a * 100 + "%" })
      }, _hoisted_4$3, 4)
    ], 544)
  ]);
}
var css_248z$4 = ".vc-alpha,.vc-alpha-checkboard-wrap{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-checkboard-wrap{overflow:hidden}.vc-alpha-gradient{bottom:0;left:0;position:absolute;right:0;top:0}.vc-alpha-container{cursor:pointer;height:100%;margin:0 3px;position:relative;z-index:2}.vc-alpha-pointer{position:absolute;z-index:2}.vc-alpha-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}";
styleInject(css_248z$4);
script$4.render = render$4;
script$4.__file = "src/components/alpha/alpha.vue";
script$4.install = install;
function tinycolor(...args) {
  return new TinyColor(...args);
}
function _colorChange(data, oldHue) {
  const alpha = data && data.a;
  let color;
  if (data && data.hsl) {
    color = tinycolor(data.hsl);
  } else if (data && data.hex && data.hex.length > 0) {
    color = tinycolor(data.hex);
  } else if (data && data.hsv) {
    color = tinycolor(data.hsv);
  } else if (data && data.rgba) {
    color = tinycolor(data.rgba);
  } else if (data && data.rgb) {
    color = tinycolor(data.rgb);
  } else {
    color = tinycolor(data);
  }
  if (color && (color._a === void 0 || color._a === null)) {
    color.setAlpha(alpha || color.getAlpha());
  }
  const hsl = color.toHsl();
  const hsv = color.toHsv();
  if (hsl.s === 0) {
    hsv.h = hsl.h = data.h || data.hsl && data.hsl.h || oldHue || 0;
  }
  return {
    hsl,
    hex: color.toHexString().toUpperCase(),
    hex8: color.toHex8String().toUpperCase(),
    rgba: color.toRgb(),
    hsv,
    oldHue: data.h || oldHue || hsl.h,
    source: data.source,
    a: color.getAlpha()
  };
}
var colorMixin = {
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: ["modelValue"],
  data() {
    return {
      val: _colorChange(this.modelValue)
    };
  },
  computed: {
    colors: {
      get() {
        return this.val;
      },
      set(newVal) {
        this.val = newVal;
        this.$emit("update:modelValue", newVal);
      }
    }
  },
  watch: {
    modelValue(newVal) {
      this.val = _colorChange(newVal);
    }
  },
  methods: {
    colorChange(data, oldHue) {
      this.oldHue = this.colors.hsl.h;
      this.colors = _colorChange(data, oldHue || this.oldHue);
    },
    isValidHex(hex) {
      return tinycolor(hex).isValid;
    },
    simpleCheckForValidColor(data) {
      const keysToCheck = ["r", "g", "b", "a", "h", "s", "l", "v"];
      let checked = 0;
      let passed = 0;
      for (let i = 0; i < keysToCheck.length; i++) {
        const letter = keysToCheck[i];
        if (data[letter]) {
          checked++;
          if (!isNaN(data[letter])) {
            passed++;
          }
        }
      }
      if (checked === passed) {
        return data;
      }
    },
    paletteUpperCase(palette) {
      return palette.map((c) => c.toUpperCase());
    },
    isTransparent(color) {
      return tinycolor(color).getAlpha() === 0;
    }
  }
};
var script$3 = {
  name: "editableInput",
  props: {
    label: String,
    labelText: String,
    desc: String,
    value: [String, Number],
    max: Number,
    min: Number,
    arrowOffset: {
      type: Number,
      default: 1
    }
  },
  computed: {
    val: {
      get() {
        return this.value;
      },
      set(v) {
        if (!(this.max === void 0) && +v > this.max) {
          this.$refs.input.value = this.max;
        } else {
          return v;
        }
      }
    },
    labelId() {
      return `input__label__${this.label}__${Math.random().toString().slice(2, 5)}`;
    },
    labelSpanText() {
      return this.labelText || this.label;
    }
  },
  methods: {
    update(e) {
      this.handleChange(e.target.value);
    },
    handleChange(newVal) {
      const data = {};
      data[this.label] = newVal;
      if (data.hex === void 0 && data["#"] === void 0) {
        this.$emit("change", data);
      } else if (newVal.length > 5) {
        this.$emit("change", data);
      }
    },
    handleKeyDown(e) {
      let { val } = this;
      const number = Number(val);
      if (number) {
        const amount = this.arrowOffset || 1;
        if (e.keyCode === 38) {
          val = number + amount;
          this.handleChange(val);
          e.preventDefault();
        }
        if (e.keyCode === 40) {
          val = number - amount;
          this.handleChange(val);
          e.preventDefault();
        }
      }
    }
  }
};
const _hoisted_1$3 = { class: "vc-editable-input" };
const _hoisted_2$3 = ["aria-labelledby"];
const _hoisted_3$3 = ["for", "id"];
const _hoisted_4$2 = { class: "vc-input__desc" };
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    withDirectives(createBaseVNode("input", {
      "aria-labelledby": $options.labelId,
      class: "vc-input__input",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.val = $event),
      onKeydown: _cache[1] || (_cache[1] = (...args) => $options.handleKeyDown && $options.handleKeyDown(...args)),
      onInput: _cache[2] || (_cache[2] = (...args) => $options.update && $options.update(...args)),
      ref: "input"
    }, null, 40, _hoisted_2$3), [
      [vModelText, $options.val]
    ]),
    createBaseVNode("span", {
      for: $props.label,
      class: "vc-input__label",
      id: $options.labelId
    }, toDisplayString($options.labelSpanText), 9, _hoisted_3$3),
    createBaseVNode("span", _hoisted_4$2, toDisplayString($props.desc), 1)
  ]);
}
var css_248z$3 = ".vc-editable-input{position:relative}.vc-input__input{border:0;outline:none;padding:0}.vc-input__label{text-transform:capitalize}";
styleInject(css_248z$3);
script$3.render = render$3;
script$3.__file = "src/components/editable-input/editable-input.vue";
script$3.install = install;
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
function clamp(value, min, max) {
  return min < max ? value < min ? min : value > max ? max : value : value < max ? max : value > min ? min : value;
}
var script$2 = {
  name: "Saturation",
  props: {
    value: Object
  },
  computed: {
    colors() {
      return this.value;
    },
    bgColor() {
      return `hsl(${this.colors.hsv.h}, 100%, 50%)`;
    },
    pointerTop() {
      return `${-(this.colors.hsv.v * 100) + 1 + 100}%`;
    },
    pointerLeft() {
      return `${this.colors.hsv.s * 100}%`;
    }
  },
  methods: {
    throttle: throttle((fn, data) => {
      fn(data);
    }, 20, {
      leading: true,
      trailing: false
    }),
    handleChange(e, skip) {
      !skip && e.preventDefault();
      const { container } = this.$refs;
      if (!container) {
        return;
      }
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      const xOffset = container.getBoundingClientRect().left + window.pageXOffset;
      const yOffset = container.getBoundingClientRect().top + window.pageYOffset;
      const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
      const pageY = e.pageY || (e.touches ? e.touches[0].pageY : 0);
      const left = clamp(pageX - xOffset, 0, containerWidth);
      const top = clamp(pageY - yOffset, 0, containerHeight);
      const saturation = left / containerWidth;
      const bright = clamp(-(top / containerHeight) + 1, 0, 1);
      this.throttle(this.onChange, {
        h: this.colors.hsv.h,
        s: saturation,
        v: bright,
        a: this.colors.hsv.a,
        source: "hsva"
      });
    },
    onChange(param) {
      this.$emit("change", param);
    },
    handleMouseDown(e) {
      window.addEventListener("mousemove", this.handleChange);
      window.addEventListener("mouseup", this.handleChange);
      window.addEventListener("mouseup", this.handleMouseUp);
    },
    handleMouseUp(e) {
      this.unbindEventListeners();
    },
    unbindEventListeners() {
      window.removeEventListener("mousemove", this.handleChange);
      window.removeEventListener("mouseup", this.handleChange);
      window.removeEventListener("mouseup", this.handleMouseUp);
    }
  }
};
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("div", { class: "vc-saturation--white" }, null, -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("div", { class: "vc-saturation--black" }, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("div", { class: "vc-saturation-circle" }, null, -1);
const _hoisted_4$1 = [
  _hoisted_3$2
];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "vc-saturation",
    style: normalizeStyle({ background: $options.bgColor }),
    ref: "container",
    onMousedown: _cache[0] || (_cache[0] = (...args) => $options.handleMouseDown && $options.handleMouseDown(...args)),
    onTouchmove: _cache[1] || (_cache[1] = (...args) => $options.handleChange && $options.handleChange(...args)),
    onTouchstart: _cache[2] || (_cache[2] = (...args) => $options.handleChange && $options.handleChange(...args))
  }, [
    _hoisted_1$2,
    _hoisted_2$2,
    createBaseVNode("div", {
      class: "vc-saturation-pointer",
      style: normalizeStyle({ top: $options.pointerTop, left: $options.pointerLeft })
    }, _hoisted_4$1, 4)
  ], 36);
}
var css_248z$2 = ".vc-saturation,.vc-saturation--black,.vc-saturation--white{bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0}.vc-saturation--white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vc-saturation--black{background:linear-gradient(0deg,#000,transparent)}.vc-saturation-pointer{cursor:pointer;position:absolute}.vc-saturation-circle{border-radius:50%;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);cursor:head;height:4px;transform:translate(-2px,-2px);width:4px}";
styleInject(css_248z$2);
script$2.render = render$2;
script$2.__file = "src/components/saturation/saturation.vue";
script$2.install = install;
var script$1 = {
  name: "Hue",
  props: {
    value: Object,
    direction: {
      type: String,
      default: "horizontal"
    }
  },
  data() {
    return {
      oldHue: 0,
      pullDirection: ""
    };
  },
  computed: {
    colors() {
      const { h } = this.value.hsl;
      if (h !== 0 && h - this.oldHue > 0)
        this.pullDirection = "right";
      if (h !== 0 && h - this.oldHue < 0)
        this.pullDirection = "left";
      this.oldHue = h;
      return this.value;
    },
    directionClass() {
      return {
        "vc-hue--horizontal": this.direction === "horizontal",
        "vc-hue--vertical": this.direction === "vertical"
      };
    },
    pointerTop() {
      if (this.direction === "vertical") {
        if (this.colors.hsl.h === 0 && this.pullDirection === "right")
          return 0;
        return `${-(this.colors.hsl.h * 100 / 360) + 100}%`;
      }
      return 0;
    },
    pointerLeft() {
      if (this.direction === "vertical") {
        return 0;
      }
      if (this.colors.hsl.h === 0 && this.pullDirection === "right")
        return "100%";
      return `${this.colors.hsl.h * 100 / 360}%`;
    }
  },
  methods: {
    handleChange(e, skip) {
      !skip && e.preventDefault();
      const { container } = this.$refs;
      if (!container) {
        return;
      }
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      const xOffset = container.getBoundingClientRect().left + window.pageXOffset;
      const yOffset = container.getBoundingClientRect().top + window.pageYOffset;
      const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
      const pageY = e.pageY || (e.touches ? e.touches[0].pageY : 0);
      const left = pageX - xOffset;
      const top = pageY - yOffset;
      let h;
      let percent;
      if (this.direction === "vertical") {
        if (top < 0) {
          h = 360;
        } else if (top > containerHeight) {
          h = 0;
        } else {
          percent = -(top * 100 / containerHeight) + 100;
          h = 360 * percent / 100;
        }
        if (this.colors.hsl.h !== h) {
          this.$emit("change", {
            h,
            s: this.colors.hsl.s,
            l: this.colors.hsl.l,
            a: this.colors.hsl.a,
            source: "hsl"
          });
        }
      } else {
        if (left < 0) {
          h = 0;
        } else if (left > containerWidth) {
          h = 360;
        } else {
          percent = left * 100 / containerWidth;
          h = 360 * percent / 100;
        }
        if (this.colors.hsl.h !== h) {
          this.$emit("change", {
            h,
            s: this.colors.hsl.s,
            l: this.colors.hsl.l,
            a: this.colors.hsl.a,
            source: "hsl"
          });
        }
      }
    },
    handleMouseDown(e) {
      this.handleChange(e, true);
      window.addEventListener("mousemove", this.handleChange);
      window.addEventListener("mouseup", this.handleChange);
      window.addEventListener("mouseup", this.handleMouseUp);
    },
    handleMouseUp(e) {
      this.unbindEventListeners();
    },
    unbindEventListeners() {
      window.removeEventListener("mousemove", this.handleChange);
      window.removeEventListener("mouseup", this.handleChange);
      window.removeEventListener("mouseup", this.handleMouseUp);
    }
  }
};
const _hoisted_1$1 = ["aria-valuenow"];
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", { class: "vc-hue-picker" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vc-hue", $options.directionClass])
  }, [
    createBaseVNode("div", {
      class: "vc-hue-container",
      role: "slider",
      "aria-valuenow": $options.colors.hsl.h,
      "aria-valuemin": "0",
      "aria-valuemax": "360",
      ref: "container",
      onMousedown: _cache[0] || (_cache[0] = (...args) => $options.handleMouseDown && $options.handleMouseDown(...args)),
      onTouchmove: _cache[1] || (_cache[1] = (...args) => $options.handleChange && $options.handleChange(...args)),
      onTouchstart: _cache[2] || (_cache[2] = (...args) => $options.handleChange && $options.handleChange(...args))
    }, [
      createBaseVNode("div", {
        class: "vc-hue-pointer",
        style: normalizeStyle({ top: $options.pointerTop, left: $options.pointerLeft }),
        role: "presentation"
      }, _hoisted_3$1, 4)
    ], 40, _hoisted_1$1)
  ], 2);
}
var css_248z$1 = ".vc-hue{border-radius:2px;bottom:0;left:0;position:absolute;right:0;top:0}.vc-hue--horizontal{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue--vertical{background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vc-hue-container{cursor:pointer;height:100%;margin:0 2px;position:relative}.vc-hue-pointer{position:absolute;z-index:2}.vc-hue-picker{background:#fff;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);cursor:pointer;height:8px;margin-top:1px;transform:translateX(-2px);width:4px}";
styleInject(css_248z$1);
script$1.render = render$1;
script$1.__file = "src/components/hue/hue.vue";
script$1.install = install;
var script = {
  name: "Chrome",
  mixins: [colorMixin],
  props: {
    disableAlpha: {
      type: Boolean,
      default: false
    },
    disableFields: {
      type: Boolean,
      default: false
    }
  },
  components: {
    saturation: script$2,
    hue: script$1,
    alpha: script$4,
    "ed-in": script$3,
    checkboard: script$5
  },
  data() {
    return {
      fieldsIndex: 0,
      highlight: false
    };
  },
  computed: {
    hsl() {
      const { h, s, l } = this.colors.hsl;
      return {
        h: h.toFixed(),
        s: `${(s * 100).toFixed()}%`,
        l: `${(l * 100).toFixed()}%`
      };
    },
    activeColor() {
      const { rgba } = this.colors;
      return `rgba(${[rgba.r, rgba.g, rgba.b, rgba.a].join(",")})`;
    },
    hasAlpha() {
      return this.colors.a < 1;
    }
  },
  methods: {
    childChange(data) {
      this.colorChange(data);
    },
    inputChange(data) {
      if (!data) {
        return;
      }
      if (data.hex) {
        this.isValidHex(data.hex) && this.colorChange({
          hex: data.hex,
          source: "hex"
        });
      } else if (data.r || data.g || data.b || data.a) {
        this.colorChange({
          r: data.r || this.colors.rgba.r,
          g: data.g || this.colors.rgba.g,
          b: data.b || this.colors.rgba.b,
          a: data.a || this.colors.rgba.a,
          source: "rgba"
        });
      } else if (data.h || data.s || data.l) {
        const s = data.s ? data.s.replace("%", "") / 100 : this.colors.hsl.s;
        const l = data.l ? data.l.replace("%", "") / 100 : this.colors.hsl.l;
        this.colorChange({
          h: data.h || this.colors.hsl.h,
          s,
          l,
          source: "hsl"
        });
      }
    },
    toggleViews() {
      if (this.fieldsIndex >= 2) {
        this.fieldsIndex = 0;
        return;
      }
      this.fieldsIndex++;
    },
    showHighlight() {
      this.highlight = true;
    },
    hideHighlight() {
      this.highlight = false;
    }
  }
};
const _hoisted_1 = { class: "vc-chrome-saturation-wrap" };
const _hoisted_2 = { class: "vc-chrome-body" };
const _hoisted_3 = { class: "vc-chrome-controls" };
const _hoisted_4 = { class: "vc-chrome-color-wrap" };
const _hoisted_5 = ["aria-label"];
const _hoisted_6 = { class: "vc-chrome-sliders" };
const _hoisted_7 = { class: "vc-chrome-hue-wrap" };
const _hoisted_8 = {
  key: 0,
  class: "vc-chrome-alpha-wrap"
};
const _hoisted_9 = {
  key: 0,
  class: "vc-chrome-fields-wrap"
};
const _hoisted_10 = { class: "vc-chrome-fields" };
const _hoisted_11 = { class: "vc-chrome-field" };
const _hoisted_12 = { class: "vc-chrome-fields" };
const _hoisted_13 = { class: "vc-chrome-field" };
const _hoisted_14 = { class: "vc-chrome-field" };
const _hoisted_15 = { class: "vc-chrome-field" };
const _hoisted_16 = {
  key: 0,
  class: "vc-chrome-field"
};
const _hoisted_17 = { class: "vc-chrome-fields" };
const _hoisted_18 = { class: "vc-chrome-field" };
const _hoisted_19 = { class: "vc-chrome-field" };
const _hoisted_20 = { class: "vc-chrome-field" };
const _hoisted_21 = {
  key: 0,
  class: "vc-chrome-field"
};
const _hoisted_22 = { class: "vc-chrome-toggle-icon" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "#333",
  d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
}, null, -1);
const _hoisted_24 = [
  _hoisted_23
];
const _hoisted_25 = { class: "vc-chrome-toggle-icon-highlight" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_saturation = resolveComponent("saturation");
  const _component_checkboard = resolveComponent("checkboard");
  const _component_hue = resolveComponent("hue");
  const _component_alpha = resolveComponent("alpha");
  const _component_ed_in = resolveComponent("ed-in");
  return openBlock(), createElementBlock("div", {
    role: "application",
    "aria-label": "Chrome color picker",
    class: normalizeClass(["vc-chrome", $props.disableAlpha ? "vc-chrome__disable-alpha" : ""])
  }, [
    createBaseVNode("div", _hoisted_1, [
      createVNode(_component_saturation, {
        value: _ctx.colors,
        onChange: $options.childChange
      }, null, 8, ["value", "onChange"])
    ]),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", {
            "aria-label": `current color is ${_ctx.colors.hex}`,
            class: "vc-chrome-active-color",
            style: normalizeStyle({ background: $options.activeColor })
          }, null, 12, _hoisted_5),
          !$props.disableAlpha ? (openBlock(), createBlock(_component_checkboard, { key: 0 })) : createCommentVNode("v-if", true)
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createVNode(_component_hue, {
              value: _ctx.colors,
              onChange: $options.childChange
            }, null, 8, ["value", "onChange"])
          ]),
          !$props.disableAlpha ? (openBlock(), createElementBlock("div", _hoisted_8, [
            createVNode(_component_alpha, {
              value: _ctx.colors,
              onChange: $options.childChange
            }, null, 8, ["value", "onChange"])
          ])) : createCommentVNode("v-if", true)
        ])
      ]),
      !$props.disableFields ? (openBlock(), createElementBlock("div", _hoisted_9, [
        withDirectives(createBaseVNode("div", _hoisted_10, [
          createCommentVNode(" hex "),
          createBaseVNode("div", _hoisted_11, [
            !$options.hasAlpha ? (openBlock(), createBlock(_component_ed_in, {
              key: 0,
              label: "hex",
              value: _ctx.colors.hex,
              onChange: $options.inputChange
            }, null, 8, ["value", "onChange"])) : createCommentVNode("v-if", true),
            $options.hasAlpha ? (openBlock(), createBlock(_component_ed_in, {
              key: 1,
              label: "hex",
              value: _ctx.colors.hex8,
              onChange: $options.inputChange
            }, null, 8, ["value", "onChange"])) : createCommentVNode("v-if", true)
          ])
        ], 512), [
          [vShow, $data.fieldsIndex === 0]
        ]),
        withDirectives(createBaseVNode("div", _hoisted_12, [
          createCommentVNode(" rgba "),
          createBaseVNode("div", _hoisted_13, [
            createVNode(_component_ed_in, {
              label: "r",
              value: _ctx.colors.rgba.r,
              onChange: $options.inputChange
            }, null, 8, ["value", "onChange"])
          ]),
          createBaseVNode("div", _hoisted_14, [
            createVNode(_component_ed_in, {
              label: "g",
              value: _ctx.colors.rgba.g,
              onChange: $options.inputChange
            }, null, 8, ["value", "onChange"])
          ]),
          createBaseVNode("div", _hoisted_15, [
            createVNode(_component_ed_in, {
              label: "b",
              value: _ctx.colors.rgba.b,
              onChange: $options.inputChange
            }, null, 8, ["value", "onChange"])
          ]),
          !$props.disableAlpha ? (openBlock(), createElementBlock("div", _hoisted_16, [
            createVNode(_component_ed_in, {
              label: "a",
              value: _ctx.colors.a,
              "arrow-offset": 0.01,
              max: 1,
              onChange: $options.inputChange
            }, null, 8, ["value", "arrow-offset", "onChange"])
          ])) : createCommentVNode("v-if", true)
        ], 512), [
          [vShow, $data.fieldsIndex === 1]
        ]),
        withDirectives(createBaseVNode("div", _hoisted_17, [
          createCommentVNode(" hsla "),
          createBaseVNode("div", _hoisted_18, [
            createVNode(_component_ed_in, {
              label: "h",
              value: $options.hsl.h,
              onChange: $options.inputChange
            }, null, 8, ["value", "onChange"])
          ]),
          createBaseVNode("div", _hoisted_19, [
            createVNode(_component_ed_in, {
              label: "s",
              value: $options.hsl.s,
              onChange: $options.inputChange
            }, null, 8, ["value", "onChange"])
          ]),
          createBaseVNode("div", _hoisted_20, [
            createVNode(_component_ed_in, {
              label: "l",
              value: $options.hsl.l,
              onChange: $options.inputChange
            }, null, 8, ["value", "onChange"])
          ]),
          !$props.disableAlpha ? (openBlock(), createElementBlock("div", _hoisted_21, [
            createVNode(_component_ed_in, {
              label: "a",
              value: _ctx.colors.a,
              "arrow-offset": 0.01,
              max: 1,
              onChange: $options.inputChange
            }, null, 8, ["value", "arrow-offset", "onChange"])
          ])) : createCommentVNode("v-if", true)
        ], 512), [
          [vShow, $data.fieldsIndex === 2]
        ]),
        createCommentVNode(" btn "),
        createBaseVNode("div", {
          class: "vc-chrome-toggle-btn",
          role: "button",
          "aria-label": "Change another color definition",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.toggleViews && $options.toggleViews(...args))
        }, [
          createBaseVNode("div", _hoisted_22, [
            (openBlock(), createElementBlock("svg", {
              style: { "width": "24px", "height": "24px" },
              viewBox: "0 0 24 24",
              onMouseover: _cache[0] || (_cache[0] = (...args) => $options.showHighlight && $options.showHighlight(...args)),
              onMouseenter: _cache[1] || (_cache[1] = (...args) => $options.showHighlight && $options.showHighlight(...args)),
              onMouseout: _cache[2] || (_cache[2] = (...args) => $options.hideHighlight && $options.hideHighlight(...args))
            }, _hoisted_24, 32))
          ]),
          withDirectives(createBaseVNode("div", _hoisted_25, null, 512), [
            [vShow, $data.highlight]
          ])
        ]),
        createCommentVNode(" btn ")
      ])) : createCommentVNode("v-if", true)
    ])
  ], 2);
}
var css_248z = ".vc-chrome{background:#fff;background-color:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;font-family:Menlo;width:225px}.vc-chrome-controls{display:flex}.vc-chrome-color-wrap{position:relative;width:36px}.vc-chrome-active-color{border-radius:15px;height:30px;overflow:hidden;position:relative;width:30px;z-index:1}.vc-chrome-color-wrap .vc-checkerboard{background-size:auto;border-radius:15px;height:30px;width:30px}.vc-chrome-sliders{flex:1}.vc-chrome-fields-wrap{display:flex;padding-top:16px}.vc-chrome-fields{display:flex;flex:1;margin-left:-6px}.vc-chrome-field{padding-left:6px;width:100%}.vc-chrome-toggle-btn{position:relative;text-align:right;width:32px}.vc-chrome-toggle-icon{cursor:pointer;margin-right:-4px;margin-top:12px;position:relative;z-index:2}.vc-chrome-toggle-icon-highlight{background:#eee;border-radius:4px;height:28px;left:12px;position:absolute;top:10px;width:24px}.vc-chrome-hue-wrap{margin-bottom:8px}.vc-chrome-alpha-wrap,.vc-chrome-hue-wrap{height:10px;position:relative}.vc-chrome-alpha-wrap .vc-alpha-gradient,.vc-chrome-hue-wrap .vc-hue{border-radius:2px}.vc-chrome-alpha-wrap .vc-alpha-picker,.vc-chrome-hue-wrap .vc-hue-picker{background-color:#f8f8f8;border-radius:6px;box-shadow:0 1px 4px 0 rgba(0,0,0,.37);height:12px;transform:translate(-6px,-2px);width:12px}.vc-chrome-body{background-color:#fff;padding:16px 16px 12px}.vc-chrome-saturation-wrap{border-radius:2px 2px 0 0;overflow:hidden;padding-bottom:55%;position:relative;width:100%}.vc-chrome-saturation-wrap .vc-saturation-circle{height:12px;width:12px}.vc-chrome-fields .vc-input__input{border:none;border-radius:2px;box-shadow:inset 0 0 0 1px #dadada;color:#333;font-size:11px;height:21px;text-align:center;width:100%}.vc-chrome-fields .vc-input__label{color:#969696;display:block;font-size:11px;line-height:11px;margin-top:12px;text-align:center;text-transform:uppercase}.vc-chrome__disable-alpha .vc-chrome-active-color{height:18px;width:18px}.vc-chrome__disable-alpha .vc-chrome-color-wrap{width:30px}.vc-chrome__disable-alpha .vc-chrome-hue-wrap{margin-bottom:4px;margin-top:4px}";
styleInject(css_248z);
script.render = render;
script.__file = "src/components/chrome/chrome.vue";
script.install = install;
export { __unplugin_components_4 as _, dateFormats as d, handleTZ as h, script as s, timeAgo as t, validateDateWithUnknownFormat as v };
