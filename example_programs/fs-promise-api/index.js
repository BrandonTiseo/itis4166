const fs = require('fs').promises; //add .promises to use promises.
const path = require('path');

const filePath = path.join(__dirname, 'data', 'message.txt');
const newfilePath = path.join(__dirname, 'data', 'messageCopy.txt');

async function processFile(){
    try {
        const data = await fs.readFile(filePath, 'utf8');
        await fs.writeFile(newfilePath, data);
        await fs.appendFile(newfilePath, "\n\nThis is a copy of message.txt");
        const finalData = await fs.readFile
        (newfilePath, 'utf8');
        console.log(finalData);
    } catch(error){
        console.log(error);

    }
}

processFile();