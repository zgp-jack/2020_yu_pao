(tt.webpackJsonp=tt.webpackJsonp||[]).push([[51],{"95":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var y=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e};function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var _=r(0),g=_interopRequireDefault(_),h=r(17),R=_interopRequireDefault(r(96)),T=r(3),E=r(36),o=r(2);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}r(97),console.log(o.UNITID),console.log(o.MINIVERSION);var a=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,g.default.Component),n(Index,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,r)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(r):void 0})(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"_constructor",this).call(this,e),this.$$refs=new g.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,r){this.__state=e||this.state||{},this.__props=t||this.props||{};var n=this.$prefix,o=(0,_.genCompid)(n+"$compid__4"),a=y(o,2),i=a[0],u=a[1],l=(0,T.useDispatch)(),f=(0,_.useRouter)().params.type,c=void 0===f?h.RECRUIT:f,s=(0,T.useSelector)(function(e){return e.tabbar.key}),p=(0,_.useState)(0),d=y(p,2),b=d[0],v=d[1];return(0,_.usePullDownRefresh)(function(){v(b+1)}),(0,_.useEffect)(function(){(0,h.typeInTabbar)(c)?l((0,E.changeTabbar)(c)):l((0,E.changeTabbar)(h.RECRUIT))},[c]),(0,_.useEffect)(function(){if(s){var e=R.default[s];g.default.setNavigationBarTitle({"title":e.navigationBarTitleText}),g.default.setNavigationBarColor({"backgroundColor":e.navigationBarBackgroundColor||"#0099ff","frontColor":"#ffffff"})}},[s]),_.propsManager.set({"notredirect":!0},u,i),Object.assign(this.__state,{"$compid__4":u,"tabKey":s,"HOME":h.HOME,"RECRUIT":h.RECRUIT,"RESUME":h.RESUME,"MEMBER":h.MEMBER}),this.__state}}]),Index);function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.$usedState=["$compid__4","tabKey","HOME","RECRUIT","RESUME","MEMBER"],e.customComponents=["Home","Recruit","Resume","Member","Tabbar"],e}a.$$events=[],a.$$componentPath="pages/index/index",a.config={"navigationBarTitleText":"","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},t.default=a,Page(r(0).default.createComponent(a,!0))},"96":function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{"value":!0});var o=r(17);function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}var a=(_defineProperty(n={"home":{"navigationBarTitleText":"首页","enablePullDownRefresh":!0}},o.RECRUIT,{"navigationBarTitleText":"招工","enablePullDownRefresh":!0}),_defineProperty(n,o.RESUME,{"navigationBarTitleText":"找活","enablePullDownRefresh":!0}),_defineProperty(n,o.MEMBER,{"navigationBarTitleText":"会员","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#2179f6"}),n);t.default=a},"97":function(e,t,r){}},[[95,0,1]]]);