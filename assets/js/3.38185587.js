(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{294:function(t,s,a){t.exports=a.p+"assets/img/5.1447f7d8.jpg"},295:function(t,s,a){t.exports=a.p+"assets/img/6.85c44fc0.jpg"},296:function(t,s,a){t.exports=a.p+"assets/img/7.6a163cae.jpg"},297:function(t,s,a){t.exports=a.p+"assets/img/8.808891bc.jpg"},298:function(t,s,a){t.exports=a.p+"assets/img/9.d080e97b.jpg"},299:function(t,s,a){t.exports=a.p+"assets/img/10.7c851d03.jpg"},300:function(t,s,a){t.exports=a.p+"assets/img/11.9a8cc2bb.jpg"},301:function(t,s,a){t.exports=a.p+"assets/img/12.bc4d4584.jpg"},302:function(t,s,a){t.exports=a.p+"assets/img/13.19d3d254.jpg"},303:function(t,s,a){t.exports=a.p+"assets/img/14.aa3121e8.jpg"},304:function(t,s,a){t.exports=a.p+"assets/img/15.9003b0bd.jpg"},305:function(t,s,a){t.exports=a.p+"assets/img/16.aa5b7dd5.jpg"},306:function(t,s,a){t.exports=a.p+"assets/img/17.f96e07b5.jpg"},307:function(t,s,a){t.exports=a.p+"assets/img/18.73ba7b65.jpg"},308:function(t,s,a){t.exports=a.p+"assets/img/19.86ba128c.jpg"},309:function(t,s,a){t.exports=a.p+"assets/img/20.64e5ac46.jpg"},310:function(t,s,a){t.exports=a.p+"assets/img/21.7ab2c061.jpg"},311:function(t,s,a){t.exports=a.p+"assets/img/22.549a8b9f.jpg"},312:function(t,s,a){t.exports=a.p+"assets/img/23.683c1c4a.jpg"},313:function(t,s,a){t.exports=a.p+"assets/img/24.e8251f66.jpg"},314:function(t,s,a){t.exports=a.p+"assets/img/25.b33ef565.jpg"},315:function(t,s,a){t.exports=a.p+"assets/img/26.48f6bf48.jpg"},316:function(t,s,a){t.exports=a.p+"assets/img/28.a003353a.jpg"},317:function(t,s,a){t.exports=a.p+"assets/img/29.67aa02b2.jpg"},318:function(t,s,a){t.exports=a.p+"assets/img/30.3f24045f.jpg"},319:function(t,s,a){t.exports=a.p+"assets/img/31.66ed492e.jpg"},320:function(t,s,a){t.exports=a.p+"assets/img/32.0830cdd6.jpg"},321:function(t,s,a){t.exports=a.p+"assets/img/33.0895b4d7.jpg"},322:function(t,s,a){t.exports=a.p+"assets/img/27.9db7921f.jpg"},323:function(t,s,a){t.exports=a.p+"assets/img/34.bf7810b1.jpg"},400:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"开局一张图-剩下全凭想"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开局一张图-剩下全凭想"}},[t._v("#")]),t._v(" 开局一张图,剩下全凭想")]),t._v(" "),n("p",[n("img",{attrs:{src:a(294),alt:"An image"}}),t._v("\n前面Vue2源码分析(一)主要分析了图中第2部分\n第2的部分在Compile.js中 我们利用var frag = document.createDocumentFragment();模拟了虚拟dom生成实现\n现在我们深入的分析一下第1部分")]),t._v(" "),n("h2",{attrs:{id:"compiler"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#compiler"}},[t._v("#")]),t._v(" compiler")]),t._v(" "),n("p",[t._v("https://github.com/vuejs/vue/tree/dev/src/compiler\n"),n("img",{attrs:{src:a(295),alt:"An image"}}),t._v("\nparse(把代码转化成ast)---\x3eoptimize(优化)---\x3egenerate(codegen再次生成)---\x3evdom---\x3edom diff----\x3epatch(补丁)\n对应上图文件")]),t._v(" "),n("h3",{attrs:{id:"parser"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parser"}},[t._v("#")]),t._v(" parser")]),t._v(" "),n("p",[t._v("https://github.com/vuejs/vue/blob/dev/src/compiler/parser/index.js\n"),n("img",{attrs:{src:a(296),alt:"An image"}}),t._v("\n主要观察画线部分\n主要文件 import { parseHTML } from './html-parser'\n正则匹配处理\ncreateASTElement函数")]),t._v(" "),n("h4",{attrs:{id:"html-parser"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#html-parser"}},[t._v("#")]),t._v(" html-parser")]),t._v(" "),n("p",[n("img",{attrs:{src:a(297),alt:"An image"}}),t._v("\n借用jquery去生成")]),t._v(" "),n("h3",{attrs:{id:"vdom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vdom"}},[t._v("#")]),t._v(" vdom")]),t._v(" "),n("p",[t._v("create-element->dom diff->patch(生成对比好的vdom)")]),t._v(" "),n("p",[t._v("DOM操作很慢是两个原因，一个是本身操作就不快，第 二是我们(还有很多框架)处理dom的方式很慢，Virtual Dom解决了我们这些愚蠢的程序员对Dom的低劣操作，它让我 们不需要进行Dom操作，而是将希望展现的最终结果告诉Vue，Vue通过一个简化的Dom即Virtual dom进行 render，当你试图改变显示内容时，新生成的Virtual Dom会 与现在的Virtual dom对比，通过diff算法找到区别，这些操作 都是在快速的js中完成的，最后对实际Dom进行最小的Dom操 作来完成效果，这就是Virtual Dom的概念。 rective(descriptor, this, node, host, scope, frag)\n"),n("img",{attrs:{src:a(298),alt:"An image"}}),t._v(" "),n("img",{attrs:{src:a(299),alt:"An image"}}),t._v(" "),n("img",{attrs:{src:a(300),alt:"An image"}}),t._v(" "),n("img",{attrs:{src:a(301),alt:"An image"}}),t._v(" "),n("img",{attrs:{src:a(302),alt:"An image"}}),t._v(" "),n("img",{attrs:{src:a(303),alt:"An image"}})]),t._v(" "),n("h3",{attrs:{id:"optimize"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#optimize"}},[t._v("#")]),t._v(" optimize")]),t._v(" "),n("p",[t._v("vue运行时优化\n"),n("img",{attrs:{src:a(304),alt:"An image"}}),t._v("\n如果是静态节点就不进行计算\n"),n("img",{attrs:{src:a(305),alt:"An image"}}),t._v("\n把"+t._s(t.msg)+"变量外的全部做成静态节点\n"),n("img",{attrs:{src:a(306),alt:"An image"}}),t._v("\n如果是死的值比如说10个li,那我就直接给你10个li\n"),n("img",{attrs:{src:a(307),alt:"An image"}}),t._v("\n服务端渲染，如果直接转成string,如果存在组件临时进行解析\n"),n("img",{attrs:{src:a(308),alt:"An image"}}),t._v(" "),n("img",{attrs:{src:a(309),alt:"An image"}}),t._v(" "),n("img",{attrs:{src:a(310),alt:"An image"}}),t._v("\nprefetch下一个页面资源提前加载")]),t._v(" "),n("p",[n("img",{attrs:{src:a(311),alt:"An image"}}),t._v(" "),n("img",{attrs:{src:a(312),alt:"An image"}}),t._v("\n南京线下会愿景，原子css")]),t._v(" "),n("p",[n("img",{attrs:{src:a(313),alt:"An image"}}),t._v("\n变态暴力的prepack(下一步可能会引入)\n"),n("img",{attrs:{src:a(314),alt:"An image"}}),t._v(" "),n("img",{attrs:{src:a(315),alt:"An image"}})]),t._v(" "),n("h2",{attrs:{id:"keep-live"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keep-live"}},[t._v("#")]),t._v(" keep-live")]),t._v(" "),n("p",[t._v("keep-alive是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中；使用keep-alive包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。")]),t._v(" "),n("p",[t._v("当然keep-alive不仅仅是能够保存页面/组件的状态这么简单，它还可以避免组件反复创建和渲染，有效提升系统性能。 总的来说，keep-alive用于保存组件的渲染状态。")]),t._v(" "),n("p",[t._v("https://juejin.im/post/5cce49036fb9a031eb58a8f9")]),t._v(" "),n("p",[t._v("抽象组件 不让你看不让你操作\n"),n("img",{attrs:{src:a(316),alt:"An image"}}),t._v("\n自己重新去遍历\n"),n("img",{attrs:{src:a(317),alt:"An image"}}),t._v("\n但是当内容越来越多(cache)的时候会出现无法GC的情况\nthis.max 负责清理组件\nlru算法清除 prunt oldest entry删除最旧条目\n"),n("img",{attrs:{src:a(318),alt:"An image"}})]),t._v(" "),n("h2",{attrs:{id:"vue-use"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-use"}},[t._v("#")]),t._v(" Vue use")]),t._v(" "),n("p",[t._v("1、首先插件暴露一个install方法，如果vue.use 发现插件有install方法调用，插件发现被调用了 把方法挂在到vue.prototype上，所以插件多会把vue.prototype上挂坏，而且vue.prototype不会被释放")]),t._v(" "),n("p",[t._v("Vue-router 监听浏览器的pushState(h5属性)，如果支持返回pushState，走/斜杠的形式，如果不支持走hash模式（监听hash change完事）")]),t._v(" "),n("p",[t._v("https://github.com/vuejs/vue/blob/dev/src/core/global-api/use.js")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" toArray "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../util/index'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initUse")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" GlobalAPI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("use")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" installedPlugins "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_installedPlugins "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_installedPlugins "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("installedPlugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// additional parameters")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" args "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("unshift")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("install "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" plugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    installedPlugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br")])]),n("p",[t._v("来看一下vue-router的实现\nhttps://github.com/vuejs/vue-router/blob/dev/src/install.js\n"),n("img",{attrs:{src:a(319),alt:"An image"}})]),t._v(" "),n("p",[t._v("顺便可以看一下hash、history的实现\nhttps://github.com/vuejs/vue-router/blob/dev/src/history/hash.js\n"),n("img",{attrs:{src:a(320),alt:"An image"}})]),t._v(" "),n("p",[t._v("https://github.com/vuejs/vue-router/blob/dev/src/util/push-state.js\n"),n("img",{attrs:{src:a(321),alt:"An image"}})]),t._v(" "),n("h2",{attrs:{id:"核心"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心"}},[t._v("#")]),t._v(" 核心")]),t._v(" "),n("p",[n("img",{attrs:{src:a(322),alt:"An image"}}),t._v("\nvuex模仿redux flux模式，后面会分析flux模式")]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("ol",[n("li",[t._v("vue/src/platforms/web/entry-runtime-with-compiler.js")]),t._v(" "),n("li",[t._v("import { compileToFunctions } from ‘./compiler/index’")]),t._v(" "),n("li",[t._v("57行template = getOuterHTML(el) 进行了编译\n然后调用Vue.prototype.$mount 进行初始化执行\n（src/platform/web/runtime/index.js 定义在这）\n4.核心调用mountComponent\n（src/core/instance/lifecycle.js定义在这）\n生成vnode 179行  const vnode = vm._render()")]),t._v(" "),n("li",[t._v("vm._render在\nsrc/core/instance/render.js\n34行位置   vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)\n生成vnode节点 最后如下\n"),n("div",{attrs:{id:"“app”"}},[t._v("\n"+t._s(t.message)+"\n")]),t._v("\nrender: function (createElement) {\nreturn createElement(‘div’, {\nattrs: {\nid: ‘app’\n},\n}, this.message)\n}")])]),t._v(" "),n("p",[t._v("三大框架在职业中也不是昙花一现\n技术选型的10点\n"),n("img",{attrs:{src:a(323),alt:"An image"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);