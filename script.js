let dayItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#minutes");
let secItem = document.querySelector("#seconds");

let countDown = () => {
    let futureDate = new Date('7 Jul 2025');
    const currentDate = new Date();
    const myDate = futureDate - currentDate;
    
    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor((myDate / 1000 / 60 / 60) % 24);
    let minutes = Math.floor((myDate / 1000 / 60) % 60);
    let seconds = Math.floor((myDate / 1000) % 60);
    
    dayItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = minutes;
    secItem.innerHTML = seconds;
}

countDown();
setInterval(countDown, 1000);
