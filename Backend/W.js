let FileSystem = require("fs");


let Data = `<h1>hello</h1>`


FileSystem.writeFileSync("./Index.html",Data);


FileSystem.writeFile("./B.html","Roandom",(e)=>{

    console.log(e);
})
