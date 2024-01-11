//"use strict"
//создаем константу и ищемв DOM нужные нам элементы по селектору id  
const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

//(стрелочная функция)Во время клика мы будем добавлять либо убирать class open по всей навигации
navBtn.onclick = () => {
    //toggle - добавляет класс. Если метод срабатывает , то он возвращает truo or fals

    
    if (nav.classList.toggle('open')) {
        //если open ьыл добалвен, то меняем картинку 
        navBtnImg.src = "./img/icon/nav-close.svg";
    }
    else {
        //если же  open был убран то иконка будет снова изменена 
        navBtnImg.src = "./img/icon/nav-open.svg";
    }
}

//инициализация подключения анимации
AOS.init({
    //значения отменяющее повторную анимацию
    once: true

    //настройка отключающая анимацию на каком то виде устройств
    //disable:'mobile'
});