// 1-
let favFood = ["pates", "pizza","makis","moules"];
// 2-
console.log(favFood[1]);
// 3-
favFood.splice(3,1,"baba au rhum");
let ancienFavFood = favFood.shift();

favFood.push("biscuits");
favFood.unshift("sushis");
// 4-
let tableauVide = [];
tableauVide.pop();
// 5-
let tableau1 = [2,3,4,5];
tableau1.splice(1,1);

let tableau2 = ["alpha", "gamma", "delta"];
tableau2.splice(1,0,"beta");

let tableau3 = [10,-10,-5,-3,2,1];
tableau3.splice(1,3,9,8,7,6,5,4,3);
 // toute les console a afficher
console.log(tableauVide);
console.log(favFood);
console.log(tableau1);
console.log(tableau2);
console.log(tableau3);
