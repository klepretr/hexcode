(function(e){function t(t){for(var a,o,i=t[0],u=t[1],s=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},c=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/hexcode/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00b1":function(e,t,n){},"023a":function(e,t,n){"use strict";n("35df")},"06f0":function(e,t,n){},3068:function(e,t,n){},3204:function(e,t,n){"use strict";n("c2b7")},"35df":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(e,t,n,r,c,o){var i=Object(a["j"])("banner"),u=Object(a["j"])("hex-input");return Object(a["g"])(),Object(a["c"])(a["a"],null,[Object(a["f"])(i),Object(a["f"])(u)],64)}var c=Object(a["n"])("data-v-275b1733");Object(a["i"])("data-v-275b1733");var o={class:"header"},i=Object(a["d"])('<span class="header_inner" data-v-275b1733><a href="#" data-v-275b1733><span class="header_logo" data-v-275b1733><div class="center" data-v-275b1733><div class="hexagon" data-v-275b1733></div></div><div data-v-275b1733>HexColor</div></span></a><span class="header_links" data-v-275b1733><a href="https://github.com/klepretr/hexcode" data-v-275b1733><i class="fab fa-2x fa-github" data-v-275b1733></i></a></span></span>',1);Object(a["h"])();var u=c((function(e,t,n,r,c,u){return Object(a["g"])(),Object(a["c"])("header",o,[i])})),s={};n("d6fc");s.render=u,s.__scopeId="data-v-275b1733";var l=s,d=Object(a["n"])("data-v-7e5c7497");Object(a["i"])("data-v-7e5c7497");var f={class:"input_outer"},b=Object(a["f"])("h3",null,"A quick text comparison tool",-1),h=Object(a["f"])("p",null,"HexColor use a hash function to generate the color associated with the text entered in the input.",-1),p={class:"input_background"},v=Object(a["f"])("a",{class:"input_add"},[Object(a["f"])("i",{class:"fas fa-2x fa-plus-circle"})],-1),j=Object(a["f"])("p",null,[Object(a["e"])("No data leaves your browser. "),Object(a["f"])("br"),Object(a["e"])("All saved data is stored in the memory of your browser."),Object(a["f"])("br"),Object(a["f"])("br")],-1);Object(a["h"])();var O=d((function(e,t,n,r,c,o){var i=Object(a["j"])("hex-viewer"),u=Object(a["j"])("made-with");return Object(a["g"])(),Object(a["c"])("div",f,[b,h,Object(a["f"])("div",p,[v,Object(a["f"])(i,{hexhash:o.hexhash,class:{visible:c.dataProvided}},null,8,["hexhash","class"]),Object(a["m"])(Object(a["f"])("input",{placeholder:"Enter or Paste a text here...","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.content=e}),onFocus:t[2]||(t[2]=function(){return o.onFocus.apply(o,arguments)}),onFocusout:t[3]||(t[3]=function(){return o.onFocusOut.apply(o,arguments)}),class:[{input_focus:c.dataProvided},"input"],autocomplete:"off",autofocus:"off",type:"text"},null,34),[[a["l"],c.content]])]),Object(a["f"])("footer",null,[j,Object(a["f"])(u,{author:"Kévin Leprêtre",link:"https://github.com/klepretr"})])])})),x=(n("fb6a"),n("d3b7"),n("25f0"),n("498a"),Object(a["n"])("data-v-0ac123ca")),m=x((function(e,t,n,r,c,o){return Object(a["g"])(),Object(a["c"])("div",{class:"viewer_outer",style:{backgroundColor:"#"+n.hexhash}},null,4)})),g={props:{hexhash:String},name:"HexViewer",methods:{}};n("c553");g.render=m,g.__scopeId="data-v-0ac123ca";var y=g,_=(n("9911"),n("ae0d")),w=n.n(_),k=Object(a["e"])("Made with "),P=Object(a["f"])("img",{class:"love",alt:"love",src:w.a},null,-1),F=Object(a["e"])(" by ");function S(e,t,n,r,c,o){return Object(a["g"])(),Object(a["c"])("p",null,[k,P,F,Object(a["f"])("a",{href:n.link,class:"author"},Object(a["k"])(n.author),9,["href"])])}var I={props:{author:String,link:String}};n("63f9");I.render=S;var M,H=I,A=n("0fe3"),C=n.n(A),V={name:"HexInput",data:function(){return{dataProvided:!1,content:"",hash:C.a.h32(0),timer:null}},computed:{hexhash:function(){return this.content.trim()?this.hash.update(this.content).digest().toString(16).slice(0,-2):"FFFFFF"}},methods:{onFocus:function(){var e=this;this.dataProvided=!0,this.timer=setInterval((function(){M!==e.hexhash&&(document.title="hc | #"+e.hexhash,M=e.hexhash)}),2e3)},onFocusOut:function(){this.content.trim()||(this.dataProvided=!1,clearInterval(this.timer),document.title="hexcolor")}},components:{HexViewer:y,MadeWith:H}};n("023a");V.render=O,V.__scopeId="data-v-7e5c7497";var J=V,T={name:"App",components:{HexInput:J,Banner:l}};n("64be"),n("3204");T.render=r;var q=T,B=Object(a["b"])(q);B.directive("visible",{beforeMount:function(e,t){e.style.visibility=t.value?"visible":"hidden"}}),B.mount("#app")},"63f9":function(e,t,n){"use strict";n("c62d")},"64be":function(e,t,n){"use strict";n("3068")},ae0d:function(e,t,n){e.exports=n.p+"img/pixel-heart.96e1f1c8.png"},c2b7:function(e,t,n){},c553:function(e,t,n){"use strict";n("06f0")},c62d:function(e,t,n){},d6fc:function(e,t,n){"use strict";n("00b1")}});
//# sourceMappingURL=app.963eed84.js.map