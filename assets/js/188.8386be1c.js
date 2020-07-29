(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{717:function(e,v,t){"use strict";t.r(v);var _=t(10),c=Object(_.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"数据类型与编码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型与编码"}},[e._v("#")]),e._v(" 数据类型与编码")]),e._v(" "),t("ul",[t("li",[e._v("text：即文本格式的可读数据，我们最熟悉的应该就是 "),t("code",[e._v("text/html")]),e._v(" 了，表示超文本文档，此外还有纯文本 "),t("code",[e._v("text/plain")]),e._v("、样式表 "),t("code",[e._v("text/css")]),e._v(" 等。")]),e._v(" "),t("li",[t("code",[e._v("image")]),e._v("：即图像文件，有 "),t("code",[e._v("image/gif")]),e._v("、"),t("code",[e._v("image/jpeg")]),e._v("、"),t("code",[e._v("image/png")]),e._v(" 等。")]),e._v(" "),t("li",[t("code",[e._v("audio/video")]),e._v("：音频和视频数据，例如 "),t("code",[e._v("audio/mpeg")]),e._v("、"),t("code",[e._v("video/mp4")]),e._v(" 等。")]),e._v(" "),t("li",[t("code",[e._v("application")]),e._v("：数据格式不固定，可能是文本也可能是二进制，必须由上层应用程序来解释。常见的有 "),t("code",[e._v("application/json")]),e._v("，"),t("code",[e._v("application/javascript")]),e._v("、"),t("code",[e._v("application/pdf")]),e._v(" 等，另外，如果实在是不知道数据是什么类型，像刚才说的“黑盒”，就会是 "),t("code",[e._v("application/octet-stream")]),e._v("，即不透明的二进制数据")])]),e._v(" "),t("blockquote",[t("p",[e._v("但仅有 "),t("code",[e._v("MIME type")]),e._v(" 还不够，因为 "),t("code",[e._v("HTTP")]),e._v(" 在传输时为了节约带宽，有时候还会压缩数据，为了不要让浏览器继续“猜”，还需要有一个“Encoding type”，告诉数据是用的什么编码格式，这样对方才能正确解压缩，还原出原始的数据。")])]),e._v(" "),t("p",[t("strong",[e._v("比起 "),t("code",[e._v("MIME type")]),e._v(" 来说，"),t("code",[e._v("Encoding type")]),e._v(" 就少了很多，常用的只有下面三种")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("gzip")]),e._v("："),t("code",[e._v("GNU zip")]),e._v(" 压缩格式，也是互联网上最流行的压缩格式；")]),e._v(" "),t("li",[t("code",[e._v("deflate")]),e._v("："),t("code",[e._v("zlib")]),e._v("（"),t("code",[e._v("deflate")]),e._v("）压缩格式，流行程度仅次于 "),t("code",[e._v("gzip")]),e._v("；")]),e._v(" "),t("li",[t("code",[e._v("br")]),e._v("：一种专门为 "),t("code",[e._v("HTTP")]),e._v(" 优化的新压缩算法（"),t("code",[e._v("Brotli")]),e._v("）")])]),e._v(" "),t("h2",{attrs:{id:"数据类型使用的头字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型使用的头字段"}},[e._v("#")]),e._v(" 数据类型使用的头字段")]),e._v(" "),t("p",[e._v("有了 "),t("code",[e._v("MIME type")]),e._v(" 和 "),t("code",[e._v("Encoding type")]),e._v("，无论是浏览器还是服务器就都可以轻松识别出 "),t("code",[e._v("body")]),e._v(" 的类型，也就能够正确处理数据了。")]),e._v(" "),t("p",[t("code",[e._v("HTTP")]),e._v(" 协议为此定义了两个 "),t("code",[e._v("Accept")]),e._v(" 请求头字段和两个 "),t("code",[e._v("Content")]),e._v(" 实体头字段，用于客户端和服务器进行“内容协商”。也就是说，客户端用 "),t("code",[e._v("Accept")]),e._v(" 头告诉服务器希望接收什么样的数据，而服务器用 "),t("code",[e._v("Content")]),e._v(" 头告诉客户端实际发送了什么样的数据")]),e._v(" "),t("p",[t("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/12/15.png",alt:""}})]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("Accept")]),e._v("字段标记的是客户端可理解的 "),t("code",[e._v("MIME")]),e._v(" type，可以用“,”做分隔符列出多个类型，让服务器有更多的选择余地，例如下面的这个头：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Accept: text/html,application/xml,image/webp,image/png\n")])])]),t("p",[e._v("这就是告诉服务器：“我能够看懂 HTML、XML 的文本，还有 "),t("code",[e._v("webp")]),e._v(" 和 "),t("code",[e._v("png")]),e._v(" 的图片，请给我这四类格式的数据”。")]),e._v(" "),t("p",[e._v("相应的，服务器会在响应报文里用头字段"),t("code",[e._v("Content-Type")]),e._v("告诉实体数据的真实类型：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Content-Type: text/html\nContent-Type: image/png\n")])])]),t("p",[e._v("这样浏览器看到报文里的类型是“text/html”就知道是 HTML 文件，会调用排版引擎渲染出页面，看到“image/png”就知道是一个 PNG 文件，就会在页面上显示出图像。")]),e._v(" "),t("p",[e._v("Accept-Encoding字段标记的是客户端支持的压缩格式，例如上面说的 gzip、deflate 等，同样也可以用“,”列出多个，服务器可以选择其中一种来压缩数据，实际使用的压缩格式放在响应头字段"),t("code",[e._v("Content-Encoding")]),e._v("里")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Accept-Encoding: gzip, deflate, br\nContent-Encoding: gzip\n")])])]),t("p",[e._v("不过这两个字段是可以省略的，如果请求报文里没有 "),t("code",[e._v("Accept-Encoding")]),e._v(" 字段，就表示客户端不支持压缩数据；如果响应报文里没有 "),t("code",[e._v("Content-Encoding")]),e._v(" 字段，就表示响应数据没有被压缩")]),e._v(" "),t("h2",{attrs:{id:"语言类型使用的头字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语言类型使用的头字段"}},[e._v("#")]),e._v(" 语言类型使用的头字段")]),e._v(" "),t("p",[e._v("同样的，HTTP 协议也使用 "),t("code",[e._v("Accept")]),e._v(" 请求头字段和 "),t("code",[e._v("Content")]),e._v(" 实体头字段，用于客户端和服务器就语言与编码进行“内容协商”。")]),e._v(" "),t("p",[t("code",[e._v("Accept-Language")]),e._v("字段标记了客户端可理解的自然语言，也允许用“,”做分隔符列出多个类型，例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Accept-Language: zh-CN, zh, en\n")])])]),t("p",[e._v("这个请求头会告诉服务器：“最好给我 "),t("code",[e._v("zh-CN")]),e._v(" 的汉语文字，如果没有就用其他的汉语方言，如果还没有就给英文”。")]),e._v(" "),t("p",[e._v("相应的，服务器应该在响应报文里用头字段"),t("code",[e._v("Content-Language")]),e._v("告诉客户端实体数据使用的实际语言类型")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Content-Language: zh-CN\n")])])]),t("ul",[t("li",[e._v("字符集在 "),t("code",[e._v("HTTP")]),e._v(" 里使用的请求头字段是"),t("code",[e._v("Accept-Charset")]),e._v("，但响应头里却没有对应的 "),t("code",[e._v("Content-Charset")]),e._v("，而是在"),t("code",[e._v("Content-Type")]),e._v("字段的数据类型后面用“"),t("code",[e._v("charset=xxx")]),e._v("”来表示，这点需要特别注意。")]),e._v(" "),t("li",[e._v("例如，浏览器请求 "),t("code",[e._v("GBK")]),e._v(" 或 "),t("code",[e._v("UTF-8")]),e._v(" 的字符集，然后服务器返回的是 "),t("code",[e._v("UTF-8")]),e._v(" 编码，就是下面这样")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Accept-Charset: gbk, utf-8\nContent-Type: text/html; charset=utf-8\n")])])]),t("p",[e._v("不过现在的浏览器都支持多种字符集，通常不会发送 "),t("code",[e._v("Accept-Charset")]),e._v("，而服务器也不会发送 "),t("code",[e._v("Content-Language")]),e._v("，因为使用的语言完全可以由字符集推断出来，所以在请求头里一般只会有 "),t("code",[e._v("Accept-Language")]),e._v(" 字段，响应头里只会有 "),t("code",[e._v("Content-Type")]),e._v("字段")]),e._v(" "),t("p",[t("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/12/16.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"内容协商的质量值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容协商的质量值"}},[e._v("#")]),e._v(" 内容协商的质量值")]),e._v(" "),t("p",[e._v("在 HTTP 协议里用 "),t("code",[e._v("Accept")]),e._v("、"),t("code",[e._v("Accept-Encoding")]),e._v("、"),t("code",[e._v("Accept-Language")]),e._v(" 等请求头字段进行内容协商的时候，还可以用一种特殊的“q”参数表示权重来设定优先级，这里的“q”是“quality factor”的意思。")]),e._v(" "),t("p",[e._v("权重的最大值是 1，最小值是 0.01，默认值是 1，如果值是 0 就表示拒绝。具体的形式是在数据类型或语言代码后面加一个“;”，然后是“q=value”。")]),e._v(" "),t("p",[e._v("这里要提醒的是“;”的用法，在大多数编程语言里“;”的断句语气要强于“,”，而在 HTTP 的内容协商里却恰好反了过来，“;”的意义是小于“,”的。")]),e._v(" "),t("p",[e._v("例如下面的 Accept 字段：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Accept: text/html,application/xml;q=0.9,*/*;q=0.8\n")])])]),t("p",[e._v("它表示浏览器最希望使用的是 HTML 文件，权重是 1，其次是 XML 文件，权重是 0.9，最后是任意数据类型，权重是0.8。服务器收到请求头后，就会计算权重，再根据自己的实际情况优先输出 HTML 或者 XML")]),e._v(" "),t("h2",{attrs:{id:"内容协商的结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容协商的结果"}},[e._v("#")]),e._v(" 内容协商的结果")]),e._v(" "),t("p",[e._v("内容协商的过程是不透明的，每个 Web 服务器使用的算法都不一样。但有的时候，服务器会在响应头里多加一个Vary字段，记录服务器在内容协商时参考的请求头字段，给出一点信息，例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Vary: Accept-Encoding,User-Agent,Accept\n")])])]),t("p",[e._v("这个 "),t("code",[e._v("Vary")]),e._v(" 字段表示服务器依据了 "),t("code",[e._v("Accept-Encoding")]),e._v("、"),t("code",[e._v("User-Agent")]),e._v(" 和 "),t("code",[e._v("Accept")]),e._v(" 这三个头字段，然后决定了发回的响应报文。")]),e._v(" "),t("p",[t("code",[e._v("Vary")]),e._v(" 字段可以认为是响应报文的一个特殊的“版本标记”。每当 "),t("code",[e._v("Accept")]),e._v(" 等请求头变化时，"),t("code",[e._v("Vary")]),e._v(" 也会随着响应报文一起变化。也就是说，同一个 "),t("code",[e._v("URI")]),e._v(" 可能会有多个不同的“版本”，主要用在传输链路中间的代理服务器实现缓存服务，这个之后讲“HTTP 缓存”时还会再提到")]),e._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),t("p",[t("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/12/17.png",alt:""}})]),e._v(" "),t("ul",[t("li",[e._v("数据类型表示实体数据的内容是什么，使用的是 "),t("code",[e._v("MIME type")]),e._v("，相关的头字段是 "),t("code",[e._v("Accept")]),e._v("和 "),t("code",[e._v("Content-Type")]),e._v("；")]),e._v(" "),t("li",[e._v("数据编码表示实体数据的压缩方式，相关的头字段是 "),t("code",[e._v("Accept-Encoding")]),e._v(" 和 "),t("code",[e._v("Content-Encoding")]),e._v("；")]),e._v(" "),t("li",[e._v("语言类型表示实体数据的自然语言，相关的头字段是 "),t("code",[e._v("Accept-Language")]),e._v(" 和 "),t("code",[e._v("Content-Language")]),e._v("；")]),e._v(" "),t("li",[e._v("字符集表示实体数据的编码方式，相关的头字段是 "),t("code",[e._v("Accept-Charset")]),e._v("和 Content-Type；")]),e._v(" "),t("li",[e._v("客户端需要在请求头里使用 "),t("code",[e._v("Accept")]),e._v(" 等头字段与服务器进行“内容协商”，要求服务器返回最合适的数据；\n"),t("code",[e._v("Accept")]),e._v(" 等头字段可以用“,”顺序列出多个可能的选项，还可以用“"),t("code",[e._v(";q=")]),e._v("”参数来精确指定权重")])])])}),[],!1,null,null,null);v.default=c.exports}}]);