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


let countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();

const countDown = setInterval(() => {

  const currentDate = new Date().getTime();
  const remainingTime = countDownDate - currentDate;

    days.innerHTML = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    hours.innerHTML = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.innerHTML = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    seconds.innerHTML = Math.floor((remainingTime % (1000 * 60)) / 1000);


  if (remainingTime < 0) {
    clearInterval(countDown);
    return;
  }
}, 1000);
