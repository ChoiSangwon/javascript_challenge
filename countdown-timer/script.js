const newYears = "1 Jan 2023";

const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minEl = document.getElementById("mins");
const secEl = document.getElementById("seconds");

const tohourEl = document.getElementById("todayhours");
const tominEl = document.getElementById("todaymins");
const tosecEl = document.getElementById("todayseconds");

function countdown() {
  const aaa = new Date();
  console.log(aaa);
  const newYearsDate = new Date(newYears); //2023년 1월 1일의 시간 값
  const currentDate = new Date(); //현재 날짜 및 시간

  const totalSeconds = (newYearsDate - currentDate) / 1000;
  //현재부터 2023년 1월 1일까지의 남은 시간이 나온다.
  //형식은 남은 날 + 남은 시간 + 남은 분+ 남은 초 (ms)가 주어진다
  //처음에 1000을 나눠주는 이유는 밀리세크(ms) 버릴려고 나눠줌.

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const sec = Math.floor(totalSeconds) % 60;

  //   console.log(days, hours, mins, sec);
  dayEl.innerHTML = days;
  hourEl.innerHTML = formatTime(hours);
  minEl.innerHTML = formatTime(mins);
  secEl.innerHTML = formatTime(sec);

  tohourEl.innerHTML = aaa.getHours();
  tominEl.innerHTML = aaa.getMinutes();
  tosecEl.innerHTML = aaa.getSeconds();
}

setInterval(countdown, 1000);

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
