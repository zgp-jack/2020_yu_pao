(swan.webpackJsonp=swan.webpackJsonp||[]).push([[17],{"281":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(o=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&u.return&&u.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var b=n(0),g=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(b),O=n(1),R=n(3),M=n(12),w=n(10);n(282);var r=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(RecruitList,g.default.Component),o(RecruitList,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,e,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0})(RecruitList.prototype.__proto__||Object.getPrototypeOf(RecruitList.prototype),"_constructor",this).call(this,t),this.$$refs=new g.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,n){var a=this;function ka(t,e){e&&m((0,M.changeTabbar)(w.MEMBER)),setTimeout(function(){g.default.navigateTo({"url":t})},0)}this.__state=t||this.state||{},this.__props=e||this.props||{};var o=this.$prefix,r=(0,b.genCompid)(o+"$compid__25"),i=h(r,2),u=i[0],s=i[1],p=this.__props,c=p.data,l=p.bottom,f=void 0===l||l,y=p.hasMore,_=void 0!==y&&y,m=(0,R.useDispatch)(),v=(0,b.internal_inline_style)(f?"":"padding-bottom:0"),d=c?c.map(function(r,i){return{"anonymousCallee__3":(r={"privateOriginal":(0,b.internal_get_original)(r)}).privateOriginal?r.privateOriginal.map(function(t,e){t={"privateOriginal":(0,b.internal_get_original)(t)};var n="cizzz"+i+"-"+e;a.anonymousFunc0Map[n]=function(){return ka("/pages/detail/info/index?id="+t.privateOriginal.id+"&type=1")};var o="cjzzz"+i+"-"+e;return a.anonymousFunc2Map[o]=function(t){t.stopPropagation(),ka(O.PUBLISHEDRECRUIT+"?tatol=1",1)},{"_$indexKey":n,"_$indexKey2":o,"loopState__temp3":r.privateOriginal?O.REPLACEWEIXINTEXT?t.privateOriginal.detail.replace(O.FILTERWEIXINREG,""):t.privateOriginal.detail:null,"privateOriginal":t.privateOriginal}}):[],"privateOriginal":r.privateOriginal}}):[];return c&&c[0]&&!c[0].length&&b.propsManager.set({"text":"暂无相关数据"},s,u),Object.assign(this.__state,{"anonymousState__temp":v,"loopArray23":d,"$compid__25":s,"data":c,"IMGCDNURL":O.IMGCDNURL,"hasMore":_}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(t){for(var e,n=arguments.length,o=Array(1<n?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return this.anonymousFunc0Map[t]&&(e=this.anonymousFunc0Map)[t].apply(e,o)}},{"key":"anonymousFunc2","value":function anonymousFunc2(t){for(var e,n=arguments.length,o=Array(1<n?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return"object"===(void 0===o?"undefined":i(o))&&o.stopPropagation&&o.stopPropagation(),this.anonymousFunc2Map[t]&&(e=this.anonymousFunc2Map)[t].apply(e,o)}}]),RecruitList);function RecruitList(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,RecruitList);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(RecruitList.__proto__||Object.getPrototypeOf(RecruitList)).apply(this,arguments));return t.$usedState=["anonymousState__temp","loopArray23","$compid__25","data","IMGCDNURL","hasMore","bottom"],t.anonymousFunc0Map={},t.anonymousFunc2Map={},t.customComponents=["Nodata"],t}r.$$events=["anonymousFunc0","anonymousFunc2"],r.$$componentPath="components/lists/recruit/index",e.default=r,Component(n(0).default.createComponent(r))},"282":function(t,e,n){}},[[281,0,1]]]);