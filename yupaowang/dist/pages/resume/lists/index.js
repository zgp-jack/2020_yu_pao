(swan.webpackJsonp=swan.webpackJsonp||[]).push([[90],{"305":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},X=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,a=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){a=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(a)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var Y=n(0),Z=_interopRequireDefault(Y),ee=n(3),te=n(22),ne=n(5),oe=n(2),ae=n(1);n(306);var re=_interopRequireDefault(n(4)),ie=_interopRequireDefault(n(19));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ResumeLists,Z.default.Component),o(ResumeLists,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(n):void 0})(ResumeLists.prototype.__proto__||Object.getPrototypeOf(ResumeLists.prototype),"_constructor",this).call(this,e),this.$$refs=new Z.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{};var o=this.$prefix,a=(0,Y.genCompid)(o+"$compid__35"),r=X(a,2),i=r[0],s=r[1],u=(0,Y.genCompid)(o+"$compid__36"),c=X(u,2),l=c[0],p=c[1],f=(0,Y.genCompid)(o+"$compid__37"),_=X(f,2),m=_[0],y=_[1],d=(0,ie.default)(),g=d.infoData,h=(d.introducesData,(0,ee.useSelector)(function(e){return e.User.login})),v=Z.default.getStorageSync(ne.UserListChooseCity),b=[{"id":te.AreaPickerKey,"text":v?v.name:"全国"},{"id":te.ClassifyPickerKey,"text":"工种"},{"id":te.MemberPickerKey,"text":"队伍"},{"id":te.ResumeFilterPickerKey,"text":"推荐"}],S=(0,Y.useState)(!0),k=X(S,2),R=k[0],w=k[1],P=(0,Y.useState)(b),C=X(P,2),O=C[0],x=C[1],D=(0,Y.useState)(""),$=X(D,2),A=$[0],F=$[1],j=(0,Y.useState)(!1),L=X(j,2),T=L[0],B=L[1],M=(0,Y.useState)([]),K=X(M,2),E=K[0],J=K[1],N=(0,Y.useState)({"page":1,"occupations":"","keywords":"","sort":"recommend","location":"","area_id":v?v.id:"","type":"","last_refresh_time_pos":0}),q=X(N,2),I=q[0],U=q[1],H={"has_sort_flag":"1","has_time":"1","has_top":"1","last_sort_flag_pos":"0","last_normal_pos":"0","last_time_pos":"0"},V=(0,Y.useState)(H),W=X(V,2),z=W[0],G=W[1];function nb(e){return F(e)}function ob(){return function setSearchValData(){G(H),U(Q({},I,{"keywords":A,"page":1}))}()}function pb(e,t,n){return function setSearchDataAction(t,e,n){var o=JSON.parse(JSON.stringify(O)),a=o.findIndex(function(e){return e.id===t});o[a].text=n,x(o),G(H),t===te.ClassifyPickerKey?U(Q({},I,{"occupations":e,"page":1})):t===te.AreaPickerKey?U(Q({},I,{"area_id":e,"page":1})):t===te.ResumeFilterPickerKey?U(Q({},I,{"sort":e,"page":1})):t===te.MemberPickerKey&&U(Q({},I,{"type":e,"page":1}))}(e,t,n)}return(0,Y.useEffect)(function(){1===I.page&&J([]),(0,oe.getResumeList)(Q({},I,z)).then(function(e){if(Z.default.hideNavigationBarLoading(),"ok"==e.errcode){var t=e.data;if(t.list&&t.list.length){var n=t.has_sort_flag,o=void 0===n?"1":n,a=t.has_time,r=void 0===a?"1":a,i=t.has_top,s=void 0===i?"1":i,u=t.last_sort_flag_pos,c=void 0===u?"0":u,l=t.last_normal_pos,p=void 0===l?"0":l,f=t.last_time_pos;G({"has_sort_flag":o,"has_time":r,"has_top":s,"last_sort_flag_pos":c,"last_normal_pos":p,"last_time_pos":void 0===f?"0":f})}t.list&&!t.list.length&&w(!1),1===I.page?J([[].concat(_toConsumableArray(t.list))]):J([].concat(_toConsumableArray(E),[[].concat(_toConsumableArray(t.list))])),T&&B(!1)}else(0,re.default)(e.errmsg)})},[I]),this.anonymousFunc0=function(){return function pullDownAction(){B(!0),w(!0),U(Q({},I,{"page":1}))}()},this.anonymousFunc1=function(){return function getNextPageData(){R&&U(Q({},I,{"page":I.page+1}))}()},this.anonymousFunc2=function(){return function userRouteJump(e){Z.default.navigateTo({"url":e})}(ae.PUBLISHRESUME)},Y.propsManager.set({"placeholder":"找工人、找队伍、找班组","value":"","setRemark":nb,"setSearchData":ob},s,i),Y.propsManager.set({"data":O,"setSearchData":pb},p,l),Y.propsManager.set({"data":E,"hasMore":R},y,m),Object.assign(this.__state,{"anonymousState__temp":nb,"anonymousState__temp2":ob,"anonymousState__temp3":pb,"$compid__35":s,"$compid__36":p,"$compid__37":y,"refresh":T,"infoData":g,"login":h}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}}]),ResumeLists);function ResumeLists(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ResumeLists);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ResumeLists.__proto__||Object.getPrototypeOf(ResumeLists)).apply(this,arguments));return e.config={"navigationBarTitleText":"工人找活列表","navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","$compid__35","$compid__36","$compid__37","refresh","infoData","login"],e.customComponents=["Search","ResumeCondition","WechatNotice","ResumeList"],e}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2"],a.$$componentPath="pages/resume/lists/index",a.config={"navigationBarTitleText":"工人找活列表","navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},t.default=a,Component(n(0).default.createComponent(a))},"306":function(e,t,n){}},[[305,0,1]]]);