// @adr/banner-code-library/img-banner v1.0.0
!function(){"use strict";function t(){t=function(){return e};var r,e={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(r){f=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof g?r:g,a=Object.create(o.prototype),c=new A(n||[]);return i(a,"_invoke",{value:P(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",y="suspendedYield",v="executing",m="completed",d={};function g(){}function w(){}function b(){}var E={};f(E,c,(function(){return this}));var L=Object.getPrototypeOf,O=L&&L(L(N([])));O&&O!==n&&o.call(O,c)&&(E=O);var x=b.prototype=g.prototype=Object.create(E);function j(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(n,i,a,c){var u=h(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var n;i(this,"_invoke",{value:function(t,o){function i(){return new r((function(r,n){e(t,o,r,n)}))}return n=n?n.then(i,i):i()}})}function P(t,e,n){var o=p;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=S(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=h(t,e,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function S(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=h(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function T(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(t){if(t||""===t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return w.prototype=b,i(x,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:w,configurable:!0}),w.displayName=f(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},j(k.prototype),f(k.prototype,u,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(x),f(x,s,"Generator"),f(x,c,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;T(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},e}function r(t){var r=function(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof r?r:String(r)}function e(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function o(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i,a,c,u=function(t,r){if(t)for(var e=Object.prototype.toString.call(r.prototype),n=Object.getPrototypeOf(t);n;){if(Object.prototype.toString.call(n)===e)return!0;n=Object.getPrototypeOf(n)}return!1},s=function(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)},f=function(t){return"string"==typeof t||u(t,String)},l=function(t){return"[object Object]"===Object.prototype.toString.call(t)},h=function(t){return u(t,HTMLElement)||p(t)},p=function(t){return u(t,Document)},y=function(t){if(!f(t))throw new Error("".concat(t," is not a string"));return 0===m(t).length},v=function(t){if(!f(t)&&!s(t))throw new Error("".concat(t," is not a string or number"));return t+"px"},m=function(t){if(!f(t))throw new Error("".concat(t," is not a string"));return t.replace(/\s/g,"")},d=function(t,r){if(!l(t))throw new Error("".concat(t," is not an object"));if(!Array.isArray(r))throw new Error("".concat(r," is not an array"));return r.every((function(r){return Object.prototype.hasOwnProperty.call(t,r)}))},g=function(t,r){return function(t,r,e){if((h(t)||t instanceof SVGElement)&&l(r))for(var n in r){var o=s(r[n])?String(r[n]):r[n];f(o)&&!y(o)&&e(t,n,o)}}(t,r,(function(t,r,e){return t.setAttribute(r,e)}))},w=function(){function t(r,e,n){if(function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,"uri",void 0),o(this,"parent",void 0),o(this,"timeOut",void 0),o(this,"scriptElement",void 0),!f(r))throw new Error("ScriptLoader: The url must be a string.");if(y(r))throw new Error("ScriptLoader: The url parameter cannot be an empty string.");this.timeOut=s(n)&&function(t){if(!s(t))throw new Error("".concat(t," is not a number"));return t>=0}(n)?n:5e3,this.scriptElement=document.createElement("script"),this.uri=r,p(e)&&h(e.body)?this.parent=e.body:h(e)&&1===(null==e?void 0:e.nodeType)?this.parent=e:this.parent=document.body}var r,e,i;return r=t,(e=[{key:"removeScriptElement",value:function(){this.scriptElement.remove()}},{key:"load",value:function(){var t=this;return new Promise((function(r,e){t.scriptElement.setAttribute("src",t.uri);var n=setTimeout((function(){t.scriptElement.removeEventListener("load",o),t.scriptElement.removeEventListener("error",o),t.scriptElement.remove(),e(new Error("TimeOut error."))}),t.timeOut),o=function(o){clearTimeout(n),"error"===o.type?(t.scriptElement.remove(),e(new Error("Script error loading."))):r(!0)};t.scriptElement.addEventListener("load",o,{once:!0}),t.scriptElement.addEventListener("error",o,{once:!0}),t.parent.append(t.scriptElement)}))}},{key:"setAttributes",value:function(t){return g(this.scriptElement,t),this}}])&&n(r.prototype,e),i&&n(r,i),Object.defineProperty(r,"prototype",{writable:!1}),t}(),b="https://add-server.onrender.com/?source=".concat(btoa(void 0+"/adriver-core.js")),E=(i=!1,function(){var r,n=(r=t().mark((function r(e){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l(e)&&d(e,["name","value"])){t.next=2;break}throw new Error("Invalid parameter passed.");case 2:if(window.AdR){t.next=7;break}if(!i){t.next=5;break}throw new Error("Error when requesting adriver-core.");case 5:return i=!0,t.abrupt("return",new w(b).load().then((function(){return E(e)})).catch((function(t){throw i=!1,t})));case 7:return t.abrupt("return",window.AdR.addToStorage(e.name,e.value));case 8:case"end":return t.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(o,i){var a=r.apply(t,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))});return function(t){return n.apply(this,arguments)}}()),L=E;!function(t){t[t.Img=1]="Img"}(a||(a={}));var O=((c={})[a.Img]="img-banner",c);function x(t,r,e,n){return new(e||(e=Promise))((function(o,i){function a(t){try{u(n.next(t))}catch(t){i(t)}}function c(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var r;t.done?o(t.value):(r=t.value,r instanceof e?r:new e((function(t){t(r)}))).then(a,c)}u((n=n.apply(t,r||[])).next())}))}function j(t,r){var e,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(e=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,n=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=r.call(t,a)}catch(t){c=[6,t],n=0}finally{e=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}var k=function(t){return Object.prototype.hasOwnProperty.call(window,"AAB_PROXY_URL")?"".concat(window.AAB_PROXY_URL,"?source=").concat(btoa(t)):t},P=function(){function t(t,r){this.slot=t,this.config=r,this.imgElement=new Image,this.link=document.createElement("a"),this.bannerWrapper=document.createElement("div")}return t.prototype.load=function(){var t=this;return new Promise((function(r,e){t.imgElement.onload=function(){return r()},t.imgElement.onerror=function(){return e()},t.imgElement.src=k(t.config.src)}))},t.prototype.render=function(){return x(this,void 0,void 0,(function(){return j(this,(function(t){return this.bannerWrapper.style.width=v(this.config.width),this.bannerWrapper.style.height=v(this.config.height),this.link.href=this.config.href,this.link.target=this.config.linkTarget,this.imgElement.alt=this.config.alt,this.imgElement.width=this.config.width,this.imgElement.height=this.config.height,this.link.append(this.imgElement),this.bannerWrapper.append(this.link),this.slot.append(this.bannerWrapper),[2]}))}))},t.prototype.destroy=function(){this.bannerWrapper.remove()},Object.defineProperty(t.prototype,"element",{get:function(){return this.bannerWrapper},enumerable:!1,configurable:!0}),t}();L({name:"banners/".concat(O[a.Img]),value:function(t,r){return new P(t,r)}})}();
