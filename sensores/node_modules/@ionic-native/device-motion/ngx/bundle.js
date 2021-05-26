'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

var DeviceMotion = /** @class */ (function (_super) {
    tslib.__extends(DeviceMotion, _super);
    function DeviceMotion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceMotion.prototype.getCurrentAcceleration = function () { return core.cordova(this, "getCurrentAcceleration", {}, arguments); };
    DeviceMotion.prototype.watchAcceleration = function (options) { return core.cordova(this, "watchAcceleration", { "callbackOrder": "reverse", "observable": true, "clearFunction": "clearWatch" }, arguments); };
    DeviceMotion.pluginName = "DeviceMotion";
    DeviceMotion.plugin = "cordova-plugin-device-motion";
    DeviceMotion.pluginRef = "navigator.accelerometer";
    DeviceMotion.repo = "https://github.com/apache/cordova-plugin-device-motion";
    DeviceMotion.platforms = ["Android", "BlackBerry 10", "Browser", "Firefox OS", "iOS", "Tizen", "Ubuntu", "Windows", "Windows Phone 8"];
    DeviceMotion.decorators = [
        { type: core$1.Injectable }
    ];
    return DeviceMotion;
}(core.IonicNativePlugin));

exports.DeviceMotion = DeviceMotion;
