(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["slider-pattern"] = factory();
	else
		root["slider-pattern"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sliderInit = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // dependencies


var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _helperFunctions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// global variables
var domSelector = 'slider';
var domSelectorInitialized = domSelector + '--initialized';

// pattern class

var Slider = function () {
  function Slider(el, options) {
    _classCallCheck(this, Slider);

    if ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object' && el !== null) {
      this.el = el;
    } else {
      return;
    }
    this.options = options || {};
    if (typeof el.dataset.ref === "undefined") {
      this.ref = Object.keys(Slider.ref).length;
      el.dataset.ref = this.ref;
      Slider.ref[this.ref] = this;
      this.init();
    } else {
      // eslint-disable-next-line consistent-return
      return Slider.ref[el.dataset.ref];
    }
  }

  _createClass(Slider, [{
    key: 'init',
    value: function init() {
      this.defineVariables();
      this.setCurrentBreakpoint();
      this.setLang();
      this.setInitialValues();
      this.setEventListeners();

      this.el.classList.add(domSelectorInitialized);

      this.setAriaDefaults();

      this.fillSlider();
      this.setToggleAccessible(this.maxHandler);

      this.updateLabelPosition();
    }
  }, {
    key: 'defineVariables',
    value: function defineVariables() {
      this.oneBasedIndex = this.ref + 1;
      this.elId = domSelector + '-' + this.oneBasedIndex;
      this.minHandler = this.el.querySelector('.' + domSelector + '__min-handler');
      this.maxHandler = this.el.querySelector('.' + domSelector + '__max-handler');
      this.minInput = this.el.querySelector('.' + domSelector + '__min-input');
      this.maxInput = this.el.querySelector('.' + domSelector + '__max-input');
      this.inputs = this.el.querySelectorAll('.' + domSelector + '__input');
      this.minHandlerLabel = this.el.querySelector('.' + domSelector + '__handler-min-label');
      this.maxHandlerLabel = this.el.querySelector('.' + domSelector + '__handler-max-label');
      this.minHandlerLabelSpan = this.el.querySelector('.min-cost');
      this.maxHandlerLabelSpan = this.el.querySelector('.max-cost');
      this.maxHandlerLabelDiv = this.el.querySelector('.max-label-div');
      this.minHandlerLabelDiv = this.el.querySelector('.min-label-div');
      this.minInputLabel = this.el.querySelector('.slider__input-min-label');
      this.maxInputLabel = this.el.querySelector('.slider__input-max-label');
      this.minInputLabelSpan = this.el.querySelector('.min-input-label');
      this.maxInputLabelSpan = this.el.querySelector('.max-input-label');
      this.dataMinValue = this.el.getAttribute('data-min');
      this.dataMaxValue = this.el.getAttribute('data-max');
      this.dataInitialMinValue = this.el.getAttribute('data-initial-min-value');
      this.dataInitialMaxValue = this.el.getAttribute('data-initial-max-value');
      this.minError = this.el.querySelector('.min-error');
      this.maxError = this.el.querySelector('.max-error');
      this.lang = '';
      this.sliderWidth = this.el.offsetWidth;
      this.sliderOutputContainer = this.el.querySelector('.' + domSelector + '__output-container');
      this.sliderColor = '#878F9B';
      this.rangeColor = '#003B71';
      this.ds2LayoutBreakpoint = 394; //$mobile
      this.currentDS2Breakpoint = 'mobile';
      this.shouldMoveLabels = false;
    }
  }, {
    key: 'setLang',
    value: function setLang() {
      var htmlEl = document.querySelector('html');
      this.lang = this.el.getAttribute('data-lang') || htmlEl.getAttribute('lang');
      if (this.lang !== 'en' && this.lang !== 'es') {
        this.lang = 'en';
      }
      this.renderLangData();
    }
  }, {
    key: 'renderLangData',
    value: function renderLangData() {
      var ariaAnnouncementString = _config2.default.lang[this.lang].example;
      this.el.setAttribute('aria-label', ariaAnnouncementString);
    }
  }, {
    key: 'setEventListeners',
    value: function setEventListeners() {
      var _this = this;

      window.addEventListener('resize', this.onDocumentResize.bind(this));

      this.minHandler.addEventListener('click', this.controlminHandler.bind(this));
      this.maxHandler.addEventListener('click', this.controlmaxHandler.bind(this));

      this.inputs.forEach(function (input) {
        return input.addEventListener('keydown', _this.onInputKeydown.bind(_this));
      });
      this.inputs.forEach(function (input) {
        return input.addEventListener('keyup', _this.onInputKeyUp.bind(_this));
      });

      this.minHandler.addEventListener('input', this.controlminHandler.bind(this));
      this.maxHandler.addEventListener('input', this.controlmaxHandler.bind(this));

      this.minHandler.addEventListener('touchstart', this.onTouchEvents.bind(this));
      this.maxHandler.addEventListener('touchstart', this.onTouchEvents.bind(this));
    }
  }, {
    key: 'setAriaDefaults',
    value: function setAriaDefaults() {

      this.el.setAttribute('id', this.elId);
      this.minInput.setAttribute('id', this.elId + '__minInput');
      this.minInputLabel.setAttribute('for', this.elId + '__minInput');
      this.maxInput.setAttribute('id', this.elId + '__maxInput');
      this.maxInputLabel.setAttribute('for', this.elId + '__maxInput');

      this.minHandler.setAttribute('id', this.elId + '__minHandler');
      this.minHandlerLabel.setAttribute('for', this.elId + '__minHandler');
      this.maxHandler.setAttribute('id', this.elId + '__maxHandler');
      this.maxHandlerLabel.setAttribute('for', this.elId + '__maxHandler');

      this.minError.setAttribute('id', this.minInput.id + '__error');
      this.maxError.setAttribute('id', this.maxInput.id + '__error');
    }
  }, {
    key: 'setInitialValues',
    value: function setInitialValues() {
      var _this2 = this;

      var minimumInitial = parseInt(this.dataInitialMinValue),
          maximumInitial = parseInt(this.dataInitialMaxValue);

      if (isNaN(minimumInitial)) {
        minimumInitial = this.dataMinValue;
      }
      if (isNaN(maximumInitial)) {
        maximumInitial = this.dataMaxValue;
      }

      this.minHandler.min = this.dataMinValue;
      this.minHandler.max = this.dataMaxValue;

      this.maxHandler.min = this.dataMinValue;
      this.maxHandler.max = this.dataMaxValue;

      this.minInput.value = minimumInitial;
      this.minInput.min = this.dataMinValue;
      this.minInput.max = this.dataMaxValue;

      this.maxInput.value = maximumInitial;
      this.maxInput.min = this.dataMinValue;
      this.maxInput.max = this.dataMaxValue;

      this.minHandler.value = minimumInitial;
      this.maxHandler.value = maximumInitial;

      this.minInputLabelSpan.innerText = this.dataMinValue;
      this.maxInputLabelSpan.innerText = this.dataMaxValue;

      this.minHandlerLabelSpan.innerText = minimumInitial;
      this.maxHandlerLabelSpan.innerText = maximumInitial;

      this.inputs.forEach(function (input) {
        return _this2.applyInputMask(input);
      });
    }
  }, {
    key: 'onTouchEvents',
    value: function onTouchEvents(e) {
      console.log("touch");
    }
  }, {
    key: 'onInputKeyUp',
    value: function onInputKeyUp(e) {
      var _this3 = this;

      var key = e.which || e.keyCode;
      switch (key) {
        case 8:
          //backspace
          this.preventErasingSymbol(e);

          return;
        case 9:
          // tab
          return;
        case 16: // shift
        case 38: // up
        case 40: // down
        case 27: // esc
        case 13: // return
        default:
          setTimeout(function () {
            if (e.target === _this3.minInput) {
              _this3.controlminInput(e);
            } else {
              _this3.controlmaxInput(e);
            }
          }, 0);
      }
    }
  }, {
    key: 'onInputKeydown',
    value: function onInputKeydown(e) {
      var key = e.which || e.keyCode;
      //backspace
      if (key === 8) {
        if (e.target.value.length < 2) {
          this.resetSlider(e);
          this.applyInputMask(e.target);
        } else {
          return;
        }
      } else {
        return;
      }
    }
  }, {
    key: 'applyInputMask',
    value: function applyInputMask(inputfield) {
      var value = inputfield.value,
          maskedValue = '$' + value;
      inputfield.value = maskedValue;
    }
  }, {
    key: 'preventErasingSymbol',
    value: function preventErasingSymbol(e) {
      var inputValue = e.target.value;
      if (!inputValue.startsWith('$')) {
        e.target.value = '$' + inputValue;
      }
    }
  }, {
    key: 'resetSlider',
    value: function resetSlider(e) {
      if (e.target === this.minInput) {
        this.minHandler.value = 0;
        this.minInput.value = '$';
        this.minHandlerLabelSpan.innerText = 0;
      } else {
        this.maxHandler.value = 0;
        this.maxInput.value = '$';
        this.maxHandlerLabelSpan.innerText = 0;
        this.setToggleAccessible(this.minHandler);
      }

      this.fillSlider();

      this.updateLabelPosition('max');
      this.updateLabelPosition('min');
    }
  }, {
    key: 'controlminInput',
    value: function controlminInput(e) {
      var min = parseFloat(this.minInput.value.replace(/[^0-9]/g, "")),
          max = parseFloat(this.maxInput.value.replace(/[^0-9]/g, ""));

      if (min > max) {
        // this.minHandler.value = min;
        // this.minHandlerLabelSpan.innerText = min;
        // this.fillSlider();
        this.showError(e, this.minInput.id);
        return;
      } else if (this.minInput.value === "") {
        this.resetSlider(e);
      } else {
        this.minHandler.value = min;
        this.minInput.value = '$' + min;
        this.minHandlerLabelSpan.innerText = min;
        this.hideError(e, this.minInput.id);
        this.fillSlider();
      }
      this.updateLabelPosition('min');
      this.checkInput(e);

      if (min > this.maximum) {
        this.showError(e, this.minInput.id);
        this.resetSlider(e);
      }
    }
  }, {
    key: 'controlmaxInput',
    value: function controlmaxInput(e) {
      var min = parseInt(this.minInput.value.replace(/[^0-9]/g, "")),
          max = parseInt(this.maxInput.value.replace(/[^0-9]/g, ""));

      this.setToggleAccessible(this.maxInput);
      if (min <= max) {
        this.maxHandler.value = max;
        this.maxHandlerLabelSpan.innerText = max;
        this.maxInput.value = '$' + max;
        this.fillSlider();
        this.hideError(e, this.maxInput.id);
      } else if (this.maxInput.value === "") {
        this.resetSlider(e);
      } else {
        // this.maxHandler.value = max;
        if (!isNaN(max)) {
          this.maxInput.value = '$' + max;
        }
        // this.maxHandlerLabelSpan.innerText = max;
        // this.fillSlider();
        this.showError(e, this.maxInput.id);
        return;
      }
      this.updateLabelPosition('max');
      this.checkInput(e);

      if (max > this.maximum) {
        this.showError(e, e.target.id);
        this.resetSlider(e);
      }
    }
  }, {
    key: 'controlminHandler',
    value: function controlminHandler(e) {
      var min = parseInt(this.minHandler.value),
          max = parseInt(this.maxHandler.value);

      this.fillSlider();

      if (max > min) {
        this.minInput.value = min;
        this.minHandlerLabelSpan.innerText = min;

        this.hideError(e, this.minInput.id);
        this.applyInputMask(this.minInput);
      } else {
        //this.showError(e, this.minInput.id);
        this.minInput.value = max;
        this.minHandler.value = max;
        this.minHandlerLabelSpan.innerText = this.minInput.value;
        this.applyInputMask(this.minInput);
      }

      this.updateLabelPosition('min');
    }
  }, {
    key: 'controlmaxHandler',
    value: function controlmaxHandler(e) {
      var min = parseInt(this.minHandler.value),
          max = parseInt(this.maxHandler.value);

      this.fillSlider();
      this.setToggleAccessible(this.maxHandler);
      if (min <= max) {
        this.maxHandler.value = max;
        this.maxInput.value = max;
        this.maxHandlerLabelSpan.innerText = max;
        this.hideError(e, this.maxInput.id);
      } else {
        this.maxInput.value = min;
        this.maxHandler.value = min;
        this.maxHandlerLabelSpan.innerText = this.maxInput.value;
      }
      this.updateLabelPosition('max');
      this.applyInputMask(this.maxInput);
    }
  }, {
    key: 'hideError',
    value: function hideError(e, errId) {
      var errorDescription = this.el.querySelector('#' + errId + '__error');

      if (e.target.type === 'text') {
        e.target.classList.remove("error-field");
        errorDescription.innerHTML = "";
      } else if (e.target.type === 'range') {
        //error from handlers
        if (e.target.classList.contains('slider__min-handler')) {
          this.minInput.classList.remove("error-field");
          errorDescription.innerHTML = "";
        } else {
          this.maxInput.classList.remove("error-field");
          errorDescription.innerHTML = "";
        }
      }
    }
  }, {
    key: 'showError',
    value: function showError(e, errId) {
      var errorDescription = this.el.querySelector('#' + errId + '__error'),
          errUlId = 'error-description-' + errId;

      if (e.target.type === 'text') {
        e.target.classList.add("error-field");
        errorDescription.innerHTML = "<ul id='" + errUlId + "' role='presentation'><li><span class='inline-error-icon' aria-hidden='true'>!</span><span class='screenreader-only'>Error: </span>message for  " + errId + " </li></ul>";
      } else if (e.target.type === 'range') {
        //error from handlers
        if (e.target.classList.contains('slider__min-handler')) {
          this.minInput.classList.add("error-field");
          errorDescription.innerHTML = "<ul id='" + errUlId + "' role='presentation'><li><span class='inline-error-icon' aria-hidden='true'>!</span><span class='screenreader-only'>Error: </span>message for  " + errId + " </li></ul>";
        } else {
          this.maxInput.classList.add("error-field");
          errorDescription.innerHTML = "<ul id='" + errUlId + "' role='presentation'><li><span class='inline-error-icon' aria-hidden='true'>!</span><span class='screenreader-only'>Error: </span>message for  " + errId + " </li></ul>";
        }
      }
    }
  }, {
    key: 'checkInput',
    value: function checkInput(e) {
      var inputValue = e.target.value,
          errId = e.target.id,
          regex = /^(?:\$)?\d+(\.\d+)?$/,
          isValid = regex.test(inputValue);

      if (isValid) {
        this.hideError(e, errId);
        this.applyInputMask(e);
      } else {
        this.showError(e, errId);
        this.resetSlider(e);
      }
    }
  }, {
    key: 'updateLabelPosition',
    value: function updateLabelPosition(label) {
      var rangeDistance = this.maxHandler.max - this.maxHandler.min,
          minPosition = this.minHandler.value - this.maxHandler.min,
          maxPosition = this.maxHandler.value - this.maxHandler.min,
          outputwidth = this.sliderOutputContainer.offsetWidth,
          outputrange = outputwidth * 100 / this.sliderWidth,
          minpix = minPosition / rangeDistance * 100,
          maxpix = maxPosition / rangeDistance * 100;

      if (this.shouldMoveLabels) {
        if (!label) {
          // if( maxpix - minpix < outputrange){
          this.maxHandlerLabelDiv.style.left = maxpix - 3 + '%';
          // this.maxHandlerLabelDiv.style.textAlign = "end"
          this.minHandlerLabelDiv.style.left = minpix + '%';
          // } else if (maxpix < 100 - outputrange*2){
          //   this.minHandlerLabelDiv.style.left = `${minpix}%`;
          // }
        }
        if (label === "max") {
          if (maxpix - minpix > outputrange && maxpix < 100 - outputrange) {
            this.maxHandlerLabelDiv.style.left = maxpix + '%';
          }
        } else {
          if (maxpix - minpix > outputrange && minpix < 100 - outputrange * 2) {
            this.minHandlerLabelDiv.style.left = minpix + '%';
          }
        }
      } else {
        this.maxHandlerLabelDiv.style.left = 100 - outputrange + '%';
        this.minHandlerLabelDiv.style.left = '0%';
      }
    }
  }, {
    key: 'fillSlider',
    value: function fillSlider() {
      var rangeDistance = this.maxHandler.max - this.maxHandler.min,
          minPosition = this.minHandler.value - this.maxHandler.min,
          maxPosition = this.maxHandler.value - this.maxHandler.min;

      this.maxHandler.style.background = 'linear-gradient(\n        to right,\n        ' + this.sliderColor + ' 0%,\n        ' + this.sliderColor + ' ' + minPosition / rangeDistance * 100 + '%,\n        ' + this.rangeColor + ' ' + minPosition / rangeDistance * 100 + '%,\n        ' + this.rangeColor + ' ' + maxPosition / rangeDistance * 100 + '%, \n        ' + this.sliderColor + ' ' + maxPosition / rangeDistance * 100 + '%, \n        ' + this.sliderColor + ' 100%)';
    }
  }, {
    key: 'setToggleAccessible',
    value: function setToggleAccessible(currentTarget) {

      if (Number(currentTarget.value) <= 0) {
        this.maxHandler.style.zIndex = 2;
      } else {
        this.maxHandler.style.zIndex = 0;
      }
    }
  }, {
    key: 'setCurrentBreakpoint',
    value: function setCurrentBreakpoint() {
      var containerWidth = (0, _helperFunctions.getWindowWidth)();

      //DS2 width validation
      if (containerWidth >= this.ds2LayoutBreakpoint && this.currentDS2Breakpoint !== 'tablet-up') {
        this.currentDS2Breakpoint = 'tablet-up';
        this.shouldMoveLabels = true;
      } else if (containerWidth <= this.ds2LayoutBreakpoint && this.currentDS2Breakpoint !== 'mobile') {
        this.currentDS2Breakpoint = 'mobile';
        this.shouldMoveLabels = false;
      }
      console.log(this.shouldMoveLabels);
    }
  }, {
    key: 'onDocumentResize',
    value: function onDocumentResize() {
      this.setCurrentBreakpoint();
      this.updateLabelPosition('min');
      this.updateLabelPosition('max');
    }
  }]);

  return Slider;
}();

Slider.ref = {};

// pattern factory class

var SliderFactory = function () {
  function SliderFactory(parentSelector) {
    _classCallCheck(this, SliderFactory);

    this.initAll(parentSelector);
  }

  _createClass(SliderFactory, [{
    key: 'initAll',
    value: function initAll(parentSelector) {
      var self = this;
      var domScope = void 0;
      if (parentSelector === undefined || parentSelector === '') {
        // if parent selector is undefined or empty, use document as DOM scope
        domScope = document;
      } else if (document.querySelector(parentSelector)) {
        // if parent selector exists, use it as DOM scope
        domScope = document.querySelector(parentSelector);
      } else if (document.querySelector(parentSelector) === null) {
        // if parent selector does not exist on page, do nothing
        return;
      }
      var els = domScope.querySelectorAll('.' + domSelector + ':not(.' + domSelectorInitialized + ')');
      if (els.length) {
        els.forEach(function (el) {
          self.init(el);
        });
      }
    }
  }, {
    key: 'init',
    value: function init(el) {
      return new Slider(el);
    }
  }, {
    key: 'get',
    value: function get(ref) {
      // get existing counter object instance by ref number or selector
      if (isNaN(ref)) {
        // if ref is not a number, get element by query selector and then get it's ref numbder
        var patternEl = document.querySelector(ref);
        if (patternEl) {
          ref = patternEl.dataset.ref;
        }
      }
      return Slider.ref[ref];
    }
  }]);

  return SliderFactory;
}();

var sliderInit = function sliderInit(parentSelector) {
  var $kp = window.$kp = window.$kp || {};
  $kp.PL = $kp.PL || {};
  $kp.PL.Slider = new SliderFactory(parentSelector);
};

exports.sliderInit = sliderInit;

/***/ }),
/* 1 */
/***/ (function(module) {

module.exports = JSON.parse("{\"lang\":{\"en\":{\"example\":\"Example text\"},\"es\":{\"example\":\"Texto de ejemplo\"}}}");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild;
}

function getWindowWidth() {
  var w = window,
      d = document,
      de = d.documentElement,
      b = de.getElementsByTagName('body')[0],
      windowWidth = w.innerWidth || de.clientWidth || b.clientWidth;
  return windowWidth;
}

exports.createElementFromHTML = createElementFromHTML;
exports.getWindowWidth = getWindowWidth;

/***/ })
/******/ ]);
});
//# sourceMappingURL=slider-pattern.js.map