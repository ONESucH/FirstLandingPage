var visible = false;
var allTask = {
    faBars : document.getElementById('faBars'),
    menuToggle : document.getElementById('menuToggle'),
    middleMainContainer : document.getElementById('middleMainContainer'),
    topMenuOne : document.getElementById('#topMenuOne'),
    MenuTo : document.getElementById('#MenuTo'),
    MenuThree : document.getElementById('#MenuThree'),
    navRight : document.getElementById('#navRight')
};

allTask.faBars.addEventListener('click', showFun);
allTask.addEventListener('click', scroll);

function showFun() {
    if (visible) {
        allTask.menuToggle.style.display = 'none';
        visible = false;
    } else {
        allTask.menuToggle.style.display = 'block';
        visible = true;
    }
}

function scroll() {
    allTask.scrollToBySpeed({
        speed: 500,
        offset: -100
    });
}