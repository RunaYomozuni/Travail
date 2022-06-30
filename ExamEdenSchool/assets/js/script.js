let plats = [
    {
        imgSrc: "./assets/img/img-01.jpg",
        title:"un super titre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate dolorem ex facilis iusto nisi?"
    },
    {
        imgSrc: "./assets/img/img-02.jpg",
        title:"un super titre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate dolorem ex facilis iusto nisi?"
    },
    {
        imgSrc: "./assets/img/img-03.jpg",
        title:"un super titre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate dolorem ex facilis iusto nisi?"
    },
    {
        imgSrc: "./assets/img/img-04.jpg",
        title:"un super titre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate dolorem ex facilis iusto nisi?"
    },
    {
        imgSrc: "./assets/img/img-05.jpg",
        title:"un super titre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate dolorem ex facilis iusto nisi?"
    }
];
let menu = document.getElementById('plats');
for (let plat of plats){
    menu.innerHTML += `<article> <img src = ${plat["imgSrc"]} alt=""> <h3> ${plat["title"]} </h3> <p>${plat["text"]}</p> </article>`;
}

