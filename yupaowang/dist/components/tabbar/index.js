(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/tabbar/index"],{

/***/ "./src/components/tabbar/index.scss":
/*!******************************************!*\
  !*** ./src/components/tabbar/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/tabbar/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/tabbar/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _tabbar = __webpack_require__(/*! ../../actions/tabbar */ "./src/actions/tabbar.ts");

__webpack_require__(/*! ./index.scss */ "./src/components/tabbar/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabbar = function (_Taro$Component) {
  _inherits(Tabbar, _Taro$Component);

  function Tabbar() {
    _classCallCheck(this, Tabbar);

    var _this = _possibleConstructorReturn(this, (Tabbar.__proto__ || Object.getPrototypeOf(Tabbar)).apply(this, arguments));

    _this.$usedState = ["tabbar", "loopArray11", "isredirect"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(Tabbar, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Tabbar.prototype.__proto__ || Object.getPrototypeOf(Tabbar.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var _props$isredirect = this.__props.isredirect,
          isredirect = _props$isredirect === undefined ? true : _props$isredirect;

      var tabbar = (0, _redux.useSelector)(function (state) {
        return state.tabbar;
      });
      var dispatch = (0, _redux.useDispatch)();
      // * 判断跳转还是切换tabbar
      var changeTabbarAction = function changeTabbarAction(item) {
        if (isredirect) {
          _taroWeapp2.default.reLaunch({ url: '/pages/index/index?type=' + item.id });
        } else dispatch((0, _tabbar.changeTabbar)(item.id));
      };
      var loopArray11 = tabbar.list.map(function (item, __index0) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp2 = (0, _classnames2.default)({
          'common-footer-tabbar-list': true,
          'common-footer-tabbar-list-active': item.$original.id === tabbar.key
        });
        var _$indexKey = "ezzzz" + __index0;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return changeTabbarAction(item.$original);
        };
        return {
          $loopState__temp2: $loopState__temp2,
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        tabbar: tabbar,
        loopArray11: loopArray11
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }]);

  return Tabbar;
}(_taroWeapp2.default.Component);

Tabbar.$$events = ["anonymousFunc0"];
Tabbar.$$componentPath = "components/tabbar/index";
exports.default = Tabbar;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Tabbar));

/***/ })

},[["./src/components/tabbar/index.tsx","runtime","taro","vendors","common"]]]);