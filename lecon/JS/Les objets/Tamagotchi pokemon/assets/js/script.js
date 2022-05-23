let ball = document.querySelectorAll(".open");
let attribut = document.getElementsByTagName('a');
let lien;

function openBall() {
    // let pokemon = ["view/dedenne.html","view/gengar.html","view/pikachu.html","view/evoli.html"];
    // let rdm = Math.floor(Math.random()*100);
    // lien.setAttribute(href);
    // console.log(lien);

}
ball.forEach(ball =>{
    ball.addEventListener("click", openBall);
});


openBall();
