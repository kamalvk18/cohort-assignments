let counter = 1;

function startTimer(){
    console.log(counter)
    counter++;

    setTimeout(startTimer, 1000)
}

startTimer()