//These keywords can be used to write asynchronous codes that looks synchronous, making it easier to read and maintain.

//async: define a function that returns a promise
//await: used within an async function to pause execution until a promise is settled.
function getData(){
    let number = 0.6;
    console.log(number);
    //creating the promise
    return new Promise(function(resolve, reject) {
        if(number > 0.5)
            resolve('The data was retrieved succesfully');
        else
            reject('An error occured while retrieving the data');
    });
}

function processData(){
    let number = 0.6;
    console.log(number);
    //creating the promise
    return new Promise(function(resolve, reject) {
        if(number > 0.5)
            resolve('The data was processed succesfully');
        else
            reject('An error occured while processing the data');
    });
}

function recordData(){
    let number = 0.6;
    console.log(number);
    //creating the promise
    return new Promise(function(resolve, reject) {
        if(number > 0.5)
            resolve('The data was recorded succesfully');
        else
            reject('An error occured while recorded the data');
    });
}


//async and await means we dont need a then and catch.
async function processTasks(){
    try{
        const data = await getData(); //waits for this function to complete before moving on, wont block event loop though.
        console.log(data);
        const dataProcessed = await processData();
        console.log(dataProcessed);
        const dataRecorded = await recordData();
        console.log(dataRecorded);
    }catch(error) {
        console.log(error);
    }
}

processTasks();