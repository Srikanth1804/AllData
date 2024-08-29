let FileSystem = require("fs");

let Data = FileSystem.readFileSync("./A.txt","utf-8");


let Html = `


<h1>Vanakkam</h1>


`

FileSystem.writeFile(`${Data}.html`,Html,(e)=>{
    console.log(e);
})