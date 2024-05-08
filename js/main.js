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
//let vero = false
//let elemento = images[i];


// //NEXT BUTTON
// next.addEventListener('click', function () {
//     vero = false
//     console.log(i);
//     if (i < 0) {
//         i = 0
//     }
//     while (i < images.length) {

//         let elemento = images[i];
//         printInPage(elemento);
//         i++
//         vero = true
//         if (vero == true) {
//             break
//         }
//     };
//     if (i == 5) {
//         i = 0
//     }
//     console.log('fine', i);


// });



// //PREVIOUS BUTTON
// previous.addEventListener('click', function () {
//     console.log(i);

//     vero = false
//     if (i > 0) {
//         i--
//     }
//     else if (i < 0) {
//         i = images.length - 1
//     }
//      while (i < images.length) {

//         let elemento = images[i];
//         printInPage(elemento);
//         i--
//         vero = true
//         if (vero == true) {
//             break
//         }
//     };

//     console.log('fine', i);

// });

printInPage(images[i])


next.addEventListener('click', function () {

    if (i == images.length - 1) {
        i = 0
        printInPage(images[i])
    } else {
        printInPage(images[++i])

    }

});

previous.addEventListener('click', function () {

    if (i == 0) {

        i = images.length - 1
        printInPage(images[i])
    } else {
        printInPage(images[--i])

    }

});

/**************** FUNCTIONS *******************/

function printInPage(elemento) {
    let immagine = `<img src="./${elemento.image}" alt=""></img>`;
    let subtitle = `<div id="testo">
                        <h2>${elemento.title}</h2>
                        <p>${elemento.text}</p>
                        </div>`;
    contenitore.innerHTML = immagine + subtitle;
}
