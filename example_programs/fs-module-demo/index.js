const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'data');
const newDirPath = path.join(__dirname, 'new-data');
const filePath = path.join(dirPath, 'message.txt');
const newFilePath = path.join(dirPath, 'newMessage.txt');

//read a file
try{
    if(fs.existsSync(filePath)){
        const data = fs.readFileSync(filePath, 'utf8');
        console.log(data);
    } else {
        console.log('File does not exist.');
    }
} catch(error){
    console.log(error);
}


//create and write to a file
try{
    fs.writeFileSync(newFilePath, 'This is a demo of writing a file.');
    //overwrites if the file already exists!
} catch(error){
    console.log(error);
}


//append a file -> add new content not overwite.
try{
    fs.appendFileSync(newFilePath, '\n\nThis is a demo of the append call');
} catch(error){
    console.log(error);
}


//deleting a file
try{
    fs.unlinkSync(newFilePath);
} catch(error){
    console.log(error);
}


//create a new folder
try{
    fs.mkdirSync(newDirPath);
} catch(error){
    console.log(error);
}

//remove a folder
try{
    fs.rmdirSync(newDirPath); //works only if the folder is empty.
} catch(error){
    console.log(error);
}

//remove a non-empty folder
try{
    fs.rmSync(newDirPath, {recursive: true});
} catch(error){
    console.log(error);
}