const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const interval = setInterval(() => {
      var hour = Math.floor(seconds / 3600);
      var min = Math.floor(seconds / 60) - (hour * 60);
      var sec = Math.floor(seconds % 60);
      timerEl.innerHTML=`${hour < 10 ? "0" : ""}${hour}:${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
      seconds--;
      console.log("seconds", seconds);
      if (seconds < 0) {
          clearInterval(interval);
      }
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.type="number"
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});


