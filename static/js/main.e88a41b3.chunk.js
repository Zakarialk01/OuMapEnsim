(this["webpackJsonpmind-ar-react"]=this["webpackJsonpmind-ar-react"]||[]).push([[0],{32:function(e,t,c){},51:function(e,t,c){},52:function(e){e.exports=JSON.parse("{}")},54:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(26),i=c.n(s),o=(c(32),c(2)),r=(c(33),c(49),c(50),c(51),c.p+"static/media/myMap.e78dc06d.jpg"),d=c.p+"static/media/hellboy.fbeeb597.glb",l=c.p+"static/media/flag.629530c6.glb",j=(c(52),c(0)),b=function(e){var t=Object(a.useState)("blue"),c=Object(o.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(!1),b=Object(o.a)(i,2),u=b[0],O=b[1],x=Object(a.useRef)(null),h=(e.newdX,e.newdY,e.newdZ,e.olddX,e.olddY,e.olddZ,Object(a.useState)(0)),m=Object(o.a)(h,2),C=(m[0],m[1]),g=Object(a.useState)(0),f=Object(o.a)(g,2),p=(f[0],f[1]),S=Object(a.useState)(0),w=Object(o.a)(S,2),v=(w[0],w[1]),y=Object(a.useState)(0),k=Object(o.a)(y,2),H=(k[0],k[1]),M=Object(a.useState)(0),Z=Object(o.a)(M,2),E=(Z[0],Z[1]),N=Object(a.useState)(0),L=Object(o.a)(N,2),X=(L[0],L[1]);Object(a.useEffect)((function(){var t=x.current,c=t.systems["mindar-image-system"];return C(e.olddX),p(e.olddY),v(e.olddZ),H(e.newdX),E(e.newdY),X(e.newdZ),t.addEventListener("renderstart",(function(){c.start()}),[c]),document.querySelector("#box").addEventListener("click",(function(e){s("red"===n?"blue":"red"),O(!u),console.log("color = ".concat(n)),console.log("isClick = ".concat(u))})),function(){c.stop()}}),[n,u]);return Object(j.jsxs)("a-scene",{ref:x,"mindar-image":"imageTargetSrc: map.mind; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;","color-space":"sRGB",embedded:!0,renderer:"colorManagement: true, physicallyCorrectLights","vr-mode-ui":"enabled: false","device-orientation-permission-ui":"enabled: true",children:[Object(j.jsxs)("a-assets",{children:[Object(j.jsx)("img",{id:"card",src:r}),Object(j.jsx)("a-asset-item",{id:"avatarModel",src:d}),Object(j.jsx)("a-asset-item",{id:"flagModel",src:l})]}),Object(j.jsx)("a-camera",{position:"0 0 0","look-controls":"enabled: false",cursor:"fuse: false; rayOrigin: mouse;",raycaster:"far: ${customFields.libVersion}; objects: .clickable"}),Object(j.jsxs)("a-entity",{"mindar-image-target":"targetIndex: 0",children:[Object(j.jsx)("a-plane",{src:"#card",position:"0 0 0",height:"0.75",width:"1",rotation:"0 0 0"}),Object(j.jsx)("a-box",{id:"box",color:"".concat(n),depth:"0.5",height:"0.5",width:"0.25",position:"0 0 0",class:"clickable"}),u?Object(j.jsx)("a-box",{id:"box",color:"green",depth:"0.25",height:"0.25",width:"0.25",position:"0.5 0.5 0"}):Object(j.jsx)("a-box",{id:"box",color:"green",depth:"0",height:"0",width:"0",position:"0.5 0.5 0"})]})]})};function u(){var e=n.a.useState(!1),t=Object(o.a)(e,2);t[0],t[1];return Object(j.jsx)("header",{"aria-label":"Site Header",className:"shadow-md shadow-gray-500",children:Object(j.jsxs)("div",{class:"mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 ",children:[Object(j.jsx)("div",{class:"hidden items-center gap-4 lg:flex",children:Object(j.jsx)("a",{href:"",class:"rounded-lg  px-5 py-2 text-indigo-700  text-lg font-bold font-medium ",children:Object(j.jsxs)("svg",{class:"h-8 text-indigo-600 font-medium",viewBox:"0 0 118 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("text",{x:"40",y:"18",fill:"currentColor",children:"Ou-Map"}),Object(j.jsx)("path",{d:"M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z",fill:"currentColor"})]})})}),Object(j.jsx)("nav",{"aria-label":"Site Nav",class:"hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"}),Object(j.jsx)("a",{href:"https://mouad-sellak.github.io/O-Map-Ensim/",class:"rounded-lg  px-5 py-2 text-indigo-700  text-md font-bold ",target:"_blank",children:Object(j.jsx)("span",{className:"",children:"Mode Normal"})})]})})}var O=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(1),i=Object(o.a)(s,2),r=i[0],d=i[1],l=Object(a.useState)(1),O=Object(o.a)(l,2),x=O[0],h=O[1],m=Object(a.useState)(1),C=Object(o.a)(m,2),g=C[0],f=C[1],p=Object(a.useState)(0),S=Object(o.a)(p,2),w=S[0],v=S[1],y=Object(a.useState)(0),k=Object(o.a)(y,2),H=k[0],M=k[1],Z=Object(a.useState)(0),E=Object(o.a)(Z,2),N=E[0],L=E[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{}),Object(j.jsxs)("h1",{children:["Example React component with"," ",Object(j.jsx)("a",{href:"https://github.com/hiukim/mind-ar-js",target:"_blank",children:"MindAR"})]}),Object(j.jsxs)("div",{children:[!c&&Object(j.jsx)("button",{onClick:function(){v(-1.5),M(0),L(0),d(-1.4),h(0),f(0),n(!0)},children:"Start"}),c&&Object(j.jsx)("button",{onClick:function(){n(!1)},children:"Stop"})]}),c&&Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(b,{newdX:r,newdY:x,newdZ:g,olddX:w,olddY:H,olddZ:N}),Object(j.jsx)("video",{})]})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,55)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),x()}},[[54,1,2]]]);
//# sourceMappingURL=main.e88a41b3.chunk.js.map