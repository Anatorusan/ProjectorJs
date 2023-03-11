// 3 parameters
// time units: days, hours, minutes, seconds
// time units change the result
// make default value for each time unit type
// if the initial date is bigger than the end-date, the function must treat them vice-versa and operate correctly
// consider date object

function durationBetweenDates (initalDate = "02 Aug 1985", endDate = "04 Aug 1985", timeUnit = "days") {
    //object with dates table
    let duration;
    const timeUnitsTable = {
        seconds: 1000,
        minutes: 60000,
        hours: 3600000,
        days: 86400000
    }

    const milisecInitalDateb = new Date(initalDate);
    const milisecEndDate = new Date(endDate);
    let milisecDif = milisecEndDate - milisecInitalDateb;
    if (milisecDif < 0) {
        milisecDif *= -1;
    };

    //put switch here

    if (timeUnit === "days") {
        duration = milisecDif / timeUnitsTable.days
    }

    return duration;  

}

console.log(durationBetweenDates());