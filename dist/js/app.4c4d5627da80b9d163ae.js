webpackJsonp([1],{NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("7+uW"),i={name:"NavBar",data:function(){return{msg:"NavBar",pages:[]}},methods:{navigateToHome:function(){this.navigateTo("home")},navigateTo:function(n){console.log("navigate to:",n)}}},s={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("hr"),n._v(" "),e("h4",[n._v(n._s(n.msg))]),n._v(" "),e("p",{on:{click:n.navigateToHome}},[n._v("Home")]),n._v(" "),e("ul",{staticClass:"pages-list"},n._l(n.pages,function(t,a){return e("li",{key:a,on:{click:function(e){n.navigateTo(t.path)}}},[n._v("\n     "+n._s(t.name)+"      \n    ")])})),n._v(" "),e("hr")])},staticRenderFns:[]};var o={name:"Slide__1",components:{NavBar:e("VU/8")(i,s,!1,function(n){e("YGxz")},"data-v-220bca0a",null).exports},data:function(){return{msg:"Welcome to Your Vue.js App"}}},r={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"app"},[t("nav-bar"),this._v(" "),t("p",[this._v("slide-1")]),this._v(" "),t("h4",[this._v(this._s(this.msg))])],1)},staticRenderFns:[]};var c=e("VU/8")(o,r,!1,function(n){e("z3yQ")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:c},template:"<App/>"})},YGxz:function(n,t){},z3yQ:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.4c4d5627da80b9d163ae.js.map