(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8e3:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,a=e.hasQuery,o=void 0!==a&&a;return n||i&&o}},2717:function(e,t,n){"use strict";var r=n(930);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=f,t.default=void 0;var a,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=r?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(a=n(1585))&&a.__esModule?a:{default:a},c=n(8e3),l=n(5850),d=n(9470);n(9475);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var x=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce(p,[]).reverse().concat(f(t.inAmpMode).reverse()).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var a=!0,o=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){o=!0;var s=i.key.slice(i.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(var c=0,l=x.length;c<l;c++){var d=x[c];if(i.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?a=!1:n.add(d);else{var u=i.props[d],f=r[d]||new Set;"name"===d&&o||!f.has(u)?(f.add(u),r[d]=f):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,o.default.cloneElement(e,s)}return o.default.cloneElement(e,{key:a})}))}var m=function(e){var t=e.children,n=o.useContext(c.AmpStateContext),r=o.useContext(l.HeadManagerContext);return o.default.createElement(s.default,{reduceComponentsToState:h,headManager:r,inAmpMode:d.isInAmpMode(n)},t)};t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.headManager,n=e.reduceComponentsToState;function i(){if(t&&t.mountedInstances){var i=r.Children.toArray(t.mountedInstances).filter(Boolean);t.updateHead(n(i,e))}}if(a){var c;null==t||null==(c=t.mountedInstances)||c.add(e.children),i()}return o((function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),o((function(){return t&&(t._pendingUpdate=i),function(){t&&(t._pendingUpdate=i)}})),s((function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}})),null};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294));function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}var a=!1,o=a?function(){}:r.useLayoutEffect,s=a?function(){}:r.useEffect},8493:function(e,t,n){"use strict";n.d(t,{A:function(){return i}});var r=n(5893),i=function(e){return(0,r.jsx)("div",{className:e.color,children:e.children})}},746:function(e,t,n){"use strict";n.d(t,{z:function(){return c}});var r=n(8791),i=n.n(r),a=n(4184),o=n.n(a),s=n(5893),c=function(e){var t=o()({btn:!0,"btn-xl":e.xl,"btn-base":!e.xl,"btn-primary":!0});return(0,s.jsxs)("div",{className:"jsx-3524228755 "+(t||""),children:[e.children,(0,s.jsx)(i(),{id:"3524228755",children:[".btn.jsx-3524228755{border-radius:.375rem;display:inline-block;text-align:center;}",".btn-base.jsx-3524228755{font-size:1.125rem;font-weight:600;padding:.5rem 1rem;}",".btn-xl.jsx-3524228755{font-size:1.25rem;font-weight:800;padding:1rem 1.5rem;}",".btn-primary.jsx-3524228755{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(34 40 49/var(--tw-bg-opacity));color:rgb(255 255 255/var(--tw-text-opacity));}",".btn-primary.jsx-3524228755:hover{--tw-bg-opacity:1;background-color:rgb(0 173 181/var(--tw-bg-opacity));}"]})]})}},4112:function(e,t,n){"use strict";n.d(t,{P:function(){return i}});var r=n(5893),i=function(e){return(0,r.jsxs)("header",{className:"text-center",children:[(0,r.jsx)("h1",{className:"text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero",children:e.title}),(0,r.jsx)("div",{className:"text-2xl text-retro-tan mt-4 mb-16",children:e.description}),e.button]})}},2865:function(e,t,n){"use strict";n.d(t,{o:function(){return i}});var r=n(5893),i=function(e){return(0,r.jsxs)("header",{className:"text-center",children:[(0,r.jsx)("h1",{className:"text-5xl text-retro-black font-bold whitespace-pre-line leading-hero",children:e.title}),(0,r.jsx)("div",{className:"text-2xl text-retro-black mt-4 mb-16",children:e.description}),e.button]})}},2342:function(e,t,n){"use strict";n.d(t,{$:function(){return i}});var r=n(5893),i=function(e){return(0,r.jsxs)("div",{className:"max-w-screen-lg mx-auto px-3 ".concat(e.yPadding?e.yPadding:"py-16"),children:[(e.title||e.description)&&(0,r.jsxs)("div",{className:"mb-12 text-center",children:[e.title&&(0,r.jsx)("h2",{className:"text-4xl text-retro-tan font-bold",children:e.title}),e.description&&(0,r.jsx)("div",{className:"text-2xl mt-4 text-retro-tan md:px-20",children:e.description})]}),e.children]})}},7937:function(e,t,n){"use strict";n.d(t,{l:function(){return i}});var r=n(5893),i=function(e){return(0,r.jsxs)("div",{className:"max-w-screen-lg mx-auto px-3 ".concat(e.yPadding?e.yPadding:"py-16"),children:[(e.title||e.description)&&(0,r.jsxs)("div",{className:"mb-12 text-center",children:[e.title&&(0,r.jsx)("h2",{className:"text-4xl text-retro-black font-bold",children:e.title}),e.description&&(0,r.jsx)("div",{className:"text-2xl mt-4 text-retro-black md:px-20",children:e.description})]}),e.children]})}},5141:function(e,t,n){"use strict";n.d(t,{g:function(){return d}});var r=n(8791),i=n.n(r),a=n(1664),o=n.n(a),s=n(8493),c=n(746),l=n(5893),d=function(){return(0,l.jsx)(s.A,{color:"bg-retro-black",children:(0,l.jsxs)("div",{className:"jsx-190026953 flex flex-wrap justify-between items-center",children:[(0,l.jsxs)("div",{className:"jsx-190026953",children:[(0,l.jsx)(o(),{href:"/",children:(0,l.jsx)("a",{className:"jsx-190026953",children:(0,l.jsx)(c.z,{xl:!0,children:"Home"})})}),(0,l.jsx)(o(),{href:"/Profits",children:(0,l.jsx)("a",{className:"jsx-190026953",children:(0,l.jsx)(c.z,{xl:!0,children:"Profits"})})}),(0,l.jsx)(o(),{href:"/History",children:(0,l.jsx)("a",{className:"jsx-190026953",children:(0,l.jsx)(c.z,{xl:!0,children:"History"})})}),(0,l.jsx)(o(),{href:"/Retirement",children:(0,l.jsx)("a",{className:"jsx-190026953",children:(0,l.jsx)(c.z,{xl:!0,children:"Retirement"})})}),(0,l.jsx)(o(),{href:"/FormAUnion",children:(0,l.jsx)("a",{className:"jsx-190026953",children:(0,l.jsx)(c.z,{xl:!0,children:"Form a Union"})})}),(0,l.jsx)(o(),{href:"/ContactAUnionOrganizer",children:(0,l.jsx)("a",{className:"jsx-190026953",children:(0,l.jsx)(c.z,{xl:!0,children:"Contact a Union Organizer"})})})]}),(0,l.jsx)(i(),{id:"190026953",children:[".navbar.jsx-190026953 li:not(:first-child){margin-top:0;}",".navbar.jsx-190026953 li:not(:last-child){margin-right:1.25rem;}"]})]})})}},6356:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(9008),i=n.n(r),a=n(5141),o=n(1664),s=n.n(o),c=n(8493),l=n(746),d=n(2865),u=n(7937),f=n(5893),p=function(){return(0,f.jsx)(c.A,{color:"bg-retro-tan",children:(0,f.jsx)(u.l,{yPadding:"pt-20 pb-32",children:(0,f.jsx)(d.o,{title:(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("span",{className:"text-retro-black",children:"Unionizing Walmarts Workforce\n"})}),description:"Notice: This site is not affiliated with Walmart.",button:(0,f.jsx)(s(),{href:"/FormAUnion",children:(0,f.jsx)("a",{children:(0,f.jsx)(l.z,{xl:!0,children:"How do I join?"})})})})})})},x=n(4112),h=n(2342),m=function(){return(0,f.jsx)(c.A,{color:"bg-retro-black",children:(0,f.jsxs)(h.$,{title:"Better Pay, Vacation, Law",description:"Unionizing can offer you more monthly take home pay and a better quality of life with a more consistent schedule.",children:[(0,f.jsx)(x.P,{title:(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("span",{className:"text-3xl text-retro-tan",children:"The Money.\n"})}),description:"Union workers make, on average, 11.2% higher pay than their non unionized counterparts. Black, Latino and women are paid 26%, 39.2% and 23.8% more, respectively, when they belong to a union.",button:null}),(0,f.jsx)("img",{src:"/assets/images/unionpay.png",className:"object-center embed-responsive-item",alt:"..."}),(0,f.jsx)(x.P,{title:(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("span",{className:"text-3xl text-retro-tan",children:"The Vacation.\n"})}),description:"When collective bargaining is done effectively, workers can obtain job security, better working conditions, higher wages, and quality health care. Unions can also negotiate to secure more vacation and sick time for employees, set set salary minimums, raise salary bands, and more. ",button:null}),(0,f.jsx)("img",{src:"/assets/images/percent-of-private-indus.png",className:"object-center embed-responsive-item",alt:"..."}),(0,f.jsx)(x.P,{title:(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("span",{className:"text-3xl text-retro-tan",children:"The Law.\n"})}),description:"The Wagner Act guaranteed the basic rights of employees to organize into unions, collectively bargain for better working conditions, and take collective action by striking if necessary. ",button:null}),(0,f.jsx)("img",{src:"/assets/images/workplacefatalities.png",className:"object-center embed-responsive-item",alt:"..."})]})})},j=function(){return(0,f.jsxs)("div",{className:"antialiased text-retro-black",children:[(0,f.jsx)(i(),{children:(0,f.jsx)("meta",{property:"og:type",content:"website"})}),(0,f.jsx)(i(),{children:(0,f.jsx)("meta",{property:"og:url",content:"https://www.walmartworkersunion.com/"})}),(0,f.jsx)(i(),{children:(0,f.jsx)("meta",{property:"og:title",content:"Union Benefits | Walmart"})}),(0,f.jsx)(i(),{children:(0,f.jsx)("meta",{property:"og:description",content:"Unionization Benefits for the larget company in the food industry!"})}),(0,f.jsx)(i(),{children:(0,f.jsx)("meta",{property:"og:image",content:"/assets/images/wagegap.png"})}),(0,f.jsx)(a.g,{}),(0,f.jsx)(p,{}),(0,f.jsx)(m,{})]})},g=function(){return(0,f.jsx)(j,{})}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6356)}])},9008:function(e,t,n){e.exports=n(2717)}},function(e){e.O(0,[823,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);