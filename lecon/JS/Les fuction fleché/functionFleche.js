/* ARROW FUNCTIONS
(paramètre) => {instructions}

const truc = function(paramètre) {
instructions
return résultat
}
*/

const addES5 = function(x,y) {
  return x + y;
}
console.log(addES5(4,5));
//fléché


  function modulo(a,b){
    if (a%b === 0){
      return "paire";
    }else {
      return "impair"
    }
  }
  modulo(2,2);

  let result = (c,b) => {return c%b === 0}
