function User(name, age) {

    this.name = name
    this.age = age
    this.displayInfo = function () {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}`)
    }

}

User.prototype.sayHi = function () {
    console.log(`Привет ${this.name}!`)
}

module.exports = User;