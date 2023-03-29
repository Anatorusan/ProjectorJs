//setTimout nested
const detonatorTimerNest = (delay) => {
    let countDown = delay;
    const counter = () => {
      if (countDown < 0) {
        return;
      }
      console.log(countDown === 0 ? 'BOOM!' : countDown);
      countDown -= 1;
      setTimeout(counter, 1000);
    } 
    setTimeout(counter, 1000);
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