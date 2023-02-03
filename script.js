// select dom element
const width = document.getElementById('width');
const height = document.getElementById('height');

let myWindow;

// show window object properties
width.innerHTML = "Window inner width  is: " + window.innerWidth;
height.innerHTML = "Window inner heitht  is: " + window.innerHeight;

function openWindow() {
    myWindow =  window.open('https://www.google.com/')
}

function closeWindow() {
    myWindow.close();
}

