const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'message.txt');
const newfilePath = path.join(__dirname, 'data', 'messageCopy.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if(err)
        console.log(err);
    else{
        fs.writeFile(newfilePath, data, err =>{
            if(err)
                console.log(err);
            else{
                fs.appendFile(newfilePath, '\n\nThis is a copy of message.text', err =>{
                    if(err)
                        console.log(err);
                    else{
                        fs.readFile(newfilePath, 'utf8', (err, data)=>{
                            if(err)
                                console.log(err)
                            else
                                console.log(data);
                        });
                    }
                });
            }
        });
    }
});

