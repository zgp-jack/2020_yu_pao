(tt.webpackJsonp=tt.webpackJsonp||[]).push([[67],{"247":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var V=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},W=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var z=n(0),G=_interopRequireDefault(z),Q=n(2),Y=n(9),Z=n(6),tt=n(7),et=n(1),nt=n(18);n(248);var rt=_interopRequireDefault(n(4));function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var o=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Recruit,G.default.Component),r(Recruit,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:get(o,e,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0})(Recruit.prototype.__proto__||Object.getPrototypeOf(Recruit.prototype),"_constructor",this).call(this,t),this.$$refs=new G.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,n){function Xa(t){var e=(0,Y.getCityInfo)(t);G.default.setStorageSync(Z.UserListChooseCity,e),J([]),function editConditionAction(e,t){var n=JSON.parse(JSON.stringify(P)),r=n.findIndex(function(t){return t.id===e}),o=V({},n[r],{"text":t});n[r]=o,k(n)}("area",e.name),B(V({},q,{"page":1,"area_id":e.id}))}this.__state=t||this.state||{},this.__props=e||this.props||{};var r=this.$prefix,o=(0,z.genCompid)(r+"$compid__20"),a=W(o,2),i=a[0],u=a[1],c=(0,z.genCompid)(r+"$compid__21"),s=W(c,2),f=s[0],p=s[1],l=(0,z.genCompid)(r+"$compid__22"),y=W(l,2),_=y[0],d=y[1],g=(0,z.useState)(""),m=W(g,2),h=m[0],b=m[1],v=(0,z.useState)(!0),S=W(v,2),C=S[0],R=S[1],A=G.default.getStorageSync(Z.UserListChooseCity),O=(0,z.useState)([{"id":nt.AreaPickerKey,"text":A?A.name:"全国"},{"id":nt.ClassifyPickerKey,"text":"全部分类"},{"id":nt.FilterPickerKey,"text":"最新"}]),w=W(O,2),P=w[0],k=w[1],j=(0,z.useState)(0),$=W(j,2),F=$[0],x=$[1],D=(0,z.useState)(!1),L=W(D,2),N=L[0],I=L[1],T=(0,z.useState)([]),E=W(T,2),U=E[0],J=E[1],M=(0,z.useState)({"page":1,"list_type":"job","area_id":A?A.id:"","classify_id":"","keywords":"","joblisttype":"newest","token":""}),K=W(M,2),q=K[0],B=K[1];function eb(t){return b(t)}function fb(){return function setSearchValData(){B(V({},q,{"keywords":h,"page":1})),H()}()}function gb(t,e,n){return function setSearchDataAction(e,t,n){var r=JSON.parse(JSON.stringify(P)),o=r.findIndex(function(t){return t.id===e});r[o].text=n,k(r),e===nt.ClassifyPickerKey?B(V({},q,{"classify_id":t,"page":1})):e===nt.AreaPickerKey?B(V({},q,{"area_id":t,"page":1})):B(V({},q,{"joblisttype":t,"page":1})),H()}(t,e,n)}(0,z.useEffect)(function(){!function getRecruitListAction(){(0,Q.getRecruitList)(q).then(function(t){"ok"==t.errcode?(t.data?(t.data.length||R(!1),G.default.hideNavigationBarLoading(),1===q.page?J([[].concat(_toConsumableArray(t.data))]):J([].concat(_toConsumableArray(U),[[].concat(_toConsumableArray(t.data))]))):(1===q.page&&J([[]]),R(!1)),N&&I(!1)):(0,rt.default)(t.errmsg)})}(),q.area_id||function getUserLocation(){if(A)B(V({},q,{"page":1,"area_id":A.id}));else{var t=G.default.getStorageSync(Z.UserLocationCity);if(t)return Xa(t);(0,tt.userAuthLoction)().then(function(t){Xa(t)}).catch(function(){G.default.setStorageSync(Z.UserListChooseCity,Y.AREACHINA),J([]),B(V({},q,{"page":1,"area_id":Y.AREACHINA.id}))})}}()},[q]);var H=function goToScrollTop(){R(!0),x(F?0:.1)};this.anonymousFunc0=function(){return function pullDownAction(){I(!0),B(V({},q,{"page":1}))}()},this.anonymousFunc1=function(){return function getNextPageData(){C&&(G.default.showNavigationBarLoading(),B(V({},q,{"page":q.page+1})))}()};var X=(0,z.internal_inline_style)({"height":"8px"});return this.anonymousFunc2=function(){return function userPublishRecruit(){G.default.navigateTo({"url":et.PUBLISHRECRUIT})}()},z.propsManager.set({"placeholder":"找活、找工作","value":"","setRemark":eb,"setSearchData":fb},u,i),z.propsManager.set({"data":P,"setSearchData":gb},p,f),z.propsManager.set({"data":U,"hasMore":C},d,_),Object.assign(this.__state,{"anonymousState__temp":eb,"anonymousState__temp2":fb,"anonymousState__temp3":gb,"anonymousState__temp4":X,"$compid__20":u,"$compid__21":p,"$compid__22":d,"scrollTop":F,"refresh":N}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}}]),Recruit);function Recruit(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Recruit);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(Recruit.__proto__||Object.getPrototypeOf(Recruit)).apply(this,arguments));return t.$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","anonymousState__temp4","$compid__20","$compid__21","$compid__22","scrollTop","refresh"],t.customComponents=["Search","RecruitCondition","WechatNotice","RecruitList"],t}o.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2"],o.$$componentPath="pages/recruit/lists/index",e.default=o,Component(n(0).default.createComponent(o))},"248":function(t,e,n){}},[[247,0,1]]]);