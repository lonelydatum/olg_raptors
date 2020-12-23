(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

exports.size = size;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

function start() {
	TweenLite.defaultEase = Power4.easeOut;
	var tl = new TimelineMax();
	var speed = .3;
	tl.set(".frame1", { opacity: 1 });

	// tl.to(".t1", .3, {y:140}, "+=.3")
	tl.add("one", "+=.2");
	tl.to(".t1", .2, { y: 0 }, "one");
	tl.to(".w", speed, { y: 0, ease: Back.easeOut }, "+=.2");

	tl.to(".person", .3, { y: 0, ease: Power3.easeOut }, "-=0");
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
