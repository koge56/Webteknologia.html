function lista() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.classList.remove('grid-container');
    imageContainer.classList.add('list-container');
}

function ruudukko() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.classList.remove('list-container');
    imageContainer.classList.add('grid-container');
}
