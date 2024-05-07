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
const subtitle = document.getElementById('testo');

//creo gli elementi mancanti in pagina
let immagine = document.createElement ('img');
let imgTitle = document.createElement ('h2');
let imgSubtitle = document.createElement ('p');

//creo un contatore
let i = 0;



//NEXT BUTTON
next.addEventListener('click', function() {

    while (i < images.length) {
        
        let elemento = images[i]
        console.log(elemento.image, elemento.title, elemento.text);
        immagine.innerHTML = `<img src="./${elemento.image}" alt=""></img>`
        contenitore.innerHTML = immagine

        imgTitle.innerHTML = elemento.title
        imgSubtitle.innerHTML = elemento.text
        subtitle.innerHTML = `${imgTitle} ${imgSubtitle} `





        i++
        console.log(i);
    };

});





//PREVIOUS BUTTON
previous.addEventListener('click', function() {


});

