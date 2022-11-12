# Christmas Count-down Timer

In this tutorial, you will learn how to create a simple countdown to christmas timer using HTML, CSS, and Vanilla JavaScript.

## HTML Structure
Start with telling the browser that this is an HTML5 file by adding the ```<!DOCTYPE html>``` followed by the ```<html>``` and specify ```lang``` and text direction of your content to either ```ltr``` or ```rtl``` meaning left-to-right and right-to-left repectively.

Basic HTML structure will include the ```<head>``` a container for the ```<title>``` ```<script>``` ```<meta>``` and ```<link>``` to stylesheets, ```<body>``` and ```<footer>```.

Now that you have a basic structure, let us move to the main content which will be done within the ```<body>``` tag. 

In the body tag create a parent ```<div>``` container to house all content. Using a ```<section>``` tag, create four ```<div>``` containers for days, hours, minutes, and seconds respectively. This container will hold the countdown time and label/title.

In each of the four div containers created, create two div containers. One to contain the count-down time and the other to contain the label/title (days, hours, minutes, seconds).

## Adding Style
Using CSS, add a basic reset file to format all browser styles. Your reset file can be seperate from your main CSS file. Import your reset file into your CSS file and link the CSS file to your HTML file using the ```<link>``` in the ```<head>```. 

Give your parent div container a min-width and center it . Add a background color or image to your page. Set the parent element ```<section>``` to display ```flex``` and ```justify-content:space-between```. Set the four containers to display ```flex``` and ```flex-direction:column```. Add color, font-size and margin to the label and countdown time containers.

## JavaScript
Link the ```<script>``` file to your HTML file. Use the ```querySelector()``` method to get the elements that match the div selector classes.

Assign the countdown date to a variable. Use a function to update the count down every second using the ```setInterval```. Get today's date using ```new Date().getTime()```. Calculate the time left to countdown by subtracting the countdown date from today's date. 

Get the time calculations for days, hours, minutes, and seconds using the ```Math.floor()``` function. Set the four div containers to display the result in the div using ```.innerHTML```.

Lastly, using an ```if``` statement, display a text or clear countdown when the countdown is finished.


```javascript
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
    document.querySelector('.headline').innerText = "Merry Christmas!";
  }
}, 1000);
```

## References
- [countdown Timer](https://www.w3schools.com/howto/howto_js_countdown.asp)

## Demo
Click [here](https://thelma-dev.github.io/christmas-countdown/) to see an example.
