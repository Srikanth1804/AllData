let url=require("url");
let adress="http://localhost:8080/default.htm?year=2017&month=february"

let web=url.parse(adress,true)

console.log(web.host);
console.log(web.pathname);
console.log(web.search);
console.log(web.query);

let Query=web.query
console.log(Query.month);

