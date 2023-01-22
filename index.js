// Code your solutions in this file
function writeCards(names, message){
    let arr = [];
    //Thank you, Guadalupe, for the wonderful surprise gift!
    for (let cnt = 0; cnt <= names.length-1; cnt++){
        arr.push(`Thank you, ${names[cnt]}, for the wonderful ${message} gift!`);
    }
    return arr;
}

function countDown(num){
    for (num; num >= 0; num--){
        console.log(num);
    }
}

//writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
countDown(100);