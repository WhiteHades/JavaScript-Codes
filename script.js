//var let const
//hoisting
//types in js
//primitive and reference
//push pop shift unshift


//how to accept user input


//easy way with a window prompt
// let username = window.prompt("What's your name?");
// console.log(username)

//difficult way html textbox
// let username;

// document.getElementById("myButton").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username)
//     document.getElementById("myLabel").innerHTML = "Hello " + username;
// }

//html part
/* <label>Enter your name:</label><br>
    <input type="text" id="myText"><br>
    <button type="button" id="myButton">submit</button>
*/


//type conversion
// let age = window.prompt("How old are you?");

// console.log(typeof age)
// age = Number(age);
// console.log(typeof age)
// age += 1;
// console.log("Happy Birthday! You are", age, "years old");

// let x;
// let y;
// let z;

// x = Number("3.14");
// y = String(3.14);
// z = Boolean(""); //if string empty, its false, if not, its true

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


// //math

// let x;
// let y = 5;
// let z = 9;
// let maximum;
// let minimum;

// x = Math.round(x);
// x = Math.floor(x);
// x = Math.ceil(x);
// x = Math.pow(x, 2);
// x = Math.sqrt(x);
// x = Math.abs(x);
// maximum = Math.max(x, y, z);
// minimum = Math.min(x, y, z);

// console.log(x);


// //hypotenuse practise program
// let a;
// let b;
// let c;

// document.getElementById("submitButton").onclick = function(){
//     a = document.getElementById("aTextBox").value;
//     a = Number(a);

//     b = document.getElementById("bTextBox").value;
//     b = Number(b)

//     c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

//     document.getElementById("cLabel").innerHTML = "Side C: " + c;
// }

// html
/* <Label id="aLabel">Side A:</Label><br>
   <input type="text" id="aTextBox"><br>
   <Label id="bLabel">Side B:</Label><br>
   <input type="text" id="bTextBox"><br>
   <button type="button" id="submitButton">submit</button><br>
   <Label id="cLabel"></Label><br></br> */



// counter program
let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick = function(){
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}