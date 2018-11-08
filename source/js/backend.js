'use strict';

(function () {
  var URL = '"http://localhost:3000';
  var URL_LIST = [
    "http://localhost:3000/data/news.json",
    "http://localhost:3000/data/publications.json"
  ];

  //var xhrURL = URL_LIST[window.news.getReferenceIndex()];
 // var DATA = URL + '/data/news.json';
  var LOAD_TIME = 100000;
  var SUCCESS_STATUS = 200;

  var xhrRequest = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === SUCCESS_STATUS) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + LOAD_TIME + 'мс');
    });
    return xhr;
  };

  var load = function (onLoad, onError) {
    var xhrURL = URL_LIST[window.news.getReferenceIndex()];
    var xhr = xhrRequest(onLoad, onError);
    xhr.open('GET', xhrURL);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
     var xhrURL = URL_LIST[window.news.getReferenceIndex()];
    var xhr = xhrRequest(onLoad, onError);
    xhr.open('POST', xhrURL);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save
  };

})();
