import { _ as _export_sfc, d as defineComponent, e as computed, o as openBlock, c as createElementBlock, A as normalizeClass, x as withModifiers, b as createBaseVNode, dW as _imports_0, T as normalizeStyle, k as createCommentVNode, dX as _imports_1, dY as _imports_3, dZ as _imports_4, d_ as _imports_5, d$ as _imports_14, M as useI18n, t as resolveDirective, j as createBlock, B as withDirectives, g as createVNode, dH as MdiCalendarMonth, C as pushScopeId, E as popScopeId, $ as useRoute, u as useNuxtApp, bZ as withAsyncContext, r as ref, b_ as resolveComponent, h as withCtx, dp as navigateTo, dE as __nuxt_component_2, y as createTextVNode, v as toDisplayString, f as renderList, S as resolveDynamicComponent, F as Fragment, I as message, K as extractSdkResponseErrorMsg, Y as __unplugin_components_0, a1 as Menu } from "./entry-61ceea7f.mjs";
import { M as MdiDiscord } from "./discord-93550eaa.mjs";
import { M as MdiTwitter, _ as __nuxt_component_1 } from "./Sponsors-99cfd42d.mjs";
import { M as MdiPlus } from "./plus-15c52e39.mjs";
import { M as MdiDatabaseOutline } from "./database-outline-9a124e5e.mjs";
import { M as Modal } from "./Modal-d5a36a0f.mjs";
import { _ as __unplugin_components_2 } from "./index-c087887c.mjs";
import "./Card-637b0d8a.mjs";
import "./index-7349112e.mjs";
import "./TabPane-12ca446e.mjs";
import "./Dropdown-9f66da27.mjs";
import "./useState-068748ba.mjs";
import "./omit-173fd1c5.mjs";
import "./button-da542739.mjs";
import "./wave-52b13188.mjs";
import "./pickAttrs-ba132318.mjs";
import "./index-cfa50bee.mjs";
var _imports_2 = "data:image/png;base64,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";
var _imports_6 = "data:image/png;base64,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";
var _imports_7 = "data:image/png;base64,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";
var _imports_8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHyAAAB8gEzAEwKAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAjdQTFRFAMIAAMUAAcIBAsICA8MDBcMFBsYGB8cHCMQICMcICcQJC8ULDMgMDcUNDcgNDsUOEMYQEMkQEcYRE8cTE8kTFMcUFsoWF8gXGMgYGcgZGsgaHMkcHckdHskeH8kfIc0hJMskJcslJc0lJ8snKMwoKM4oKcwpK88rL9AvMNAwMc4xMdAxMs4yMtAyM84zNM40N9I3ONI4OdA5PdE9PdM9P9M/QtJCQ9JDQ9RDRNJERNRERtNGRtVGSdZJS9RLTdRNTddNTtdOUNdQUdVRUtZSVNhUVdZVVtdWWNdYWddZWthaXNhcXtheX9lfX9tfYNtgYtliYttiZNpkZNxkZ9xnaNtoaN1oattqa9xrbNxsbN5sbdxtbd5tb91vcN1wcN5wcd9xdN90dd51ed95eeF5euF6e+F7fOF8feB9gOGAgeKBheKFhuKGiuSKi+WLj+aPkOaQleeVluaWmOaYmeeZnOecnOicn+ifn+mfoOigpOmkqOqoqOuorOysreutr+yvsOywseyxsu2ys+2ztO20te61t++3ue65u++7vO+8vvC+v/C/wPHAwvHCw/HDxPHExfLFx/LHyPLIyfLJyfPJyvLKzPPMzfTNzvPO0vTS0vXS1PXU1vbW1/XX1/bX2PbY2fbZ2vfa3ffd3vfe3/ff3/jf4Pjg4vji4/jj4/nj5Pnk6Pro6frp7Pvs7fvt7vvu7/vv8fzx8/zz9f319/33+P34+f75+v76+/77/P78/f/9/v/+////9k7zpwAAAm1JREFUWMNjYBgFo4D2gEtGlptMreLuRVOXbd4DBFtXzSj2kiZNt3TO3D1oYHG2LNHajap37MECdjZYEmd7yx6coFmGoHam0I178IBNscz49XO37yEAmrjw6efv30MQ9Ang1i80eQ8RYKYwTv937CEKNOIyIGIPkSAcu36FzcQasEUZqwFNe4gGlVgT0E7iDdgmicWADIjcDv8sCCPFZMGeLocJIGar44I9syw0gMBmIUQyB4sBSyBSPYyMq8EMTsaCPbaMIsuBTEPGhD1hjGCQC1E1F0sagLqujZFxKZjBzpi/x5SR0WDbnj0ajCF7/BjFQkJC0tdCMxZmetTCYQBjDMwAA+RQ0McwwBmXAYw1UANU29rapsEM8MUwIBS7AY7yjDzzIAaAQRlUWSixLvCbzsmorgQ3gK0VqiwAwwA9HAbsKQNpBBmguXTp0g0wL5hjGCCKy4A9gVADkANxE5ZSYTbcAANTU6tahAFbtCEG8JmamrouhqiqwpKQkiFSkyCBpbuHj7FwjxNjPFBokSBj+p54lIRkh8UAud0QuTw/IAju3VMRtXrPnNSVIKEpaWv2rEwAiSeuAatZx4otN9URn5lKsJfnm4jVv1EOe4kSR6wB3jiKNJZG4vRX4yyVObqJ0b9CCHe5zjuViALRGG97oJSQ/u12BCpHb/xxsdONYPUqV46ndN3hQ0wFr1a3C4f+9WZENjEkIvt2Y9E/X5GEVo6US2b9IlT97QIkt7Q8kKMviYX0phoLwiMTVchq61FkPRDoQPV3kmU9ENiDtc+wZiAXBIEKNE8msvUzyG5eE83KQBFgYhgFo4AeAADRipbFl4X77AAAAABJRU5ErkJggg==";
var _imports_9 = "data:image/png;base64,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";
var _imports_10 = "data:image/png;base64,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";
var _imports_11 = "data:image/png;base64,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";
var _imports_12 = "data:image/png;base64,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";
var _imports_13 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAflAAAH5QFPDbM3AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAc5QTFRF////VVWqTYCZVYCqTHGhSnOlTXeiTXWhTnagTnWhTXWhTHaiTXaiTXegTnahTXeiTnaiTXWhTXahTXahTXahTXahTXegTXahTXahTXahTXahTXahTXahTXahTXahTnehTneiT3iiUHiiUHmjUXmjU3qkVHulVXylVn2mV36nWoCoW4GoXoOqX4SrYIWrYYWrYYasY4esZIitZYiuZomuZ4qvaIuvbI6ybY+yb5CzcZG0cZK0dJS2dZW2d5a3eJe3eZi4fJq6fJu6gJ28gZ69gp+9hKC+hqK/iKPAiaTBiqXBi6bCjafDjqjDj6nEkavFk6zGlKzGla3HmK/InbTLnrTMn7XMpLnPprrQprvQp7vRrL/TrcDUr8LVscPWssPWtMbYvMvcvczcvs3dwtDfw9HfxNHgx9TiyNXiydbjy9fjy9fkzNjkzdjkztnl0Nrm0Nvm0dzn0tzn0t3n093o1N7o1N7p1d/p1t/p1+Dq2OHq2eLr2uPr2+Ts3OTt3eXt3ubu4Ofu4Ofv4ejv5evx5+zy6e7z6e706u/06/D17vL27/P38PP38PT39ff69vj69/n7+fr8+fv8+/z9/Pz9/P3+/f3+/v7+/v7/////J0oOFQAAAB50Uk5TAAMKDBsfPExOYmRocHSKjqSwtr7Ay9XY5ery+Pn+bfME6gAAAuFJREFUWMOtV/df2kAUDyKKbNkgPECKo8vuvey0VrtsrZ2W1u6hRatY22rpbu2yAuW/LQl3yV0IkeT4/pRv7r3vJ7l79wbH1YDRbHO4PIFwOOBxOWxmI6cJzVZ3B1DocFub6/VusvuioICoz95Uh7vBEoSaCFoMa/m3+kEV/lZVd5MX1oTXVNu/JQR1INRSy78tAnUh0qa8e06oG06FvTS0gwa0Vys4QROcVf8PGiHbh5aIVoEIdRamEGhGiIwHL+iAl4hf0AUxqg1+fQJ+fJYW0AkLuv9BvQLBSn6wg27YBQGffgGfkP+i+gWifJ60Kq/FB29n3+Zyk+mRpIqCtSzgxuTog5ezc/PzmQGB3SphjKP1AxOPHj97PpWZHl0nCrjL+V/M33eQQ2EPzxJnVxBfqix3fsKKhR4p2xs5s0iOYYN7FT6B6LsKHRI/6TXxD2bOJpE3yKC4S6DDiC4KLJYTBS4QAjbOIZGT2CIt0H7EFgR2QvSfjhECDs4lkdgSMslv5elhxLLCYhb7/9lBHoOL8xBsABs95NlBRGZ4ckb8gMvUOXq4AMFi77HVuTI7RAhs/4lXsglKIMCFSXocm/3aBjAoCSQX8MLyZjqSwrQAPMGGc3EYQ48fAa7j18V+kAsEKL7zLza9u3sZP14c/Ycfr8ljOUBtYhk3Smr4kpILeMhj5NH9TU3gatVtcpGBRB+lEqaqBBxkKFcwrukTbMRlQkhm1RTGZNZm4jpjbPqupnCJsi1fZymhiDiSp30K978S7Dxp6lZOaUMrlMAI9MxKrHhaltKUkuq+z4R/vhegKyPx1f10UlVM6+sniejhX3TNSC8W6bSuXFgSw6+w/YtKhBF/0UcXllqlbe/Npx9WS6Ufp1CMXkFB+judoEubWnGNp1JxkXRu6du4obc7IS+u7OWducFgb3HYmyzmNo+90WRvddmbbeZ2n33gaMDIwz50sY99DRg82UffBgzf2sb//0XQnsYWox3AAAAAAElFTkSuQmCC";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Share",
  props: {
    url: null,
    socialMedias: null,
    title: { default: "NocoDB" },
    summary: null,
    hashTags: { default: "" },
    css: { default: "" },
    iconClass: { default: "" },
    width: { default: "45px" }
  },
  setup(__props, { expose }) {
    expose();
    const summaryArr = [
      "Instant #Rest & #GraphQL APIs on any #SQL Database (Supports : MySQL, PostgresSQL, MsSQL, SQLite, MariaDB) #nocodb ",
      "Instantly generate #Rest & #GraphQL APIs on any #SQL Database (Supports : MySQL, PostgresSQL, MsSQL, SQLite, MariaDB) #nocodb",
      "Instant #serverless Rest & #GraphQL APIs on any Database #nocodb",
      "Instant APIs on any SQL Database (Supports : #REST #GraphQL #MySQL, #PostgresSQL, #MsSQL, #SQLite, #MariaDB) #nocodb",
      "Generate Instant APIs on any SQL Database (Supports : #REST #GraphQL #MySQL, #PostgresSQL, #MsSQL, #SQLite, #MariaDB) #nocodb"
    ];
    const shareUrl = computed(() => encodeURIComponent(__props.url));
    const encodedTitle = computed(() => encodeURIComponent(__props.title || "NocoDB"));
    const encodedSummary = computed(() => encodeURIComponent(__props.summary || summaryArr[Math.floor(Math.random() * summaryArr.length)]));
    const fbHashTags = computed(() => __props.hashTags && `%23${__props.hashTags}`);
    const openUrl = (url) => {
      window.open(url, "_blank");
    };
    const __returned__ = { summaryArr, shareUrl, encodedTitle, encodedSummary, fbHashTags, openUrl };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$6 = { class: "flex gap-2" };
const _hoisted_2$6 = ["width"];
const _hoisted_3$6 = ["width"];
const _hoisted_4$1 = ["width"];
const _hoisted_5$1 = ["width"];
const _hoisted_6$1 = ["width"];
const _hoisted_7$1 = ["width"];
const _hoisted_8$1 = ["width"];
const _hoisted_9$1 = ["width"];
const _hoisted_10$1 = ["width"];
const _hoisted_11$1 = ["width"];
const _hoisted_12 = ["width"];
const _hoisted_13 = ["width"];
const _hoisted_14 = ["width"];
const _hoisted_15 = ["width"];
const _hoisted_16 = ["width"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    !$props.socialMedias || !$props.socialMedias.length || $props.socialMedias.includes("twitter") ? (openBlock(), createElementBlock("a", {
      key: 0,
      href: "#",
      class: normalizeClass([$props.iconClass, "px-2"]),
      onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $setup.openUrl(`https://twitter.com/intent/tweet?url=${$setup.shareUrl}&text=${$setup.encodedSummary}&hashtags=${$props.hashTags}`), ["prevent"]))
    }, [
      createBaseVNode("img", {
        src: _imports_0,
        class: "img-responsive",
        alt: "Twitter",
        width: $props.width,
        style: normalizeStyle($props.css),
        title: "Social Media Share"
      }, null, 12, _hoisted_2$6)
    ], 2)) : createCommentVNode("", true),
    !$props.socialMedias || !$props.socialMedias.length || $props.socialMedias.includes("linkedin") ? (openBlock(), createElementBlock("a", {
      key: 1,
      href: "#",
      class: normalizeClass([$props.iconClass, "px-2"]),
      onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $setup.openUrl(`https://www.linkedin.com/shareArticle?mini=true&url=${$setup.shareUrl}&title=${$setup.encodedTitle}&summary=${$setup.encodedSummary}`), ["prevent"]))
    }, [
      createBaseVNode("img", {
        src: _imports_1,
        class: "img-responsive",
        alt: "Linkedin",
        width: $props.width,
        style: normalizeStyle($props.css),
        title: "Social Media Share"
      }, null, 12, _hoisted_3$6)
    ], 2)) : createCommentVNode("", true),
    !$props.socialMedias || !$props.socialMedias.length || $props.socialMedias.includes("facebook") ? (openBlock(), createElementBlock("a", {
      key: 2,
      href: "#",
      class: normalizeClass([$props.iconClass, "px-2"]),
      onClick: _cache[2] || (_cache[2] = withModifiers(($event) => $setup.openUrl(`https://www.facebook.com/sharer/sharer.php?u=${$setup.shareUrl}&title=${$setup.encodedTitle}&summary=${$setup.encodedSummary}&quote=${$setup.encodedTitle}&hashtag=${$setup.fbHashTags}`), ["prevent"]))
    }, [
      createBaseVNode("img", {
        src: _imports_2,
        class: "img-responsive",
        alt: "Facebook",
        width: $props.width,
        style: normalizeStyle($props.css),
        title: "Social Media Share"
      }, null, 12, _hoisted_4$1)
    ], 2)) : createCommentVNode("", true),
    !$props.socialMedias || !$props.socialMedias.length || $props.socialMedias.includes("reddit") ? (openBlock(), createElementBlock("a", {
      key: 3,
      href: "#",
      class: normalizeClass([$props.iconClass, "px-2"]),
      onClick: _cache[3] || (_cache[3] = withModifiers(($event) => $setup.openUrl(`https://www.reddit.com/submit?url=${$setup.shareUrl}&title=${$setup.encodedSummary}`), ["prevent"]))
    }, [
      createBaseVNode("img", {
        src: _imports_3,
        class: "img-responsive",
        alt: "Reddit",
        width: $props.width,
        style: normalizeStyle($props.css),
        title: "Social Media Share"
      }, null, 12, _hoisted_5$1)
    ], 2)) : createCommentVNode("", true),
    !$props.socialMedias || !$props.socialMedias.length || $props.socialMedias.includes("pinterest") ? (openBlock(), createElementBlock("a", {
      key: 4,
      href: "#",
      class: normalizeClass([$props.iconClass, "px-2"]),
      onClick: _cache[4] || (_cache[4] = withModifiers(($event) => $setup.openUrl(`https://pinterest.com/pin/create/button/?url=${$setup.shareUrl}&description==${$setup.encodedSummary}`), ["prevent"]))
    }, [
      createBaseVNode("img", {
        src: _imports_4,
        class: "img-responsive",
        alt: "Printrest",
        width: $props.width,
        style: normalizeStyle($props.css),
        title: "Social Media Share"
      }, null, 12, _hoisted_6$1)
    ], 2)) : createCommentVNode("", true),
    !$props.socialMedias || !$props.socialMedias.length || $props.socialMedias.includes("whatsapp") ? (openBlock(), createElementBlock("a", {
      key: 5,
      href: "#",
      class: normalizeClass([$props.iconClass, "px-2"]),
      onClick: _cache[5] || (_cache[5] = withModifiers(($event) => $setup.openUrl(`https://api.whatsapp.com/send?text=${$setup.encodedSummary}%0D%0A${$setup.shareUrl}`), ["prevent"]))
    }, [
      createBaseVNode("img", {
        src: _imports_5,
        class: "img-responsive",
        alt: "Whatsapp",
        width: $props.width,
        style: normalizeStyle($props.css),
        title: "Social Media Share"
      }, null, 12, _hoisted_7$1)
    ], 2)) : createCommentVNode("", true),
    !$props.socialMedias || !$props.socialMedias.length || $props.socialMedias.includes("telegram") ? (openBlock(), createElementBlock("a", {
      key: 6,
      href: "#",
      class: normalizeClass([$props.iconClass, "px-2"]),
      onClick: _cache[6] || (_cache[6] = withModifiers(($event) => $setup.openUrl(`https://telegram.me/share/url?url=${$setup.shareUrl}&text=${$setup.encodedSummary}`), ["prevent"]))
    }, [
      createBaseVNode("img", {
        src: _imports_6,
        class: "img-responsive",
        alt: "Telegram",
        width: $props.width,
        style: normalizeStyle($props.css),
        title: "Social Media Share"
      }, null, 12, _hoisted_8$1)
    ], 2)) : createCommentVNode("", true),
    !$props.socialMedias || !$props.socialMedias.length || $props.socialMedias.includes("wechat") ? (openBlock(), createElementBlock("a", {
      key: 7,
      class: normalizeClass([$props.iconClass, "px-2"]),
      onClick: _cache[7] || (_cache[7] = withModifiers(($event) => $setup.openUrl(`https://www.addtoany.com/add_to/wechat?linkurl=${$setup.shareUrl}&linkname=${$setup.encodedTitle}`), ["prevent"]))
    }, [
      createBaseVNode("img", {
        src: _imports_7,
        class: "img-responsive",
        alt: "Wechat",
        width: $props.width,
        style: normalizeStyle($props.css),
        title: "Social Media Share"
      }, null, 12, _hoisted_9$1)
    ], 2)) : createCommentVNode("", true),
    !$props.socialMedias || !$props.socialMedias.length || $props.socialMedias.includes("line") ? (openBlock(), createElementBlock("a", {
      key: 8,
      href: "#",
      class: normalizeClass([$props.iconClass, "px-2"])
    }, [
      createBaseVNode("img", {
        src: _imports_8,
        class: "img-responsive",
        alt: "Line",
        width: $props.width,
        style: normalizeStyle($props.css),
        title: "Social Media Share",
        onClick: _cache[8] || (_cache[8] = withModifiers(($event) => $setup.openUrl(`http://line.me/R/msg/text/?${$setup.encodedTitle}%0D%0A${$setup.shareUrl}`), ["prevent"]))
      }, null, 12, _hoisted_10$1)
    ], 2)) : createCommentVNode("", true),
    !$props.socialMedias || !$props.socialMedias.length || $props.socialMedias.includes("odnoklassniki") ? (openBlock(), createElementBlock("a", {
      key: 9,
      href: "#",
      class: normalizeClass([$props.iconClass, "px-2"])
    }, [
      createBaseVNode("img", {
        src: _imports_9,
        class: "img-responsive",
        alt: "Odnoklassniki",
        width: $props.width,
        style: normalizeStyle($props.css),
        title: "Social Media Share",
        onClick: _cache[9] || (_cache[9] = withModifiers(($event) => $setup.openUrl(`https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${$setup.shareUrl}&st.comments=${$setup.encodedSummary}`), ["prevent"]))
      }, null, 12, _hoisted_11$1)
    ], 2)) : createCommentVNode("", true),
    !$props.socialMedias || !$props.socialMedias.length || $props.socialMedias.includes("weibo") ? (openBlock(), createElementBlock("a", {
      key: 10,
      href: "#",
      class: normalizeClass([$props.iconClass, "px-2"]),
      onClick: _cache[10] || (_cache[10] = withModifiers(($event) => $setup.openUrl(`http://service.weibo.com/share/share.php?url=${$setup.shareUrl})&title=${$setup.encodedTitle}`), ["prevent"]))
    }, [
      createBaseVNode("img", {
        src: _imports_10,
        class: "img-responsive",
        alt: "Weibo",
        width: $props.width,
        style: normalizeStyle($props.css),
        title: "Social Media Share"
      }, null, 12, _hoisted_12)
    ], 2)) : createCommentVNode("", true),
    !$props.socialMedias || !$props.socialMedias.length || $props.socialMedias.includes("renren") ? (openBlock(), createElementBlock("a", {
      key: 11,
      class: normalizeClass([$props.iconClass, "px-2"]),
      onClick: _cache[11] || (_cache[11] = withModifiers(($event) => $setup.openUrl(`http://widget.renren.com/dialog/share?resourceUrl=${$setup.shareUrl}&srcUrl=${$setup.shareUrl}&title=${$setup.encodedTitle}&description=${$setup.encodedSummary}`), ["prevent"]))
    }, [
      createBaseVNode("img", {
        src: _imports_11,
        class: "img-responsive",
        alt: "Renren",
        width: $props.width,
        style: normalizeStyle($props.css),
        title: "Social Media Share"
      }, null, 12, _hoisted_13)
    ], 2)) : createCommentVNode("", true),
    !$props.socialMedias || !$props.socialMedias.length || $props.socialMedias.includes("douban") ? (openBlock(), createElementBlock("a", {
      key: 12,
      class: normalizeClass([$props.iconClass, "px-2"]),
      onClick: _cache[12] || (_cache[12] = withModifiers(($event) => $setup.openUrl(`http://www.douban.com/recommend/?url=${$setup.shareUrl}&title=${$setup.encodedTitle}`), ["prevent"]))
    }, [
      createBaseVNode("img", {
        src: _imports_12,
        class: "img-responsive",
        alt: "Douban",
        width: $props.width,
        style: normalizeStyle($props.css),
        title: "Social Media Share"
      }, null, 12, _hoisted_14)
    ], 2)) : createCommentVNode("", true),
    !$props.socialMedias || !$props.socialMedias.length || $props.socialMedias.includes("vk") ? (openBlock(), createElementBlock("a", {
      key: 13,
      href: "#",
      class: normalizeClass([$props.iconClass, "px-2"]),
      onClick: _cache[13] || (_cache[13] = withModifiers(($event) => $setup.openUrl(`https://vk.com/share.php?url=${$setup.shareUrl})&title=${$setup.encodedTitle}&description=${$setup.encodedSummary}&noparse=true`), ["prevent"]))
    }, [
      createBaseVNode("img", {
        src: _imports_13,
        class: "img-responsive",
        alt: "VK",
        width: $props.width,
        style: normalizeStyle($props.css),
        title: "Social Media Share"
      }, null, 12, _hoisted_15)
    ], 2)) : createCommentVNode("", true),
    !$props.socialMedias || !$props.socialMedias.length || $props.socialMedias.includes("wykop") ? (openBlock(), createElementBlock("a", {
      key: 14,
      class: normalizeClass([$props.iconClass, "px-2"]),
      onClick: _cache[14] || (_cache[14] = withModifiers(($event) => $setup.openUrl(`https://www.addtoany.com/add_to/wykop?linkurl=${$setup.shareUrl}&linkname=${$setup.encodedTitle}`), ["prevent"]))
    }, [
      createBaseVNode("img", {
        src: _imports_14,
        class: "img-responsive",
        alt: "Wykop",
        width: $props.width,
        style: normalizeStyle($props.css),
        title: "Social Media Share"
      }, null, 12, _hoisted_16)
    ], 2)) : createCommentVNode("", true)
  ]);
}
var __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-649d9ed0"]]);
const _hoisted_1$5 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M14.5 15.41c.08.09.08.28 0 .39c-.73.7-2.09.76-2.5.76c-.39 0-1.75-.06-2.46-.76c-.1-.11-.1-.3 0-.39c.11-.1.28-.1.38 0c.46.46 1.41.59 2.08.59c.69 0 1.66-.13 2.1-.59c.11-.1.28-.1.4 0m-3.75-2.37c0-.57-.47-1.04-1.04-1.04c-.57 0-1.04.47-1.04 1.04c0 .57.47 1.05 1.04 1.04c.57 0 1.04-.47 1.04-1.04M14.29 12c-.57 0-1.04.5-1.04 1.05s.47 1.04 1.04 1.04c.57 0 1.04-.48 1.04-1.04c0-.55-.47-1.05-1.04-1.05M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-3.33 0c0-.81-.67-1.46-1.45-1.46c-.4 0-.76.16-1.02.41c-1-.72-2.37-1.18-3.9-1.24l.67-3.13l2.17.47c.02.55.48.99 1.04.99c.57 0 1.04-.47 1.04-1.04c0-.57-.47-1.04-1.04-1.04c-.41 0-.77.24-.93.59l-2.43-.52c-.07-.03-.14 0-.19.04c-.06.04-.09.1-.1.17l-.74 3.48c-1.55.05-2.95.51-3.97 1.24c-.26-.25-.62-.4-1.01-.4c-.81 0-1.46.65-1.46 1.44c0 .61.36 1.11.86 1.34c-.02.16-.03.28-.03.44c0 2.22 2.61 4.07 5.82 4.07c3.23 0 5.85-1.82 5.85-4.07c0-.14-.01-.28-.04-.44c.5-.23.86-.74.86-1.34Z"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
}
var MdiReddit = { name: "mdi-reddit", render: render$3 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Social",
  setup(__props, { expose }) {
    expose();
    const { locale } = useI18n();
    const open = (url) => {
      window.open(url, "_blank");
    };
    const isZhLang = computed(() => locale.value.startsWith("zh"));
    const __returned__ = { locale, open, isZhLang, MdiDiscord, MdiReddit, MdiTwitter, MdiCalendarMonth };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-5ce17f9c"), n = n(), popScopeId(), n);
const _hoisted_1$4 = {
  key: 1,
  class: "flex justify-between gap-1 w-full px-2"
};
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "discourse" }, null, -1));
const _hoisted_3$4 = [
  _hoisted_2$4
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_general_share = __nuxt_component_0$1;
  const _directive_t = resolveDirective("t");
  return $setup.isZhLang ? (openBlock(), createBlock(_component_general_share, {
    key: 0,
    class: "flex justify-center",
    url: "https://github.com/nocodb/nocodb",
    "social-medias": ["renren", "douban", "weibo", "wechat"]
  })) : (openBlock(), createElementBlock("div", _hoisted_1$4, [
    withDirectives(createVNode($setup["MdiDiscord"], {
      class: "icon text-[#7289DA]",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.open("https://discord.gg/5RgZmkW"))
    }, null, 512), [
      [_directive_t, ["e:community:discord"]]
    ]),
    withDirectives((openBlock(), createElementBlock("div", {
      class: "icon flex items-center justify-center min-w-[43px]",
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.open("https://community.nocodb.com/"))
    }, _hoisted_3$4)), [
      [_directive_t, ["e:community:discourse"]]
    ]),
    withDirectives(createVNode($setup["MdiReddit"], {
      class: "icon text-[#FF4600]",
      onClick: _cache[2] || (_cache[2] = ($event) => $setup.open("https://www.reddit.com/r/NocoDB/"))
    }, null, 512), [
      [_directive_t, ["e:community:reddit"]]
    ]),
    withDirectives(createVNode($setup["MdiTwitter"], {
      class: "icon text-[#1DA1F2]",
      onClick: _cache[3] || (_cache[3] = ($event) => $setup.open("https://twitter.com/NocoDB"))
    }, null, 512), [
      [_directive_t, ["e:community:twitter"]]
    ]),
    withDirectives(createVNode($setup["MdiCalendarMonth"], {
      class: "icon text-green-500",
      onClick: _cache[4] || (_cache[4] = ($event) => $setup.open("https://calendly.com/nocodb-meeting"))
    }, null, 512), [
      [_directive_t, ["e:community:book-demo"]]
    ])
  ]));
}
var __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-5ce17f9c"]]);
const _hoisted_1$3 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M4.5 13.5q-.625 0-1.062-.438Q3 12.625 3 12t.438-1.062Q3.875 10.5 4.5 10.5t1.062.438Q6 11.375 6 12t-.438 1.062q-.437.438-1.062.438Zm0-6q-.625 0-1.062-.438Q3 6.625 3 6t.438-1.062Q3.875 4.5 4.5 4.5t1.062.438Q6 5.375 6 6t-.438 1.062Q5.125 7.5 4.5 7.5Zm0 12q-.625 0-1.062-.438Q3 18.625 3 18t.438-1.062Q3.875 16.5 4.5 16.5t1.062.438Q6 17.375 6 18t-.438 1.062q-.437.438-1.062.438ZM9 19q-.425 0-.712-.288Q8 18.425 8 18t.288-.712Q8.575 17 9 17h11q.425 0 .712.288q.288.287.288.712t-.288.712Q20.425 19 20 19Zm0-6q-.425 0-.712-.288Q8 12.425 8 12t.288-.713Q8.575 11 9 11h11q.425 0 .712.287q.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-6q-.425 0-.712-.287Q8 6.425 8 6t.288-.713Q8.575 5 9 5h11q.425 0 .712.287Q21 5.575 21 6t-.288.713Q20.425 7 20 7Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
var MaterialSymbolsFormatListBulletedRounded = { name: "material-symbols-format-list-bulleted-rounded", render: render$2 };
const _hoisted_1$2 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M3 11V3h8v8Zm0 10v-8h8v8Zm10-10V3h8v8Zm0 10v-8h8v8Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
var MaterialSymbolsGridView = { name: "material-symbols-grid-view", render: render$1 };
const _hoisted_1$1 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M20 18H4V8h16m0-2h-8l-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var MdiFolderOutline = { name: "mdi-folder-outline", render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const navDrawerOptions = [
      {
        title: "My NocoDB",
        icon: MdiFolderOutline
      }
    ];
    const route = useRoute();
    const { $api } = useNuxtApp();
    const response = ([__temp, __restore] = withAsyncContext(() => $api.project.list({})), __temp = await __temp, __restore(), __temp);
    const projects = ref(response.list);
    const activePage = ref(navDrawerOptions[0].title);
    const deleteProject = (project) => {
      Modal.confirm({
        title: "Do you want to delete the project?",
        content: "Some descriptions",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        async onOk() {
          try {
            await $api.project.delete(project.id);
            projects.value.splice(projects.value.indexOf(project), 1);
          } catch (e) {
            message.error(await extractSdkResponseErrorMsg(e));
          }
        }
      });
    };
    const __returned__ = { navDrawerOptions, route, $api, response, projects, activePage, deleteProject, navigateTo, MaterialSymbolsFormatListBulletedRounded, MaterialSymbolsGridView, MdiPlus, MdiDatabaseOutline };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col h-full" };
const _hoisted_2 = { class: "flex p-4" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "col-span-10 text-sm xl:text-md" };
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = { class: "flex items-center gap-4" };
const _hoisted_7 = { class: "font-semibold" };
const _hoisted_8 = { class: "flex-1 mb-12" };
const _hoisted_9 = { class: "flex" };
const _hoisted_10 = { class: "flex-1 text-2xl md:text-4xl font-bold text-gray-500 p-4" };
const _hoisted_11 = { class: "self-end flex text-4xl mb-1" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_list = resolveComponent("v-list");
  const _component_v_menu = resolveComponent("v-menu");
  const _component_a_menu_item = __unplugin_components_0;
  const _component_a_menu = Menu;
  const _component_general_social = __nuxt_component_0;
  const _component_general_sponsors = __nuxt_component_1;
  const _component_a_divider = __unplugin_components_2;
  const _component_NuxtPage = resolveComponent("NuxtPage");
  const _component_a_modal = Modal;
  const _component_NuxtLayout = __nuxt_component_2;
  return openBlock(), createBlock(_component_NuxtLayout, null, {
    sidebar: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_v_menu, { class: "select-none" }, {
            activator: withCtx(({ props }) => [
              createBaseVNode("div", {
                class: "color-transition hover:bg-gray-100 mr-auto select-none flex items-center gap-2 leading-8 cursor-pointer rounded-full border-1 border-gray-300 px-5 py-2 shadow prose-lg font-semibold",
                onClick: props.onClick
              }, [
                createVNode($setup["MdiPlus"], { class: "text-primary text-2xl" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("title.newProj")), 1)
              ], 8, _hoisted_3)
            ]),
            default: withCtx(() => [
              createVNode(_component_v_list, { class: "!py-0 flex flex-col bg-white rounded-lg shadow-md border-1 border-gray-300 mt-2 ml-2" }, {
                default: withCtx(() => [
                  createBaseVNode("div", {
                    class: "grid grid-cols-12 cursor-pointer hover:bg-gray-200 flex items-center p-2",
                    onClick: _cache[0] || (_cache[0] = ($event) => $setup.navigateTo("/project/create"))
                  }, [
                    createVNode($setup["MdiPlus"], { class: "col-span-2 mr-1 mt-[1px] text-primary text-lg" }),
                    createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.$t("activity.createProject")), 1)
                  ]),
                  createBaseVNode("div", {
                    class: "grid grid-cols-12 cursor-pointer hover:bg-gray-200 flex items-center p-2",
                    onClick: _cache[1] || (_cache[1] = ($event) => $setup.navigateTo("/project/create-external"))
                  }, [
                    createVNode($setup["MdiDatabaseOutline"], { class: "col-span-2 mr-1 mt-[1px] text-green-500 text-lg" }),
                    createBaseVNode("div", {
                      class: "col-span-10 text-sm xl:text-md",
                      innerHTML: _ctx.$t("activity.createProjectExtended.extDB")
                    }, null, 8, _hoisted_5)
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createVNode(_component_a_menu, { class: "pr-4 flex-1 border-0" }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock(Fragment, null, renderList($setup.navDrawerOptions, (option, index2) => {
              return createVNode(_component_a_menu_item, {
                key: index2,
                class: "!rounded-r-lg",
                onClick: ($event) => $setup.activePage = option.title
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_6, [
                    (openBlock(), createBlock(resolveDynamicComponent(option.icon))),
                    createBaseVNode("span", _hoisted_7, toDisplayString(option.title), 1)
                  ])
                ]),
                _: 2
              }, 1032, ["onClick"]);
            }), 64))
          ]),
          _: 1
        }),
        createVNode(_component_general_social),
        createVNode(_component_general_sponsors, { nav: true })
      ])
    ]),
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_8, [
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, toDisplayString($setup.activePage), 1),
          createBaseVNode("div", _hoisted_11, [
            createVNode($setup["MaterialSymbolsGridView"], {
              class: normalizeClass([$setup.route.name === "index-index" ? "!text-primary" : "", "cursor-pointer p-2 hover:bg-gray-300/50 rounded-full"]),
              onClick: _cache[2] || (_cache[2] = ($event) => $setup.navigateTo("/"))
            }, null, 8, ["class"]),
            createVNode($setup["MaterialSymbolsFormatListBulletedRounded"], {
              class: normalizeClass([$setup.route.name === "index-index-list" ? "!text-primary" : "", "cursor-pointer p-2 hover:bg-gray-300/50 rounded-full"]),
              onClick: _cache[3] || (_cache[3] = ($event) => $setup.navigateTo("/list"))
            }, null, 8, ["class"])
          ])
        ]),
        createVNode(_component_a_divider, { class: "!mb-4 !lg:mb-8" }),
        createVNode(_component_NuxtPage, {
          projects: $setup.projects,
          onDeleteProject: $setup.deleteProject
        }, null, 8, ["projects"])
      ]),
      createVNode(_component_a_modal)
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
