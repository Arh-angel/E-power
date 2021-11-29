let found = document.getElementsByClassName('found-card__toggle');
for (let i = 0; i < found.length; i++) {
    found[i].addEventListener('click', function() {
        this.classList.toggle('is-open');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
}


// let select = function () {
//     let selectHeader = document.querySelectorAll('.search-select__header');
//     let selectItem = document.querySelectorAll('.search-select__item');

//     selectHeader.forEach(item => {
//         item.addEventListener('click', function () {
//             this.parentElement.classList.toggle('is-active');
//         })
//     })

//     selectItem.forEach(item => {
//         item.addEventListener('click', function () {
//             let text = this.innerText, currentText = this.closest('.search-select').querySelector('.search-selector__current');
//             text = currentText.innerText;
//         })
//     })
// }

select();
// let sel = document.getElementsByClassName('search-select__header');
// for (let i = 0; i < sel.length; i++) {
//     sel.addEventListener('click', function () {
//         this.parentElement.classList.toggle('is-active');
//     })
// }
