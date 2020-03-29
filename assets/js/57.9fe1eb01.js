(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{426:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"什什么是持续集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什什么是持续集成"}},[s._v("#")]),s._v(" 什什么是持续集成")]),s._v(" "),a("h4",{attrs:{id:"ci-continuous-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ci-continuous-integration"}},[s._v("#")]),s._v(" CI(Continuous integration)")]),s._v(" "),a("p",[s._v("在持续集成环境中，开发人员将会频繁的提交代码到主干。这些新提交在最终合并到主线之前，都需要通过编译和自动化测试流进行验证。这样做是基于之前持续集成过程中很重视自动化测试验证结果，以保障所以的提交在合并主干之后的质量问题，对可能出现的一些问题进行预警。")]),s._v(" "),a("h4",{attrs:{id:"持续交付-continuous-delivery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持续交付-continuous-delivery"}},[s._v("#")]),s._v(" 持续交付(Continuous Delivery)")]),s._v(" "),a("p",[s._v("持续交付就是讲我们的应用发布出去的过程。这个过程可以确保我们尽可能快的实现交付。这就意味着除了自动化测试，我们还需要有自动化的发布流，以及通过一个按键就可以随时随地实现应用的部署上线。")]),s._v(" "),a("p",[s._v("通过持续交付，您可以决定每天，每周，每两周发布一次，这完全可以根据自己的业务进行设置。")]),s._v(" "),a("p",[s._v("但是，如果您真的希望体验持续交付的优势，就需要先进行小批量发布，尽快部署到生产线，以便在出现问题时方便进行故障排除。")]),s._v(" "),a("h4",{attrs:{id:"持续部署-continuous-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持续部署-continuous-deployment"}},[s._v("#")]),s._v(" 持续部署(Continuous Deployment)")]),s._v(" "),a("p",[s._v("如果我们想更加深入一步的话，就是持续部署了。通过这个方式，任何修改通过了所有已有的工作流就会直接和客户见面。没有人为干预(没有一键部署按钮)，只有当一个修改在工作流中构建失败才能阻止它部署到产品线。")]),s._v(" "),a("p",[s._v("持续部署是一个很优秀的方式，可以加速与客户的反馈循 环，但是会给团队带来压力，因为不再有“发布日”了。开 发人员可以专注于构建软件，他们看到他们的修改在他们 完成工作后几分钟就上线了。基本上，当开发人员在主分 支中合并一个提交时，这个分支将被构建、测试，如果一 切顺利，则部署到生产环境中。")]),s._v(" "),a("h4",{attrs:{id:"持续集成需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持续集成需求"}},[s._v("#")]),s._v(" 持续集成需求")]),s._v(" "),a("p",[s._v("1.持续集成是通过平台串联各个开发环节，实现和沉淀工作自动化的方法。\n2.线上代码和代码仓库不同步，影响迭代和团队协作。\n3.静态资源发布依赖人工，浪费开发人力。\n4.缺少自动化测试，产品质量得不到保障。\n5.文案简单修改上线，需要技术介入。")]),s._v(" "),a("p",[a("img",{attrs:{src:"1.jpg",alt:"avatar"}})]),s._v(" "),a("h4",{attrs:{id:"起步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起步"}},[s._v("#")]),s._v(" 起步")]),s._v(" "),a("p",[s._v("1.统一代码仓库通过分支管理合并主干SVN。\n2.自动化构建工具，编译、部署、测试、监控、本机 开发上线环境。FIS3/Webpack/jdists/package.json/ chai/supertest/mocha/selenium-webdriver\n3.持续集成平台。Jenkins、Travis CI 4.部署工具。rsync、shelljs、yargs 5.运营同学有权限操作运营页面保存即可上线。")]),s._v(" "),a("h3",{attrs:{id:"统⼀一代码仓库多分⽀支开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统⼀一代码仓库多分⽀支开发"}},[s._v("#")]),s._v(" 统⼀一代码仓库多分⽀支开发")]),s._v(" "),a("p",[s._v("Mac自带apachectl默认占用80端口\nsudo apachectl start\nlsof -i:80查看80端口占用情况")]),s._v(" "),a("p",[s._v("nginx -s reload\nnginx -s stop")]),s._v(" "),a("h3",{attrs:{id:"前端工程化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端工程化"}},[s._v("#")]),s._v(" 前端工程化")]),s._v(" "),a("h4",{attrs:{id:"自动化编译。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化编译。"}},[s._v("#")]),s._v(" 自动化编译。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    -> 读入foo.es的文件内容，编译成js内容\n    -> 分析js内容，找到资源定位标记 'foo.scss' -> 对foo.scss进行编译:\n    -> 读入foo.scss的文件内容，编译成css内容\n    -> 分析css内容，找到资源定位标记 ``url(foo.png)`` -> 对 foo.png 进行编译:\n    -> 读入foo.png的内容 -> 图片压缩\n    -> 返回图片内容\n    -> 根据foo.png的最终内容计算md5戳，替换url(foo.png)为url(/static/img/foo_2af0b.png) -> 替换完毕所有资源定位标记，对css内容进行压缩\n    -> 返回css内容\n    -> 根据foo.css的最终内容计算md5戳，替换'foo.scss'为 '/static/scss/foo_bae39.css'\n    -> 替换完毕所有资源定位标记，对js内容进行压缩\n    -> 返回js内容\n    -> 根据最终的js内容计算md5戳，得到foo.coffee的资源url为 '/static/scripts/foo_3fc20.js'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h4",{attrs:{id:"前端模块化。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端模块化。"}},[s._v("#")]),s._v(" 前端模块化。")]),s._v(" "),a("p",[s._v("1.前端模块化框架肩负着 模块管理、资源加载 两项重要的功能，这 两项功能与工具、性能、业务、部署等工程环节都有着非常紧密的联 系。因此，模块化框架的设计应该最高优先级考虑工程需要。\n2.CommonJS API定义很多普通应用程序(主要指非浏览器的应用) 使用的API，从而填补了这个空白。它的终极目标是提供一个类似 Python，Ruby和Java标 准库。\n4.根据这个规范，每个文件就是一个模块，有自己的作用域。在一个 文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。\n5.CMD和AMD都是CommonJS的一种规范的实现定义，SeaJS和RequireJS是对应的实践。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//AMD(Asynchronous Module Definition)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dep1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dep2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("dep1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("dep2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//内部只能使⽤用指定的模块 ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//CMD")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//此处如果需要加载某XX模块，可以引⼊入 ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" xx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("‘"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("XX")]),s._v("’"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("1.CMD 依赖是就近声明，通过内部require方法进行声明。但是因 为是异步模块，加载器需要提前加载这些模块，所以模块真正使用 前需要提取模块里面所有的依赖。\n2.不能直接压缩,require局部变量如果替换无法加载资源\n3.CMD路径参数不能进行字符串运算。\n4.AMD的依赖是提前声明。这种优势的好处就是依赖无需通过静态 分析，无论是加载器还是自动化工具都可以很直接的获取到依赖。\n5.AMD依赖提前声明在代码书写上不是那么友好。 6.AMD模块内部与 NodeJS 的 Modules 有一定的差异。")]),s._v(" "),a("h4",{attrs:{id:"定位静态资源。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定位静态资源。"}},[s._v("#")]),s._v(" 定位静态资源。")]),s._v(" "),a("p",[s._v("使用MD5的原因\n先上静态资源")]),s._v(" "),a("h4",{attrs:{id:"前端开发组件化。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端开发组件化。"}},[s._v("#")]),s._v(" 前端开发组件化。")]),s._v(" "),a("p",[s._v("Web Components\n1.Custom Elements\n2.HTML Imports\n3.HTML Templates\n4.Shadow DOM")]),s._v(" "),a("h4",{attrs:{id:"自动化部署测试配合版本库。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化部署测试配合版本库。"}},[s._v("#")]),s._v(" 自动化部署测试配合版本库。")]),s._v(" "),a("p",[s._v("Travis CI\nJenkins")]),s._v(" "),a("h4",{attrs:{id:"自动化性能优化-前端架构开发下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化性能优化-前端架构开发下"}},[s._v("#")]),s._v(" 自动化性能优化(前端架构开发下)")])])}),[],!1,null,null,null);t.default=e.exports}}]);