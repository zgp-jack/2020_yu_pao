(tt.webpackJsonp=tt.webpackJsonp||[]).push([[4],{"262":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var E=function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function sliceIterator(n,t){var e=[],o=!0,r=!1,i=void 0;try{for(var a,u=n[Symbol.iterator]();!(o=(a=u.next()).done)&&(e.push(a.value),!t||e.length!==t);o=!0);}catch(n){r=!0,i=n}finally{try{!o&&u.return&&u.return()}finally{if(r)throw i}}return e}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(n,t,e){return t&&defineProperties(n.prototype,t),e&&defineProperties(n,e),n};function defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var T=e(0),L=_interopRequireDefault(T),H=e(2),N=e(7),U=_interopRequireDefault(e(8)),q=e(9);function _interopRequireDefault(n){return n&&n.__esModule?n:{"default":n}}e(263);var r=(function _inherits(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{"constructor":{"value":n,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(Cities,L.default.Component),o(Cities,[{"key":"_constructor","value":function _constructor(n){(function get(n,t,e){null===n&&(n=Function.prototype);var o=Object.getOwnPropertyDescriptor(n,t);if(void 0===o){var r=Object.getPrototypeOf(n);return null===r?void 0:get(r,t,e)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(e):void 0})(Cities.prototype.__proto__||Object.getPrototypeOf(Cities.prototype),"_constructor",this).call(this,n),this.$$refs=new L.default.RefsArray}},{"key":"_createData","value":function _createData(n,t,e){var i=this;function Aa(n){var t=L.default.getStorageSync(N.HistoryCities);if(t){var e=n.id,o=t.findIndex(function(n){return n.id===e});-1!==o&&t.splice(o,1),t.unshift(n),t.splice(H.MAXCACHECITYNUM)}else t=[n];L.default.setStorageSync(N.HistoryCities,t),l&&l(n.city),c(!1),I()}this.__state=n||this.state||{},this.__props=t||this.props||{},this.$prefix;var o=this.__props,r=o.data,a=void 0===r?[]:r,u=o.parent,s=void 0!==u&&u,c=o.userTapCityBtn,l=o.userChangeCity,y=o.area,p=o.userLoc,f=(0,T.useState)([]),m=E(f,2),d=m[0],_=m[1],h=(0,T.useState)(!1),v=E(h,2),g=v[0],C=v[1],F=(0,T.useState)(""),$=E(F,2),b=$[0],A=$[1],M=(0,T.useState)([]),O=E(M,2),S=O[0],w=O[1],k=(0,T.useState)([]),j=E(k,2),x=j[0],P=j[1],I=function userRecentlyCities(){var n=L.default.getStorageSync(N.HistoryCities);if(n&&p.id){var t=n.findIndex(function(n){return n.id==p.id});return-1!=t?n.splice(t,1):n.splice(H.MAXCACHECITYNUM-1),void _(n)}};(0,T.useEffect)(function(){I();var n=(0,q.objDeepCopy)(U.default),i=[];n.shift(),n.map(function(n){if(n.has_children){for(var t=n.children,e=0;e<t.length;e++)if(s||0!==e){var o={"id":t[e].id,"pid":t[e].pid,"city":t[e].name,"ad_name":t[e].ad_name,"city_name":n.name+"-"+t[e].name};i.push(o)}}else{var r={"id":n.id,"pid":n.pid,"city":n.name,"ad_name":n.ad_name,"city_name":n.name};i.push(r)}}),w(i),P(i)},[]),this.anonymousFunc0=function(){return function onInputFocus(){C(!0)}()},this.anonymousFunc1=function(n){return function userEnterCity(n){var t=n.detail.value;A(t);var e=x.filter(function(n){return-1!==n.city_name.indexOf(t)});w(e)}(n)},this.anonymousFunc2=function(){return function userClearContent(){A(""),C(!1)}()},this.anonymousFunc3=function(){return c(!1)},this.anonymousFunc4=function(){return Aa(p)};var D=d.map(function(n,t){var e="rec"+(n={"$original":(0,T.internal_get_original)(n)}).$original.id,o="eczzz"+t;return i.anonymousFunc5Map[o]=function(){return Aa(n.$original)},{"$loopState__temp2":e,"_$indexKey":o,"$original":n.$original}}),R=a.map(function(n,r){return n={"$original":(0,T.internal_get_original)(n)},{"$loopState__temp4":r+n.$original[0].id,"$anonymousCallee__6":n.$original.map(function(n,t){var e=t+(n={"$original":(0,T.internal_get_original)(n)}).$original.id,o="edzzz"+r+"-"+t;return i.anonymousFunc6Map[o]=function(){return Aa(n.$original)},{"$loopState__temp6":e,"_$indexKey2":o,"$original":n.$original}}),"$original":n.$original}}),z=g?S.map(function(n,t){n={"$original":(0,T.internal_get_original)(n)};var e="eezzz"+t;return i.anonymousFunc7Map[e]=function(){return function userTapInputCity(n){C(!1),Aa(n)}(n.$original)},{"_$indexKey3":e,"$original":n.$original}}):[];return Object.assign(this.__state,{"loopArray41":D,"loopArray42":R,"loopArray43":z,"text":b,"IMGCDNURL":H.IMGCDNURL,"userLoc":p,"recentlyCities":d,"data":a,"show":g,"inputCity":S,"area":y}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(n){for(var t,e=arguments.length,o=Array(1<e?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];return this.anonymousFunc5Map[n]&&(t=this.anonymousFunc5Map)[n].apply(t,o)}},{"key":"anonymousFunc6","value":function anonymousFunc6(n){for(var t,e=arguments.length,o=Array(1<e?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];return this.anonymousFunc6Map[n]&&(t=this.anonymousFunc6Map)[n].apply(t,o)}},{"key":"anonymousFunc7","value":function anonymousFunc7(n){for(var t,e=arguments.length,o=Array(1<e?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];return this.anonymousFunc7Map[n]&&(t=this.anonymousFunc7Map)[n].apply(t,o)}}]),Cities);function Cities(){!function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Cities);var n=function _possibleConstructorReturn(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(Cities.__proto__||Object.getPrototypeOf(Cities)).apply(this,arguments));return n.$usedState=["loopArray41","loopArray42","loopArray43","text","IMGCDNURL","userLoc","recentlyCities","data","show","inputCity","area","parent","userTapCityBtn","userChangeCity"],n.anonymousFunc5Map={},n.anonymousFunc6Map={},n.anonymousFunc7Map={},n.customComponents=[],n}r.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7"],r.$$componentPath="components/citys/index",t.default=r,Component(e(0).default.createComponent(r))},"263":function(n,t,e){}},[[262,0,1]]]);