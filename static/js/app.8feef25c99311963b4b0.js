webpackJsonp([1],{"64E7":function(t,e,i){t.exports=i.p+"static/img/overview.9d26362.png"},FA0g:function(t,e){},G4qV:function(t,e){},I3y5:function(t,e){},JKDW:function(t,e){},KAGa:function(t,e){},Lo6X:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a=i("zL8q"),s=i.n(a),l=(i("tvR6"),{render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{attrs:{id:"footer"}},[n("div",{staticClass:"top"},[n("div",{staticClass:"left top-item"},[n("h2",[t._v("Information")]),t._v(" "),n("ul",[n("li",[t._v("DaRL Lab")]),t._v(" "),n("li",[t._v("Informatics of YingWu Computing School")]),t._v(" "),n("li",[t._v("New Jersey Institute of Technology")])])]),t._v(" "),n("div",{staticClass:"center top-item"},[n("h2",[t._v("Related Links")]),t._v(" "),n("ul",[n("li",[n("a",{staticClass:"Link1",attrs:{href:"https://www.njit.edu/"}},[t._v("NJIT official website")])]),t._v(" "),n("li",[n("a",{staticClass:"Link2",attrs:{href:"https://web.njit.edu/~hw32/"}},[t._v("Prof.Hua Wei")])]),t._v(" "),n("li",[n("a",{staticClass:"Link3",attrs:{href:"https://github.com/derekmei233/LibSignalSpare/tree/dev_pytorch"}},[t._v("GitHub of LibSignalSpare")])])])]),t._v(" "),n("div",{staticClass:"right top-item"},[n("h2",[t._v("Contact Us")]),t._v(" "),n("hr"),t._v(" "),n("ul",[n("li",[t._v("\n          Any Questions？\n          "),n("a",{staticClass:"weiboLink",attrs:{href:"https://github.com/DaRL-LibSignal/LibSignal/issues",target:"_blank"}},[t._v("Issue Link")])]),t._v(" "),n("li",[t._v("Address: Newark, NJ 07102 USA\n\n        ")])])]),t._v(" "),n("div",{staticClass:"WeChat"},[n("img",{attrs:{src:i("dL/P"),width:"130",alt:""}})])]),t._v(" "),n("div",{staticClass:"bottom"},[t._v("\n    Copyright© 2022 - 2023 | DaRL | All Rights Reserved\n    "),t._v(" "),n("a",{staticClass:"vueLink",attrs:{href:"javascript:;"}})])])}]});var r=i("VU/8")({name:"footer-comp"},l,!1,function(t){i("ovcC")},"data-v-692639c8",null).exports,o={data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[i("el-menu-item",{attrs:{index:"1"}},[i("router-link",{attrs:{id:"Home",to:"/"}},[i("i",{staticClass:"el-icon-menu",staticStyle:{"font-size":"25px"}}),i("i",{staticStyle:{"font-size":"25px"}},[i("b",[t._v("LibSignal")])])])],1),t._v(" "),i("el-menu-item",{attrs:{index:"2"}},[i("router-link",{attrs:{id:"Directions",to:"/Directions"}},[i("i",{staticClass:"el-icon-position",staticStyle:{"font-size":"25px"}}),t._v("Get Started\n    ")])],1),t._v(" "),i("el-menu-item",{attrs:{index:"8"}},[i("i",{staticClass:"el-icon-download",staticStyle:{"font-size":"25px"}}),t._v(" "),i("a",{staticClass:"Link1",attrs:{href:"http://114.132.64.138:8080/content/getstart/Install.html",target:"_blank"}},[t._v("Installation")])]),t._v(" "),i("el-menu-item",{attrs:{index:"3"}},[i("i",{staticClass:"el-icon-star-off",staticStyle:{"font-size":"25px"}}),t._v(" "),i("a",{staticClass:"Link1",attrs:{href:"http://114.132.64.138:8080/index.html",target:"_blank"}},[t._v("Document")])]),t._v(" "),i("el-menu-item",{attrs:{index:"6"}},[i("router-link",{attrs:{id:"Paper",to:"/Paper"}},[i("i",{staticClass:"el-icon-reading",staticStyle:{"font-size":"25px"}}),t._v("\n      Paper\n    ")])],1),t._v(" "),i("el-menu-item",{attrs:{index:"7"}},[i("router-link",{attrs:{id:"About",to:"/About"}},[i("i",{staticClass:"el-icon-edit-outline",staticStyle:{"font-size":"25px"}}),t._v("About\n    ")])],1)],1)],1)},staticRenderFns:[]};var v={name:"app",components:{mynavbar:i("VU/8")(o,c,!1,function(t){i("JKDW")},"data-v-3bbb6615",null).exports,YuFooter:r}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("el-affix",{attrs:{offset:120}},[e("mynavbar")],1),this._v(" "),e("router-view"),this._v(" "),e("yu-footer")],1)},staticRenderFns:[]};var d=i("VU/8")(v,h,!1,function(t){i("Lo6X")},null,null).exports,u=i("/ocq"),p={data:function(){return{platform:"pc",imgs:[{url:i("tGse"),link:"/assets/1.jpg"},{url:i("tGse"),link:"/assets/1.jpg"},{url:i("tGse"),link:"/assets/1.jpg"},{url:i("tGse"),link:"/assets/1.jpg"}]}},methods:{linkTo:function(){var t=this.$refs.carousel.activeIndex;this.$router.push(this.imgs[t].link)}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("span",{staticClass:"demonstration"}),t._v(" "),i("el-carousel",{ref:"carousel",staticClass:"lun_imgs",attrs:{height:"250px","indicator-position":"outside"},nativeOn:{click:function(e){return t.linkTo(e)}}},t._l(t.imgs,function(t){return i("el-carousel-item",{key:t.url,staticClass:"lun_img"},[i("img",{attrs:{src:t.url}})])}),1)],1)},staticRenderFns:[]};i("VU/8")(p,f,!1,function(t){i("ceWV")},null,null).exports;var _={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("img",{attrs:{src:i("u7fc"),width:"1500px",height:"600px"}}),t._v(" "),n("FlashPic"),t._v(" "),n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("ul"),t._v(" "),n("h2",[t._v("Toolkit Overall Structure")]),t._v(" "),n("img",{attrs:{src:i("64E7"),width:"850px",height:"350px"}}),t._v(" "),n("el-divider",{attrs:{"border-style":"dashed"}}),t._v(" "),n("el-backtop",{attrs:{bottom:200}},[n("div",{staticStyle:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa"}},[t._v("\n        ⮝\n      ")])])],1)},staticRenderFns:[]};var m=i("VU/8")({name:"hello",data:function(){return{msg:"Welcome to the LibSignal Official Website"}}},_,!1,function(t){i("QHh8")},"data-v-e03af748",null).exports,g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("el-backtop",{attrs:{bottom:200}},[i("div",{staticStyle:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa"}},[t._v("\n        ⮝\n      ")])]),t._v(" "),i("h1",[t._v("Instructions of How to get your hands on the LibSignal")]),t._v(" "),i("div",{staticClass:"ubuntu"},[i("el-card",{staticClass:"ubuntuTitle"},[i("h2",{attrs:{align:"left"}},[t._v("Start Project on Linux!(Ubuntu)")]),t._v(" "),i("p",{staticStyle:{"font-size":"20px"},attrs:{align:"left"}},[t._v("we provide quick start steps on ubuntu, tested stable on version 18.04")])]),t._v(" "),i("div",{staticClass:"n1"},[i("el-timeline",[i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step1",placement:"top"}},[i("el-card",{staticStyle:{"font-size":"16px"}},[i("h4",[t._v("Download code of our latest Github repo:")]),t._v(" "),i("a",{attrs:{href:"https://github.com/DaRL-LibSignal/LibSignal",target:"_blank"}},[t._v("https://github.com/DaRL-LibSignal/LibSignal")]),i("br")])],1),t._v(" "),i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step2",placement:"top"}},[i("el-card",{staticStyle:{"font-size":"16px"}},[i("h4",[t._v("Install cityflow follow the instructions here:")]),t._v(" "),i("a",{attrs:{href:"https://cityflow.readthedocs.io/en/latest/install.html",target:"_blank"}},[t._v("https://cityflow.readthedocs.io/en/latest/install.html")]),i("br"),t._v(" "),i("h4",[t._v("Install sumo follow the instructions here:")]),t._v(" "),i("a",{attrs:{href:"https://sumo.dlr.de/docs/Downloads.php",target:"_blank"}},[t._v("https://sumo.dlr.de/docs/Downloads.php")]),i("br")])],1),t._v(" "),i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step3",placement:"top"}},[i("el-card",{staticStyle:{"font-size":"16px"}},[i("h4",[t._v("Open the command line and Install the required env info:")]),t._v(" "),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("code",[t._v("conda env create -f requirement.yml")])]),t._v(" "),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("code",[t._v("conda activate LibSignal")])]),t._v(" "),i("p"),t._v(" "),i("h4",[t._v("If anything missed, could be this:")]),t._v(" "),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("code",[t._v("pip install lmdb")])])])],1),t._v(" "),i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step4",placement:"top"}},[i("el-card",{staticStyle:{"font-size":"16px"}},[i("h4",[t._v("One Click from run.py with default configurations:")]),t._v(" "),i("p",[t._v("As an example, we set DQN with cityflow as default")]),t._v("detailed config settings can be found at\n            "),i("a",{attrs:{href:"http://114.132.64.138:8080/index.html",target:"_blank"}},[t._v("Document")]),i("br")])],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"windows"},[i("el-divider",{attrs:{"border-style":"dashed"}}),t._v(" "),i("el-card",{staticClass:"windowsTitle"},[i("h2",{attrs:{align:"left"}},[t._v("Start Project on Windows!")]),t._v(" "),i("p",{attrs:{align:"left"}},[t._v("Our toolkit is also compitable with Windows OS")])]),t._v(" "),i("div",{staticClass:"n2"},[i("el-timeline",[i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step1",placement:"top"}},[i("el-card",{staticStyle:{"font-size":"16px"}},[i("h4",[t._v("step1")]),t._v(" "),i("p",[t._v("infos")])])],1),t._v(" "),i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step2",placement:"top"}},[i("el-card",{staticStyle:{"font-size":"16px"}},[i("h4",[t._v("step2")]),t._v(" "),i("p",[t._v("infos")])])],1),t._v(" "),i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step3",placement:"top"}},[i("el-card",{staticStyle:{"font-size":"16px"}},[i("h4",[t._v("step3")]),t._v(" "),i("p",[t._v("infos")])])],1)],1)],1)],1)],1)},staticRenderFns:[]};var x=i("VU/8")(null,g,!1,function(t){i("YMXQ")},null,null).exports,b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("h1",[t._v("Document to help you better understand")]),t._v(" "),i("p",[t._v("There are Already Accomplished Ones")]),t._v(" "),i("p",[t._v("And also Ongoing Ones")]),t._v(" "),i("nav",{staticClass:"n4"},[t._v("Accomplished Tasks")]),t._v(" "),i("nav",{staticClass:"n4"},[t._v("Ongoing Items")]),t._v(" "),i("div",{staticClass:"d4"},[t._v("this is Something Else")]),t._v(" "),i("el-backtop",{attrs:{bottom:200}},[i("div",{staticStyle:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa"}},[t._v("\n        ↑\n      ")])])],1)},staticRenderFns:[]};var y=i("VU/8")(null,b,!1,function(t){i("G4qV")},null,null).exports,S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block"},[e("h1",[this._v("If You find LibSignal Useful, Please Cite Us")]),this._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code"},[this._v("    "),e("code",{staticStyle:{"text-align":"left","border-radius":"20px","font-size":"16px"}},[this._v("\n      @inproceedings{xxx/xxx.xxx,\n\n        author = {Hao Mei†, Xiaoliang Lei‡, Longchao Da†, Bin Shi‡, Hua Wei†},\n\n        title = {LibSignal: An Open Library for Traffic Signal Control},\n\n        year = {2022},\n\n        isbn = {xxx},\n\n        publisher = {xxx},\n\n        address = {xxx},\n\n        url = {xxx},\n\n        doi = {xxx},\n\n        booktitle = {xxx},\n\n        pages = {xxx},\n\n        numpages = {xxx},\n\n        keywords = {xxx},\n\n        location = {xxx},\n\n        series = {xxx}\n\n      }\n    ")]),this._v("\n\n  ")]),this._v(" "),e("el-backtop",{attrs:{bottom:200}},[e("div",{staticStyle:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa"}},[this._v("\n        ↑\n      ")])])],1)},staticRenderFns:[]};var w=i("VU/8")(null,S,!1,function(t){i("xnLa")},null,null).exports,k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("h1",[t._v("Detailed Tutorial of The LibSignalSpare Toolkit")]),t._v(" "),i("nav",{staticClass:"n3"},[t._v("first part")]),t._v(" "),i("nav",{staticClass:"n3"},[t._v("seccond part")]),t._v(" "),i("div",{staticClass:"d3"},[t._v("this is Something Else")]),t._v(" "),i("el-backtop",{attrs:{bottom:200}},[i("div",{staticStyle:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa"}},[t._v("\n        ↑\n      ")])])],1)},staticRenderFns:[]};var C=i("VU/8")(null,k,!1,function(t){i("KAGa")},null,null).exports,L={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v(" This is First Part ")])])}]},R=i("VU/8")(null,L,!1,null,null,null).exports,A={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v(" This is First Part ")])])}]},I=i("VU/8")(null,A,!1,null,null,null).exports,T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block",staticStyle:{"text-align":"center"}},[i("h1",[t._v("LibSignal: An Open Library for Traffic Signal Control")]),t._v(" "),i("el-card",{staticClass:"box-card",scopedSlots:t._u([{key:"header",fn:function(){return[i("div",{staticClass:"card-header"},[i("span",{staticStyle:{"font-size":"25px"},attrs:{text:""}},[t._v("Abstract")]),t._v(" "),i("a",{attrs:{href:"https://openreview.net/pdf?id=xojHpEKoWWF",target:"_blank"}},[i("el-button",{staticClass:"button",staticStyle:{"font-size":"24px"},attrs:{text:""}},[t._v("Full Paper")])],1)])]},proxy:!0}])},[t._v(" "),i("div",{staticClass:"text item",staticStyle:{"font-size":"20px","font-family":"Times New Roman","text-align":"justify","line-height":"30px"}},[t._v("This paper introduces a library for cross-simulator comparison of reinforcement learning models \n              in traffic signal control tasks. This library is developed to implement recent state-of-the-art reinforcement learning \n              models with extensible interfaces and unified cross-simulator evaluation metrics. It supports commonly-used simulators \n              in traffic signal control tasks, including Simulation of Urban Mobility(SUMO) and CityFlow, and multiple benchmark datasets \n              for fair comparisons. We conducted experiments to validate our implementation of the models and to calibrate the simulators \n              so that the experiments from one simulator could be referential to the other. Based on the validated models and calibrated \n              environments, this paper compares and reports the performance of current state-of-the-art RL algorithms across different \n              datasets and simulators. This is the first time that these methods have been compared fairly under the same datasets with \n              different simulators.\n          ")])]),t._v(" "),i("h1",[t._v("Reinforcement Learning based Traffic Signal Control Paper Collection")]),t._v(" "),i("el-card",{staticClass:"box-card",scopedSlots:t._u([{key:"header",fn:function(){return[i("div",{staticClass:"card-header"},[i("span",{staticStyle:{"font-size":"25px"},attrs:{text:""}},[t._v("Paper List")]),t._v(" "),i("a",{attrs:{href:"https://github.com/DaRL-LibSignal/LibSignal/blob/master/awesome-RL-traffic-signal-control-papers.md",target:"_blank"}},[i("el-button",{staticClass:"button",staticStyle:{"font-size":"24px"},attrs:{text:""}},[t._v("Full List")])],1)])]},proxy:!0}])},[t._v(" "),i("div",{staticClass:"text item",staticStyle:{"font-size":"20px","font-family":"Times New Roman","text-align":"justify","line-height":"30px"}},[t._v("\n              We collected RL-based traffic signal control papers published in the recent years (2016-2021) "),i("br"),t._v("\n              on top conferences and journals  and their workshop papers. "),i("br"),t._v(" "),i("br"),t._v("\n              In addition, the surveys since 2018 and representative papers mentioned in the surveys are also included. "),i("br"),t._v("\n              We will continue to update the collection."),i("br"),t._v(" "),i("br"),t._v(" "),i("li",[t._v("NeurIPS")]),t._v(" "),i("li",[t._v("AAAI")]),t._v(" "),i("li",[t._v("AAMAS")]),t._v(" "),i("li",[t._v("KDD")]),t._v(" "),i("li",[t._v("CIKM")]),t._v(" "),i("li",[t._v("IEEE")]),t._v(" "),i("li",[t._v("TITS")]),t._v(" "),i("li",[t._v("ITSC")]),t._v(" "),i("li",[t._v("TR-B")])])]),t._v(" "),i("el-backtop",{attrs:{bottom:200}},[i("div",{staticStyle:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa"}},[t._v("\n        ⮝\n      ")])])],1)},staticRenderFns:[]};var z=i("VU/8")(null,T,!1,function(t){i("I3y5")},null,null).exports;n.default.use(u.a);var E=new u.a({routes:[{path:"/",name:"Home",component:m,children:[{path:"/",name:"FirstPart",component:R},{path:"SecondPart",name:"SecondPart",component:I}]},{path:"/Honour",name:"Honour",component:y},{path:"/About",name:"About",component:w},{path:"/Directions",name:"Directions",component:x},{path:"/Members",name:"Members",component:C},{path:"/Paper",name:"Paper",component:z}]}),D=(i("FA0g"),i("V8mf")),F=i.n(D);n.default.directive("highlight",function(t){F.a.configure({useBR:!0}),t.querySelectorAll("pre code").forEach(function(t){F.a.highlightBlock(t)})}),n.default.use(s.a),new n.default({el:"#app",router:E,template:"<App/>",components:{App:d}})},QHh8:function(t,e){},YMXQ:function(t,e){},ceWV:function(t,e){},"dL/P":function(t,e,i){t.exports=i.p+"static/img/robot.791550e.png"},ovcC:function(t,e){},tGse:function(t,e,i){t.exports=i.p+"static/img/1.b044388.jpg"},tvR6:function(t,e){},u7fc:function(t,e,i){t.exports=i.p+"static/img/main2.b549b22.jpg"},xnLa:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8feef25c99311963b4b0.js.map