const fs = require("fs");

fs.writeFile("file.txt", "some demo data", (err) => {
    if(err)
        console.log(err);
})