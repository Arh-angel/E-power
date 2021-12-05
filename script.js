function toggelClass() {
    let nameClass = document.querySelectorAll(".header__burger, .mainmenu__list");

    console.log(nameClass)

    nameClass.forEach(element => {
        return element.classList.toggle('active');
    });
}