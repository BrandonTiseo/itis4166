
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



//Consuming the promise (chaining example)
getData()
.then(data => {
    console.log(data);
    return processData();

})
.then(data=> {
    console.log(data);
    return recordData();
})
.then(data =>{
    console.log(data);
})
.catch(err => console.log(err));