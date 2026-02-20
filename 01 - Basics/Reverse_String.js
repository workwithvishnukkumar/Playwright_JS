//Reverse the Characters of the String
/** 
 Author : Vishnu K Kumar
 **/
console.log("Reverse the Characters of the String");
let x = "Vishnu K Kumar";
let y = "";

for (let i = x.length - 1; i >= 0; i--) {
    y = y + x[i];
}
console.log(y);