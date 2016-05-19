var allTask = {
    faBars : document.getElementById('faBars'),
    menuToggle : document.getElementById('menuToggle'),
    middleMainContainer : document.getElementById('middleMainContainer')
};

allTask.faBars.addEventListener('click', showFun);

var visible = false;
function showFun() {
    if(visible) {
        allTask.menuToggle.style.display = 'none';
        visible = false;
        console.log(allTask.menuToggle);
    } else {
        allTask.menuToggle.style.display = 'block';
        visible = true;
        console.log(allTask.menuToggle);
    }
}
