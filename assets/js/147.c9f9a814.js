(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{933:function(t,T,_){"use strict";_.r(T);var v=_(10),a=Object(v.a)({},(function(){var t=this,T=t.$createElement,_=t._self._c||T;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"http1：http性能优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http1：http性能优化"}},[t._v("#")]),t._v(" HTTP1：HTTP性能优化")]),t._v(" "),_("p",[t._v("谈及浏览器中的网络，就避不开 HTTP。我们知道 HTTP 是浏览器中最重要且使用最多的协议，是浏览器和服务器之间的通信语言，也是互联网的基石。而随着浏览器的发展，HTTP 为了能适应新的形式也在持续进化，我认为学习 HTTP 的最佳途径就是了解其发展史，所以在接下来的三篇文章中，我会从浏览器发展的视角来和你聊聊 HTTP 演进。这三篇分别是即将完成使命的 HTTP/1、正在向我们走来的 HTTP/2，以及未来的 HTTP/3。")]),t._v(" "),_("p",[t._v("本文主要介绍的是 HTTP/1.1，我们先讲解 HTTP/1.1 的进化史，然后再介绍在进化过程中所遇到的各种瓶颈，以及对应的解决方法。")]),t._v(" "),_("h2",{attrs:{id:"超文本传输协议-http-0-9"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#超文本传输协议-http-0-9"}},[t._v("#")]),t._v(" 超文本传输协议 HTTP/0.9")]),t._v(" "),_("p",[t._v("首先我们来看看诞生最早的 HTTP/0.9。HTTP/0.9 是于 1991 年提出的，主要用于学术交流，需求很简单——用来在网络之间传递 HTML 超文本的内容，所以被称为超文本传输协议。整体来看，它的实现也很简单，采用了基于请求响应的模式，从客户端发出请求，服务器返回数据")]),t._v(" "),_("p",[t._v("下面我们就来看看 HTTP/0.9 的一个完整的请求流程（可参考下图）。")]),t._v(" "),_("ul",[_("li",[t._v("因为 HTTP 都是基于 TCP 协议的，所以客户端先要根据 IP 地址、端口和服务器建立 TCP 连接，而建立连接的过程就是 TCP 协议三次握手的过程。")]),t._v(" "),_("li",[t._v("建立好连接之后，会发送一个 GET 请求行的信息，如GET /index.html用来获取 index.html。")]),t._v(" "),_("li",[t._v("服务器接收请求信息之后，读取对应的 HTML 文件，并将数据以 ASCII 字符流返回给客户端。")]),t._v(" "),_("li",[t._v("HTML 文档传输完成后，断开连接。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/11/79.png",alt:""}})]),t._v(" "),_("p",[t._v("总的来说，当时的需求很简单，就是用来传输体积很小的 HTML 文件，所以 HTTP/0.9 的实现有以下三个特点。")]),t._v(" "),_("ul",[_("li",[t._v("第一个是只有一个请求行，并没有HTTP 请求头和请求体，因为只需要一个请求行就可以完整表达客户端的需求了。")]),t._v(" "),_("li",[t._v("第二个是服务器也没有返回头信息，这是因为服务器端并不需要告诉客户端太多信息，只需要返回数据就可以了。")]),t._v(" "),_("li",[t._v("第三个是返回的文件内容是以 ASCII 字符流来传输的，因为都是 HTML 格式的文件，所以使用 ASCII 字节码来传输是最合适的。")])]),t._v(" "),_("h2",{attrs:{id:"被浏览器推动的-http-1-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#被浏览器推动的-http-1-0"}},[t._v("#")]),t._v(" 被浏览器推动的 HTTP/1.0")]),t._v(" "),_("p",[t._v("HTTP/0.9 虽然简单，但是已经可以满足当时的需求了。不过变化是这个世界永恒不变的主旋律，1994 年底出现了拨号上网服务，同年网景又推出一款浏览器，从此万维网就不局限于学术交流了，而是进入了高速的发展阶段。随之而来的是万维网联盟（W3C）和 HTTP 工作组（HTTP-WG）的创建，它们致力于 HTML 的发展和 HTTP 的改进。")]),t._v(" "),_("p",[t._v("万维网的高速发展带来了很多新的需求，而 HTTP/0.9 已经不能适用新兴网络的发展，所以这时就需要一个新的协议来支撑新兴网络，这就是 HTTP/1.0 诞生的原因。不过在详细分析 HTTP/1.0 之前，我们先来分析下新兴网络都带来了哪些新需求。")]),t._v(" "),_("p",[t._v("首先在浏览器中展示的不单是 HTML 文件了，还包括了 JavaScript、CSS、图片、音频、视频等不同类型的文件。因此支持多种类型的文件下载是 HTTP/1.0 的一个核心诉求，而且文件格式不仅仅局限于 ASCII 编码，还有很多其他类型编码的文件")]),t._v(" "),_("h2",{attrs:{id:"那么该如何实现多种类型文件的下载呢？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#那么该如何实现多种类型文件的下载呢？"}},[t._v("#")]),t._v(" 那么该如何实现多种类型文件的下载呢？")]),t._v(" "),_("p",[t._v("文章开头我们说过，HTTP 是浏览器和服务器之间的通信语言，不过 HTTP/0.9 在建立好连接之后，只会发送类似GET /index.html的简单请求命令，并没有其他途径告诉服务器更多的信息，如文件编码、文件类型等。同样，服务器是直接返回数据给浏览器的，也没有其他途径告诉浏览器更多的关于服务器返回的文件信息。")]),t._v(" "),_("p",[t._v("这种简单的交流型形式无疑不能满足传输多种类型文件的需求，那为了让客户端和服务器能更深入地交流，HTTP/1.0 引入了请求头和响应头，它们都是以为 Key-Value 形式保存的，在 HTTP 发送请求时，会带上请求头信息，服务器返回数据时，会先返回响应头信息。至于 HTTP/1.0 具体的请求流程，你可以参考下图。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/11/80.png",alt:""}})]),t._v(" "),_("p",[t._v("有了请求头和响应头，浏览器和服务器就能进行更加深入的交流了。")]),t._v(" "),_("p",[t._v("那 HTTP/1.0 是怎么通过请求头和响应头来支持多种不同类型的数据呢？")]),t._v(" "),_("p",[t._v("要支持多种类型的文件，我们就需要解决以下几个问题")]),t._v(" "),_("ul",[_("li",[t._v("首先，浏览器需要知道服务器返回的数据是什么类型的，然后浏览器才能根据不同的数据类型做针对性的处理。")]),t._v(" "),_("li",[t._v("其次，由于万维网所支持的应用变得越来越广，所以单个文件的数据量也变得越来越大。为了减轻传输性能，服务器会对数据进行压缩后再传输，所以浏览器需要知道服务器压缩的方法。")]),t._v(" "),_("li",[t._v("再次，由于万维网是支持全球范围的，所以需要提供国际化的支持，服务器需要对不同的地区提供不同的语言版本，这就需要浏览器告诉服务器它想要什么语言版本的页面。")]),t._v(" "),_("li",[t._v("最后，由于增加了各种不同类型的文件，而每种文件的编码形式又可能不一样，为了能够准确地读取文件，浏览器需要知道文件的编码类型")])]),t._v(" "),_("p",[t._v("基于以上问题，HTTP/1.0 的方案是通过请求头和响应头来进行协商，在发起请求时候会通过 HTTP 请求头告诉服务器它期待服务器返回什么类型的文件、采取什么形式的压缩、提供什么语言的文件以及文件的具体编码。最终发送出来的请求头内容如下：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("accept: text/html\naccept-encoding: gzip, deflate, br\naccept-Charset: ISO-8859-1,utf-8\naccept-language: zh-CN,zh\n")])])]),_("p",[t._v("其中第一行表示期望服务器返回 html 类型的文件，第二行表示期望服务器可以采用 gzip、deflate 或者 br 其中的一种压缩方式，第三行表示期望返回的文件编码是 UTF-8 或者 ISO-8859-1，第四行是表示期望页面的优先语言是中文。")]),t._v(" "),_("p",[t._v("服务器接收到浏览器发送过来的请求头信息之后，会根据请求头的信息来准备响应数据。不过有时候会有一些意外情况发生，比如浏览器请求的压缩类型是 gzip，但是服务器不支持 gzip，只支持 br 压缩，那么它会通过响应头中的 content-encoding 字段告诉浏览器最终的压缩类型，也就是说最终浏览器需要根据响应头的信息来处理数据。下面是一段响应头的数据信息：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("content-encoding: br\ncontent-type: text/html; charset=UTF-8\n")])])]),_("p",[t._v("其中第一行表示服务器采用了 br 的压缩方法，第二行表示服务器返回的是 html 文件，并且该文件的编码类型是 UTF-8。")]),t._v(" "),_("p",[t._v("有了响应头的信息，浏览器就会使用 br 方法来解压文件，再按照 UTF-8 的编码格式来处理原始文件，最后按照 HTML 的方式来解析该文件。这就是 HTTP/1.0 支持多文件的一个基本的处理流程。")]),t._v(" "),_("p",[t._v("HTTP/1.0 除了对多文件提供良好的支持外，还依据当时实际的需求引入了很多其他的特性，这些特性都是通过请求头和响应头来实现的。下面我们来看看新增的几个典型的特性")]),t._v(" "),_("ul",[_("li",[t._v("有的请求服务器可能无法处理，或者处理出错，这时候就需要告诉浏览器服务器最终处理该请求的情况，这就引入了状态码。状态码是通过响应行的方式来通知浏览器的。")]),t._v(" "),_("li",[t._v("为了减轻服务器的压力，在 HTTP/1.0 中提供了Cache 机制，用来缓存已经下载过的数据。")]),t._v(" "),_("li",[t._v("服务器需要统计客户端的基础信息，比如 Windows 和 macOS 的用户数量分别是多少，所以 HTTP/1.0 的请求头中还加入了用户代理的字段")])]),t._v(" "),_("h2",{attrs:{id:"缝缝补补的-http-1-1"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缝缝补补的-http-1-1"}},[t._v("#")]),t._v(" 缝缝补补的 HTTP/1.1")]),t._v(" "),_("p",[t._v("不过随着技术的继续发展，需求也在不断迭代更新，很快 HTTP/1.0 也不能满足需求了，所以 HTTP/1.1 又在 HTTP/1.0 的基础之上做了大量的更新。接下来我们来看看 HTTP/1.0 遇到了哪些主要的问题，以及 HTTP/1.1 又是如何改进的。")]),t._v(" "),_("h3",{attrs:{id:"_1-改进持久连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-改进持久连接"}},[t._v("#")]),t._v(" 1. 改进持久连接")]),t._v(" "),_("p",[t._v("HTTP/1.0 每进行一次 HTTP 通信，都需要经历建立 TCP 连接、传输 HTTP 数据和断开 TCP 连接三个阶段（如下图）。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/11/81.png",alt:""}})]),t._v(" "),_("p",[t._v("在当时，由于通信的文件比较小，而且每个页面的引用也不多，所以这种传输形式没什么大问题。但是随着浏览器普及，单个页面中的图片文件越来越多，有时候一个页面可能包含了几百个外部引用的资源文件，如果在下载每个文件的时候，都需要经历建立 TCP 连接、传输数据和断开连接这样的步骤，无疑会增加大量无谓的开销。")]),t._v(" "),_("p",[t._v("为了解决这个问题，HTTP/1.1 中增加了持久连接的方法，它的特点是在一个 TCP 连接上可以传输多个 HTTP 请求，只要浏览器或者服务器没有明确断开连接，那么该 TCP 连接会一直保持。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/11/82.png",alt:""}})]),t._v(" "),_("p",[t._v("从上图可以看出，HTTP 的持久连接可以有效减少 TCP 建立连接和断开连接的次数，这样的好处是减少了服务器额外的负担，并提升整体 HTTP 的请求时长。")]),t._v(" "),_("p",[t._v("持久连接在 HTTP/1.1 中是默认开启的，所以你不需要专门为了持久连接去 HTTP 请求头设置信息，如果你不想要采用持久连接，可以在 HTTP 请求头中加上Connection: close。目前浏览器中对于同一个域名，默认允许同时建立 6 个 TCP 持久连接。")]),t._v(" "),_("h3",{attrs:{id:"_2-不成熟的-http-管线化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-不成熟的-http-管线化"}},[t._v("#")]),t._v(" 2. 不成熟的 HTTP 管线化")]),t._v(" "),_("p",[t._v("持久连接虽然能减少 TCP 的建立和断开次数，但是它需要等待前面的请求返回之后，才能进行下一次请求。如果 TCP 通道中的某个请求因为某些原因没有及时返回，那么就会阻塞后面的所有请求，这就是著名的队头阻塞的问题。")]),t._v(" "),_("p",[t._v("HTTP/1.1 中试图通过管线化的技术来解决队头阻塞的问题。HTTP/1.1 中的管线化是指将多个 HTTP 请求整批提交给服务器的技术，虽然可以整批发送请求，不过服务器依然需要根据请求顺序来回复浏览器的请求。")]),t._v(" "),_("p",[t._v("FireFox、Chrome 都做过管线化的试验，但是由于各种原因，它们最终都放弃了管线化技术。")]),t._v(" "),_("h3",{attrs:{id:"_3-提供虚拟主机的支持"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-提供虚拟主机的支持"}},[t._v("#")]),t._v(" 3. 提供虚拟主机的支持")]),t._v(" "),_("p",[t._v("在 HTTP/1.0 中，每个域名绑定了一个唯一的 IP 地址，因此一个服务器只能支持一个域名。但是随着虚拟主机技术的发展，需要实现在一台物理主机上绑定多个虚拟主机，每个虚拟主机都有自己的单独的域名，这些单独的域名都公用同一个 IP 地址。")]),t._v(" "),_("p",[t._v("因此，HTTP/1.1 的请求头中增加了Host 字段，用来表示当前的域名地址，这样服务器就可以根据不同的 Host 值做不同的处理。")]),t._v(" "),_("h3",{attrs:{id:"_4-对动态生成的内容提供了完美支持"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-对动态生成的内容提供了完美支持"}},[t._v("#")]),t._v(" 4. 对动态生成的内容提供了完美支持")]),t._v(" "),_("p",[t._v("在设计 HTTP/1.0 时，需要在响应头中设置完整的数据大小，如Content-Length: 901，这样浏览器就可以根据设置的数据大小来接收数据。不过随着服务器端的技术发展，很多页面的内容都是动态生成的，因此在传输数据之前并不知道最终的数据大小，这就导致了浏览器不知道何时会接收完所有的文件数据。")]),t._v(" "),_("p",[t._v("HTTP/1.1 通过引入Chunk transfer 机制来解决这个问题，服务器会将数据分割成若干个任意大小的数据块，每个数据块发送时会附上上个数据块的长度，最后使用一个零长度的块作为发送数据完成的标志。这样就提供了对动态内容的支持。")]),t._v(" "),_("h3",{attrs:{id:"_5-客户端-cookie、安全机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-客户端-cookie、安全机制"}},[t._v("#")]),t._v(" 5. 客户端 Cookie、安全机制")]),t._v(" "),_("p",[t._v("除此之外，HTTP/1.1 还引入了客户端 Cookie 机制和安全机制。其中，Cookie 机制我们在《03 | HTTP 请求流程：为什么很多站点第二次打开速度会很快？》这篇文章中介绍过了，而安全机制我们会在后面的安全模块中再做介绍，这里就不赘述了。")]),t._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("p",[t._v("好了，今天就介绍到这里，下面我来总结下本文的主要内容。")]),t._v(" "),_("p",[t._v("本文我们重点强调了 HTTP 是浏览器和服务器的通信语言，然后我们从需求演变的角度追溯了 HTTP 的发展史，在诞生之初的 HTTP/0.9 因为需求简单，所以和服务器之间的通信过程也相对简单。")]),t._v(" "),_("p",[t._v("由于万维网的快速崛起，带来了大量新的需求，其中最核心的一个就是需要支持多种类型的文件下载， 为此 HTTP/1.0 中引入了请求头和响应头。在支持多种类型文件下载的基础之上，HTTP/1.0 还提供了 Cache 机制、用户代理、状态码等一些基础信息。")]),t._v(" "),_("p",[t._v("但随着技术和需求的发展，人们对文件传输的速度要求越来越高，故又基于 HTTP/1.0 推出了 HTTP/1.1，增加了持久连接方法来提升连接效率，同时还尝试使用管线化技术提升效率（不过由于各种原因，管线化技术最终被各大厂商放弃了）。除此之外，HTTP/1.1 还引入了 Cookie、虚拟主机的支持、对动态内容的支持等特性。")]),t._v(" "),_("p",[t._v("虽然 HTTP/1.1 在 HTTP/1.0 的基础之上做了大量的优化，但是由于一些效率问题始终很难解决，所以最终还是被 HTTP/2 所取代，这就是我们下一篇文章要介绍的内容了")])])}),[],!1,null,null,null);T.default=a.exports}}]);