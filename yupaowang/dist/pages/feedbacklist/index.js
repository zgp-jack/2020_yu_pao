(swan.webpackJsonp=swan.webpackJsonp||[]).push([[45],{"162":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=n(0),L=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(D),R=n(2),M=n(3);function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n(163);var a=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(FeedbackList,L.default.Component),r(FeedbackList,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(n):void 0})(FeedbackList.prototype.__proto__||Object.getPrototypeOf(FeedbackList.prototype),"_constructor",this).call(this,e),this.$$refs=new L.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){var i=this;this.__state=e||this.state||{},this.__props=t||this.props||{};var r=this.$prefix,a=(0,D.genCompid)(r+"$compid__58"),o=B(a,2),u=o[0],s=o[1],c=(0,D.useState)(!1),l=B(c,2),p=l[0],f=l[1],g=(0,D.useState)({"page":1}),y=B(g,2),d=y[0],h=y[1],v=(0,D.useState)({"item":[]}),m=B(v,2),b=m[0],_=m[1],O=(0,D.useState)({"phone":"","username":""}),w=B(O,2),k=w[0],F=w[1],P=(0,M.useSelector)(function(e){return e.User.login}),A=(0,D.useState)(!0),C=B(A,2),S=C[0],j=C[1];(0,D.useEffect)(function(){P&&x()},[P,d]);var x=function feedbackDataAction(){(0,R.feedbackAction)(d.page).then(function(e){L.default.hideNavigationBarLoading(),L.default.stopPullDownRefresh(),1===d.page?_({"item":[].concat(_toConsumableArray(e.data))}):_({"item":[].concat(_toConsumableArray(b.item),_toConsumableArray(e.data))}),F(e.memberInfo),p&&f(!1),e.data.length||j(!1)})};(0,D.useReachBottom)(function(){S&&(L.default.showNavigationBarLoading(),h($({},d,{"page":d.page+1})))}),(0,D.usePullDownRefresh)(function(){j(!0),h({"page":1})}),this.anonymousFunc2=function(){return function userRouteJump(e){L.default.navigateTo({"url":e})}("/pages/feedback/index?username="+(k.username||"")+"&phone="+(k.phone||""))};var T=b.item?b.item.map(function(a,o){return{"anonymousCallee__7":(a={"privateOriginal":(0,D.internal_get_original)(a)}).privateOriginal.images?a.privateOriginal.images.map(function(e,t){e={"privateOriginal":(0,D.internal_get_original)(e)};var n=a.privateOriginal.images?t+t:null,r="hezzz"+o+"-"+t;return i.anonymousFunc0Map[r]=function(){!function handleImg(e){L.default.previewImage({"current":e,"urls":[e]})}(e.privateOriginal)},{"loopState__temp2":n,"_$indexKey":r,"privateOriginal":e.privateOriginal}}):[],"privateOriginal":a.privateOriginal}}):[];return b.item.length||D.propsManager.set({"text":"暂无相关数据反馈"},s,u),Object.assign(this.__state,{"lists":b,"loopArray66":T,"$compid__58":s,"isDown":S}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(e){for(var t,n=arguments.length,r=Array(1<n?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return this.anonymousFunc0Map[e]&&(t=this.anonymousFunc0Map)[e].apply(t,r)}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}}]),FeedbackList);function FeedbackList(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,FeedbackList);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(FeedbackList.__proto__||Object.getPrototypeOf(FeedbackList)).apply(this,arguments));return e.config={"navigationBarTitleText":"鱼泡网-意见反馈列表","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.$usedState=["lists","loopArray66","$compid__58","isDown"],e.anonymousFunc0Map={},e.customComponents=["Auth","WechatNotice","Nodata"],e}a.$$events=["anonymousFunc0","anonymousFunc2"],a.$$componentPath="pages/feedbacklist/index",a.config={"navigationBarTitleText":"鱼泡网-意见反馈列表","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},t.default=a,Page(n(0).default.createComponent(a,!0))},"163":function(e,t,n){}},[[162,0,1]]]);