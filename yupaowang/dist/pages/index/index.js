(wx.webpackJsonp=wx.webpackJsonp||[]).push([[27],{"37":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var y=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e};function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var v=r(0),_=_interopRequireDefault(v),h=r(13),g=_interopRequireDefault(r(38)),R=r(6),T=r(18);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}r(39);var o=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,_.default.Component),n(Index,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,r)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(r):void 0})(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"_constructor",this).call(this,e),this.$$refs=new _.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,r){this.__state=e||this.state||{},this.__props=t||this.props||{};var n=this.$prefix,o=(0,v.genCompid)(n+"$compid__0"),a=y(o,2),i=a[0],u=a[1],l=(0,R.useDispatch)(),f=(0,v.useRouter)().params.type,c=(0,R.useSelector)(function(e){return e.tabbar.key}),s=(0,v.useState)(0),p=y(s,2),d=p[0],b=p[1];return(0,v.usePullDownRefresh)(function(){b(d+1)}),(0,v.useEffect)(function(){(0,h.typeInTabbar)(f)?l((0,T.changeTabbar)(f)):l((0,T.changeTabbar)(h.RECRUIT))},[f]),(0,v.useEffect)(function(){if(c){var e=g.default[c];_.default.setNavigationBarTitle({"title":e.navigationBarTitleText}),_.default.setNavigationBarColor({"backgroundColor":e.navigationBarBackgroundColor||"#0099ff","frontColor":"#ffffff"})}},[c]),v.propsManager.set({"notredirect":!0},u,i),Object.assign(this.__state,{"$compid__0":u,"tabKey":c,"HOME":h.HOME,"RECRUIT":h.RECRUIT,"RESUME":h.RESUME,"MEMBER":h.MEMBER}),this.__state}}]),Index);function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.$usedState=["$compid__0","tabKey","HOME","RECRUIT","RESUME","MEMBER"],e.customComponents=["Home","Recruit","Resume","Member","Tabbar"],e}o.$$events=[],o.$$componentPath="pages/index/index",o.config={"navigationBarTitleText":"","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},t.default=o,Component(r(0).default.createComponent(o,!0))},"38":function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{"value":!0});var o=r(13);function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}var a=(_defineProperty(n={"home":{"navigationBarTitleText":"首页","enablePullDownRefresh":!0}},o.RECRUIT,{"navigationBarTitleText":"招工","enablePullDownRefresh":!0}),_defineProperty(n,o.RESUME,{"navigationBarTitleText":"找活","enablePullDownRefresh":!0}),_defineProperty(n,o.MEMBER,{"navigationBarTitleText":"会员","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#2179f6"}),n);t.default=a},"39":function(e,t,r){}},[[37,0,1,2,3]]]);