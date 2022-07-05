let plats = [
    {
        imgSrc: "./assets/img/img-01.jpg",
        title:"un super titre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
    },
    {
        imgSrc: "./assets/img/img-02.jpg",
        title:"un super titre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
    },
    {
        imgSrc: "./assets/img/img-03.jpg",
        title:"un super titre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
    },
    {
        imgSrc: "./assets/img/img-04.jpg",
        title:"un super titre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
    },
    {
        imgSrc: "./assets/img/img-05.jpg",
        title:"un super titre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
    }
];
let menu = document.getElementById('plats');
for (let plat of plats){
    menu.innerHTML += `<article> <img src = ${plat["imgSrc"]} alt="plat sucré"> <div class="text_box>"> <h3> ${plat["title"]} </h3> <p>${plat["text"]}</p> </div> </article>`;
}
let dark = document.querySelector('#dark_screen');
let dark_btn = document.querySelector('#dark_mode');
let body = document.querySelector('body');

function dark_mode() {
    dark.style.display = 'block'
    body.style.overflow = 'hidden'
}
dark_btn.addEventListener('click',dark_mode);

