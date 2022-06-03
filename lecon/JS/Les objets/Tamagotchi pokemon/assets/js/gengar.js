let gengar = document.getElementById("img");
let fight = document.querySelector('#fight');
let play = document.querySelector('#play');



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


play.addEventListener('click',playing);
fight.addEventListener("click",fighting);