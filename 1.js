var username = localStorage.getItem('username');
var isLoggedIn = username !== null;

if (!isLoggedIn) {
    window.location.href = 'Регистрация.html';
}
alert("Привет пользователь, " + username + "!");

document.addEventListener("DOMContentLoaded", function() {
var square = document.getElementById("square");
square.style.opacity = "1";
});

function updateRemainingTime(endDate) {
var now = new Date();
var difference = endDate - now;


if (difference < 0) {
document.getElementById("remaining-time").textContent = "Акция закончилась";
return;
}

var days = Math.floor(difference / (1000 * 60 * 60 * 24));
var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((difference % (1000 * 60)) / 1000);


document.getElementById("remaining-time").textContent = days + " дней " + hours + " часов " + minutes + " минут " + seconds + " секунд";
}


var endDate = new Date(2024, 4, 1, 23, 59, 59);


setInterval(function() {
updateRemainingTime(endDate);
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
    
      event.preventDefault();
      
      
      form.reset();
    });
  });
  