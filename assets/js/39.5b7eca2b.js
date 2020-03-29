(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{454:function(n,e,t){"use strict";t.r(e);var r=t(0),o=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("pre",[t("code",[n._v("(function(window,undefined) {\n    undefined = 20;\n    alert(undefined)//20\n})(window,undefined)\n\n(function (window, undefined) {\n})(window, undefined)\nundefined = 20;\nalert(undefined)//undefined\n")])]),n._v(" "),t("h4",{attrs:{id:"jquery-源码第一行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jquery-源码第一行"}},[n._v("#")]),n._v(" jQuery 源码第一行")]),n._v(" "),t("pre",[t("code",[n._v("var s = new $('.test');\nvar q = $('.test');\n\n// s 和 q 的原型链不一样，但是取出来的东西是一样的。\n\n(function(window, undefined) {\n    var jQuery = function(selector, context) {\n        // 默默的给做了一个 new\n        return jQuery.fn.init(selector, context); // 这段代码被传为佳话\n    };\n    jQuery.fn = jQuery.prototype = {\n        init: function(select, context){\n    }\n};\n// jQuery.fn.init.prototype = jQuery.fn = jQuery.prototype ???\n // 为什么绕？ 有什么好处?\n// 绝妙的地方\n// 要把 jQuery.fn.init.prototype 给绕出来\njQuery.fn.init.prototype = jQuery.fn\n\n// 1. 构造函数 2. prototype的方法\n// new 第一步 返回一个 init 的函数，原型链上挂载了一个init的函数 没有主动执行\n// init没调用，被搁置了\n// 构造函数内部的 return new\n// jQuery\n\n// jQuery.fn.init.prototype = jQuery.fn = jQuery\n// 把各自的原型链去掉\n// jQuery.fn.init = jQuery\n// new jQuery.fn.init 相当于 new 自己\n\n// new 自己就好了，为什么就要绕？\n// 为了得到 jQuery 原型链的方法。jQuery.fn上拥有原型链上的所有方法\n})(window)\n")])]),n._v(" "),t("p",[t("strong",[n._v("$.fn")]),n._v("\n$.fn 上挂载一个方法。所有的jQuery都能够使用了。")]),n._v(" "),t("pre",[t("code",[n._v("jQuery.fn.extend 和 jQuery.extend 的区别\n")])]),n._v(" "),t("h4",{attrs:{id:"jquery-链式调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jquery-链式调用"}},[n._v("#")]),n._v(" jQuery 链式调用")]),n._v(" "),t("pre",[t("code",[n._v("var test = {\n    a: function () {\n        console.log('a')\n        return this\n    },\n    b: function () {\n        console.log('b')\n        return this\n    },\n    c: function () {\n        console.log('c')\n    }\n}\ntest.a().b().c()\n")])])])}),[],!1,null,null,null);e.default=o.exports}}]);