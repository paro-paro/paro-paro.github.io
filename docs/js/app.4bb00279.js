(function(A){function e(e){for(var a,r,o=e[0],l=e[1],s=e[2],d=0,u=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(A[a]=l[a]);c&&c(e);while(u.length)u.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var A,e=0;e<i.length;e++){for(var t=i[e],a=!0,o=1;o<t.length;o++){var l=t[o];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),A=r(r.s=t[0]))}return A}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return A[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=A,r.c=a,r.d=function(A,e,t){r.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:t})},r.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},r.t=function(A,e){if(1&e&&(A=r(A)),8&e)return A;if(4&e&&"object"===typeof A&&A&&A.__esModule)return A;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var a in A)r.d(t,a,function(e){return A[e]}.bind(null,a));return t},r.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return r.d(e,"a",e),e},r.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var c=l;i.push([0,"chunk-vendors"]),t()})({0:function(A,e,t){A.exports=t("56d7")},"02f9":function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},"034f":function(A,e,t){"use strict";t("85ec")},"09ac":function(A,e,t){"use strict";t("755c")},"17db":function(A,e,t){"use strict";t("ee6f")},"196d":function(A,e,t){},"2d33":function(A,e,t){A.exports=t.p+"img/python.eb1d40d0.png"},"32f9":function(A,e,t){A.exports=t.p+"img/nodejs.4671ae58.png"},"3e39":function(A,e,t){A.exports=t.p+"img/linkedin.30c453b7.png"},"42c6":function(A,e,t){A.exports=t.p+"img/scrum.20f2d0c4.png"},"4a64":function(A,e,t){"use strict";t("eaa2")},"4cd4":function(A,e,t){},"529c":function(A,e,t){"use strict";t("a759")},5694:function(A,e,t){A.exports=t.p+"img/learn.2a430fcd.png"},"56d7":function(A,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),n=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{attrs:{id:"app"}},[t("NavBar"),t("Home"),t("Skills"),t("Experience"),t("Contact"),t("Footer")],1)},i=[],r=function(){var A=this,e=A.$createElement,a=A._self._c||e;return a("nav",{class:"nav-bar"},[a("div",{class:"container"},[a("div",{class:"nav-bar-container-content"},[a("NavBarMenu",{class:"nav-item-1"}),a("div",{class:"nav-item-2"},[a("a",{attrs:{href:"#Home"}},[a("span",[A._v("Antonio J Parody Guzmán")])])]),a("div",{class:"nav-item-3"},[a("ul",A._l(A.menu,(function(e,n){return a("li",{key:n},[a("a","Resume"===e?{attrs:{href:t("5eae"),target:"_blank"}}:{attrs:{href:"#"+e}},[a("span",[A._v(A._s(e))])])])})),0)])],1)])])},o=[],l=function(){var A=this,e=A.$createElement,a=A._self._c||e;return a("div",[a("el-dropdown",{attrs:{trigger:"click",placement:"bottom-start"}},[a("span",[a("img",{staticStyle:{cursor:"pointer"},attrs:{src:t("7121"),height:25}})]),a("el-dropdown-menu",{class:"dropdown-menu",attrs:{slot:"dropdown"},slot:"dropdown"},A._l(A.menu,(function(e,n){return a("el-dropdown-item",{key:n},[a("div",[a("a","Resume"===e?{attrs:{href:t("5eae"),target:"_blank"}}:{attrs:{href:"#"+e}},[a("span",[A._v(A._s(e))])])])])})),1)],1)],1)},s=[],c={name:"NavBarMenu",data:function(){return{menu:["Home","Skills","Experience","Contact","Resume"]}}},d=c,u=(t("b628"),t("2877")),p=Object(u["a"])(d,l,s,!1,null,"3e139102",null),m=p.exports,f={name:"NavBar",components:{NavBarMenu:m},data:function(){return{menu:["Home","Skills","Experience","Contact","Resume"]}}},g=f,v=(t("09ac"),Object(u["a"])(g,r,o,!1,null,"6c067a02",null)),h=v.exports,b=function(){var A=this,e=A.$createElement,a=A._self._c||e;return a("footer",{class:"footer"},[a("div",{class:"container"},[a("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",position:"relative"}},[a("div",{staticStyle:{"text-align":"center"}},[a("div",{staticStyle:{"font-size":"14px"}},[A._v("© Antonio Javier Parody Guzmán")]),a("div",{staticStyle:{"font-size":"14px","margin-top":"1rem"}},[A._v("Powered by "),a("a",{class:"link",attrs:{href:"https://vuejs.org/",target:"_blank"}},[a("span",[A._v("Vue.js")])])])]),a("div",{class:"arrow",staticStyle:{position:"absolute",right:"0"}},[a("img",{staticStyle:{cursor:"pointer"},attrs:{src:t("71f2")},on:{click:function(e){return A.click()}}})])])])])},w=[],y={name:"Footer",methods:{click:function(){window.scrollTo(0,0)}}},D=y,x=(t("b87f"),Object(u["a"])(D,b,w,!1,null,"64e2d490",null)),S=x.exports,q=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("section",{class:"section",attrs:{id:"Home"}},[t("div",{class:"container"},[t("div",{class:"row"},[t("div",{class:"col-12 col-lg-4"},[t("HomeLeft")],1),t("div",{class:"col-12 col-lg-8"},[t("HomeRight")],1)])])])},j=[],k=function(){var A=this,e=A.$createElement,a=A._self._c||e;return a("div",{staticStyle:{display:"flex","flex-direction":"column","text-align":"center"}},[a("img",{class:"avatar avatar-circle",attrs:{src:t("707c")}}),a("div",[a("h2",{staticStyle:{margin:"1.5rem 0 0 0","font-size":"30px","font-weight":"400"}},[A._v("Antonio J Parody Guzmán")]),a("h3",{staticStyle:{margin:"2rem 0 0 0"}},[A._v("Co-Founder - Full Stack Developer")]),a("h4",{staticStyle:{color:"#795548",margin:"1rem 0 0 0"}},[a("a",{class:"link",attrs:{href:"https://pod.coop/",target:"_blank"}},[A._v("Plant On Demand")])])]),a("div",{staticStyle:{"margin-top":"3rem"}},[a("ul",{staticStyle:{display:"flex","list-style":"none","justify-content":"center","align-items":"center",margin:"0",padding:"0",gap:"5px"}},[a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/aparody/",target:"_blank"}},[a("img",{class:"grow",attrs:{src:t("3e39"),height:32}})])]),a("li",[a("a",{attrs:{href:"https://github.com/paro-paro",target:"_blank"}},[a("img",{class:"grow",attrs:{src:t("02f9")}})])]),a("li",[a("a",{attrs:{href:"https://formsubmit.co/el/seyuvo"}},[a("img",{class:"grow",staticStyle:{cursor:"pointer"},attrs:{src:t("c765"),height:35}})])]),a("li",[a("a",{attrs:{href:t("5eae"),target:"_blank"}},[a("img",{class:"grow",staticStyle:{cursor:"pointer"},attrs:{src:t("71e2"),height:32}})])])])])])},B=[],E={name:"HomeLeft"},I=E,_=(t("4a64"),Object(u["a"])(I,k,B,!1,null,"5b3da44e",null)),M=_.exports,C=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",[t("h1",{staticStyle:{margin:"0","font-size":"35px","font-weight":"400"}},[A._v("Biography")]),t("p",[A._v("Hey! Nice to meet you. I'm Antonio and I like to consider myself a learning enthusiast.")]),t("p",[A._v("It was after my first two jobs as a traditional engineer when I got my first contact with software development and I truly fell in love with it.")]),t("p",[A._v("This made me change the course of my career, getting my first tech related job at SuperTech, where I could learnt the basics of start-ups business models working as product manager.")]),t("p",[A._v("This experience, along with a very strong determination to become a software developer, allowed me to co-found "),t("a",{class:"link",staticStyle:{color:"#795548"},attrs:{href:"https://pod.coop/",target:"_blank"}},[A._v("Plant On Demand")]),A._v(", the first online sales and management platform for the short food supply chain.")]),t("div",{class:"row"},[t("div",{class:"col-12 col-md-1"},[t("h2",[A._v("Interests")]),A._m(0)]),t("div",{class:"col-12 col-md-2"},[t("h2",[A._v("Education")]),A._m(1)])])])},P=[function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("ul",[t("li",[A._v("Data driven web applications")]),t("li",[A._v("Software development")]),t("li",[A._v("Education")]),t("li",[A._v("History, football and music")])])},function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("ul",[t("li",[A._v("Master in Electrical Engineering")]),t("li",[A._v("Master in Secondary Education")]),t("li",[A._v("Certificate Advanced English (C1)")]),t("li",[A._v("1 year exchange program at University of Dayton, EEUU")])])}],T={name:"HomeRight"},O=T,X=(t("e695"),Object(u["a"])(O,C,P,!1,null,"27bf0034",null)),U=X.exports,W={name:"Home",components:{HomeLeft:M,HomeRight:U}},H=W,Q=(t("d390"),Object(u["a"])(H,q,j,!1,null,"5b740aa7",null)),z=Q.exports,R=function(){var A=this,e=A.$createElement,a=A._self._c||e;return a("section",{class:"section",attrs:{id:"Skills"}},[a("div",{class:"container"},[a("div",{class:"row"},[a("div",{class:"col-12",staticStyle:{"padding-bottom":"1rem","font-size":"20px"}},[a("h1",[A._v("Skills")])]),a("div",{class:"col-12 col-md-6 col-lg-4"},[a("img",{attrs:{src:t("2d33"),height:45}}),a("h3",[A._v("Python")]),a("p",[A._v("Flask, Django, SQLAlchemy, pandas, numpy, openpyxl")])]),a("div",{class:"col-12 col-md-6 col-lg-4"},[a("img",{attrs:{src:t("7a3a"),height:45}}),a("h3",[A._v("Frontend")]),a("p",[A._v("HTML, CSS, JavaScript, Vue.js, Nuxt")])]),a("div",{class:"col-12 col-md-6 col-lg-4"},[a("img",{attrs:{src:t("e4b0"),height:45}}),a("h3",[A._v("Cloud engineering")]),a("p",[A._v("AWS EC2, AWS Lambda, AWS SQS, Elastic Beanstalk, S3, CloudFormation, CloudWatch")])]),a("div",{class:"col-12 col-md-6 col-lg-4"},[a("img",{attrs:{src:t("32f9"),height:45}}),a("h3",[A._v("Node.js")]),a("p",[A._v("Express")])]),a("div",{class:"col-12 col-md-6 col-lg-4"},[a("img",{attrs:{src:t("7028"),height:45}}),a("h3",[A._v("Databases")]),a("p",[A._v("MySQL, SQLite, AWS DynamoDB, MongoDB")])]),a("div",{class:"col-12 col-md-6 col-lg-4"},[a("img",{attrs:{src:t("c419"),height:45}}),a("h3",[A._v("DevOps")]),a("p",[A._v("Gitlab CI/CD")])]),a("div",{class:"col-12 col-md-6 col-lg-4"},[a("img",{attrs:{src:t("66e2"),height:45}}),a("h3",[A._v("Tech Tools")]),a("p",[A._v("git, serverless framework, jupyter notebook")])]),a("div",{class:"col-12 col-md-6 col-lg-4"},[a("img",{attrs:{src:t("42c6"),height:45}}),a("h3",[A._v("Tools")]),a("p",[A._v("Slack, Asana, Nuclino, Excel, SCRUM...")])]),a("div",{class:"col-12 col-md-6 col-lg-4"},[a("img",{attrs:{src:t("5694"),height:45}}),a("h3",[A._v("Mindset")]),a("p",[A._v("keep on learning")])])])])])},V=[],Z={name:"Skills"},N=Z,G=(t("a479"),Object(u["a"])(N,R,V,!1,null,"566b7fe4",null)),L=G.exports,Y=function(){var A=this,e=A.$createElement,a=A._self._c||e;return a("section",{class:"section",attrs:{id:"Experience"}},[a("div",{class:"container"},[a("div",{class:"row"},[a("div",{class:"col-12 col-lg-4"},[a("h1",{staticStyle:{margin:"0","font-size":"30px","font-weight":"400"}},[A._v("Experience")])]),a("div",{class:"col-12 col-lg-8"},[a("vue-timeline-update",{attrs:{theme:"light",icon:"code",color:"black",animation:!1,dateString:"2019 - Today",date:new Date("01-01-2000"),category:"success",title:"software developer - http 200",thumbnail:t("a26b")}},[[a("div",{staticStyle:{color:"black"}},[a("ul",[a("li",[a("span",[a("b",[A._v("Co-Founder | Full Stack Developer at "),a("a",{class:"link",attrs:{href:"https://pod.coop/",target:"_blank"}},[A._v("Plant On Demand")])])])])]),a("p",[A._v("As full stack developer I am part of the team in charge of the design and development of our core product: "),a("a",{class:"link",attrs:{href:"https://app.pod.coop/",target:"_blank"}},[A._v("app.pod.coop")])]),a("el-collapse",{attrs:{accordion:!1}},[a("el-collapse-item",{attrs:{title:"What is Plant On Demand?"}},[a("p",[A._v("Plant on Demand is a food-tech Software as a Service (SaaS) cloud platform that allows on-demand production of organic food.")]),a("p",[A._v("The platform provides a specific Cloud solution to help the digitalization of local producers, generating standardized data of their daily operations and enabling lightning-fast transactions with their clients. Simultaneously, it efficiently connects them to the whole food supply chain creating a solid, reliable network of local producers for retailers and end consumers to connect to.")]),a("p",[A._v("Tech stack:")]),a("ul",[a("li",[A._v("AWS Cloud Architecture")]),a("li",[A._v("SPA Frontend in Javascript (Vue.js)")]),a("li",[A._v("Backend API in Python (Flask)")]),a("li",[A._v("Relational Database in MySQL")]),a("li",[A._v("DevOps CI/CD pipelines with Gitlab")])])]),a("el-collapse-item",{attrs:{title:"See the future"}},[a("p",[A._v("Applying Artificial Intelligence (AI) techniques to the daily data generated by the platform and other external data sources, we will train models to predict supply and demand of local products, paving the way to proactively plant based on predicted demand on a sustainable way.")]),a("p",[A._v("In addition, by re-training our AI models based on new data and learning from errors, our platform’s neural and deep networks will keep improving over time, providing a sustainable food production model that ensures a future with quality ecological food from local producers whilst minimizing food waste and soil degradation.")])])],1)],1)]],2),a("vue-timeline-update",{attrs:{theme:"light",icon:"code",color:"black",animation:!1,dateString:"2017",date:new Date("01-01-2000"),category:"Next...",title:"product manager - http 404",thumbnail:t("a26b")}},[[a("div",{staticStyle:{color:"black"}},[a("ul",[a("li",[a("span",[a("b",[A._v("Product Manager | Operations Manager at "),a("a",{class:"link",attrs:{href:"https://www.supertech.delivery/en/home/",target:"_blank"}},[A._v("SuperTech")])])])])]),a("el-collapse",[a("el-collapse-item",{attrs:{title:"Check experience"}},[a("p",[A._v("By june 2017 I joined the SuperTech team as operations manager and in little more than a year I got promoted to product manager.")]),a("p",[A._v("In my first role I was responsible for delivery operations and customer support, supervising a team of 10 to 12 logistics employees.")]),a("p",[A._v("After joining the product development team I contributed to the design and validation of the followings tools:")]),a("ul",[a("li",[A._v("Desktop order management dashboard")]),a("li",[A._v("Mobile picking app")]),a("li",[A._v("Mobile courier app")])])])],1)],1)]],2),a("vue-timeline-update",{attrs:{theme:"light",icon:"code",color:"black",animation:!1,dateString:"2015",date:new Date("01-01-2000"),category:"first jobs",title:"commercial engineer - http 500",thumbnail:t("a26b")}},[[a("div",{staticStyle:{color:"black"}},[a("ul",[a("li",[a("span",[A._v("Purchasing engineer at "),a("a",{class:"link",attrs:{href:"https://www.caledonian.es/",target:"_blank"}},[A._v("Caledonian")])])]),a("li",[a("span",[A._v("Internship at "),a("a",{class:"link",attrs:{href:"https://www.redexisgas.es/",target:"_blank"}},[A._v("Redexis Gas")])])])])])]],2)],1)])])])},F=[],J={name:"Experience"},K=J,$=(t("17db"),Object(u["a"])(K,Y,F,!1,null,"6242e128",null)),AA=$.exports,eA=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("section",{class:"section",attrs:{id:"Contact"}},[t("div",{class:"container"},[t("div",{class:"row"},[t("div",{class:"col-12 col-lg-4"},[t("h1",{staticStyle:{margin:"0","font-size":"30px","font-weight":"400"}},[A._v("Contact")])]),t("div",{class:"col-12 col-lg-8"},[t("el-form",{ref:"Form",attrs:{id:"Form",model:A.form,rules:A.rules,"hide-required-asterisk":!0,"show-message":!0,"label-position":A.label_position,"label-width":"auto",action:"https://formsubmit.co/6e2d41bf1e229914a814d7d8b06870da",method:"POST"},nativeOn:{submit:function(e){return e.preventDefault(),A.submit()}}},[t("el-form-item",{attrs:{prop:"name",label:"Name"}},[t("el-input",{attrs:{name:"name",type:"text",maxlength:55,clearable:!0},model:{value:A.form.name,callback:function(e){A.$set(A.form,"name",e)},expression:"form.name"}})],1),t("el-form-item",{attrs:{prop:"email",label:"Email"}},[t("el-input",{attrs:{name:"email",type:"text",clearable:!0},model:{value:A.form.email,callback:function(e){A.$set(A.form,"email","string"===typeof e?e.trim():e)},expression:"form.email"}})],1),t("el-form-item",{attrs:{prop:"message",label:"Message"}},[t("el-input",{attrs:{name:"message",type:"textarea"},model:{value:A.form.message,callback:function(e){A.$set(A.form,"message",e)},expression:"form.message"}})],1),t("el-form-item",[t("el-button",{class:"button",attrs:{"native-type":"submit",size:"medium"}},[A._v("Send ")])],1),t("input",{attrs:{type:"hidden",name:"_subject"},domProps:{value:"New paro-paro form contact"}})],1)],1)])])])},tA=[],aA={name:"Contact",data:function(){return{form:{name:"",email:"",message:""},rules:{name:[{required:!0,message:"Please fill in this field",trigger:"change"}],email:[{required:!0,message:"Please fill in this field",trigger:"change"},{type:"email",message:"This email format is not valid",trigger:"blur"}],message:[{required:!0,message:"Please fill in this field",trigger:"change"}]},label_position:screen.width<992?"top":"left"}},methods:{submit:function(){this.$refs.Form.validate((function(A){if(!A)return!1;document.getElementById("Form").submit()}))}}},nA=aA,iA=(t("529c"),Object(u["a"])(nA,eA,tA,!1,null,"58cc6440",null)),rA=iA.exports,oA={name:"App",components:{NavBar:h,Footer:S,Home:z,Skills:L,Experience:AA,Contact:rA}},lA=oA,sA=(t("034f"),Object(u["a"])(lA,n,i,!1,null,null,null)),cA=sA.exports,dA=(t("bd49"),t("450d"),t("18ff")),uA=t.n(dA),pA=(t("960d"),t("defb")),mA=t.n(pA),fA=(t("cb70"),t("b370b")),gA=t.n(fA),vA=(t("eca7"),t("3787")),hA=t.n(vA),bA=(t("425f"),t("4105")),wA=t.n(bA),yA=(t("b0ee"),t("d180")),DA=t.n(yA),xA=(t("a335"),t("c0bb")),SA=t.n(xA),qA=(t("10cb"),t("f3ad")),jA=t.n(qA),kA=(t("1951"),t("eedf")),BA=t.n(kA),EA=t("3ed6"),IA=t.n(EA),_A=t("4897"),MA=t.n(_A);a["default"].use(BA.a),a["default"].use(jA.a),a["default"].use(SA.a),a["default"].use(DA.a),a["default"].use(wA.a),a["default"].use(hA.a),a["default"].use(gA.a),a["default"].use(mA.a),a["default"].use(uA.a),MA.a.use(IA.a);var CA=t("41fb"),PA=t.n(CA);a["default"].use(PA.a,{defaultDuration:650});var TA=t("7cf2");a["default"].use(TA["a"],{theme:"dark"}),a["default"].config.productionTip=!1,new a["default"]({render:function(A){return A(cA)}}).$mount("#app")},"5eae":function(A,e,t){A.exports=t.p+"bc0e540af1a44a70e11d34b9baa45fb4.pdf"},"66e2":function(A,e,t){A.exports=t.p+"img/git.cca1d728.png"},7028:function(A,e,t){A.exports=t.p+"img/database.974836a7.png"},"707c":function(A,e,t){A.exports=t.p+"img/profile.28c5dbd2.jpg"},7121:function(A,e){A.exports="data:image/png;base64,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"},"71e2":function(A,e,t){A.exports=t.p+"img/cv.6c57715a.png"},"71f2":function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA2ElEQVRoge3XSwqDMBhF4bOJSrv/rRQKtaM6cDntQAUp3qIxMb9wDwii5vGRkeCcc84555zLUwPcgXa8P2UX4A18xqsHblV3lFADdAyA7uf+NCczP4keuC48C38ySwj1LizmH0J9Ew6zBqG+DYPZglBjqmNSEGpsNcwehJrjcEwOhJrrMExOhJqzOKYEQs1dDFMSodbIjjkCodbKhjkSodbcjamBUGsnY2oi1B42YyIg1F5WYyIhppIwLTH/5uZ/nc81Ax7Ai1iIqYZhb4/aG3HOOeecc65eX5pSdBnfAYalAAAAAElFTkSuQmCC"},"755c":function(A,e,t){},"7a3a":function(A,e,t){A.exports=t.p+"img/vuejs.8d5ae0c5.png"},"85ec":function(A,e,t){},a26b:function(A,e,t){A.exports=t.p+"img/alhambra.40cd18f7.jpg"},a479:function(A,e,t){"use strict";t("4cd4")},a759:function(A,e,t){},b370:function(A,e,t){},b628:function(A,e,t){"use strict";t("196d")},b87f:function(A,e,t){"use strict";t("b370")},bd91:function(A,e,t){},c419:function(A,e,t){A.exports=t.p+"img/gitlab.2e5f4ba6.png"},c765:function(A,e,t){A.exports=t.p+"img/gmail.7c234e99.png"},d390:function(A,e,t){"use strict";t("d8dd")},d8dd:function(A,e,t){},e4b0:function(A,e,t){A.exports=t.p+"img/aws.2aa37ea6.png"},e695:function(A,e,t){"use strict";t("bd91")},eaa2:function(A,e,t){},ee6f:function(A,e,t){}});
//# sourceMappingURL=app.4bb00279.js.map