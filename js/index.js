const btn = document.getElementById("navbar_toggler"); // выбрать элемент кнопку
const items = document.querySelectorAll(".header_li_main"); // выбрать все меню
btn.addEventListener('click', () => { // когда юзер кликает на кнопку
    for (let el of items) { // перебрать все меню и к каждому
        el.classList.toggle("show"); // применить или убрать стиль show
    }
});
