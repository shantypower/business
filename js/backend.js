"use strict";!function(){var a=["http://localhost:3000/data/news.json","http://localhost:3000/data/publications.json"],d=function(e,n){var t=new XMLHttpRequest;return t.responseType="json",t.addEventListener("load",function(){200===t.status?e(t.response):n("Статус ответа: "+t.status+" "+t.statusText)}),t.addEventListener("error",function(){n("Произошла ошибка соединения")}),t.addEventListener("timeout",function(){n("Запрос не успел выполниться за 100000мс")}),t};window.backend={load:function(e,n){var t=a[window.news.getReferenceIndex()],s=d(e,n);s.open("GET",t),s.send()},save:function(e,n,t){var s=a[window.news.getReferenceIndex()],o=d(n,t);o.open("POST",s),o.send(e)}}}();