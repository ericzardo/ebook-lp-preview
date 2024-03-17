const updateTimer = (duration) => {
    const [hours, minutes, seconds] = document.querySelectorAll(".countdown-value");
  
    let timer = duration;
  
    let min, sec;
  
    setInterval(function () {
        min = parseInt(timer / 60, 10);
        sec = parseInt(timer % 60, 10);
  
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
  
        minutes.textContent = min;
        seconds.textContent = sec;
  
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);

}
export {updateTimer}