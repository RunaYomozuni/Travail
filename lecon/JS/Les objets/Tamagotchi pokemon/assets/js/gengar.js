let gengar = document.getElementById("img");
let fight = document.querySelector('#fight');
let play = document.querySelector('#play');
let sleep = document.querySelector('#sleep');



function fighting (){
    let gifsFight =['fight','fight2','fight3','fight4'];
    let random = Math.floor(Math.random()*4);
    gengar.classList.add(gifsFight[random]);
    gengar.classList.remove('play')
    setTimeout(function (){
        gengar.classList.remove(gifsFight[random]);
    },7000)
}


function playing (){
    let gifsPlaying =['play','play2','play3'];
    let random = Math.floor(Math.random()*3);
    gengar.classList.add(gifsPlaying[random]);
    gengar.classList.remove('fight')
    setTimeout(function (){
        gengar.classList.remove(gifsPlaying[random])
    },3000)
}

function sleeping (){
    window.open('http://localhost:63342/All%20tp/lecon/JS/Les%20objets/Tamagotchi%20pokemon/view/scaryGengar/scaryGengar.html?_ijt=e3k6l4174j90qodlhvgbf226cq&_ij_reload=RELOAD_ON_SAVE');
    window.close();
}
sleep.addEventListener('click',sleeping);
play.addEventListener('click',playing);
fight.addEventListener("click",fighting);