(self.webpackChunkblog=self.webpackChunkblog||[]).push([[691],{8125:function(e,t,r){const o=r(6899);e.exports={MDXRenderer:o}},6899:function(e,t,r){var o=r(861),n=r(3515),l=r(8416),u=r(215);const s=["scope","children"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const i=r(7294),{mdx:p}=r(4983),{useMDXScope:f}=r(5862);e.exports=function(e){let{scope:t,children:r}=e,l=u(e,s);const a=f(t),d=i.useMemo((()=>{if(!r)return null;const e=c({React:i,mdx:p},a),t=Object.keys(e),l=t.map((t=>e[t]));return n(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(o(l)))}),[r,t]);return i.createElement(d,c({},l))}},9108:function(e,t,r){"use strict";r.d(t,{A:function(){return o.A}});var o=r(4018);r(707)},6738:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return p}});var o=r(7294),n=r(6958),l=r(9108),u=r(2734),s=r(5414),a=r(7683),c=r(9),i=r(8125);t.default=e=>{const{edges:t}=e.data.allMdx;return o.createElement(l.A,null,o.createElement(s.Z,{title:"Blog | "+a.Z.siteTitle}),o.createElement(n.HJ,{path:"/",data:{title:a.Z.siteTitleAlt}}),o.createElement(n.h4,null,o.createElement(n.NZ,null,a.Z.siteTitle,o.createElement(f,null),o.createElement(n.Vm,null,a.Z.siteDescription))),o.createElement(n.im,null,o.createElement(u.VY,null,t.map((e=>o.createElement("li",{key:e.node.frontmatter.title,style:{listStyleType:"none",margin:0}},o.createElement(d,{dateTime:e.node.frontmatter.standardDate},o.createElement("p",null,e.node.frontmatter.date),o.createElement(i.MDXRenderer,null,e.node.body))))))))};const p=()=>o.createElement(n.HJ,null),f=c.default.hr.withConfig({displayName:"pages__Line",componentId:"sc-162dr3l-0"})(["color:white;width:5rem;margin:0.5rem auto;height:3px;"]),d=(c.default.span.withConfig({displayName:"pages__Title",componentId:"sc-162dr3l-1"})(["margin-right:0.5rem;"]),c.default.time.withConfig({displayName:"pages__DateTag",componentId:"sc-162dr3l-2"})(["color:rgba(0,0,0,0.5);"]))},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var o=r(3897);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var o=r(6015),n=r(9617);function l(t,r,u){return n()?(e.exports=l=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=l=function(e,t,r){var n=[null];n.push.apply(n,t);var l=new(Function.bind.apply(e,n));return r&&o(l,r.prototype),l},e.exports.__esModule=!0,e.exports.default=e.exports),l.apply(null,arguments)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e,t,r){var o=r(4062);e.exports=function(e,t,r){return(t=o(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},215:function(e,t,r){var o=r(7071);e.exports=function(e,t){if(null==e)return{};var r,n,l=o(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var o=r(3405),n=r(9498),l=r(6116),u=r(2281);e.exports=function(e){return o(e)||n(e)||l(e)||u()},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,r){var o=r(8698).default;e.exports=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,r){var o=r(8698).default,n=r(5036);e.exports=function(e){var t=n(e,"string");return"symbol"===o(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var o=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-tsx-9108c852c38011da2f9e.js.map