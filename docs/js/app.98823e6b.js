(function(A){function e(e){for(var n,o,r=e[0],s=e[1],l=e[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(A[n]=s[n]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var A,e=0;e<i.length;e++){for(var t=i[e],n=!0,r=1;r<t.length;r++){var s=t[r];0!==a[s]&&(n=!1)}n&&(i.splice(e--,1),A=o(o.s=t[0]))}return A}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return A[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=A,o.c=n,o.d=function(A,e,t){o.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:t})},o.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},o.t=function(A,e){if(1&e&&(A=o(A)),8&e)return A;if(4&e&&"object"===typeof A&&A&&A.__esModule)return A;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var n in A)o.d(t,n,function(e){return A[e]}.bind(null,n));return t},o.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return o.d(e,"a",e),e},o.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var c=s;i.push([0,"chunk-vendors"]),t()})({0:function(A,e,t){A.exports=t("56d7")},"02f9":function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},"034f":function(A,e,t){"use strict";t("85ec")},"08ba":function(A,e,t){},"08e7":function(A,e,t){},"0e79":function(A,e,t){},"17d4":function(A,e,t){},"234b":function(A,e,t){},"2d33":function(A,e,t){A.exports=t.p+"img/python.eb1d40d0.png"},"32f9":function(A,e,t){A.exports=t.p+"img/nodejs.4671ae58.png"},"375c":function(A,e,t){},"3d85":function(A,e,t){},"3e39":function(A,e,t){A.exports=t.p+"img/linkedin.30c453b7.png"},"42c6":function(A,e,t){A.exports=t.p+"img/scrum.20f2d0c4.png"},"50e1":function(A,e,t){"use strict";t("9568")},5694:function(A,e,t){A.exports=t.p+"img/learn.2a430fcd.png"},"56d7":function(A,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),a=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{attrs:{id:"app"}},[t("Header"),t("Home"),t("Skills"),t("Experience"),t("Contact"),t("Footer")],1)},i=[],o=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("nav",{class:"nav-bar"},[t("div",{class:"container"},[t("div",{class:"div"},[t("NavBarName",{class:"item-1",on:{click:A.scrollTo}}),t("NavBarMenu",{class:"item-2",attrs:{menu:A.menu},on:{update:A.updateMenu,click:A.scrollTo}}),t("NavBarMenuDrop",{class:"item-3",attrs:{menu:A.menu},on:{update:A.updateMenu,click:A.scrollTo}})],1)])])},r=[],s=(t("7db0"),function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",[t("span",{on:{click:function(e){return A.$emit("click","Home")}}},[A._v("Antonio J Parody Guzmán")])])}),l=[],c={name:"NavBarName"},u=c,d=(t("6a21"),t("2877")),m=Object(d["a"])(u,s,l,!1,null,"0dd275a1",null),p=m.exports,f=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",[t("ul",A._l(A.labels,(function(e,n){return t("li",{key:n},[t("MenuItem",{attrs:{idx:n,value:e,menu:A.menu,is_resume:"Resume"===e},on:{update:function(e){return A.$emit("update",e)},click:function(e){return A.$emit("click",e)}}})],1)})),0)])},g=[],v=(t("d81d"),function(){var A=this,e=A.$createElement,n=A._self._c||e;return n("div",[A.is_resume?n("a",{attrs:{href:t("5eae")}},[n("span",[A._v(A._s(A.value))])]):n("span",{class:A.class_,on:{click:function(e){return A.$emit("click",A.value)}}},[A._v(A._s(A.value)+" ")])])}),h=[],b=(t("a9e3"),t("fb6a"),t("b65f"),{name:"MenuItem",props:{idx:Number,value:String,menu:Array,is_resume:Boolean},data:function(){return{pageYOffset:void 0,offset:void 0}},mounted:function(){var A=this;setTimeout((function(){A.initData()}),500),window.addEventListener("resize",(function(){A.initData()})),window.addEventListener("scroll",(function(){A.is_resume||(A.pageYOffset=window.pageYOffset)}))},watch:{is_scrolled:function(){this.updateParent()}},computed:{is_scrolled:function(){return!this.is_resume&&(this.pageYOffset+1>=this.offset&&!this.is_any_menu_item_next_scrolled)},class_:function(){return this.is_scrolled?"underline":""},is_any_menu_item_next_scrolled:function(){return this.is_resume?[]:this.menu.slice(1-this.menu.length+this.idx).map((function(A){return A.is_scrolled})).some((function(A){return A}))}},methods:{initData:function(){this.is_resume||(this.pageYOffset=window.pageYOffset,this.offset=Math.trunc(document.getElementById(this.value).getBoundingClientRect().top-document.body.getBoundingClientRect().top))},updateParent:function(){this.$emit("update",{label:this.value,is_scrolled:this.is_scrolled})}}}),w=b,y=(t("50e1"),Object(d["a"])(w,v,h,!1,null,"0914f5a6",null)),D=y.exports,x={name:"NavBarMenu",components:{MenuItem:D},props:{menu:Array},computed:{labels:function(){return this.menu.map((function(A){return A.label}))}}},_=x,S=(t("8d34"),Object(d["a"])(_,f,g,!1,null,"d202c22c",null)),q=S.exports,B=function(){var A=this,e=A.$createElement,n=A._self._c||e;return n("div",[n("el-dropdown",{attrs:{trigger:"click",placement:"bottom-end"}},[n("span",[n("img",{staticStyle:{cursor:"pointer"},attrs:{src:t("7121"),height:20}})]),n("el-dropdown-menu",{class:"dropdown-menu",attrs:{slot:"dropdown"},slot:"dropdown"},A._l(A.labels,(function(e,t){return n("el-dropdown-item",{key:t},[n("MenuItem",{attrs:{idx:t,value:e,menu:A.menu,is_resume:"Resume"===e},on:{update:function(e){return A.$emit("update",e)},click:function(e){return A.$emit("click",e)}}})],1)})),1)],1)],1)},j=[],E={name:"NavBarMenuDrop",components:{MenuItem:D},props:{menu:Array},computed:{labels:function(){return this.menu.map((function(A){return A.label}))}}},M=E,k=(t("92a7"),Object(d["a"])(M,B,j,!1,null,"159e1d93",null)),I=k.exports,C={name:"Header",components:{NavBarName:p,NavBarMenu:q,NavBarMenuDrop:I},data:function(){return{menu:[{label:"Home",is_scrolled:!1},{label:"Skills",is_scrolled:!1},{label:"Experience",is_scrolled:!1},{label:"Contact",is_scrolled:!1},{label:"Resume",is_scrolled:!1}]}},methods:{scrollTo:function(A){"Home"===A?window.scrollTo(0,0):this.handleScroll(A)},handleScroll:function(A){var e=document.getElementById(A).getBoundingClientRect().top-document.body.getBoundingClientRect().top;window.scrollTo({top:e,left:0,behavior:"smooth"})},updateMenu:function(A){this.menu.find((function(e){return e.label===A.label})).is_scrolled=A.is_scrolled}}},T=C,O=(t("f415"),Object(d["a"])(T,o,r,!1,null,"19beaac1",null)),P=O.exports,X=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("section",{class:"section",attrs:{id:"Home"}},[t("div",{class:"container"},[t("div",{class:"row"},[t("div",{class:"col-12 col-lg-4"},[t("HomeLeft")],1),t("div",{class:"col-12 col-lg-8"},[t("HomeRight")],1)])])])},W=[],H=function(){var A=this,e=A.$createElement,n=A._self._c||e;return n("div",{staticStyle:{display:"flex","flex-direction":"column","text-align":"center"}},[n("img",{class:"avatar avatar-circle",attrs:{src:t("707c")}}),n("div",[n("h2",{staticStyle:{margin:"1.5rem 0 0 0","font-size":"30px","font-weight":"400"}},[A._v("Antonio J Parody Guzmán")]),n("h3",{staticStyle:{margin:"2rem 0 0 0"}},[A._v("Co-Founder - Full Stack Developer")]),n("h4",{staticStyle:{color:"#795548",margin:"1rem 0 0 0"}},[n("a",{class:"link",attrs:{href:"https://pod.coop/",target:"_blank"}},[A._v("Plant On Demand")])])]),n("div",{staticStyle:{"margin-top":"3rem"}},[n("ul",{staticStyle:{display:"flex","list-style":"none","justify-content":"center","align-items":"center",margin:"0",padding:"0",gap:".7rem"}},[n("li",[n("a",{attrs:{href:"https://www.linkedin.com/in/aparody/",target:"_blank"}},[n("img",{class:"grow",attrs:{src:t("3e39"),height:32}})])]),n("li",[n("a",{attrs:{href:"https://github.com/paro-paro",target:"_blank"}},[n("img",{class:"grow",attrs:{src:t("02f9")}})])]),n("li",[n("a",{attrs:{href:"https://formsubmit.co/el/seyuvo"}},[n("img",{class:"grow",staticStyle:{cursor:"pointer"},attrs:{src:t("c765"),height:35}})])]),n("li",[n("a",{attrs:{href:t("5eae")}},[n("img",{class:"grow",staticStyle:{cursor:"pointer"},attrs:{src:t("71e2"),height:32}})])])])])])},N=[],U={name:"HomeLeft"},z=U,R=(t("aa15"),Object(d["a"])(z,H,N,!1,null,"4a3069fd",null)),Q=R.exports,V=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",[t("h1",{staticStyle:{margin:"0","font-size":"35px","font-weight":"400"}},[A._v("Biography")]),t("p",[A._v("Hey! Nice to meet you. I'm Antonio and I like to consider myself a learning enthusiast.")]),t("p",[A._v("It was after my first two jobs as a traditional engineer when I got my first contact with software development and I truly fell in love with it.")]),t("p",[A._v("This made me change the course of my career, getting my first tech related job at SuperTech, where I could learnt the basics of start-ups business models working as product manager.")]),t("p",[A._v("This experience, along with a very strong determination to become a software developer, allowed me to co-found "),t("a",{class:"link",staticStyle:{color:"#795548","font-weight":"600"},attrs:{href:"https://pod.coop/",target:"_blank"}},[A._v("Plant On Demand")]),A._v(", the first online sales and management platform for the short food supply chain.")]),t("div",{class:"row"},[t("div",{class:"col-12 col-md-1"},[t("h2",[A._v("Interests")]),A._m(0)]),t("div",{class:"col-12 col-md-2"},[t("h2",[A._v("Education")]),A._m(1)])])])},L=[function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("ul",[t("li",[A._v("Data driven web applications")]),t("li",[A._v("Software development")]),t("li",[A._v("Education")]),t("li",[A._v("History, football and music")])])},function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("ul",[t("li",[A._v("Master in Electrical Engineering")]),t("li",[A._v("Master in Secondary Education")]),t("li",[A._v("Certificate Advanced English (C1)")]),t("li",[A._v("1 year exchange program at University of Dayton, EEUU")])])}],Z={name:"HomeRight"},Y=Z,G=(t("f516"),Object(d["a"])(Y,V,L,!1,null,"01bff1de",null)),F=G.exports,J={name:"Home",components:{HomeLeft:Q,HomeRight:F}},K=J,$=(t("713b"),Object(d["a"])(K,X,W,!1,null,"25fd17d7",null)),AA=$.exports,eA=function(){var A=this,e=A.$createElement,n=A._self._c||e;return n("section",{class:"section",attrs:{id:"Skills"}},[n("div",{class:"container"},[n("div",{class:"row"},[n("div",{class:"col-12",staticStyle:{"padding-bottom":"1rem","font-size":"20px"}},[n("h1",{staticStyle:{margin:"0"}},[A._v("Skills")])]),n("div",{class:"col-12 col-md-6 col-lg-4"},[n("img",{attrs:{src:t("2d33"),height:45}}),n("h3",[A._v("Python")]),n("p",[A._v("Flask, Django, SQLAlchemy, pandas, numpy, openpyxl")])]),n("div",{class:"col-12 col-md-6 col-lg-4"},[n("img",{attrs:{src:t("7a3a"),height:45}}),n("h3",[A._v("Frontend")]),n("p",[A._v("HTML, CSS, SCSS, JavaScript, Vue.js, Nuxt")])]),n("div",{class:"col-12 col-md-6 col-lg-4"},[n("img",{attrs:{src:t("e4b0"),height:45}}),n("h3",[A._v("Cloud engineering")]),n("p",[A._v("AWS EC2, AWS Lambda, AWS SQS, Elastic Beanstalk, S3, CloudFormation, CloudWatch")])]),n("div",{class:"col-12 col-md-6 col-lg-4"},[n("img",{attrs:{src:t("32f9"),height:45}}),n("h3",[A._v("Node.js")]),n("p",[A._v("Express")])]),n("div",{class:"col-12 col-md-6 col-lg-4"},[n("img",{attrs:{src:t("7028"),height:45}}),n("h3",[A._v("Databases")]),n("p",[A._v("MySQL, SQLite, AWS DynamoDB, MongoDB")])]),n("div",{class:"col-12 col-md-6 col-lg-4"},[n("img",{attrs:{src:t("c419"),height:45}}),n("h3",[A._v("DevOps")]),n("p",[A._v("Gitlab CI/CD")])]),n("div",{class:"col-12 col-md-6 col-lg-4"},[n("img",{attrs:{src:t("66e2"),height:45}}),n("h3",[A._v("Tech Tools")]),n("p",[A._v("git, serverless framework, jupyter notebook, unit testing")])]),n("div",{class:"col-12 col-md-6 col-lg-4"},[n("img",{attrs:{src:t("42c6"),height:45}}),n("h3",[A._v("Tools")]),n("p",[A._v("Slack, Asana, Nuclino, Excel, SCRUM...")])]),n("div",{class:"col-12 col-md-6 col-lg-4"},[n("img",{attrs:{src:t("5694"),height:45}}),n("h3",[A._v("Mindset")]),n("p",[A._v("keep on learning")])])])])])},tA=[],nA={name:"Skills"},aA=nA,iA=(t("8627"),Object(d["a"])(aA,eA,tA,!1,null,"531c3734",null)),oA=iA.exports,rA=function(){var A=this,e=A.$createElement,n=A._self._c||e;return n("section",{class:"section",attrs:{id:"Experience"}},[n("div",{class:"container"},[n("div",{class:"row"},[n("div",{class:"col-12 col-lg-4"},[n("h1",{staticStyle:{margin:"0","font-size":"30px","font-weight":"400"}},[A._v("Experience")])]),n("div",{class:"col-12 col-lg-8"},[n("vue-timeline-update",{attrs:{theme:"light",icon:"code",color:"black",animation:!1,dateString:"2018 - Today",date:new Date("01-01-2000"),category:"success",title:"software developer - http 200",thumbnail:t("a26b")}},[[n("div",{staticStyle:{color:"black"}},[n("ul",[n("li",[n("span",[n("b",[A._v("Co-Founder | Full Stack Developer at "),n("a",{class:"link",attrs:{href:"https://pod.coop/",target:"_blank"}},[A._v("Plant On Demand")])])])])]),n("p",[A._v(" As full stack developer I am part of the team in charge of the design and development of our core product. ")]),n("el-collapse",{attrs:{accordion:!1}},[n("el-collapse-item",{attrs:{title:"What is Plant On Demand?"}},[n("p",[A._v(" Plant on Demand is a food-tech Software as a Service (SaaS) cloud platform that allows on-demand production of organic food. ")]),n("p",[A._v(" The platform provides a specific Cloud solution to help the digitalization of local producers, generating standardized data of their daily operations and enabling lightning-fast transactions with their clients. Simultaneously, it efficiently connects them to the whole food supply chain creating a solid, reliable network of local producers for retailers and end consumers to connect to. ")]),n("p",[A._v("Tech stack:")]),n("ul",[n("li",[A._v("AWS Cloud Architecture")]),n("li",[A._v("SPA Frontend in Javascript (Vue.js)")]),n("li",[A._v("Backend API in Python (Flask)")]),n("li",[A._v("Relational Database in MySQL")]),n("li",[A._v("DevOps CI/CD pipelines with Gitlab")])])]),n("el-collapse-item",{attrs:{title:"See the future"}},[n("p",[A._v(" Applying Artificial Intelligence (AI) techniques to the daily data generated by the platform and other external data sources, we will train models to predict supply and demand of local products, paving the way to proactively plant based on predicted demand on a sustainable way. ")]),n("p",[A._v(" In addition, by re-training our AI models based on new data and learning from errors, our platform’s neural and deep networks will keep improving over time, providing a sustainable food production model that ensures a future with quality ecological food from local producers whilst minimizing food waste and soil degradation. ")])])],1)],1)]],2)],1)])])])},sA=[],lA={name:"Experience"},cA=lA,uA=(t("8ea0"),Object(d["a"])(cA,rA,sA,!1,null,"1f89d968",null)),dA=uA.exports,mA=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("section",{class:"section",attrs:{id:"Contact"}},[t("div",{class:"container"},[t("div",{class:"row"},[t("div",{class:"col-12 col-lg-4"},[t("h1",{staticStyle:{margin:"0","font-size":"30px","font-weight":"400"}},[A._v("Contact")])]),t("div",{class:"col-12 col-lg-8"},[t("el-form",{ref:"Form",attrs:{id:"Form",model:A.form,rules:A.rules,"hide-required-asterisk":!0,"show-message":!0,"label-position":A.label_position,"label-width":"auto",action:"https://formsubmit.co/6e2d41bf1e229914a814d7d8b06870da",method:"POST"},nativeOn:{submit:function(e){return e.preventDefault(),A.submit()}}},[t("el-form-item",{attrs:{prop:"name",label:"Name"}},[t("el-input",{attrs:{name:"name",type:"text",maxlength:55,clearable:!0},model:{value:A.form.name,callback:function(e){A.$set(A.form,"name",e)},expression:"form.name"}})],1),t("el-form-item",{attrs:{prop:"email",label:"Email"}},[t("el-input",{attrs:{name:"email",type:"text",clearable:!0},model:{value:A.form.email,callback:function(e){A.$set(A.form,"email","string"===typeof e?e.trim():e)},expression:"form.email"}})],1),t("el-form-item",{attrs:{prop:"message",label:"Message"}},[t("el-input",{attrs:{name:"message",type:"textarea"},model:{value:A.form.message,callback:function(e){A.$set(A.form,"message",e)},expression:"form.message"}})],1),t("el-form-item",[t("el-button",{class:"button",attrs:{"native-type":"submit",size:"medium"}},[A._v("Send ")])],1),t("input",{attrs:{type:"hidden",name:"_subject"},domProps:{value:"New paro-paro form contact"}})],1)],1)])])])},pA=[],fA={name:"Contact",data:function(){return{form:{name:"",email:"",message:""},rules:{name:[{required:!0,message:"Please fill in this field",trigger:"change"}],email:[{required:!0,message:"Please fill in this field",trigger:"change"},{type:"email",message:"This email format is not valid",trigger:"blur"}],message:[{required:!0,message:"Please fill in this field",trigger:"change"}]},screen_width:window.innerWidth>0?window.innerWidth:screen.width}},mounted:function(){var A=this;window.addEventListener("resize",(function(){A.screen_width=window.innerWidth>0?window.innerWidth:screen.width}))},computed:{label_position:function(){return this.screen_width<992?"top":"left"}},methods:{submit:function(){this.$refs.Form.validate((function(A){if(!A)return!1;document.getElementById("Form").submit()}))}}},gA=fA,vA=(t("e4ad"),Object(d["a"])(gA,mA,pA,!1,null,"7495e6b4",null)),hA=vA.exports,bA=function(){var A=this,e=A.$createElement,n=A._self._c||e;return n("footer",{class:"footer"},[n("div",{class:"container"},[n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",position:"relative"}},[n("div",{staticStyle:{"text-align":"center"}},[n("div",{staticStyle:{"font-size":"14px"}},[A._v("© Antonio Javier Parody Guzmán")]),n("div",{staticStyle:{"font-size":"14px","margin-top":"1rem"}},[A._v("Powered by "),n("a",{class:"link",attrs:{href:"https://vuejs.org/",target:"_blank"}},[n("span",[A._v("Vue.js")])])])]),n("div",{class:"arrow",staticStyle:{position:"absolute",right:"0"}},[n("img",{staticStyle:{cursor:"pointer"},attrs:{src:t("71f2")},on:{click:function(e){return A.click()}}})])])])])},wA=[],yA={name:"Footer",methods:{click:function(){window.scrollTo(0,0)}}},DA=yA,xA=(t("8d5b"),Object(d["a"])(DA,bA,wA,!1,null,"3a078cc6",null)),_A=xA.exports,SA={name:"App",components:{Header:P,Home:AA,Skills:oA,Experience:dA,Contact:hA,Footer:_A}},qA=SA,BA=(t("034f"),Object(d["a"])(qA,a,i,!1,null,null,null)),jA=BA.exports,EA=(t("bd49"),t("450d"),t("18ff")),MA=t.n(EA),kA=(t("960d"),t("defb")),IA=t.n(kA),CA=(t("cb70"),t("b370")),TA=t.n(CA),OA=(t("eca7"),t("3787")),PA=t.n(OA),XA=(t("425f"),t("4105")),WA=t.n(XA),HA=(t("b0ee"),t("d180")),NA=t.n(HA),UA=(t("a335"),t("c0bb")),zA=t.n(UA),RA=(t("10cb"),t("f3ad")),QA=t.n(RA),VA=(t("1951"),t("eedf")),LA=t.n(VA),ZA=t("3ed6"),YA=t.n(ZA),GA=t("4897"),FA=t.n(GA);n["default"].use(LA.a),n["default"].use(QA.a),n["default"].use(zA.a),n["default"].use(NA.a),n["default"].use(WA.a),n["default"].use(PA.a),n["default"].use(TA.a),n["default"].use(IA.a),n["default"].use(MA.a),FA.a.use(YA.a);var JA=t("41fb"),KA=t.n(JA);n["default"].use(KA.a,{defaultDuration:650});var $A=t("7cf2");n["default"].use($A["a"],{theme:"dark"}),n["default"].config.productionTip=!1,new n["default"]({render:function(A){return A(jA)}}).$mount("#app")},"5eae":function(A,e,t){A.exports=t.p+"da9a4e610ebb2f9c7de694e104872789.pdf"},"66e2":function(A,e,t){A.exports=t.p+"img/git.cca1d728.png"},"6a21":function(A,e,t){"use strict";t("375c")},7028:function(A,e,t){A.exports=t.p+"img/database.974836a7.png"},"707c":function(A,e,t){A.exports=t.p+"img/profile.28c5dbd2.jpg"},7121:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAz3SURBVHic7d1/rLd1Xcfx5/neBigKCiqGCeJMsCVooqbmD+7CRppmTi2X0I9Zc2WstZV/tLa2nFt/1FKXraE1qQY507QSlfhhGhP8FYgKSolaTIrwBkRAbu7+uM4Zh8M59zn3Oed7XXDux2P7buf+XJ/vdb/++7y/n+tzfT4FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFwWtuk+s+r46rjq8MUPALA9vrP4ub76enXPVm+4lQLgmdUrqt2Lfx+21TAAwLruqD5dXVT9Q/XZzdzkQAuAQ6tfqt5U/dBm/kMAYFtdXb29+qvqzo1+aaMFwEL1+uqt1bEHmgwAmLv/qn63+ttq33qdN1IAPL46tzpta7kAgBFcWJ1Z3bC/TusVAKdV51eP2aZQAMD83Vi9prp0rQ6z/Xz5VdWHM/gDwIPNY6sLqp9dq8NaMwA/Xf199ZA5hAIAxrG3enX1/pUXVisAnl1dUj10vpkAgBHcXr2gFa8LriwAHrnY4YSRQgEA83ddw549e5Yadq3o8OfVi0cMBADM31ENa/o+uNSwfAbgBQ2rBbdre2AA4IHjnurHqsvqvm8BvCWDPwDsVLPqD5f+sTTgP7/6xCRxAIAxPa+6bGkG4A1TJgEARvMrNcwAPLT6VvWISeMAAGO4pTpm1jD9b/AHgIPDEdVzZ9WLpk4CAIzqxbPq5KlTAACjetqsesrUKQCAUZ04azgxCAA4eDx2obqzOmTqJADAaO6crd8HANhpZtVtU4cAAEZ166y6ceoUAMCobpxV106dAgAY1TWz6sqpUwAAo7pqVl0ydQoAYFQXLVSHNRwGdMTEYQCA+dvT4mFAd1TvmzgMADCO97ZsH4BzpkwCAIzmnBr2Aaj6t+rS6bIAACO4sPpU1cKyxudVn1jRBgDsDPdUz60ur3tnAGqYBfjLKRIBAHN3TouDf93/1/4jq89UTxozEQAwV1+tTm14A6C67wxA1ber11a3jxgKAJif71SvbtngX/cvAKo+Xb2munuEUADA/HyvYfD//MoLax0H/E8NRcAdcwwFAMzPdxsG/w+vdnG9Ff8vrP6uOmabQwEA83NDw+D/ybU6rDUDsOTj1TOqj21jKABgfi5oGLvXHPxr/QKghiriJdXrqm9sPRcAMAfXNyzkP6PhjJ/9OtBNfw6pzqp+s/rhA44GAGy3q6q3Ve+p7trol7ay69/Tq5+pTmt4t/BhW7gXALAxtze8sXdR9YHq3zdzk+3a9nehOm7x8/DFDwCwPW5b/Hx98bNv2jgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8fCFr+/q3pmdWp1UvWE6uHVkdVsi/cGAOqeak91a/XN6svVFdVnq72bvelmCoBZdXp1ZvWy6ojN/ucAwKbtqT5UnVtd2FAobNiBFAC7ql+o3tzwax8AeGD4UvXW6m/aYCGw0QLgWdU7G6b7AYAHpiuqN1afWa/jrnWuL1RnV+dVP7D1XADAHD2++uWG8f3j1b61Ou5vBuDQhucKr97WaADAGM6rzqruWu3iWgXAYdUHGxb7AQAPTh+tXl7dufLCaq/q7Wr45W/wB4AHt5dU57fKI//V1gC8pfq1eScCAEZxUsNagEuWN658BHB6dUE28QGAneSe6ieqi5calhcAh1ZXVk8ZORQAMH9frZ5W3VH3fQTw5qz4B4Cd6qiG7YQ/WffOABxefa169DSZAIAR3FQ9sbpt6Vn/WRn8AWCnO7phW/+WFwAAwM53Zg2PAI5vmP4HAHa+fdVxs2r31EkAgNEsVLtn1XOnTgIAjOp5s+qpU6cAAEZ10qw6YeoUAMConjSrjpw6BQAwqiMXqrtb/VAgAGBn2jtrcU9gAOCgcfusumXqFADAqG6ZVddPnQIAGNXXZtWXp04BAIzqmln1qalTAACjumyh+sHq2qmTAACjefKs+kp11dRJAIBRfL66buk44HOnTAIAjObcGk4Eqjqq4UjgR0yVBgCYu1uqJ1Y3L80A/F/1Z5PFAQDG8Lbq5rp3BqCGX/9fro6dIhEAMFffbDgB+Laq2bILt1ZnT5EIAJi7N7U4+Nf9DwH6YsMMwDPHTAQAzNU7qj9Z3rCwSqfDqo9ULxwjEQAwVxdXZ1R3Lm9crQCoOrK6qPqROYcCAObnM9XuVjn4b3b/vlXtqV5UfXSOoQCA+bm4NQb/uv8agOXuqs6rDq2e39qzBQDAA8e+6u3VWdXta3Xa6KD+Uw0LCE7Yei4AYE6uq36jumC9jvubAVjuK9VfNLw+cHJ1+KajAQDb7cbqD6pfbNjTZ12bmdZ/WPXa6syGNwXWWkcAAMzP3urjDXv7n99+pvtXs9Xn+o9qWCz47OrE6rjqiOohW7wvAHCvuxsW811fXVtdXl3a4ra+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGzewjbe69Dq2OrIatc23hcADnZ7qz3Vf1d3bscNt1IAHFu9rDqtenZ1fAZ+AJinvdXXqiuqi6p/rG7YzI0OtABYqF5avan68Qz4ADClvdWF1durf672bfSLB1IA7K7+uDrlgKIBAGP4XPVb1aUb6byRAuCI6h3V67cQCgCYv33Vexpm6m/dX8f1CoCTq/dVT96eXADACK6tXlV9Ya0O+ysAfrRhccHR2xwKAJi/b1cvr/51tYtrFQDPqf6lOnxOoQCA+ftudXr1yZUXVisATqwuqx4151AAwPzd1DCr/9XljSsLgMMaBv+njxQKAJi/qxpm97+71LDyPf4/ql45ZiIAYO6OqQ6pPrbUsHwG4JTq09VDRg4FAMzf96pnVFfXfWcA3lWdNEUiAGDudjVs439+3TsDcErDDkLbeTgQAPDAsq9hzL9qttjwqxn8AWCnW6jesPTHIQ3HC9rwBwB2vv+tjp01vBZg8AeAg8Ojq1Nn1YsnDgIAjGv3LJv+AMDB5pRZw9a/AMDB46RZ9bipUwAAo3rcQnVHdejUSQCA0dwxq2brdgMAdpJds+q2qVMAAKO6ZdZwTjAAcPC4aVZdO3UKAGBU18yqL0ydAgAY1dWz6tKpUwAAo7pkoXp4dWP10InDAADzd3v12KW3AD40cRgAYBwfqL6ztAfAu6ZMAgCM5t1VC8sarqhOnSYLADCCy6vn1H13Afz9abIAACP5vaU/lhcAH254LgAA7DzvrT629I+FFRePqT5Xff+YiQCAufpW9YzqhqWGlQcBfas6s7p7xFAAwPx8r/r5lg3+VbtW6fgf1X9Wr+z+MwQAwIPHvuoN1ftXXlitAKi6svqf6owUAQDwYLS3+vXqnNUurlUA1PBa4Berl1aHbH8uAGBObq1eV/31Wh028uv+qdV51cnbFAoAmJ/PVz9XXbO/TisXAa7mSw0bBP1OQ0UBADzw3FL9dvWs1hn868Cf7x9VnV29sXrMAUcDALbbjdU7qz+tbt7olza7wO/7qp+sXlHtrp60yfsAAAfuuurihg38PtImXt/frhX+R1cnVk+ojqyOaP8LDAGAjdnbML2/p/pGw/T+TZMmAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgz+H3q+XIKNQmTpAAAAAElFTkSuQmCC"},"713b":function(A,e,t){"use strict";t("17d4")},"71e2":function(A,e,t){A.exports=t.p+"img/cv.6c57715a.png"},"71f2":function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA2ElEQVRoge3XSwqDMBhF4bOJSrv/rRQKtaM6cDntQAUp3qIxMb9wDwii5vGRkeCcc84555zLUwPcgXa8P2UX4A18xqsHblV3lFADdAyA7uf+NCczP4keuC48C38ySwj1LizmH0J9Ew6zBqG+DYPZglBjqmNSEGpsNcwehJrjcEwOhJrrMExOhJqzOKYEQs1dDFMSodbIjjkCodbKhjkSodbcjamBUGsnY2oi1B42YyIg1F5WYyIhppIwLTH/5uZ/nc81Ax7Ai1iIqYZhb4/aG3HOOeecc65eX5pSdBnfAYalAAAAAElFTkSuQmCC"},"758a":function(A,e,t){},"7a3a":function(A,e,t){A.exports=t.p+"img/vuejs.8d5ae0c5.png"},"85ec":function(A,e,t){},8627:function(A,e,t){"use strict";t("08e7")},"8d34":function(A,e,t){"use strict";t("758a")},"8d5b":function(A,e,t){"use strict";t("0e79")},"8ea0":function(A,e,t){"use strict";t("9e1b")},"92a7":function(A,e,t){"use strict";t("ae49")},9568:function(A,e,t){},"9e1b":function(A,e,t){},a26b:function(A,e,t){A.exports=t.p+"img/alhambra.40cd18f7.jpg"},aa15:function(A,e,t){"use strict";t("3d85")},ae49:function(A,e,t){},c419:function(A,e,t){A.exports=t.p+"img/gitlab.2e5f4ba6.png"},c765:function(A,e,t){A.exports=t.p+"img/gmail.7c234e99.png"},e245:function(A,e,t){},e4ad:function(A,e,t){"use strict";t("08ba")},e4b0:function(A,e,t){A.exports=t.p+"img/aws.2aa37ea6.png"},f415:function(A,e,t){"use strict";t("234b")},f516:function(A,e,t){"use strict";t("e245")}});
//# sourceMappingURL=app.98823e6b.js.map