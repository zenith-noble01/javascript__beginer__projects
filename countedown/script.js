const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minsElement = document.querySelector(".mins");
const secondsElement = document.querySelector(".seconds");

const newYear = "31 may 2022";

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSecond = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSecond / 86400);
  const hours = Math.floor(totalSecond / 3600);
  const minute = Math.floor(totalSecond / 60);
  const seconds = Math.floor(totalSecond);

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minsElement.innerHTML = minute;
  secondsElement.innerHTML = seconds;

  console.log(days, minute, seconds, hours);
}

countdown();

setInterval(countdown, 1000);
