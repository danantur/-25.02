const Emitter = require("events");
let emitter = new Emitter();

//--------------------------------

let eventName = "greet";
emitter.on(eventName, function(){
    console.log("Hello all!");
});
 
emitter.on(eventName, function(){
    console.log("Привет!");
});
 
emitter.emit(eventName);

//--------------------------------

let eventName2 = "hi";
emitter.on(eventName2, function (string) {
    console.log(string);
})

emitter.emit(eventName2, "Привет пир!");

//--------------------------------

const util = require("util");

let eventName3 = "hello";

class User extends Emitter {
    sayHi(data) {
        this.emit(eventName3, data);
    }
}
 
let user = new User();
user.on(eventName3, function(data){
    console.log(data);
});
  
user.sayHi("Наследуемый привет :P");