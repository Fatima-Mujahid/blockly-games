// Automatically generated file.  Do not edit!
function n(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:n(a)}}var q="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function r(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var t=r(this);function v(a,b){if(b)a:{var c=t;a=a.split(".");for(var f=0;f<a.length-1;f++){var h=a[f];if(!(h in c))break a;c=c[h]}a=a[a.length-1];f=c[a];b=b(f);b!=f&&null!=b&&q(c,a,{configurable:!0,writable:!0,value:b})}}
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});v("Array.prototype.includes",function(a){return a?a:function(b,c){var f=this;f instanceof String&&(f=String(f));var h=f.length;c=c||0;for(0>c&&(c=Math.max(c+h,0));c<h;c++){var k=f[c];if(k===b||Object.is(k,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(b,c||0)}});
v("Symbol",function(a){function b(k){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(f+(k||"")+"_"+h++,k)}function c(k,m){this.s=k;q(this,"description",{configurable:!0,writable:!0,value:m})}if(a)return a;c.prototype.toString=function(){return this.s};var f="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",h=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var f=t[b[c]];"function"===typeof f&&"function"!=typeof f.prototype[a]&&q(f.prototype,a,{configurable:!0,writable:!0,value:function(){return w(n(this))}})}return a});function w(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function x(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
v("WeakMap",function(a){function b(d){this.m=(e+=Math.random()+1).toString();if(d){d=p(d);for(var g;!(g=d.next()).done;)g=g.value,this.set(g[0],g[1])}}function c(){}function f(d){var g=typeof d;return"object"===g&&null!==d||"function"===g}function h(d){if(!x(d,m)){var g=new c;q(d,m,{value:g})}}function k(d){var g=Object[d];g&&(Object[d]=function(l){if(l instanceof c)return l;Object.isExtensible(l)&&h(l);return g(l)})}if(function(){if(!a||!Object.seal)return!1;try{var d=Object.seal({}),g=Object.seal({}),
l=new a([[d,2],[g,3]]);if(2!=l.get(d)||3!=l.get(g))return!1;l.delete(d);l.set(g,4);return!l.has(d)&&4==l.get(g)}catch(u){return!1}}())return a;var m="$jscomp_hidden_"+Math.random();k("freeze");k("preventExtensions");k("seal");var e=0;b.prototype.set=function(d,g){if(!f(d))throw Error("Invalid WeakMap key");h(d);if(!x(d,m))throw Error("WeakMap key fail: "+d);d[m][this.m]=g;return this};b.prototype.get=function(d){return f(d)&&x(d,m)?d[m][this.m]:void 0};b.prototype.has=function(d){return f(d)&&x(d,
m)&&x(d[m],this.m)};b.prototype.delete=function(d){return f(d)&&x(d,m)&&x(d[m],this.m)?delete d[m][this.m]:!1};return b});
v("Map",function(a){function b(){var e={};return e.i=e.next=e.head=e}function c(e,d){var g=e.h;return w(function(){if(g){for(;g.head!=e.h;)g=g.i;for(;g.next!=g.head;)return g=g.next,{done:!1,value:d(g)};g=null}return{done:!0,value:void 0}})}function f(e,d){var g=d&&typeof d;"object"==g||"function"==g?k.has(d)?g=k.get(d):(g=""+ ++m,k.set(d,g)):g="p_"+d;var l=e.j[g];if(l&&x(e.j,g))for(e=0;e<l.length;e++){var u=l[e];if(d!==d&&u.key!==u.key||d===u.key)return{id:g,list:l,index:e,g:u}}return{id:g,list:l,
index:-1,g:void 0}}function h(e){this.j={};this.h=b();this.size=0;if(e){e=p(e);for(var d;!(d=e.next()).done;)d=d.value,this.set(d[0],d[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var e=Object.seal({x:4}),d=new a(p([[e,"s"]]));if("s"!=d.get(e)||1!=d.size||d.get({x:4})||d.set({x:4},"t")!=d||2!=d.size)return!1;var g=d.entries(),l=g.next();if(l.done||l.value[0]!=e||"s"!=l.value[1])return!1;l=g.next();return l.done||4!=l.value[0].x||
"t"!=l.value[1]||!g.next().done?!1:!0}catch(u){return!1}}())return a;var k=new WeakMap;h.prototype.set=function(e,d){e=0===e?0:e;var g=f(this,e);g.list||(g.list=this.j[g.id]=[]);g.g?g.g.value=d:(g.g={next:this.h,i:this.h.i,head:this.h,key:e,value:d},g.list.push(g.g),this.h.i.next=g.g,this.h.i=g.g,this.size++);return this};h.prototype.delete=function(e){e=f(this,e);return e.g&&e.list?(e.list.splice(e.index,1),e.list.length||delete this.j[e.id],e.g.i.next=e.g.next,e.g.next.i=e.g.i,e.g.head=null,this.size--,
!0):!1};h.prototype.clear=function(){this.j={};this.h=this.h.i=b();this.size=0};h.prototype.has=function(e){return!!f(this,e).g};h.prototype.get=function(e){return(e=f(this,e).g)&&e.value};h.prototype.entries=function(){return c(this,function(e){return[e.key,e.value]})};h.prototype.keys=function(){return c(this,function(e){return e.key})};h.prototype.values=function(){return c(this,function(e){return e.value})};h.prototype.forEach=function(e,d){for(var g=this.entries(),l;!(l=g.next()).done;)l=l.value,
e.call(d,l[1],l[0],this)};h.prototype[Symbol.iterator]=h.prototype.entries;var m=0;return h});
var y=function(){return"object"===typeof self?self:"object"===typeof window?window:"object"===typeof global?global:this}();
var z={};y.Blockly||(y.Blockly={});y.Blockly.Msg||(y.Blockly.Msg=z);
var A={am:"\u12a0\u121b\u122d\u129b",ar:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",be:"\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0456","be-tarask":"Tara\u0161kievica",bg:"\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",bn:"\u09ac\u09be\u0982\u09b2\u09be",br:"Brezhoneg",ca:"Catal\u00e0",cs:"\u010cesky",da:"Dansk",de:"Deutsch",el:"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",en:"English",eo:"Esperanto",es:"Espa\u00f1ol",eu:"Euskara",fa:"\u0641\u0627\u0631\u0633\u06cc",
fi:"Suomi",fo:"F\u00f8royskt",fr:"Fran\u00e7ais",gl:"Galego",ha:"Hausa",he:"\u05e2\u05d1\u05e8\u05d9\u05ea",hi:"\u0939\u093f\u0928\u094d\u0926\u0940",hr:"Hrvatski",hu:"Magyar",hy:"\u0570\u0561\u0575\u0565\u0580\u0567\u0576",ia:"Interlingua",id:"Bahasa Indonesia",ig:"As\u1ee5s\u1ee5 Igbo",is:"\u00cdslenska",it:"Italiano",ja:"\u65e5\u672c\u8a9e",kab:"Taqbaylit",kn:"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1",ko:"\ud55c\uad6d\uc5b4",lt:"Lietuvi\u0173",lv:"Latvie\u0161u",ms:"Bahasa Melayu",my:"\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",
nb:"Norsk (bokm\u00e5l)",nl:"Nederlands, Vlaams",pl:"Polski",pms:"Piemont\u00e8is",pt:"Portugu\u00eas","pt-br":"Portugu\u00eas Brasileiro",ro:"Rom\u00e2n\u0103",ru:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",sc:"Sardu",sk:"Sloven\u010dina",sl:"Sloven\u0161\u010dina",sq:"Shqip",sr:"\u0421\u0440\u043f\u0441\u043a\u0438","sr-latn":"Srpski",sv:"Svenska",th:"\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",ti:"\u1275\u130d\u122d\u129b",tr:"T\u00fcrk\u00e7e",uk:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
ur:"\u0627\u064f\u0631\u062f\u064f\u0648\u202c",vi:"Ti\u1ebfng Vi\u1ec7t",yo:"\u00c8d\u00e8 Yor\u00f9b\u00e1","zh-hans":"\u7b80\u4f53\u4e2d\u6587","zh-hant":"\u6b63\u9ad4\u4e2d\u6587"},B=window.BlocklyGamesLang,C=window.BlocklyGamesLanguages,D=["ar","fa","he","ur"].includes(B),E=/\.html$/.test(window.location.pathname),F=document.getElementById.bind(document);
function G(a){try{if(a.lineno||a.colno){var b=Date.now();if(!(G.o+1E4>b)){G.o=b;var c=new XMLHttpRequest,f="error="+encodeURIComponent(a.error&&a.error.stack||a.message+" "+a.filename+" "+a.lineno+":"+a.colno)+"&amp;url="+encodeURIComponent(window.location);c.open("POST","/errorReporter");c.setRequestHeader("Content-Type","application/x-www-form-urlencoded");c.send(f);console.log("Error reported.")}}}catch(h){console.log(a.error)}}G.o=0;E||window.addEventListener("error",G);
function H(a,b){return(a=window.location.search.match(new RegExp("[?&]"+a+"=([^&]+)")))?decodeURIComponent(a[1].replace(/\+/g,"%20")):b}H("level","NaN");
function I(){var a=J("Gallery",!1);document.title=J("Games.name",!1)+(a&&" : ")+a;document.dir=D?"rtl":"ltr";document.head.parentElement.setAttribute("lang",B);if(a=F("languageMenu")){for(var b=[],c=p(C),f=c.next();!f.done;f=c.next())f=f.value,b.push([A[f],f]);b.sort(function(h,k){return h[0]>k[0]?1:h[0]<k[0]?-1:0});a.options.length=0;b=p(b);for(c=b.next();!c.done;c=b.next())f=p(c.value),c=f.next().value,f=f.next().value,c=new Option(c,f),f===B&&(c.selected=!0),a.options.add(c);1>=a.options.length&&
(a.style.display="none")}for(a=1;10>=a;a++)b=F("level"+a),c=!!K(a),b&&c&&(b.className+=" level_done");(a=document.querySelector('meta[name="viewport"]'))&&725>screen.availWidth&&a.setAttribute("content","width=725, initial-scale=.35, user-scalable=no");E||setTimeout(L,1)}
function M(){var a=F("languageMenu");a=encodeURIComponent(a.options[a.selectedIndex].value);var b=window.location.search;b=1>=b.length?"?lang="+a:/[?&]lang=[^&]*/.test(b)?b.replace(/([?&]lang=)[^&]*/,"$1"+a):b.replace(/\?/,"?lang="+a+"&");window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+b}function K(a){var b=N;try{var c=window.localStorage[b+a]}catch(f){}return c}
function J(a,b){a=window.BlocklyGamesMsg[a];void 0===a&&(a="[Unknown message: ${name}]");return b?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):a}
function L(){function a(c){(a.q=a.q||[]).push(arguments)}window.GoogleAnalyticsObject="GoogleAnalyticsFunction";window.GoogleAnalyticsFunction=a;a.l=1*new Date;var b=document.createElement("script");b.async=1;b.src="//www.google-analytics.com/analytics.js";document.head.appendChild(b);a("create","UA-50448074-1","auto");a("send","pageview")};
var O=new Map;function P(a,b,c,f,h){h=void 0===h?"POST":h;O.has(a)&&O.get(a).abort();var k=new XMLHttpRequest;O.set(a,k);k.onload=function(){if(200===this.status)c&&c.call(k);else if(f)f.call(k);else{var m=J("Games.httpRequestError",!1)+"\nXHR status: "+k.status;if("object"===typeof BlocklyDialogs){var e=F("linkButton");BlocklyDialogs.A(e,m)}else alert(m)}O.delete(a)};k.open(h,a);"POST"===h&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(b)};
var N="gallery",Q,R=!0,S=!1,T="";function U(){if(!S&&R){F("loading").style.visibility="visible";var a="/gallery-api/view?app="+encodeURIComponent(Q);T&&(a+="&cursor="+encodeURIComponent(T));P(a,"",V,function(){console.warn("Load returned status "+this.status);R=S=!1;401===this.status&&(location="/admin")},"GET");S=!0}}function V(){S=!1;F("loading").style.visibility="hidden";var a=JSON.parse(this.responseText);a.more||(R=!1);T=a.cursor;a.data.forEach(W)}
function W(a){var b=document.createElement("div"),c=a.app,f=a.uuid,h=a.key;b.innerHTML='\n<div class="galleryThumb">\n  '+(h?'<input type="checkbox" id="publish-'+h+'" '+(a["public"]?" checked ":"")+' onchange="publish(this)"></input>':"")+'\n  <a href="/'+c+"?level=10#"+f+'"><img src="'+a.thumb+'"></a>\n</div>\n<div class="galleryTitle">\n  <a href="/'+c+"?level=10#"+f+'">'+a.title+"</a>\n</div>\n";F("gallery").appendChild(b)}
function X(){F("loading").getBoundingClientRect().top<=(window.innerHeight||document.documentElement.clientHeight)&&U()}
(function(a){function b(){window.BlocklyGamesMsg?(window.BlocklyMsg&&(z=window.BlocklyMsg),a()):setTimeout(b,99)}window.addEventListener("load",b)})(function(){Q=H("app","");var a={admin:"",turtle:J("Games.turtle",!0)+" : ",movie:J("Games.movie",!0)+" : ",music:J("Games.music",!0)+" : "}[Q];if(void 0===a)throw Error("Unknown app: "+Q);"admin"===Q&&(document.body.className="admin");var b=document.body,c=document.body.innerHTML,f={lang:B,u:E};a+=J("Gallery",!0);a='\n<span id="title">\n  <a href="'+
(f.u?"index.html":"./")+"?lang="+f.lang+'">'+J("Games.name",!0)+"</a> : "+a+"\n</span>\n";if(f.level){for(var h=" &nbsp ",k=1;k<=f.v;k++){var m="?lang="+f.lang+"&level="+k;h+=" ";h=k===f.level?h+('<span class="level_number level_done" id="level'+k+'">'+k+"</span>"):k===f.v?h+('<a class="level_number" id="level'+k+'" href="'+m+'">'+k+"</a>"):h+('<a class="level_dot" id="level'+k+'" href="'+m+'"></a>')}f=h}else f="";b.innerHTML=c+('\n\n<table width="100%" style="display:none;">\n  <tr>\n    <td>\n      <h1>\n        '+
(a+"\n        "+f+'\n      </h1>\n    </td>\n    <td id="header_cta" class="farSide">\n      <select id="languageMenu"></select>\n      \n      \n      \n    </td>\n  </tr>\n</table>\n\n<div id="gallery">\n</div>\n<div id="loading">\n  <img src="common/loading.gif">\n</div>\n'));U();I();F("languageMenu").addEventListener("change",M,!0);setInterval(X,200)});window.publish=function(a){var b=Number(a.checked);a="key="+encodeURIComponent(a.id.substring(8))+"&public="+b;P("/gallery-api/admin",a)};
