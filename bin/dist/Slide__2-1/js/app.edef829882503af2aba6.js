webpackJsonp([1],{"3UBY":function(e,n){},G8Cn:function(e,n,t){var i={"./0_main/Main.vue":"HYMW","./1_flow/Slide__1-1.vue":"rqyE","./2_flow/Slide__2-1.vue":"eXy0"};function a(e){return t(r(e))}function r(e){var n=i[e];if(!(n+1))throw new Error("Cannot find module '"+e+"'.");return n}a.keys=function(){return Object.keys(i)},a.resolve=r,e.exports=a,a.id="G8Cn"},HYMW:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("h4",[this._v(this._s(this.msg))])])},staticRenderFns:[]},a=t("VU/8")({name:"main-slide",data:function(){return{msg:"Main Slide"}}},i,!1,null,null,null);n.default=a.exports},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("7+uW"),a=(t("/ocq"),{name:"NavBar",data:function(){return{msg:"NavBar",pages:[]}},methods:{navigateToHome:function(){this.navigateTo("home")},navigateTo:function(e){console.log("navigate to:",e)}}}),r={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"nav-bar"}},[t("h4",[e._v(e._s(e.msg))]),e._v(" "),t("p",{on:{click:e.navigateToHome}},[e._v("Home")]),e._v(" "),t("div",{staticClass:"pages-list"},e._l(e.pages,function(n,i){return t("a",{key:i,on:{click:function(t){e.navigateTo(n.path)}}},[e._v("\n     "+e._s(n.name)+"\n    ")])})),e._v(" "),t("hr")])},staticRenderFns:[]};var s={BuildPage:function(){return new Promise(function(e){e()}).then(t.bind(null,"eXy0"))},NavBar:t("VU/8")(a,r,!1,function(e){t("u/Ty")},"data-v-3abacfe4",null).exports};i.a.config.productionTip=!0,new i.a({el:"#app",router:!1,components:s,template:"<div class='container'>\n  <build-page/>\n  <nav-bar/>\n</div>"})},eXy0:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"app"},[n("h4",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var a=t("VU/8")({name:"Slide__2-1",data:function(){return{msg:"Flow 2, Slide 1"}}},i,!1,function(e){t("wiou")},null,null);n.default=a.exports},rqyE:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"app"},[n("h4",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var a=t("VU/8")({name:"Slide__1-1",data:function(){return{msg:"Flow 1, Slide 1"}}},i,!1,function(e){t("3UBY")},null,null);n.default=a.exports},"u/Ty":function(e,n){},wiou:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.edef829882503af2aba6.js.map