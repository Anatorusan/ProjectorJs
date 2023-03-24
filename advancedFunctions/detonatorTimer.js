//setTimout recursion
const detonatorTimerRecr = (delay) => {
    if (delay < 0) {
      return
    }
    console.log(delay === 0 ? 'BOOM!' : delay);
    delay -= 1;
    setTimeout(detonatorTimer, 1000, delay);
  }

//setTimout nested


//setInterval
const detonatorTimerInterv = (delay) => {
    const timerId = setInterval(() => {
      console.log(delay === 0 ? 'BOOM!' : delay);
      delay -= 1;
      if (delay < 0) {
        clearInterval(timerId);
      }
    }, 1000, delay);
  }