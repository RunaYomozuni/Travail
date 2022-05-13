
// 1
for (let a = 0; a <= 10; a++){
    console.log(a)
}
// 2
for (let b = 0; b <= 100; b++){
    if (b % 2 === 1){
        console.log(b)
    }
}
// 3
for (let c = 0; c <= 70; c++){
    if (c % 7 === 0){
        console.log(c)
    }
}
//4
for (let i2 = 1; i2 <= 10; i2++){
    document.write('<h1>table de ' + i2 + ' : </h1>')
    document.write('<ul>')
    for (let i = 0; i <= 10; i++){
        document.write('<li> '+ i2 * i + ' </li>');
    }
    document.write('</ul>');
}

// 5
for (let d = 1; d <= 10; d++){
    let somme = d + d;
    console.log(somme);
}

// 6
for  (let d = 1; d <= 10; d++){
    let somme = 1 * d;
    console.log(somme);
}
// 7
for (let a = 10; a <= 30; a++){
    console.log(a)
}
// 8
function convertiseur() {
    let ask = parseInt(prompt('Saisie un nombre qui seras convertie'));
    let result = (ask *9/5)+32
    console.log(`la convertion donne ${result}`)
}
convertiseur()
// 9
function convertiseur2() {
    let ask = parseInt(prompt('Saisie un nombre qui seras convertie'));
    let result = (ask -32)*5/9
    console.log(`la convertion donne ${result}`)
}
convertiseur2()
// 10
let arr = [15,5,520,895,45,5496];
Math.max(...arr)
// 11
let arr2 = [15,5,520,895,45,5496];
let result = arr