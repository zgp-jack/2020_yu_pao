(tt.webpackJsonp=tt.webpackJsonp||[]).push([[58],{"120":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},p=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t};function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var f=r(0),o=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(f),y=r(1);function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}r(121);var a=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Temp,o.default.Component),n(Temp,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var o=Object.getPrototypeOf(t);return null===o?void 0:get(o,e,r)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(r):void 0})(Temp.prototype.__proto__||Object.getPrototypeOf(Temp.prototype),"_constructor",this).call(this,t),this.$$refs=new o.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,r){this.__state=t||this.state||{},this.__props=e||this.props||{},this.$prefix;var n=(0,f.useState)({"type":"temp","page":1}),o=p(n,2),a=o[0],i=(o[1],(0,f.useState)({"lists":[],"hasmore":!0})),s=p(i,2),u=s[0],l=s[1];return(0,f.useEffect)(function(){u.hasmore&&(0,y.getIntegralList)(a).then(function(t){var e=t.list.length;e?1===a.page?e<t.pageSize?l({"hasmore":!1,"lists":t.list}):l(c({},u,{"lists":t.list})):l(c({},u,{"lists":[].concat(_toConsumableArray(u.lists),_toConsumableArray(t.list))})):l(c({},u,{"hasmore":!1}))})},[a]),Object.assign(this.__state,{"lists":u}),this.__state}}]),Temp);function Temp(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Temp);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(Temp.__proto__||Object.getPrototypeOf(Temp)).apply(this,arguments));return t.$usedState=["lists"],t.customComponents=[],t}a.$$events=[],a.$$componentPath="pages/integral/temp/index",e.default=a,Page(r(0).default.createComponent(a,!0))},"121":function(t,e,r){}},[[120,0,1]]]);