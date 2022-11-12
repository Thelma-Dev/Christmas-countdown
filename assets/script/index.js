'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}


function select(selector, parent = document) {
    return parent.querySelector(selector);
}


// Selections
const days = select('.days');
const hours = select('.hours');
const minutes = select('.minutes');
const seconds = select('.seconds');
const santa = select('.text');
const body = select('body');
const heading = select('.headline');


let countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();

const countDown = setInterval(() => {

  const currentDate = new Date().getTime();
  const remainingTime = countDownDate - currentDate;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

    days.innerHTML = Math.floor(remainingTime / (day));
    hours.innerHTML = Math.floor((remainingTime % (day)) / (hour));
    minutes.innerHTML = Math.floor((remainingTime % (hour)) / (minute));
    seconds.innerHTML = Math.floor((remainingTime % (minute)) / second);


  if (remainingTime < 0) {
    clearInterval(countDown);
    heading.innerText = "Merry Christmas!";
  }
}, 1000);
