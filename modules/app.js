const os = require("os");
const greeting = require("./module");

let userName = os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.sayHi(userName));

const user = require("./user");
new user("Евгений", 32).sayHi();