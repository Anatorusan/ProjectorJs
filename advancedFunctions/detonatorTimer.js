//setTimout
const detonatorTimer = (delay) => {
    if (delay < 0) {
      return
    }
    console.log(delay === 0 ? 'BOOM!' : delay);
    delay -= 1;
    setTimeout(detonatorTimer, 1000, delay);
  }

//setInterval
