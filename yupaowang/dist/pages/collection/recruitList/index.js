(swan.webpackJsonp=swan.webpackJsonp||[]).push([[45],{"294":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},F=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t};function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var x=r(0),M=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(x),T=r(2),H=r(3);function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}r(295);var o=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(RecruitList,M.default.Component),n(RecruitList,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var o=Object.getPrototypeOf(t);return null===o?void 0:get(o,e,r)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(r):void 0})(RecruitList.prototype.__proto__||Object.getPrototypeOf(RecruitList.prototype),"_constructor",this).call(this,t),this.$$refs=new M.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,r){this.__state=t||this.state||{},this.__props=e||this.props||{};var n=this.$prefix,o=(0,x.genCompid)(n+"$compid__57"),i=F(o,2),a=i[0],u=i[1],c=this.__props,s=c.bottom,l=c.initPage,f=(0,x.useState)(!1),p=F(f,2),y=p[0],_=p[1],h=(0,x.useState)([]),b=F(h,2),d=b[0],g=b[1],v=(0,x.useState)({"page":1}),m=F(v,2),O=m[0],w=m[1],C=(0,x.useState)(!1),R=F(C,2),L=R[0],P=R[1],j=(0,x.useState)(!1),A=F(j,2),$=A[0],S=A[1],k=(0,H.useSelector)(function(t){return t.User.login});(0,x.useEffect)(function(){k&&D()},[k,O]);var D=function getCollectionRecruitListDataAction(){(0,T.getCollectionRecruitListData)(O.page).then(function(t){M.default.hideNavigationBarLoading(),M.default.stopPullDownRefresh(),t.list.length||P(!0),1===O.page?g([].concat(_toConsumableArray(t.list))):g([].concat(_toConsumableArray(d),_toConsumableArray(t.list))),y&&_(!1),$&&S(!1)})};return(0,x.useEffect)(function(){s&&(L||w(E({},O,{"page":O.page+1})))},[s]),(0,x.useEffect)(function(){0!==l&&(P(!1),w({"page":1}))},[l]),this.anonymousFunc0=function recruitListHandler(t){(0,T.recruitListCancelCollectionAction)(t).then(function(t){"ok"===t.errcode&&w({"page":1})})},x.propsManager.set({"data":d,"onHandlerClick":this.anonymousFunc0,"recruitNoMoreData":L},u,a),Object.assign(this.__state,{"$compid__57":u}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}}]),RecruitList);function RecruitList(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,RecruitList);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(RecruitList.__proto__||Object.getPrototypeOf(RecruitList)).apply(this,arguments));return t.$usedState=["$compid__57","bottom","initPage"],t.customComponents=["CollectionRecruitList"],t}o.$$events=[],o.$$componentPath="pages/collection/recruitList/index",e.default=o,Component(r(0).default.createComponent(o))},"295":function(t,e,r){}},[[294,0,1]]]);