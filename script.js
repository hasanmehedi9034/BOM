// // select dom element
// const width = document.getElementById('width');
// const height = document.getElementById('height');

// let myWindow;

// // show window object properties
// width.innerHTML = "Window inner width  is: " + window.innerWidth;
// height.innerHTML = "Window inner heitht  is: " + window.innerHeight;

// function openWindow() {
//     myWindow =  window.open('https://www.google.com/')
// }

// function closeWindow() {
//     myWindow.close();
// }

// console.log(location.href);
// console.log(location.hostname);
// console.log(location.pathname);
// console.log(location.protocol);
// console.log(location.port)
// console.log(locaiton.assign('https://www.google.com'))

// function back() {
//     history.back();
// }

// function forward() {
//     history.forward()
// }

// console.log(navigator.onLine)

// alert('Hello');
// if (confirm()) {
//     console.log('You pressed OK')
// }
// else {
//     console.log('You pressed cancel')
// }
// console.log(prompt('Type your age', 'Mehedi'))
// if (prompt('Please enter Your name: ')) {
//     console.log('you type your name')
// }
// else {
//     console.log('Not')
// }

// setTimeOut
// setInterval(function)


// cookie let you store user information
// const setNameCookie = document.querySelector('#set-name-cookie')
// const setUsernameCookie = document.querySelector('#set-username-cookie')
// const getNameCookie = document.querySelector('#get-name-cookie')
// const getUsernameCookie = document.querySelector('#get-username-cookie')

// function setCookie(cookieName, cookieValue, exDays) {
//     const d = new Date();
//     d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);

//     let expires = "expries=" + d.toUTCString();

//     document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/"
// }

// function getCookie(cookieName) {
//     let cookieArray = document.cookie.split(";");
//     let name = cookieName + "=";

//     for (let i = 0; i < cookieArray.length; i++) {
//         let c = cookieArray[i].trim();

//         if (c.indexOf(name) > -1) {
//             return (c.substring(name.length));
//         }
//     }

//     return false;
// }

// function checkCookie(name) {
//     let cookieValue = getCookie(name);

//     if (!cookieValue) {
//         setCookie('name', 'mehedi', 2);
//     }
//     else {
//         console.log('welcome back ' + cookieValue);
//     }
// }

// function validation() {
//     const inputObj = document.getElementById('1d1');

//     if (inputObj.validity.rangeOverflow) {
//         inputObj.setCustomValidity('You give overflow')
//     }
//     else if(inputObj.validity.rangeUnderflow) {
//         inputObj.setCustomValidity('You give underflow')
//     }
//     else if(inputObj.validity.valueMissing) {
//         inputObj.setCustomValidity('value missing')
//     }

//     if(!inputObj.checkValidity()) {
//         document.getElementById('demo').innerHTML = inputObj.validationMessage
//     }
//     else {
//         document.getElementById('demo').innerHTML = inputObj.validationMessage
//     }
// }
 

// function setLocalStorage(key, value) {
//     localStorage.setItem(key, value);
// }

// function getLocalStorage(key) {
//     console.log(localStorage.getItem(key));
// }

// function removeLocalStorage(key) {
//     localStorage.removeItem(key);
// }

// function clearLocalStorage() {
//     localStorage.clear();
// }


// web worker

const display = document.getElementById('display');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }   
    else {
        display.innerHTML('Geolocation is not available')
    }
}

function showPosition(position) {
    display.innerHTML = position.coords.latitude + ", " + position.coords.longitude
}
