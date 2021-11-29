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
