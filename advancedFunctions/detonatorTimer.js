//setTimout recursion
const detonatorTimerRecr = (delay) => {
  if (delay < 0) {
    return
  }
  console.log(delay === 0 ? 'BOOM!' : delay);
  delay -= 1;
  setTimeout(detonatorTimerRecr.bind(this, delay), 1000);
}

//setInterval
const detonatorTimerInterv = (delay) => {
    let countDown = delay;
    const timerId = setInterval(() => {
      console.log(countDown === 0 ? 'BOOM!' : countDown);
      countDown -= 1;
      if (countDown < 0) {
        clearInterval(timerId);
      }
    }, 1000);
  }