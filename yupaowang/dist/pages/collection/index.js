(swan.webpackJsonp=swan.webpackJsonp||[]).push([[44],{"179":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var $=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&l.return&&l.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var x=n(0),D=_interopRequireDefault(x),j=_interopRequireDefault(n(180)),k=_interopRequireDefault(n(5));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(181);var r=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Collection,D.default.Component),o(Collection,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0})(Collection.prototype.__proto__||Object.getPrototypeOf(Collection.prototype),"_constructor",this).call(this,e),this.$$refs=new D.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){var o=this;this.__state=e||this.state||{},this.__props=t||this.props||{};var r=this.$prefix,i=(0,x.genCompid)(r+"$compid__55"),a=$(i,2),l=a[0],u=a[1],c=(0,x.genCompid)(r+"$compid__56"),s=$(c,2),p=s[0],f=s[1],_=(0,x.useState)(1),d=$(_,2),v=d[0],y=d[1],g=(0,x.useState)(0),b=$(g,2),h=b[0],m=b[1],w=(0,x.useState)(0),C=$(w,2),O=C[0],P=C[1];(0,x.useReachBottom)(function(){m(h+1)}),(0,x.usePullDownRefresh)(function(){P(O+1)});var R=j.default.map(function(e,t){e={"privateOriginal":(0,x.internal_get_original)(e)};var n="ibzzz"+t;return o.anonymousFunc0Map[n]=function(){return function handleTable(e){m(0),P(0),y(e),D.default.setNavigationBarTitle({"title":j.default[e-1].title})}(e.privateOriginal.id)},{"_$indexKey":n,"loopState__temp2":(0,k.default)({"collection-tab-border":e.privateOriginal.id===v,"collection-tab-content":!0}),"loopState__temp4":(0,k.default)({"collection.active-text":e.privateOriginal.id===v}),"privateOriginal":e.privateOriginal}});return 1===v&&x.propsManager.set({"bottom":h,"initPage":O},u,l),1!==v&&x.propsManager.set({"bottom":h,"initPage":O},f,p),Object.assign(this.__state,{"loopArray69":R,"$compid__55":u,"$compid__56":f,"tab":j.default,"current":v}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(e){for(var t,n=arguments.length,o=Array(1<n?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return this.anonymousFunc0Map[e]&&(t=this.anonymousFunc0Map)[e].apply(t,o)}}]),Collection);function Collection(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Collection);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Collection.__proto__||Object.getPrototypeOf(Collection)).apply(this,arguments));return e.config={"navigationBarTitleText":"我收藏的招工信息","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.$usedState=["loopArray69","$compid__55","$compid__56","tab","current"],e.anonymousFunc0Map={},e.customComponents=["Auth","RecruitList","ResumeList"],e}r.$$events=["anonymousFunc0"],r.$$componentPath="pages/collection/index",r.config={"navigationBarTitleText":"我收藏的招工信息","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},t.default=r,Page(n(0).default.createComponent(r,!0))},"180":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var o=n(1),r=[{"id":1,"text":"招工信息","icon":o.IMGCDNURL+"new-collect-info-active.png","activeIcon":o.IMGCDNURL+"new-collect-info.png","title":"我收藏的招工信息"},{"id":2,"text":"找活信息","icon":o.IMGCDNURL+"new-collect-resume.png","activeIcon":o.IMGCDNURL+"new-collect-resume-active.png","title":"我收藏的找活信息"}];t.default=r},"181":function(e,t,n){}},[[179,0,1]]]);