(()=>{"use strict";var n={919:(n,r,e)=>{e.d(r,{A:()=>s});var t=e(354),o=e.n(t),a=e(314),i=e.n(a)()(o());i.push([n.id,"*,\ndiv {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n}\n\n.board-1 > div {\n  display: flex;\n  gap: 1px;\n  padding: 1px;\n}\n\n.board-2 > div {\n  display: flex;\n  gap: 1px;\n  padding: 1px;\n}\n\n.board-1 > div > div {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n.board-2 > div > div {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n\n.empty {\n  border: 1px solid rgb(200, 200, 213);\n}\n\n.ship {\n  border: 2px solid blue;\n  background-color: #3b82f633;\n}\n\n.miss {\n  border: 1px solid rgb(200, 200, 213);\n  background-color: #fef08a;\n}\n\n.hit {\n  border: 1px solid rgb(200, 200, 213);\n  background-color: #f87171;\n}\n\n.game {\n  display: flex;\n  gap: 7rem;\n  margin-top: 6rem;\n  justify-content: center;\n}\n\n.empty:hover,\n.ship:hover {\n  background-color: #3b82f633;\n}\n","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"AAAA;;EAEE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;AACA;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;AACA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,oCAAoC;EACpC,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;EACpC,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;;EAEE,2BAA2B;AAC7B",sourcesContent:["*,\r\ndiv {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n}\r\n\r\n.board-1 > div {\r\n  display: flex;\r\n  gap: 1px;\r\n  padding: 1px;\r\n}\r\n\r\n.board-2 > div {\r\n  display: flex;\r\n  gap: 1px;\r\n  padding: 1px;\r\n}\r\n\r\n.board-1 > div > div {\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n}\r\n.board-2 > div > div {\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n}\r\n\r\n.empty {\r\n  border: 1px solid rgb(200, 200, 213);\r\n}\r\n\r\n.ship {\r\n  border: 2px solid blue;\r\n  background-color: #3b82f633;\r\n}\r\n\r\n.miss {\r\n  border: 1px solid rgb(200, 200, 213);\r\n  background-color: #fef08a;\r\n}\r\n\r\n.hit {\r\n  border: 1px solid rgb(200, 200, 213);\r\n  background-color: #f87171;\r\n}\r\n\r\n.game {\r\n  display: flex;\r\n  gap: 7rem;\r\n  margin-top: 6rem;\r\n  justify-content: center;\r\n}\r\n\r\n.empty:hover,\r\n.ship:hover {\r\n  background-color: #3b82f633;\r\n}\r\n"],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var d=n[s],c=t.base?d[0]+t.base:d[0],l=a[c]||0,A="".concat(c," ").concat(l);a[c]=l+1;var p=e(A),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)r[p].references++,r[p].updater(u);else{var f=o(u,t);t.byIndex=s,r.splice(s,0,{identifier:A,updater:f,references:1})}i.push(A)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var d=t(n,o),c=0;c<a.length;c++){var l=e(a[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=d}}},659:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0;const t=class{constructor(n,r=n){this.length=n,this.lives=r,this.coordinates=[]}hit(){return this.lives-=1,this.lives}isSunk(){return this.lives<=0}},o=class{constructor(){this.board=Array.from({length:10},(()=>Array(10).fill(0))),this.attacked_ship_cells=[];let n=new t(5),r=new t(4),e=new t(3);for(let r=0;r<5;r++)this.board[1][r]=n,n.coordinates.push([1,r]);for(let n=0;n<4;n++)this.board[2][n]=r,r.coordinates.push([2,n]);for(let n=0;n<3;n++)this.board[3][n]=e,e.coordinates.push([3,n])}receiveAttack(n,r){0==this.board[n][r]?this.board[n][r]=-1:(this.board[n][r].hit(),this.attacked_ship_cells.append([n,r]))}allSunk(){for(let n=0;n<10;n++)for(let r=0;r<10;r++)if(0!=this.board[n][r]&&-1!=this.board[n][r]&&0==this.board[n][r].isSunk())return!1;return!0}};let a=1;const i=class{constructor(){this.board=new o,this.id=a,a++}};function s(n,r,e,t){let o=r.board.board;if(0==o[e][t])n.classList.add("empty");else if(-1==o[e][t])n.classList.add("miss");else{if(1==o[e][t].isSunk())return n.classList.add("destroy"),n;let a=!1,i=r.board.attacked_ship_cells;for(let n=0;n<i.length;n++)if(i[n][0]==e&&i[n][1]==t){a=!0;break}a?n.classList.add("hit"):n.classList.add("ship")}return console.log("new cell",o[e][t]),n}function d(n){let r=n.id;console.log(r);let e,t=n.board.board;console.log(t),console.log(n.board.attacked_ship_cells),e=1==n.id?document.querySelector(".board-1"):document.querySelector(".board-2");for(let r=0;r<10;r++){let t=document.createElement("div");for(let e=0;e<10;e++){let o=document.createElement("div");o.id=`${r} ${e}`,o=s(o,n,r,e),t.appendChild(o)}console.log(e),e.appendChild(t)}}var c=e(72),l=e.n(c),A=e(825),p=e.n(A),u=e(659),f=e.n(u),h=e(56),b=e.n(h),v=e(540),m=e.n(v),g=e(113),C=e.n(g),y=e(919),E={};E.styleTagTransform=C(),E.setAttributes=b(),E.insert=f().bind(null,"head"),E.domAPI=p(),E.insertStyleElement=m(),l()(y.A,E),y.A&&y.A.locals&&y.A.locals;let x=new i;d(x);let B=new i;console.log(x.board.board),d(B)})();
//# sourceMappingURL=main.js.map