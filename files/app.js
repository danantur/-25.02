
const fs = require("fs");

fs.writeFile("hello.txt", "Hello мир!", function(error){
 
    if(error) throw error;
    console.log("Асинхронная запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("hello.txt", "utf8");
    console.log(data);
});

//------------------------------

fs.readFile("hello.txt", "utf8", 
    function(error,data){

        console.log("Асинхронное чтение файла");
        if(error) throw error;
        console.log(data);

        fs.unlink("hello.txt", (err) => {
            if (err) console.log(err);
            else console.log("hello.txt was deleted");
        });

    });

console.log("Синхронное чтение файла")
let fileContent = fs.readFileSync("hello.txt", "utf8");
console.log(fileContent);