(tt.webpackJsonp=tt.webpackJsonp||[]).push([[56],{"119":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},p=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var r=[],o=!0,n=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{!o&&s.return&&s.return()}finally{if(n)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e};function defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var y=r(0),n=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(y),h=r(1);function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}r(20);var a=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Source,n.default.Component),o(Source,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(Source.prototype.__proto__||Object.getPrototypeOf(Source.prototype),"_constructor",this).call(this,e),this.$$refs=new n.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,r){this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var o=(0,y.useState)({"type":"source","page":1}),n=p(o,2),a=n[0],i=n[1],s=(0,y.useState)({"lists":[],"hasmore":!0}),u=p(s,2),c=u[0],l=u[1];return(0,y.useEffect)(function(){c.hasmore&&(0,h.getIntegralList)(a).then(function(e){var t=e.list.length;t?1===a.page?t<e.pageSize?l({"hasmore":!1,"lists":e.list}):l(f({},c,{"lists":e.list})):l(f({},c,{"lists":[].concat(_toConsumableArray(c.lists),_toConsumableArray(e.list))})):l(f({},c,{"hasmore":!1}))})},[a]),(0,y.useReachBottom)(function(){i(f({},a,{"page":a.page+1}))}),(0,y.usePullDownRefresh)(function(){i(f({},a,{"page":1}))}),Object.assign(this.__state,{}),this.__state}}]),Source);function Source(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Source);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Source.__proto__||Object.getPrototypeOf(Source)).apply(this,arguments));return e.$usedState=[],e.customComponents=[],e}a.$$events=[],a.$$componentPath="pages/integral/source/index",t.default=a,Page(r(0).default.createComponent(a,!0))}},[[119,0,1]]]);