webpackJsonp([1],{"+phT":function(t,e){},"64E7":function(t,e,i){t.exports=i.p+"static/img/overview.9d26362.png"},FA0g:function(t,e){},G4qV:function(t,e){},KAGa:function(t,e){},Lo6X:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a=i("zL8q"),n=i.n(a),l=(i("tvR6"),{render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{attrs:{id:"footer"}},[s("div",{staticClass:"top"},[s("div",{staticClass:"left top-item"},[s("h2",[t._v("Information")]),t._v(" "),s("ul",[s("li",[t._v("DaRL Lab")]),t._v(" "),s("li",[t._v("Informatics of YingWu Computing School")]),t._v(" "),s("li",[t._v("New Jersey Institute of Technology")])])]),t._v(" "),s("div",{staticClass:"center top-item"},[s("h2",[t._v("Related Links")]),t._v(" "),s("ul",[s("li",[s("a",{staticClass:"Link1",attrs:{href:"https://www.njit.edu/"}},[t._v("NJIT official website")])]),t._v(" "),s("li",[s("a",{staticClass:"Link2",attrs:{href:"https://web.njit.edu/~hw32/"}},[t._v("Prof.Hua Wei")])]),t._v(" "),s("li",[s("a",{staticClass:"Link3",attrs:{href:"https://github.com/derekmei233/LibSignalSpare/tree/dev_pytorch"}},[t._v("GitHub of LibSignalSpare")])])])]),t._v(" "),s("div",{staticClass:"right top-item"},[s("h2",[t._v("Contact Us")]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[t._v("\n          Emial：\n          "),s("a",{staticClass:"weiboLink"},[t._v("danielsmithdlc@163.com")])]),t._v(" "),s("li",[t._v("Address: Uni Heights, Newark, NJ 07102 USA\n\n        ")])])]),t._v(" "),s("div",{staticClass:"WeChat"},[s("img",{attrs:{src:i("dL/P"),width:"130",alt:""}})])]),t._v(" "),s("div",{staticClass:"bottom"},[t._v("\n    Copyright© 2022 - 2023 | Author\n    "),s("a",{staticClass:"authorLink",attrs:{href:"xxx"}},[t._v("Longchao Da")]),t._v(" | All Rights Reserved | Power by Vue\n    "),t._v(" "),s("a",{staticClass:"vueLink",attrs:{href:"javascript:;"}})])])}]});var r=i("VU/8")({name:"footer-comp"},l,!1,function(t){i("jhaP")},"data-v-5f69a0d5",null).exports,o={data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[i("el-menu-item",{attrs:{index:"1"}},[i("router-link",{attrs:{id:"Home",to:"/"}},[i("i",{staticClass:"el-icon-menu",staticStyle:{"font-size":"25px"}}),i("i",{staticStyle:{"font-size":"25px"}},[i("b",[t._v("LibSignal")])])])],1),t._v(" "),i("el-menu-item",{attrs:{index:"2"}},[i("router-link",{attrs:{id:"Directions",to:"/Directions"}},[i("i",{staticClass:"el-icon-position",staticStyle:{"font-size":"25px"}}),t._v("Get Started\n    ")])],1),t._v(" "),i("el-menu-item",{attrs:{index:"3"}},[i("i",{staticClass:"el-icon-star-off",staticStyle:{"font-size":"25px"}}),t._v(" "),i("a",{staticClass:"Link1",attrs:{href:"http://114.132.64.138:8080/index.html",target:"_blank"}},[t._v("Document")])]),t._v(" "),i("el-menu-item",{attrs:{index:"4"}},[i("router-link",{attrs:{id:"News",to:"/News"}},[i("i",{staticClass:"el-icon-message",staticStyle:{"font-size":"25px"}}),t._v("Features\n    ")])],1),t._v(" "),i("el-menu-item",{attrs:{index:"5"}},[i("router-link",{attrs:{id:"Members",to:"/Members"}},[i("i",{staticClass:"el-icon-user",staticStyle:{"font-size":"25px"}}),t._v("Tutorial\n    ")])],1),t._v(" "),i("el-menu-item",{attrs:{index:"6"}},[i("a",{attrs:{href:"https://openreview.net/pdf?id=xojHpEKoWWF",target:"_blank"}},[i("i",{staticClass:"el-icon-reading",staticStyle:{"font-size":"25px"}}),t._v("Paper\n    ")])]),t._v(" "),i("el-menu-item",{attrs:{index:"7"}},[i("router-link",{attrs:{id:"Test",to:"/Test"}},[i("i",{staticClass:"el-icon-edit-outline",staticStyle:{"font-size":"25px"}}),t._v("About\n    ")])],1)],1)],1)},staticRenderFns:[]};var v={name:"app",components:{mynavbar:i("VU/8")(o,c,!1,function(t){i("yJBW")},"data-v-a6c1a92c",null).exports,YuFooter:r}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("el-affix",{attrs:{offset:120}},[e("mynavbar")],1),this._v(" "),e("router-view"),this._v(" "),e("yu-footer")],1)},staticRenderFns:[]};var u=i("VU/8")(v,h,!1,function(t){i("Lo6X")},null,null).exports,d=i("/ocq"),_={data:function(){return{platform:"pc",imgs:[{url:i("tGse"),link:"/assets/1.jpg"},{url:i("tGse"),link:"/assets/1.jpg"},{url:i("tGse"),link:"/assets/1.jpg"},{url:i("tGse"),link:"/assets/1.jpg"}]}},methods:{linkTo:function(){var t=this.$refs.carousel.activeIndex;this.$router.push(this.imgs[t].link)}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("span",{staticClass:"demonstration"}),t._v(" "),i("el-carousel",{ref:"carousel",staticClass:"lun_imgs",attrs:{height:"250px","indicator-position":"outside"},nativeOn:{click:function(e){return t.linkTo(e)}}},t._l(t.imgs,function(t){return i("el-carousel-item",{key:t.url,staticClass:"lun_img"},[i("img",{attrs:{src:t.url}})])}),1)],1)},staticRenderFns:[]};var p=i("VU/8")(_,m,!1,function(t){i("ceWV")},null,null).exports,f={name:"hello",data:function(){return{FlashPic:p,msg:"Welcome to the LigSignalSparse Official Website"}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("img",{attrs:{src:i("u7fc"),width:"1500px",height:"600px"}}),t._v(" "),s("FlashPic"),t._v(" "),s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Exihibition")]),t._v(" "),s("div",[s("video",{staticClass:"video1",attrs:{src:i("OPuY"),controls:"controls",poster:i("TgH1"),muted:"muted",loop:"loop"},domProps:{muted:!0}})]),t._v(" "),s("ul",[s("router-link",{attrs:{id:"Home",to:"/Home"}},[t._v("Home")]),t._v(" "),s("router-link",{attrs:{id:"Achievements",to:"/Achievements"}},[t._v("Achievements")]),t._v(" "),s("router-link",{attrs:{id:"News",to:"/News"}},[t._v("News")])],1),t._v(" "),s("h2",[t._v("Toolkit Ooverall Structure")]),t._v(" "),s("img",{attrs:{src:i("64E7"),width:"850px",height:"350px"}}),t._v(" "),t._m(0),t._v(" "),s("el-backtop",{attrs:{bottom:200}},[s("div",{staticStyle:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa"}},[t._v("\n        ↑\n      ")])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://localhost:8080/#/Home",target:"_blank"}},[this._v("Home")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://localhost:8080/#/Achievements",target:"_blank"}},[this._v("Achievements")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://localhost:8080/#/News",target:"_blank"}},[this._v("SecondPage")])])])}]};var b=i("VU/8")(f,g,!1,function(t){i("oD3p")},"data-v-2bfb726f",null).exports,x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("el-backtop",{attrs:{bottom:200}},[i("div",{staticStyle:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa"}},[t._v("\n        ↑\n      ")])]),t._v(" "),i("h1",[t._v("Instructions of How to get your hands on the LibSignal")]),t._v(" "),i("div",{staticClass:"ubuntu"},[i("el-card",{staticClass:"ubuntuTitle"},[i("h2",{attrs:{align:"left"}},[t._v("Start Project on Linux!(Ubuntu)")]),t._v(" "),i("p",{attrs:{align:"left"}},[t._v("we provide quick start steps on ubuntu, tested stable on version 18.04")])]),t._v(" "),i("div",{staticClass:"n1"},[i("el-timeline",[i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step1",placement:"top"}},[i("el-card",[i("h4",[t._v("Download code of our latest Github repo:")]),t._v(" "),i("a",{attrs:{href:"https://github.com/derekmei233/LibSignalSpare/tree/dev_pytorch",target:"_blank"}},[t._v("https://github.com/derekmei233/LibSignalSpare/tree/dev_pytorch")]),i("br")])],1),t._v(" "),i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step2",placement:"top"}},[i("el-card",[i("h4",[t._v("Install cityflow follow the instructions here:")]),t._v(" "),i("a",{attrs:{href:"https://cityflow.readthedocs.io/en/latest/install.html",target:"_blank"}},[t._v("https://cityflow.readthedocs.io/en/latest/install.html")]),i("br"),t._v(" "),i("h4",[t._v("Install sumo follow the instructions here:")]),t._v(" "),i("a",{attrs:{href:"https://sumo.dlr.de/docs/Downloads.php",target:"_blank"}},[t._v("https://sumo.dlr.de/docs/Downloads.php")]),i("br")])],1),t._v(" "),i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step3",placement:"top"}},[i("el-card",[i("h4",[t._v("Open the command line and Install the required env info:")]),t._v(" "),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("code",[t._v("conda env create -f requirement.yml")])]),t._v(" "),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("code",[t._v("conda activate LibSignal")])]),t._v(" "),i("p"),t._v(" "),i("h4",[t._v("If anything missed, could be this:")]),t._v(" "),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("code",[t._v("pip install lmdb")])])])],1),t._v(" "),i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step4",placement:"top"}},[i("el-card",[i("h4",[t._v("One Click from run.py with default configurations:")]),t._v(" "),i("p",[t._v("As an example, we set DQN with cityflow as default")]),t._v("detailed config settings can be found at\n            "),i("router-link",{attrs:{to:"Honour"}},[t._v("Document")])],1)],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"windows"},[i("el-divider",{attrs:{"border-style":"dashed"}}),t._v(" "),i("el-card",{staticClass:"windowsTitle"},[i("h2",{attrs:{align:"left"}},[t._v("Start Project on Windows!")]),t._v(" "),i("p",{attrs:{align:"left"}},[t._v("Our toolkit is also compitable with Windows OS")])]),t._v(" "),i("div",{staticClass:"n2"},[i("el-timeline",[i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step1",placement:"top"}},[i("el-card",[i("h4",[t._v("step1")]),t._v(" "),i("p",[t._v("infos")])])],1),t._v(" "),i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step2",placement:"top"}},[i("el-card",[i("h4",[t._v("step2")]),t._v(" "),i("p",[t._v("infos")])])],1),t._v(" "),i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step3",placement:"top"}},[i("el-card",[i("h4",[t._v("step3")]),t._v(" "),i("p",[t._v("infos")])])],1)],1)],1)],1)],1)},staticRenderFns:[]};var w=i("VU/8")(null,x,!1,function(t){i("kb42")},null,null).exports,k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("h1",[t._v("Document to help you better understand")]),t._v(" "),i("p",[t._v("There are Already Accomplished Ones")]),t._v(" "),i("p",[t._v("And also Ongoing Ones")]),t._v(" "),i("nav",{staticClass:"n4"},[t._v("Accomplished Tasks")]),t._v(" "),i("nav",{staticClass:"n4"},[t._v("Ongoing Items")]),t._v(" "),i("div",{staticClass:"d4"},[t._v("this is Something Else")]),t._v(" "),i("el-backtop",{attrs:{bottom:200}},[i("div",{staticStyle:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa"}},[t._v("\n        ↑\n      ")])])],1)},staticRenderFns:[]};var y=i("VU/8")(null,k,!1,function(t){i("G4qV")},null,null).exports,S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("h1",[t._v("The New Features of Our Work")]),t._v(" "),t._m(0),t._v(" "),i("nav",{staticClass:"n2"},[t._v("Recent News")]),t._v(" "),i("nav",{staticClass:"n2"},[t._v("History News")]),t._v(" "),i("div",{staticClass:"d2"},[t._v("this is Something Else")]),t._v(" "),i("el-backtop",{attrs:{bottom:200}},[i("div",{staticStyle:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa"}},[t._v("\n        ↑\n      ")])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("h2",[this._v("Hot Spots")])])}]};var C=i("VU/8")(null,S,!1,function(t){i("+phT")},null,null).exports,L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("h1",[t._v("Detailed Tutorial of The LibSignalSpare Toolkit")]),t._v(" "),i("nav",{staticClass:"n3"},[t._v("first part")]),t._v(" "),i("nav",{staticClass:"n3"},[t._v("seccond part")]),t._v(" "),i("div",{staticClass:"d3"},[t._v("this is Something Else")]),t._v(" "),i("el-backtop",{attrs:{bottom:200}},[i("div",{staticStyle:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa"}},[t._v("\n        ↑\n      ")])])],1)},staticRenderFns:[]};var E=i("VU/8")(null,L,!1,function(t){i("KAGa")},null,null).exports,T={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v(" This is First Part ")])])}]},A=i("VU/8")(null,T,!1,null,null,null).exports,F={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v(" This is First Part ")])])}]},H=i("VU/8")(null,F,!1,null,null,null).exports;s.default.use(d.a);var N=new d.a({routes:[{path:"/",name:"Home",component:b,children:[{path:"/",name:"FirstPart",component:A},{path:"SecondPart",name:"SecondPart",component:H}]},{path:"/Honour",name:"Honour",component:y},{path:"/News",name:"News",component:C},{path:"/Directions",name:"Directions",component:w},{path:"/Members",name:"Members",component:E}]}),P=(i("FA0g"),i("V8mf")),R=i.n(P);s.default.directive("highlight",function(t){R.a.configure({useBR:!0}),t.querySelectorAll("pre code").forEach(function(t){R.a.highlightBlock(t)})}),s.default.use(n.a),new s.default({el:"#app",router:N,template:"<App/>",components:{App:u}})},OPuY:function(t,e,i){t.exports=i.p+"static/media/Test.91779cd.mp4"},TgH1:function(t,e,i){t.exports=i.p+"static/img/cover1.8ac4a88.png"},ceWV:function(t,e){},"dL/P":function(t,e,i){t.exports=i.p+"static/img/robot.791550e.png"},jhaP:function(t,e){},kb42:function(t,e){},oD3p:function(t,e){},tGse:function(t,e,i){t.exports=i.p+"static/img/1.b044388.jpg"},tvR6:function(t,e){},u7fc:function(t,e,i){t.exports=i.p+"static/img/main2.b549b22.jpg"},yJBW:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5948df07bb5ac0462191.js.map