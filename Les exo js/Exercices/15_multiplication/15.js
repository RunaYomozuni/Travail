let chff = parseInt(prompt("donne moi le chiffre a multiplié"));
if (isNaN(chff)){
    alert("met un chiffre !")
}
for (let i = 1; i <= 9; i++){
    console.log(chff*i)
}