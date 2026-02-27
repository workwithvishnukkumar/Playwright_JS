console.log(x);
var x = "Vishnu";
console.log(x);

function hoisting() {
    console.log(y); //literal = undefined
    var y = "Kumar"; //literal = kumar
    console.log(y); //literal = kumar
}
hoisting();

// Template literal 
let name = "Vishnu";
let sentence = `Hi ,${name} K Kumar`;
console.log(sentence);