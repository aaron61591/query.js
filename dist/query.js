"use strict";!function(){function a(a){var c=this;return c.selectors=a,c.els=[],c.promise=new b.Promise,function(){b.generator.init(c,a)||c._initEls(c,a)}(),c}a.prototype._initEls=function(a,c){var d=b.cache.get(c);d?a.els=d:(a.els=document.querySelectorAll.call(document,c),b.cache.set(c,a.els))};var b=window.$=function(b){return new a(b)};b.init=function(){b.method.setup(a)}}(),function(){function a(){this.state=1,this._thens=[]}a.prototype.resolve=function(){var a=this._thens.shift();this.state=1,a&&a()},a.prototype.then=function(a){this.state?(this.state=0,a()):this._thens.push(a)},window.$.Promise=a}(),function(){function a(){for(var a=d.length,b=[];a--;)b=b.concat(window.$.method[d[a]]);return b}function b(a,b){return"find"===a||"get"===a?!0:b.length||-1===e.indexOf(a)?1===b.length&&-1!==f.indexOf(a)?!0:"style"===a&&b&&1===b.length&&window.$.method.style.isSync(b[0])?!0:void 0:!0}function c(a,c){return function(){var d=this,e=arguments;return b(a,e)?c(d,e):(this.promise.then(function(){c(d,e)}),this)}}var d=["attribute","node","class","display","event","time","search","style"],e=["text","html","value","class"],f=["attr"];window.$.method={push:function(a){d.push(a)},setup:function(b){for(var d=a(),e=0;e<d.length;)b.prototype[d[e]]=c(d[e],d[e+=1]),++e},exec:function(a,b){for(var c=0;c<a.els.length;)b.call(a,a.els[c]),++c}}}(),function(){function a(a,b){for(var c;null!==(c=h.exec(b));)a.setAttribute(c[1],c[2])}function b(b){var c=f.exec(b),d=document.createElement(c[1].split(" ")[0]);return a(d,c[1]),d}function c(b){var c=g.exec(b),d=document.createElement(c[1].split(" ")[0]);return a(d,c[1]),d.innerHTML=c[2],d}function d(a){return!(f.test(a)||g.test(a))}function e(a,d){var e;return e=f.test(d)?b(d):c(d),a.els.push(e)}var f=/^<([^>]+)>$/,g=/^<([^>]+)>([\s\S]*)<\/[^>]+>$/,h=/([^=^\s]*)="([^"]*)"/g;window.$.generator={init:function(a,b){return d(b)?null:e(a,b)}}}(),function(){var a={};window.$.cache={get:function(b){return a[b]},set:function(b,c){a[b]=c},"delete":function(b){a[b]=null},clear:function(){a={}}}}(),function(){function a(a,b,c){return function(e,f){return"attr"!==c&&void 0!==f[0]||"attr"===c&&void 0!==f[1]?(d.exec(e,function(b){a(b,f[0],f[1])}),void e.promise.resolve()):b(e.els[0],f[0])}}function b(b){var c=this;return a(function(a,d){a[c.METHODS[b]]=d},function(a){return a[c.METHODS[b]]},b)}function c(){return a(function(a,b,c){a.setAttribute(b,c)},function(a,b){return a.getAttribute(b)},"attr")}var d=window.$.method,e={text:"innerText",html:"innerHTML",value:"value","class":"className"};d.attribute=function(){var a=[];for(var d in e)e.hasOwnProperty(d)&&(a.push(d),a.push(b(d)));return a.push("attr"),a.push(c()),a}()}(),function(){function a(a,b){d.exec(a,function(a){c(b[0]).test(a.className)||(a.className+=a.className?" "+b[0]:b[0])}),a.promise.resolve()}function b(a,b){d.exec(a,function(a){a.className=a.className.replace(c(b[0])," ").trim()}),a.promise.resolve()}function c(a){var b="^"+a+"$|^"+a+"\\s|\\s"+a+"\\s|\\s"+a+"$";return new RegExp(b)}var d=window.$.method;d["class"]=["addClass",a,"removeClass",b]}(),function(){function a(a,b){c.exec(a,function(a){a.style.display=b[0]||"block"}),a.promise.resolve()}function b(a){c.exec(a,function(a){a.style.display="none"}),a.promise.resolve()}var c=window.$.method;c.display=["show",a,"hide",b]}(),function(){function a(a,b){c.exec(a,function(a){a.addEventListener(b[0],b[1],b[2])}),a.promise.resolve()}function b(a,b){c.exec(a,function(a){a.removeEventListener(b[0],b[1],b[2])}),a.promise.resolve()}var c=window.$.method;c.event=["on",a,"off",b]}(),function(){function a(a,b){e.exec(a,function(a){a.appendChild(b[0].els[0])}),f["delete"](a.selectors),a.promise.resolve()}function b(a,b){a.els[0].insertBefore(b[0].els[0],document.querySelector(b[1])),f.clear(),a.promise.resolve()}function c(a){e.exec(a,function(a){a.innerHTML=""}),f.clear(),a.promise.resolve()}function d(a,b){e.exec(a,function(a){a.removeChild(b[0].els[0])}),f.clear(),a.promise.resolve()}var e=window.$.method,f=window.$.cache;e.node=["append",a,"empty",c,"insert",b,"remove",d]}(),function(){function a(a){return a.els}function b(a){return a.els[0]}window.$.method.search=["find",a,"get",b]}(),function(){function a(a,d){var h=d[0],i=d[1];return void 0!==i||void 0===i&&!f(h)?(g.exec(a,function(a){var d=e(h);d?b(a,d):c(a,h,i)}),void a.promise.resolve()):a.els[0].style[h]}function b(a,b){for(var c=0;c<b.length;)a.style[b[c]]=b[c+=1],++c}function c(a,b,c){return void 0===c&&f(b)?a.style[d(b)]:void(a.style[d(b)]=c)}function d(a){for(var b=a.split("-"),c=0,d=!0,e="";c<b.length;)b[c]&&(d?(e+=b[c],d=!1):e+=b[c][0].toUpperCase()+b[c].substr(1)),++c;return e}function e(a){if(-1!==a.indexOf(":")){for(var b,c=a.split(";"),e=c.length,f=[];e--;)c[e]&&(b=c[e].split(":"),f.push(d(b[0]).trim()),f.push(b[1].trim()));return f}return null}function f(a){return-1===a.indexOf(":")?!0:!1}var g=window.$.method;g.style=["style",a],g.style.isSync=f}(),function(){window.$.method.time=["delay",function(a,b){setTimeout(function(){a.promise.resolve()},b[0])}]}(),function(){window.$.init()}();