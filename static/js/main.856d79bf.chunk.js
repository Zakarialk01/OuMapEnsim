(this["webpackJsonpmind-ar-react"]=this["webpackJsonpmind-ar-react"]||[]).push([[0],{27:function(e){e.exports=JSON.parse('{"data":[{"name":"Mouad Sellak","image":"./img/avatar.jpg","progress":"50%","pos":{"lat":48.00454233910342,"lng":0.21406909053153916}},{"name":"Zakaria Loukili","image":"./img/zaki.png","progress":"70%","pos":{"lat":48.00124233910342,"lng":0.25206909053153914}},{"name":"Duc","image":"./img/duc.jpeg","progress":"30%","pos":{"lat":48.00124233910342,"lng":0.3520690905315392}},{"name":"Charles oliveira","image":"./img/charles.jpg","progress":"55%","pos":{"lat":48.00124233910342,"lng":0.45206909053153915}},{"name":"Emilie Hernandez","image":"./img/emilie.jpeg","progress":"20%","pos":{"lat":48.00124233910342,"lng":0.5520690905315392}},{"name":"Amine harit","image":"./img/amine.webp","progress":"90%","pos":{"lat":48.10124233910342,"lng":0.25206909053153914}},{"name":"Kim Kardashian","image":"./img/kim.jpg","progress":"100%","pos":{"lat":48.10124233910342,"lng":0.15206909053153916}},{"name":"Cristiano Ronaldo","image":"./img/siu.jpg","progress":"100%","pos":{"lat":48.10124233910342,"lng":0.05206909053153916}}]}')},33:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(26),c=a.n(i),o=(a(33),a(2)),r=(a(34),a(50),a(51),a(52),a.p+"static/media/myMap.e78dc06d.jpg"),l=a.p+"static/media/hellboy.fbeeb597.glb",d=a.p+"static/media/flag.629530c6.glb",j=a(27),g=a(0),m=function(e){var t,a=Object(n.useRef)(null),s=(e.newdX,e.newdY,e.newdZ,e.olddX,e.olddY,e.olddZ,Object(n.useState)(0)),i=Object(o.a)(s,2),c=i[0],m=i[1],b=Object(n.useState)(0),u=Object(o.a)(b,2),p=u[0],O=u[1],x=Object(n.useState)(0),h=Object(o.a)(x,2),f=h[0],C=h[1],v=Object(n.useState)(0),S=Object(o.a)(v,2),w=S[0],M=S[1],y=Object(n.useState)(0),k=Object(o.a)(y,2),H=k[0],I=k[1],F=Object(n.useState)(0),Z=Object(o.a)(F,2),E=Z[0],P=Z[1],N=-1.5;Object(n.useEffect)((function(){var n=a.current,s=n.systems["mindar-image-system"];return m(e.olddX),O(e.olddY),C(e.olddZ),M(e.newdX),I(e.newdY),P(e.newdZ),n.addEventListener("renderstart",(function(){s.start()}),[s]),function(){s.stop(),clearInterval(t)}}),[]),Object(n.useEffect)((function(){t=setInterval((function(){Math.random();m(N),M(N+=.1)}),5e3)}),[c,p,f,w,H,E]);return Object(g.jsxs)("a-scene",{ref:a,"mindar-image":"imageTargetSrc: map.mind; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;","color-space":"sRGB",embedded:!0,renderer:"colorManagement: true, physicallyCorrectLights","vr-mode-ui":"enabled: false","device-orientation-permission-ui":"enabled: true",children:[Object(g.jsxs)("a-assets",{children:[Object(g.jsx)("img",{id:"card",src:r}),Object(g.jsx)("a-asset-item",{id:"avatarModel",src:l}),Object(g.jsx)("a-asset-item",{id:"flagModel",src:d})]}),Object(g.jsx)("a-camera",{position:"0 0 0","look-controls":"enabled: false"}),Object(g.jsxs)("a-entity",{"mindar-image-target":"targetIndex: 0",children:[Object(g.jsx)("a-plane",{src:"#card",position:"0 0 0",height:"0.75",width:"1",rotation:"0 0 0"}),Object(g.jsx)("a-gltf-model",{rotation:"0 270 0 ",position:"-1.5 0 0.1",scale:"0.3 0.3 0.3",src:"#flagModel",color:"red"}),Object(g.jsx)("a-gltf-model",{rotation:"0 270 0 ",position:"0.2 -0.75 0.1",scale:"0.3 0.3 0.3",src:"#flagModel"}),Object(g.jsx)("a-gltf-model",{rotation:"0 270 0 ",position:"1.5 0.75 0.1",scale:"0.3 0.3 0.3",src:"#flagModel"}),j.data.map((function(e){return Object(g.jsx)("a-gltf-model",{rotation:"0 0 0",position:"".concat((Math.PI*e.pos.lng/180*1/2).toFixed(3)," ").concat((Math.PI*e.pos.lat/180*1/2).toFixed(3)," 0.5"),scale:"0.1 0.1 0.1",src:"#avatarModel",animation:"property: position; from: ".concat((Math.PI*e.pos.lng/180*1/2).toFixed(3),"  ").concat((Math.PI*e.pos.lat/180*1/2).toFixed(3)," 0.5 ; to: ").concat((Math.PI*e.pos.lng/180*1/2+1).toFixed(3),"  ").concat((Math.PI*e.pos.lat/180*1/2+1).toFixed(3)," 0.5;dur:").concat(5e3,"; easing: easeInOutQuad; loop: true; dir: alternate")})}))]})]})};function b(){var e=s.a.useState(!1),t=Object(o.a)(e,2);t[0],t[1];return Object(g.jsx)("header",{"aria-label":"Site Header",className:"shadow-md shadow-gray-500",children:Object(g.jsxs)("div",{class:"mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 ",children:[Object(g.jsx)("div",{class:"hidden items-center gap-4 lg:flex",children:Object(g.jsx)("a",{href:"",class:"rounded-lg  px-5 py-2 text-indigo-700  text-lg font-bold font-medium ",children:Object(g.jsxs)("svg",{class:"h-8 text-indigo-600 font-medium",viewBox:"0 0 118 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(g.jsx)("text",{x:"40",y:"18",fill:"currentColor",children:"Ou-Map"}),Object(g.jsx)("path",{d:"M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z",fill:"currentColor"})]})})}),Object(g.jsx)("nav",{"aria-label":"Site Nav",class:"hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"}),Object(g.jsx)("a",{href:"https://mouad-sellak.github.io/O-Map-Ensim/",class:"rounded-lg  px-5 py-2 text-indigo-700  text-md font-bold ",target:"_blank",children:Object(g.jsx)("span",{className:"",children:"Mode Normal"})})]})})}var u=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(1),c=Object(o.a)(i,2),r=c[0],l=c[1],d=Object(n.useState)(1),j=Object(o.a)(d,2),u=j[0],p=j[1],O=Object(n.useState)(1),x=Object(o.a)(O,2),h=x[0],f=x[1],C=Object(n.useState)(0),v=Object(o.a)(C,2),S=v[0],w=v[1],M=Object(n.useState)(0),y=Object(o.a)(M,2),k=y[0],H=y[1],I=Object(n.useState)(0),F=Object(o.a)(I,2),Z=F[0],E=F[1];return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(b,{}),Object(g.jsxs)("h1",{children:["Example React component with"," ",Object(g.jsx)("a",{href:"https://github.com/hiukim/mind-ar-js",target:"_blank",children:"MindAR"})]}),Object(g.jsxs)("div",{children:[!a&&Object(g.jsx)("button",{onClick:function(){w(-1.5),H(0),E(0),l(-1.4),p(0),f(0),s(!0)},children:"Start"}),a&&Object(g.jsx)("button",{onClick:function(){s(!1)},children:"Stop"})]}),a&&Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(m,{newdX:r,newdY:u,newdZ:h,olddX:S,olddY:k,olddZ:Z}),Object(g.jsx)("video",{})]})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,55)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};c.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(u,{})}),document.getElementById("root")),p()}},[[54,1,2]]]);
//# sourceMappingURL=main.856d79bf.chunk.js.map