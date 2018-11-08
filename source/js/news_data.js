var data = {
  "news": [{
    "title": "«ПРОСТО Телеком» приступает к оказанию услуг телефонии в Пензе",
    "link": "#",
    "text": "Корпоративные клиенты в Пензе теперь могут приобрести городские телефонные номера у оператора связи «ПРОСТО Телеком»",
    "date": "7 ноября 2014"
  },
  {
    "title": "Компания «ПРОСТО Телеком» отмечает свой день рождения",
    "link": "#",
    "text": "17 лет назад в Петербурге была основана компания «ПРОСТО Телеком». За эти годы компания  из небольшого интернет-провайдера превратилась в универсального оператора связи федерального масштаба.",
    "date": "14 ноября 2014"
  },
  {
    "title": "Осенью подключение пакета «Интернет + Телефон» бесплатно!",
    "link": "#",
    "text": "С 15 сентября корпоративные клиенты в Пензе могут бесплатно подключить пакет «Интернет + Телефон»",
    "date": "21 ноября 2014"
  }],
  "more_news" : [{
    "title": "Заголовок новости 1",
    "link": "#",
    "text": "Текст1",
    "date": "дата новости"
  },
  {
    "title": "Заголовок новости 2",
    "link": "#",
    "text": "Текст2",
    "date": "дата новости"
  },
  {
    "title": "Заголовок новости 3",
    "link": "#",
    "text": "Текст3",
    "date": "дата новости"
  },
  {
    "title": "Заголовок новости 4",
    "link": "#",
    "text": "Текст4",
    "date": "дата новости"
  },
  {
    "title": "Заголовок новости 5",
    "link": "#",
    "text": "Текст5",
    "date": "дата новости"
  }]
};

$(document).ready(function () {

  var template = Handlebars.compile($('#template').html());

  for (var i = 0; i <= 2; i++) {

  $('.news__content').append(template(data.news[i]));
  }

  var btnMoreNews = document.querySelector(".btn--news");

  var onClickMoreNews = function (evt) {
    evt.preventDefault();
    for (var i = 3; i <= data.length; i++) {


      $('.news__content').append(template(data.news[i]));
    }
  };

  btnMoreNews.addEventListener("click", onClickMoreNews);

});
