(swan.webpackJsonp=swan.webpackJsonp||[]).push([[60],{"159":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e};function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var h=r(0),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(h),y=r(2);function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}r(25);var a=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Integral,o.default.Component),n(Integral,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,r)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(r):void 0})(Integral.prototype.__proto__||Object.getPrototypeOf(Integral.prototype),"_constructor",this).call(this,e),this.$$refs=new o.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,r){this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var n=(0,h.useState)({"type":"expend","page":1}),o=p(n,2),a=o[0],i=o[1],s=(0,h.useState)({"lists":[],"hasmore":!0}),l=p(s,2),u=l[0],c=l[1];return(0,h.useEffect)(function(){u.hasmore&&(0,y.getIntegralList)(a).then(function(e){var t=e.list.length;t?1===a.page?t<e.pageSize?c({"hasmore":!1,"lists":e.list}):c(f({},u,{"lists":e.list})):c(f({},u,{"lists":[].concat(_toConsumableArray(u.lists),_toConsumableArray(e.list))})):c(f({},u,{"hasmore":!1}))})},[a]),(0,h.useReachBottom)(function(){i(f({},a,{"page":a.page+1}))}),(0,h.usePullDownRefresh)(function(){i(f({},a,{"page":1}))}),Object.assign(this.__state,{"lists":u}),this.__state}}]),Integral);function Integral(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Integral);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Integral.__proto__||Object.getPrototypeOf(Integral)).apply(this,arguments));return e.config={"navigationBarTitleText":"积分来源记录","enablePullDownRefresh":!0},e.$usedState=["lists"],e.customComponents=[],e}a.$$events=[],a.$$componentPath="pages/integral/expend/index",a.config={"navigationBarTitleText":"积分来源记录","enablePullDownRefresh":!0},t.default=a,Page(r(0).default.createComponent(a,!0))}},[[159,0,1]]]);