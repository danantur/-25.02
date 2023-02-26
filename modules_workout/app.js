var greeting1 = require("./greetings");
console.log(`Hello ${greeting1.name}`);
 
var greeting2 = require("./greetings");
greeting2.name = "Bob";
 
console.log(`Hello ${greeting2.name}`);
console.log(`Hello ${greeting1.name}`);

//----------------------------------------------

const welcome = require("./welcome");
 
welcome.getMorningMessage();
welcome.getEveningMessage();