// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

currentTimestamp = new Date()
currentHours = currentTimestamp.getHours()
currentMinutes = currentTimestamp.getMinutes()
currentSeconds = currentTimestamp.getSeconds()

const startTimer = (hours, minutes, seconds, hours24=false) => {
    setInterval(()=>{
        let meriddean = ' AM';
        if (hours24){
            if (hours > 12) hours-=12, meriddean = ' PM';
        }

        if (minutes.toString().length == 1) minutes = '0' + minutes
        if (seconds.toString().length == 1) seconds = '0' + seconds
        if (hours.toString().length == 1) hours = '0' + hours
        timer = hours+':'+minutes+'::'+seconds
        if (hours24) timer += meriddean;
        console.log(timer)

        if (seconds != 59) seconds++;
        else if(minutes != 59) {
            seconds = '00'
            minutes++
        }
        else if(hours != 23) {
            minutes = '00'
            seconds = '00'
            hours++
        }
        else {
            hours = '00'
            minutes = '00'
            seconds = '00'
        }
    }, 1000)
}

startTimer(currentHours, currentMinutes, currentSeconds);