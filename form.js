let name = document.getElementById('name');
let number = document.getElementById('number');
let password = document.getElementById('password');
let date = document.getElementById('date')
let formReceived = document.getElementById("form");


let displayName = document.getElementById('displayTXT');
let displayNum = document.getElementById('displayNum');
let displayPass = document.getElementById('displayPass');

formReceived.addEventListener("submit", getName);

function getName(event){
    event.preventDefault();
    displayName.innerHTML = event.target.text.value;
    displayNum.innerHTML = event.target.number.value;
    displayPass.innerHTML = event.target.password.value;
    displayDate.innerHTML = event.target.date.value;
}