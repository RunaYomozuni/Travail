function add_line() {
    let line = document.createElement("audio");
    let head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="title.mp3";
    line.id="bgSong" ;
    line.autoplay = true;
    line.loop = true;
    head.appendChild(line);
}

if(document.getElementById('bgSong')==null){
    add_line();
    let audio = document.getElementById('bgSong');
    audio.volume = 0.8;
}

let talk = document.getElementById('talk');
function scary (){

    let modal = document.getElementById("myModal");

        modal.style.display = "block";
        talk.style.display = "none";
}
talk.addEventListener('click',scary);

let counter = 0
let croix = document.querySelector('span')
function replace() {
    if (counter < 5) {
        let body = document.querySelector('body')
        let bodyWidth = body.offsetWidth
        let bodyHeight = body.offsetHeight
        croix = document.querySelector('span')
        let newPosex = Math.floor(Math.random() * bodyWidth)
        let newPosey = Math.floor(Math.random() * bodyHeight)
        croix.style.top = newPosey + 'px';
        croix.style.left = newPosex + 'px';
        console.log(bodyHeight);
        counter++
    }
    else{
        let lastModal = document.querySelector('.modal-body2')
        window.open('')
        window.close()
    }
}

    croix.addEventListener('click',replace);










