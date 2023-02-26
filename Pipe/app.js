const fs = require("fs");
const zlib = require("zlib");
 
let readableStream = fs.createReadStream("hello.txt", "utf8");
 
let writeableStream = fs.createWriteStream("some.txt");
 
readableStream.pipe(writeableStream);

let readableStream2 = fs.createReadStream("hello.txt", "utf8");
  
let writeableStream2 = fs.createWriteStream("hello.txt.gz");
  
let gzip = zlib.createGzip();
  
readableStream2.pipe(gzip).pipe(writeableStream2);