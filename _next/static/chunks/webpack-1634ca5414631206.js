!function(){"use strict";var e={},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}},i=!0;try{e[n].call(u.exports,u,u.exports,r),i=!1}finally{i&&delete t[n]}return u.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,u){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],u=e[l][2];for(var a=!0,c=0;c<n.length;c++)(!1&u||i>=u)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(a=!1,u<i&&(i=u));if(a){e.splice(l--,1);var f=o();void 0!==f&&(t=f)}}return t}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[n,o,u]}}(),r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))},r.u=function(e){return"static/chunks/"+e+"."+{651:"8aaebbbff3fb4a6d",741:"5c49c5ccb4a0a8f7"}[e]+".js"},r.miniCssF=function(e){return"static/css/"+{405:"31145f5b62655ee9",652:"31145f5b62655ee9",888:"0d8c83a7c304bc8c"}[e]+".css"},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={},t="_N_E:";r.l=function(n,o,u,i){if(e[n])e[n].push(o);else{var a,c;if(void 0!==u)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==t+u){a=s;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",t+u),a.src=r.tu(n)),e[n]=[o];var d=function(t,r){a.onerror=a.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;r.tt=function(){return void 0===e&&(e={createScriptURL:function(e){return e}},"undefined"!==typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("nextjs#bundler",e))),e}}(),r.tu=function(e){return r.tt().createScriptURL(e)},r.p="/react-scrollama-wrapper//_next/",function(){var e={272:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else if(272!=t){var u=new Promise((function(r,n){o=e[t]=[r,n]}));n.push(o[2]=u);var i=r.p+r.u(t),a=new Error;r.l(i,(function(n){if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var u=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}}),"chunk-"+t,t)}else e[t]=0},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,u,i=n[0],a=n[1],c=n[2],f=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var l=c(r)}for(t&&t(n);f<i.length;f++)u=i[f],r.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return r.O(l)},n=self.webpackChunk_N_E=self.webpackChunk_N_E||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();