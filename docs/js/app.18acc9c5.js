(function(t){function e(e){for(var r,a,s=e[0],u=e[1],l=e[2],p=0,d=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=n("0284"),o=n.n(i),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TissuePlayer",{attrs:{msg:"無限ティッシュ"}})],1)},s=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tissue-player"},[n("div",{staticClass:"window-start"},[n("h1",[t._v(t._s(t.msg))]),n("p",[t._v("思う存分ティッシュを引き抜こう！！")]),n("button",{class:{disable:t.isDisplayPlayer},on:{click:t.onStart}},[t._v("START")]),n("p",{class:{disable:t.isDisplayPlayer}},[n("a",{attrs:{href:"https://dorasu-tech.dorasu.com/"}},[t._v("Dorasu Tech")]),n("br"),n("a",{attrs:{href:"https://www.photolibrary.jp/"}},[t._v("フォトライブラリー photolibrary")]),n("br"),n("a",{attrs:{href:"https://taira-komori.jpn.org/"}},[t._v("フリー効果音・無料効果音素材")]),n("br")])]),n("div",{staticClass:"window-player",class:{enable:t.isDisplayPlayer}},[n("video",{attrs:{src:"4621190_Trim.mp4","webkit-playsinline":"",playsinline:"",muted:"",autoplay:""},domProps:{muted:!0},on:{mousedown:function(e){return e.preventDefault(),t.onClick(e)},touchstart:function(e){return e.preventDefault(),t.onClick(e)}}})])])},l=[],c={name:"TissuePlayer",props:{msg:String},data:function(){return{audio:null,isDisplayPlayer:!1,clickCounter:0}},created:function(){this.initAudio()},methods:{initAudio:function(){this.audio=new Audio,this.audio.preload="auto",this.audio.src="tissue.mp3"},onStart:function(){console.log("onStart"),this.isDisplayPlayer=!0,this.audio.load()},onClick:function(t){console.log("onClick"),t.target.currentTime=0,t.target.play(),this.audio.currentTime=0,this.audio.play(),this.clickCounter++,this.$ga.event("TissuePlayer","click","テッシュクリック",this.clickCounter)}}},p=c,d=(n("b15d"),n("2877")),f=Object(d["a"])(p,u,l,!1,null,"90d5b346",null),h=f.exports,y={name:"App",components:{TissuePlayer:h},created:function(){this.$ga.page("/")}},v=y,b=(n("034f"),Object(d["a"])(v,a,s,!1,null,null,null)),m=b.exports;r["a"].config.productionTip=!1,r["a"].use(o.a,{id:"UA-158678917-2"}),new r["a"]({render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,e,n){},b15d:function(t,e,n){"use strict";var r=n("c68a"),i=n.n(r);i.a},c68a:function(t,e,n){}});
//# sourceMappingURL=app.18acc9c5.js.map