(function(){"use strict";var n={2818:function(n,t,o){var r=o(9242),e=o(3396);const u=(0,e.Uk)("Accueil"),c=(0,e.Uk)(" | "),i=(0,e.Uk)("About us"),a=(0,e.Uk)(" | "),l=(0,e.Uk)("Product 1"),f=(0,e.Uk)(" | "),s=(0,e.Uk)("Product 2"),p=(0,e.Uk)(" | ");function d(n,t,o,r,d,m){const h=(0,e.up)("router-link"),v=(0,e.up)("router-Link"),w=(0,e.up)("routerView");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("nav",null,[(0,e.Wm)(h,{to:"/"},{default:(0,e.w5)((()=>[u])),_:1}),c,(0,e.Wm)(h,{to:"/about"},{default:(0,e.w5)((()=>[i])),_:1}),a,(0,e.Wm)(h,{to:{name:"Product",params:{nom:"Skate"}}},{default:(0,e.w5)((()=>[l])),_:1}),f,(0,e.Wm)(v,{to:{name:"Product",params:{nom:"Gateau"}}},{default:(0,e.w5)((()=>[s])),_:1}),p,(0,e._)("button",{onClick:t[0]||(t[0]=n=>m.showProduct("Roller"))},"Produit 3")]),(0,e.Wm)(w)],64)}var m={name:"App",methods:{showProduct(n){this.$router.push({name:"Product",params:{nom:n}})}}},h=o(89);const v=(0,h.Z)(m,[["render",d]]);var w=v,b=o(678);const k=(0,e._)("h1",null,"Bienvenue chez nous",-1),g=(0,e._)("div",null,null,-1);function P(n,t){return(0,e.wg)(),(0,e.iD)(e.HY,null,[k,g],64)}const _={},O=(0,h.Z)(_,[["render",P]]);var y=O;const U=(0,e._)("h1",null,"About us",-1),A=(0,e._)("div",null,null,-1);function j(n,t){return(0,e.wg)(),(0,e.iD)(e.HY,null,[U,A],64)}const x={},D=(0,h.Z)(x,[["render",j]]);var H=D,W=o(7139);const Z=(0,e._)("h1",null," Product ",-1);function Y(n,t,o,r,u,c){return(0,e.wg)(),(0,e.iD)(e.HY,null,[Z,(0,e._)("p",null,(0,W.zw)(o.nom),1)],64)}var z={name:"Product-v",props:["nom"]};const C=(0,h.Z)(z,[["render",Y]]);var E=C;const F={style:{"font-size":"x-large"}};function M(n,t){return(0,e.wg)(),(0,e.iD)("h1",F,"Error 404")}const N={},T=(0,h.Z)(N,[["render",M]]);var B=T;const G=[{name:"Home",path:"/",component:y,meta:{title:"Accueil"}},{name:"About",path:"/about",component:H,meta:{title:"About us"}},{name:"Product",path:"/product/:nom",component:E,props:!0,meta:{title:"Product"}},{name:"NotFound",path:"/:pathMatch(.*)",component:B,meta:{title:"NotFound"}}],L=(0,b.p7)({history:(0,b.PO)(),routes:G});L.afterEach(((n,t)=>{console.log(t,n),document.title=n.meta.title}));var R=L;(0,r.ri)(w).use(R).mount("#app")}},t={};function o(r){var e=t[r];if(void 0!==e)return e.exports;var u=t[r]={exports:{}};return n[r](u,u.exports,o),u.exports}o.m=n,function(){var n=[];o.O=function(t,r,e,u){if(!r){var c=1/0;for(f=0;f<n.length;f++){r=n[f][0],e=n[f][1],u=n[f][2];for(var i=!0,a=0;a<r.length;a++)(!1&u||c>=u)&&Object.keys(o.O).every((function(n){return o.O[n](r[a])}))?r.splice(a--,1):(i=!1,u<c&&(c=u));if(i){n.splice(f--,1);var l=e();void 0!==l&&(t=l)}}return t}u=u||0;for(var f=n.length;f>0&&n[f-1][2]>u;f--)n[f]=n[f-1];n[f]=[r,e,u]}}(),function(){o.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(t,{a:t}),t}}(),function(){o.d=function(n,t){for(var r in t)o.o(t,r)&&!o.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};o.O.j=function(t){return 0===n[t]};var t=function(t,r){var e,u,c=r[0],i=r[1],a=r[2],l=0;if(c.some((function(t){return 0!==n[t]}))){for(e in i)o.o(i,e)&&(o.m[e]=i[e]);if(a)var f=a(o)}for(t&&t(r);l<c.length;l++)u=c[l],o.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return o.O(f)},r=self["webpackChunkrouter"]=self["webpackChunkrouter"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(2818)}));r=o.O(r)})();
//# sourceMappingURL=app.139e41e1.js.map