const fs = require("fs");

fs.readFile("file.txt", 'utf-8', (err, data) => {
    if(err) 
        console.log(err);
    else {
        let newData = "";
        data.trim();
        let i=0;
        while(i < data.length) {
            // newData.append(data[i]);
            newData = newData + data[i];
            if(data[i] === ' ') {
                while(data[i] === ' ')
                i++;
            } else 
                i++;
        }
        
        fs.writeFile('file.txt', newData.trim(), (err) => {
            if(err)
                console.log(err);
        });
    }
})