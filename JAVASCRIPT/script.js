// animation script
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let bgMount = document.getElementById('bgMount');
let welcome = document.getElementById('welcome');
let sdMount = document.getElementById('sdMount');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll' , function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    bgMount.style.top = value * 0.5 + 'px';
    sdMount.style.top = value * 0 + 'px';
    welcome.style.letterSpacing = value * 1 + 'px';
    btn.style.top = value * 0 + 'px';
    header.style.top = value * 0.5 + 'px';
})
// Event Listener
let nameform
let submit = document.querySelector('#submit');

document.querySelector('#submit').onclick = function(){
    nameform = document.querySelector('#form_name').value;
}


submit.addEventListener("click", function() {
    alert("Your order have been recieved Thank You "+ nameform );
}
)