let Filesystem=require("fs")

Filesystem.writeFileSync("./Delete.html","Content was deleted by unlink()")
Filesystem.unlinkSync("./Delete.html")