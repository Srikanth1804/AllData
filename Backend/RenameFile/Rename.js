let Filesystem=require("fs")
Filesystem.writeFileSync("./Rename.html","hii")

Filesystem.renameSync("./Rename.html","./Index.html")