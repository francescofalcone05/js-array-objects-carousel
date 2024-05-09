const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//elementi gia` presenti in pagina
const contenitore = document.getElementById('contenitore');
const previous = document.getElementById('previous');
const next = document.getElementById('next');

//creo un contatore
let i = 0;

let arrayOpacity = [];
let imageFixed = "";
createImagesFixed();
let divFlex = `<div class="flex">${imageFixed}</div>`
printInPage(images[i]);
//arrayOpacity[0].classList.remove('img-op')
document.querySelector('.card > img').classList.remove('img-op');


next.addEventListener('click', function () {

    if (i == images.length - 1) {
        i = 0
        printInPage(images[i]);
        document.querySelector('.card > img').classList.remove('img-op');
        arrayOpacity[i + 1].classList.add('img-op');
    } else {
        printInPage(images[++i]);
        arrayOpacity[i].classList.remove('img-op');
    }
});

previous.addEventListener('click', function () {

    if (i == 0) {
        i = images.length - 1
        printInPage(images[i])
        document.querySelector('.card > img').classList.add('img-op');
        arrayOpacity[i].classList.remove('img-op');
    } else {
        printInPage(images[--i])
        arrayOpacity[i].classList.remove('img-op');
    }

});

/**************** FUNCTIONS *******************/

function printInPage(elemento) {
    let immagine = `<img src="./${elemento.image}" alt=""></img>`;
    let subtitle = `<div id="testo">
                        <h2>${elemento.title}</h2>
                        <p>${elemento.text}</p>
                        </div>`;
    contenitore.innerHTML = immagine + subtitle + divFlex;
    arrayOpacity = document.getElementsByClassName('img-op');
   // arrayOpacity[0].classList.remove('img-op')

};

function createImagesFixed() {
    for (let index = 0; index < images.length; index++) {
        const element = images[index];
        imageFixed += `<div class="card"><img class="img-op" src="./${element.image}" alt=""></img></div>`
    }
};