//Tutorial used as guide: https://www.youtube.com/watch?v=eJIHT0cENR0 

//Seeking values for each
const cost_input = document.querySelector('.cost');
const service_input = document.querySelector('.service');
const people_input = document.querySelector('.people');

const tip_btn = document.querySelector('#tip-btn');

// everything runs off of this event
tip_btn.addEventListener('click', calc_tip);

function calc_tip () {
  //converting value of cost input into a number
  //Number() converts strings into numbers
  let cost = Number(cost_input.value);
  //converting value of service into a number
  //divided by 100 in order to get a decimal that can be used as a percentage
  let service = Number(service_input.value) / 100;
  let people = Number(people_input.value);
  // actual tip calculation 
  let tip = (cost * service) / people;
  
  //changes tip value on screen
  let tip_el = document.querySelector('.tip-wrap .tip');
  // toFixed keeps number at the second decimal place
  tip_el.innerText = '$' + tip.toFixed(2) + ((people > 1) ? ' each ' : '');
  
}

//background color
function changeBodyBg(color){
    document.body.style.background = color;
}


