(wx.webpackJsonp=wx.webpackJsonp||[]).push([[20],{"93":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var _=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},y=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var r=[],o=!0,n=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(o=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);o=!0);}catch(t){n=!0,a=t}finally{try{!o&&c.return&&c.return()}finally{if(n)throw a}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t};function defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var d=r(0),n=_interopRequireDefault(d),v=r(6),b=_interopRequireDefault(r(94)),w=_interopRequireDefault(r(16)),O=r(2);function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}r(95);var a=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(WechatNotice,n.default.Component),o(WechatNotice,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var n=Object.getPrototypeOf(t);return null===n?void 0:get(n,e,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(WechatNotice.prototype.__proto__||Object.getPrototypeOf(WechatNotice.prototype),"_constructor",this).call(this,t),this.$$refs=new n.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,r){this.__state=t||this.state||{},this.__props=e||this.props||{};var o=this.$prefix,n=(0,d.genCompid)(o+"$compid__11"),a=y(n,2),i=a[0],c=a[1],u=(0,d.useState)({"vertical":!0,"lists":[]}),s=y(u,2),p=s[0],f=s[1],l=(0,v.useDispatch)(),h=(0,v.useSelector)(function(t){return t.WechatNotice});return(0,d.useEffect)(function(){h.success?f(_({},p,{"lists":h.notice})):(0,O.getWechatNotice)().then(function(t){t[w.default]=w.default;var e={"type":w.default,"data":t};f(_({},p,{"lists":t.notice})),l((0,b.default)(e))})},[]),d.propsManager.set({"data":p},c,i),Object.assign(this.__state,{"$compid__11":c,"wechatNoticeData":h}),this.__state}}]),WechatNotice);function WechatNotice(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,WechatNotice);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(WechatNotice.__proto__||Object.getPrototypeOf(WechatNotice)).apply(this,arguments));return t.$usedState=["$compid__11","wechatNoticeData"],t.customComponents=["SwiperNews"],t}a.$$events=[],a.$$componentPath="components/wechat/index",e.default=a,Component(r(0).default.createComponent(a))},"94":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{"value":!0}),e.default=function changeWechatNotice(t){return{"type":t.type,"data":t.data}}},"95":function(t,e,r){}},[[93,0,1,2,3]]]);