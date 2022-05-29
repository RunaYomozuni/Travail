let ball = document.querySelectorAll(".open");


for (let i = 0; i < ball.length; i++){
    ball[i].addEventListener("click", function (){
        // random pokemon
        let pokemon = ["view/dedenne.html","view/gengar.html","view/pikachu.html","view/evoli.html"];
        let rdm = Math.floor(Math.random()*4);
        this.querySelector('img').setAttribute('src',"assets/img/pokeOpen.png");
        setTimeout(function (){
            window.location.href = pokemon[rdm];
        },500)

    });
}