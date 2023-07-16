// dom elements
const billInput = document.getElementById('bill-input');

const btn5 = document.getElementById('btn5');
const btn10 = document.getElementById('btn10');
const btn15 = document.getElementById('btn15');
const btn25 = document.getElementById('btn25');
const btn50 = document.getElementById('btn50');
const custom = document.getElementById('btn-input');

const peopleInput = document.getElementById('people-input');
const errorText = document.getElementById('errorText')

const tipAmount = document.getElementById('tip-amount');
const totalAmount = document.getElementById('total-amount');

const resetBtn = document.getElementById('reset-btn');

btn5.addEventListener('click', function(){
    calculator(5)
});
btn10.addEventListener('click', function(){
    calculator(10)
});
btn15.addEventListener('click', function(){
    calculator(15)
});
btn25.addEventListener('click', function(){
    calculator(25)
});
btn50.addEventListener('click', function(){
    calculator(50)
});

function calculator(tip) {
    if (peopleInput.value === '') {
        errorText.innerText = `Can't be zero`;
        errorText.style.color = 'red'
    }
    else {
        errorText.innerText = ``;
        tipAmount.innerText = (billInput.value * tip / 100) / peopleInput.value;
        totalAmount.innerText = (+billInput.value + (billInput.value * tip / 100)) / peopleInput.value;
    }
}
















// reset btn 
