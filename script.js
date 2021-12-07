function toggelClass() {
    let nameClass = document.querySelectorAll(".header__burger, .mainmenu__list");
    let pageScroll = document.querySelectorAll(".page");

    console.log(nameClass);
    console.log(pageScroll);

    pageScroll.forEach(element => {element.classList.toggle('lock')})

    nameClass.forEach(element => {
        return element.classList.toggle('active');
    });
}