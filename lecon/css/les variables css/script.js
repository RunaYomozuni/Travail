let btn = document.getElementById("DM");
let nav = document.getElementById("darkMode");
let btn2 = document.getElementById("LM");
let block = document.querySelector("none")
function dark (){
    nav.classList.toggle("darkMode");
}

function light (){
}
let compteur = 0;
    btn.addEventListener("click", light);
document.addEventListener('test', function() {

    compteur += 1;
    console.log(compteur)
    if (compteur% 2 === 0) {

        console.log(compteur)
        document.querySelector(".block").addEventListener('click', function (e) {

            btn.innerText = 'light mode';
        });
    } else {
        document.querySelector(".none").addEventListener('click', function (e) {
            btn2.innerText = 'dark mode';
            alert('fdsfsd')
        });

    }
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".block").addEventListener('click',function(e) {
        compteur += 1;
        if (compteur % 2 === 0) {
            btn.innerText = 'Dark Mode';
        } else {
            btn.innerText = 'Light Mode';
        }
        });
    });


    btn.addEventListener("click", dark);
