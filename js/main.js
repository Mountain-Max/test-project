// Переключаем меню и сайдбар 
const sidebarToggle = document.querySelector('.nav-icon__middle');
const navIcon = document.querySelector('.nav-icon');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.onclick = function () {
  navIcon.classList.toggle('nav-icon--active');
  sidebar.classList.toggle('sidebar--active');
};
// Переключаем меню и сайдбар //

// Скрываем карточки 
const buttonMore = document.querySelector('.button-more');
const cardHidden = document.querySelectorAll('.card-link--hidden');

buttonMore.addEventListener('click', function () {
  cardHidden.forEach(function (card) {
    card.classList.remove('card-link--hidden')
  })
});
// Скрываем карточки //

// Скрыть виджеты
const widgets = document.querySelectorAll('.widget');

widgets.forEach(function (widget) {
  widget.addEventListener('click', function (e) {
    if (e.target.classList.contains('widget__title')) {
      e.target.classList.toggle('widget__title--active');
      e.target.nextElementSibling.classList.toggle('widget__body--hidden');
    }
  });
});
// Скрыть виджеты //

// Близость к метро
const locationCheckBox = document.querySelector('#location-05');
const topLocationCheckBoxes = document.querySelectorAll('[data-location]');

// Клик по кнопке "любая" = отключение других чекбоксов
locationCheckBox.addEventListener('change', function () {

  if (locationCheckBox.checked) {
    topLocationCheckBoxes.forEach(function (item) {
      item.checked = false;
    });
  };
});

// Клик по top location отключает кнопку "любая"
topLocationCheckBoxes.forEach(function (item) {
  item.addEventListener('change', function () {
    locationCheckBox.checked = false;
  })
});

// Близость к метро //

// Показат дополнительные опции в фильтре 
const showMoreOptions = document.querySelector('.options-more');
const hiddenOptions = document.querySelectorAll('.options--hidden');

showMoreOptions.onclick = function (e) {
  e.preventDefault();
  
  hiddenOptions.forEach(function (item) {
    item.classList.remove('options--hidden')
  });
};
// Показат дополнительные опции в фильтре //
