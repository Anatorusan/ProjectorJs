//setTimout recursion
const detonatorTimerRecr = (delay) => {
    if (delay < 0) {
      return
    }
    console.log(delay === 0 ? 'BOOM!' : delay);
    delay -= 1;
    setTimeout(detonatorTimerRecr, 1000, delay);
  }

//setTimout nested
const detonatorTimerNest = (delay) => {
    setTimeout(function counter () {
      if (delay < 0) {
        return;
      }
      console.log(delay === 0 ? 'BOOM!' : delay);
    delay -= 1;
    setTimeout(counter, 1000, delay);
    }, 1000, delay)
  }

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

  detonatorTimerNest(10)