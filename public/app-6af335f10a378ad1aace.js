webpackJsonp([0xd2a57dc1d883],{66:function(e,n,t){"use strict";function o(e,n,t){var o=a.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function r(e,n,t){return a.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=r;var a=[{plugin:t(297),options:{plugins:[]}},{plugin:t(189),options:{plugins:[]}}]},182:function(e,n,t){"use strict";var o;n.components={"component---src-pages-index-js":t(291),"component---src-pages-404-js":t(290),"component---src-pages-page-2-js":t(292)},n.json=(o={"layout-index.json":t(58),"index.json":t(295)},o["layout-index.json"]=t(58),o["404.json"]=t(293),o["layout-index.json"]=t(58),o["page-2.json"]=t(296),o["layout-index.json"]=t(58),o["404-html.json"]=t(294),o),n.layouts={"layout---index":t(289)}},183:function(e,n,t){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(4),l=r(s),f=t(7),p=r(f),d=t(111),h=r(d),g=t(48),m=r(g),y=t(66),v=function(e){var n=e.children;return o.createElement("div",null,n())},R=function(e){function n(t){a(this,n);var o=u(this,e.call(this)),r=t.location;return h.default.getPage(r.pathname)||(r=c({},r,{pathname:"/404.html"})),o.state={location:r,pageResources:h.default.getResourcesForPathname(r.pathname)},o}return i(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=h.default.getResourcesForPathname(e.location.pathname);if(t)this.setState({location:e.location,pageResources:t});else{var o=e.location;h.default.getPage(o.pathname)||(o=c({},o,{pathname:"/404.html"})),h.default.getResourcesForPathname(o.pathname,function(e){n.setState({location:o,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;m.default.on("onPostLoadPageResources",function(n){h.default.getPage(e.state.location.pathname)&&n.page.path===h.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path))))},n.prototype.render=function(){var e=(0,y.apiRunner)("replaceComponentRenderer",{props:c({},this.props,{pageResources:this.state.pageResources}),loader:d.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,s.createElement)(this.state.pageResources.component,c({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,c({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(l.default.Component);R.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},n.default=R,e.exports=n.default}).call(n,t(17))},48:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(331),a=o(r),u=(0,a.default)();e.exports=u},184:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(65),a=t(112),u=o(a),i={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,n);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var c=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return c=e,i[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return c=e,i[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return c=e,i[a]=e,!0}return!1}),c}}},185:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(88),a=o(r),u=t(66),i=(0,u.apiRunner)("replaceHistory"),c=i[0],s=c||(0,a.default)();e.exports=s},294:function(e,n,t){t(16),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(325)})})}},293:function(e,n,t){t(16),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(326)})})}},295:function(e,n,t){t(16),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(327)})})}},58:function(e,n,t){t(16),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(90)})})}},296:function(e,n,t){t(16),e.exports=function(e){return t.e(0x7b71d9db271c,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(328)})})}},289:function(e,n,t){t(16),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(186)})})}},111:function(e,n,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var r=t(4),a=(o(r),t(184)),u=o(a),i=t(48),c=o(i),s=t(112),l=o(s),f=void 0,p={},d={},h={},g={},m={},y=[],v=[],R={},w="",P=[],_={},x=function(e){return e&&e.default||e},b=void 0,j=!0,E=[],O={},C={},N=5;b=t(187)({getNextQueuedResources:function(){return P.slice(-1)[0]},createResourceDownload:function(e){L(e,function(){P=P.filter(function(n){return n!==e}),b.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){b.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){b.onPostLoadPageResources(e)});var k=function(e,n){return _[e]>_[n]?1:_[e]<_[n]?-1:0},T=function(e,n){return R[e]>R[n]?1:R[e]<R[n]?-1:0},L=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[n])e.nextTick(function(){t(null,g[n])});else{var o=void 0;o="component---"===n.slice(0,12)?d.components[n]:"layout---"===n.slice(0,9)?d.layouts[n]:d.json[n],o(function(e,o){g[n]=o,E.push({resource:n,succeeded:!e}),C[n]||(C[n]=e),E=E.slice(-N),t(e,o)})}},S=function(n,t){m[n]?e.nextTick(function(){t(null,m[n])}):C[n]?e.nextTick(function(){t(C[n])}):L(n,function(e,o){if(e)t(e);else{var r=x(o());m[n]=r,t(e,r)}})},A=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=E.find(function(e){return e.succeeded});return!!n},D=function(e,n){console.log(n),O[e]||(O[e]=n),A()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},U=1,M={empty:function(){v=[],R={},_={},P=[],y=[],w=""},addPagesArray:function(e){y=e,f=(0,u.default)(e,w)},addDevRequires:function(e){p=e},addProdRequires:function(e){d=e},dequeue:function(){return v.pop()},enqueue:function(e){var n=(0,l.default)(e,w);if(!y.some(function(e){return e.path===n}))return!1;var t=1/U;U+=1,R[n]?R[n]+=1:R[n]=1,M.has(n)||v.unshift(n),v.sort(T);var o=f(n);return o.jsonName&&(_[o.jsonName]?_[o.jsonName]+=1+t:_[o.jsonName]=1+t,P.indexOf(o.jsonName)!==-1||g[o.jsonName]||P.unshift(o.jsonName)),o.componentChunkName&&(_[o.componentChunkName]?_[o.componentChunkName]+=1+t:_[o.componentChunkName]=1+t,P.indexOf(o.componentChunkName)!==-1||g[o.jsonName]||P.unshift(o.componentChunkName)),P.sort(k),b.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:P,resourcesCount:_}},getPages:function(){return{pathArray:v,pathCount:R}},getPage:function(e){return f(e)},has:function(e){return v.some(function(n){return n===e})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};j&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),j=!1;if(O[n])return D(n,'Previously detected load failure for "'+n+'"'),t();var o=f(n);if(!o)return D(n,"A page wasn't found for \""+n+'"'),t();if(n=o.path,h[n])return e.nextTick(function(){t(h[n]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:h[n]})}),h[n];c.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){h[n]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};t(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return S(o.componentChunkName,function(e,n){e&&D(o.path,"Loading the component for "+o.path+" failed"),r=n,i()}),S(o.jsonName,function(e,n){e&&D(o.path,"Loading the JSON for "+o.path+" failed"),a=n,i()}),void(o.layoutComponentChunkName&&S(o.layout,function(e,n){e&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=n,i()}))},peek:function(e){return v.slice(-1)[0]},length:function(){return v.length},indexOf:function(e){return v.length-v.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:M.getResourcesForPathname};n.default=M}).call(n,t(91))},329:function(e,n){e.exports=[{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-page-2-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"page-2.json",path:"/page-2/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},187:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r=t(66),a=t(4),u=(n(a),t(151)),i=n(u),c=t(65),s=t(301),l=t(277),f=n(l),p=t(185),d=n(p),h=t(48),g=n(h),m=t(329),y=n(m),v=t(330),R=n(v),w=t(183),P=n(w),_=t(182),x=n(_),b=t(111),j=n(b);t(266),window.___history=d.default,window.___emitter=g.default,j.default.addPagesArray(y.default),j.default.addProdRequires(x.default),window.asyncRequires=x.default,window.___loader=j.default,window.matchPath=c.matchPath;var E=R.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),O=function(e){var n=E[e];return null!=n&&(d.default.replace(n.toPath),!0)};O(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function n(e){window.___history&&p!==!1||(window.___history=e,p=!0,e.listen(function(e,n){O(e.pathname)||(0,r.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function u(e,n){var t=n.location.pathname,o=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var a=e.location.pathname;if(a===t)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&t(188);var l=function(e){function n(t){t.page.path===j.default.getPage(e).path&&(g.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}var t=E[e];if(t&&(e=t.toPath),window.location.pathname!==e){var o=setTimeout(function(){g.default.off("onPostLoadPageResources",n),g.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);j.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):g.default.on("onPostLoadPageResources",n)}};window.___navigateTo=l,(0,r.apiRunner)("onRouteUpdate",{location:d.default.location,action:d.default.action});var p=!1,h=(0,r.apiRunner)("replaceRouterComponent",{history:d.default})[0],m=function(n){var t=n.children;return e.createElement(c.Router,{history:d.default},t)},y=(0,c.withRouter)(P.default);j.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,a.createElement)(h?h:m,null,(0,a.createElement)(s.ScrollContext,{shouldUpdateScroll:u},(0,a.createElement)(y,{layout:!0,children:function(e){return(0,a.createElement)(c.Route,{render:function(t){n(t.history);var r=e?e:t;return j.default.getPage(r.location.pathname)?(0,a.createElement)(P.default,o({page:!0},r)):(0,a.createElement)(P.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},l=(0,r.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,f.default)(function(){return i.default.render(e.createElement(l,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})}).call(n,t(17))},330:function(e,n){e.exports=[]},188:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(48),a=o(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},112:function(e,n){"use strict";n.__esModule=!0,n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,n.length)===n?e.slice(n.length):e},e.exports=n.default},189:function(e,n){"use strict"},277:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},16:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(t,e),u=null)};return!a&&n&&n[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),s(!0))}))))}}o()},297:function(e,n,t){"use strict";var o=t(142);n.onClientEntry=function(){window._glamor&&(0,o.rehydrate)(window._glamor)}},147:function(e,n){"use strict";var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,s=c&&c(Object);e.exports=function e(n,l,f){if("string"!=typeof l){if(s){var p=c(l);p&&p!==s&&e(n,p,f)}var d=a(l);u&&(d=d.concat(u(l)));for(var h=0;h<d.length;++h){var g=d[h];if(!(t[g]||o[g]||f&&f[g])){var m=i(l,g);try{r(n,g,m)}catch(e){}}}return n}return n}},331:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).slice().map(function(e){e(t)}),(e["*"]||[]).slice().map(function(e){e(n,t)})}}}e.exports=t},91:function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(n){try{return f.call(null,e)}catch(n){return f.call(this,e)}}}function u(){g&&d&&(g=!1,d.length?h=d.concat(h):m=-1,h.length&&i())}function i(){if(!g){var e=r(u);g=!0;for(var n=h.length;n;){for(d=h,h=[];++m<n;)d&&d[m].run();m=-1,n=h.length}d=null,g=!1,a(e)}}function c(e,n){this.fun=e,this.array=n}function s(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,h=[],g=!1,m=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];h.push(new c(e,n)),1!==h.length||g||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},290:function(e,n,t){t(16),e.exports=function(e){return t.e(0x9427c64ab85d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(195)})})}},291:function(e,n,t){t(16),e.exports=function(e){return t.e(35783957827783,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(196)})})}},292:function(e,n,t){t(16),e.exports=function(e){return t.e(0xc6c285f8fd10,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(197)})})}}});
//# sourceMappingURL=app-6af335f10a378ad1aace.js.map