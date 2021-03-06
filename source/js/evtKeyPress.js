"use strict";
window.evtKeyPress = (function () {
  var ESC_KEY_CODE = 27;
  var ENTER_KEY_CODE = 13;

  var isKeyPressed = function (evt, keyCode) {
    return evt.keyCode && evt.keyCode === keyCode;
  };

  var isEnterPressed = function (evt) {
    return isKeyPressed(evt, ENTER_KEY_CODE);
  };

  var isEscPressed = function (evt) {
    return isKeyPressed(evt, ESC_KEY_CODE);
  };

  return {
    isEnterPressed: isEnterPressed,
    isEscPressed: isEscPressed,
  };
})();
