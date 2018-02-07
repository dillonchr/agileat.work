import './style.css';
const comicTitle = document.querySelector('#comic h2');
const comicImg = document.querySelector('#comic img');
const displayComic = comic => {
    comicTitle.textContent = comic.title;
    comicImg.src = `comics/${comic.img}`;
};

fetch('comics/comics.json')
    .then(r => r.ok && r.json())
    .then(comics => {
        displayComic(comics.pop());
    });
