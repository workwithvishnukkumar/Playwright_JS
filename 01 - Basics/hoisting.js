console.log(x);
var x = "Vishnu";
console.log(x);

function hoisting() {
    console.log(y); //literal = undefined
    var y = "Kumar"; //literal = kumar
    console.log(y); //literal = kumar
}
hoisting();