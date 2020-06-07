(function(e){function t(t){for(var i,r,c=t[0],s=t[1],l=t[2],u=0,h=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(t);while(h.length)h.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(i=!1)}i&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},o=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/LuCreative/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01e3":function(e,t,n){e.exports=n.p+"img/watchlist_light.5a4ea783.png"},"034f":function(e,t,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},1548:function(e,t,n){e.exports=n.p+"img/profile_light.098ad3ea.png"},"39d7":function(e,t,n){e.exports=n.p+"img/social_dark.2755715c.png"},"3aba":function(e,t,n){e.exports=n.p+"img/chart_dark.95170076.png"},"3e95":function(e,t,n){e.exports=n.p+"img/info.3cfcfbc2.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("SplashView"),n("About"),n("Showcase")],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"flex"},[n("div",{ref:"container",staticClass:"canvas"}),n("div",{staticClass:"flex canvas__text"},[e._v(" Software Engineer & Educator. ")])])},c=[],s=(n("4160"),n("159b"),n("5a89")),l={data:function(){return{camera:null,scene:null,renderer:null,mesh:null,stars:null,starsGeo:null,starImg:n("adfd")}},mounted:function(){this.initialize()},methods:{initialize:function(){var e=this.$refs["container"];this.scene=new s["f"],this.scene.background=new s["a"](10897730),this.camera=new s["c"](60,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.z=1,this.camera.rotation.x=Math.PI/2,this.renderer=new s["i"],this.renderer.setSize(window.innerWidth,window.innerHeight),e.append(this.renderer.domElement),this.starGeo=new s["b"];for(var t=0;t<3e3;t++){var n=new s["h"](600*Math.random()-300,600*Math.random()-300,600*Math.random()-300);n.velocity=0,n.acceleration=.002,this.starGeo.vertices.push(n)}var i=(new s["g"]).load(this.starImg),a=new s["e"]({color:16777215,size:.7,map:i});this.stars=new s["d"](this.starGeo,a),this.scene.add(this.stars),window.addEventListener("resize",this.onWindowResize,!1),this.animate()},onWindowResize:function(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},animate:function(){this.starGeo.vertices.forEach((function(e){e.velocity+=e.acceleration,e.x-=e.velocity,e.x<-300&&(e.x=window.innerWidth/5,e.velocity=0)})),this.starGeo.verticesNeedUpdate=!0,this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate)}}},d=l,u=(n("f0b6"),n("2877")),h=Object(u["a"])(d,r,c,!1,null,"a6c213c2",null),p=h.exports,m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"flex description__section"},[i("img",{staticClass:"me",attrs:{src:n("c8fc")}}),i("span",{staticClass:"description__heading"},[e._v("Hello, I'm "),i("span",{staticClass:"secondary--text"},[e._v("Joses.")])]),i("div",{staticClass:"description__body"},[e._v(" I'm a developer with an affinity towards Front End Development but can switch to Back End when the need arises. ")]),i("br"),i("div",{staticClass:"description__body"},[e._v(" I have participated in Programming competitions (once outside the country!) and eventually grew to judge a few. I've spoken at technical conferences and loved it so much that I also teach programming at "),i("a",{attrs:{href:"https://mcm.edu.ph/",target:"#"}},[e._v("Malayan College Mindanao")]),e._v(". ")])])}],b=(n("bb05"),{}),g=Object(u["a"])(b,m,f,!1,null,"574bd11c",null),w=g.exports,v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"flex showcase__section"},[i("div",{staticClass:"card showcase__container"},[i("div",{staticClass:"showcase__heading"},[e._v("Projects")]),i("div",{staticClass:"showcase__subtitle"},[i("a",{attrs:{href:"https://lyduz.com",target:"#"}},[e._v("Lyduz / Arbitrage Philippines")]),i("button",{staticClass:"showcase__button--info",attrs:{type:"button"},on:{click:function(t){e.detailsToggle=!e.detailsToggle}}},[i("img",{attrs:{src:n("3e95"),width:"100%"}})])]),e.detailsToggle?i("div",{staticClass:"showcase__details"},[i("span",[e._v("My biggest project to date, where I led the frontend team in development. VueJS was the framework of choice and I handled the initialization of the entire frontend codebase and planned the infrastructure, including what standards would be enforced and the surrounding implementation of the website.")]),i("br"),i("br"),i("span",[e._v(" The platform was in the financial technology industry where we dealt with everything related to the Philippine Stock Exchange. It was a multi-faceted site with many different components including a built-in social media platform, charting tools, real-time trading data, trading journals and much more. ")])]):i("div",[e._l(e.images,(function(t,n){return i("img",{key:n,staticClass:"image",attrs:{src:t},on:{click:function(t){e.index=n}}})})),i("vue-gallery-slideshow",{attrs:{images:e.images,index:e.index},on:{close:function(t){e.index=null}}})],2)])])},A=[],I=n("b417"),y=n.n(I),j={data:function(){return{images:[n("39d7"),n("a36e"),n("3aba"),n("fdea"),n("1548"),n("01e3")],index:null,detailsToggle:!1}},components:{VueGallerySlideshow:y.a},methods:{test:function(){alert("vovo")}}},N=j,M=(n("bc80"),Object(u["a"])(N,v,A,!1,null,"4ddbd0ff",null)),k=M.exports,O={name:"App",components:{SplashView:p,About:w,Showcase:k}},Z=O,D=(n("034f"),Object(u["a"])(Z,a,o,!1,null,null,null)),R=D.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(R)}}).$mount("#app")},"5b21":function(e,t,n){},"85ec":function(e,t,n){},a36e:function(e,t,n){e.exports=n.p+"img/watchlist_dark.5748dc68.png"},a842:function(e,t,n){},adfd:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA5LTEwVDA4OjI3OjI4KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA5LTEwVDA4OjI3OjI4KzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wOS0xMFQwODoyNzoyOCswNzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0ZmU0ODhkMy0wMjU5LWQ0NDEtOWNlMS1mNDg2NzEwNWU3NjQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3NDNmOTk3Ny0yMjVlLWIyNDktYjMzNy0wNTA2MGU1NTM0NjEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZThiNTZjMS04NjVmLTNkNGItYTk1Yy03YjY2Mzk1ZDIwMDMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ZThiNTZjMS04NjVmLTNkNGItYTk1Yy03YjY2Mzk1ZDIwMDMiIHN0RXZ0OndoZW49IjIwMTktMDktMTBUMDg6Mjc6MjgrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGZlNDg4ZDMtMDI1OS1kNDQxLTljZTEtZjQ4NjcxMDVlNzY0IiBzdEV2dDp3aGVuPSIyMDE5LTA5LTEwVDA4OjI3OjI4KzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0FZuFwAAAcBJREFUaN7lmklOAkEUhlmIF5BARLea4GEQV5Do2oQdmOBCz6C9EK8i3IEOstRwBSEBlKghfC58nXS0VYYe6pV/8jadrqr+UkPXG1JAygYLs7MsUAYcoAU8AAPgVWwgz1ryTlnaGAGyBdSBDjBnec2lbV36ih1kG7gCnglPL8ANkI8DZANoABOi00TGSEcFsgd0iU/3wEHYIIfAiPg1AUphgZwCM5LTTL5hLZAq5qi6Kkgx4ZkImpnisiCFiE+mdfZMYVGQNNDDXPWCjuYgkAbm6/wvkLyhSypoieV/A2miR7c/gWSAqSKQqXzzN5Aa+lQLAnEVgnS+gmRX9CeS1tzb9B5IBb069oM4ikEcP0hLMcidH6SvGKTvBxkrBhn7QbTLCpA3W5bWk5Wb3Zrj15ofouYryokfJGfLpVHrNd61xbE6s9rVTYlDrz74YFU4yJoAnRcy7RoM0WXBkKmXnRoZCDEG9vmPaQWrEj1Wpd48K5FcMvQI5enpHhGkpz3bBC4ivspMgUsZK/ISjh3gmvBLOJrALgkU1WT4LIhxWb2oxpU+MhhS5pQTT9MB2sAjMATexYbyrC3vVKSNcfVaidoHrhc50nP+8ssAAAAASUVORK5CYII="},bb05:function(e,t,n){"use strict";var i=n("c327"),a=n.n(i);a.a},bc80:function(e,t,n){"use strict";var i=n("5b21"),a=n.n(i);a.a},c327:function(e,t,n){},c8fc:function(e,t,n){e.exports=n.p+"img/ses2.d855179a.png"},f0b6:function(e,t,n){"use strict";var i=n("a842"),a=n.n(i);a.a},fdea:function(e,t,n){e.exports=n.p+"img/landing_page.8200ab68.png"}});
//# sourceMappingURL=app.24fba0c2.js.map