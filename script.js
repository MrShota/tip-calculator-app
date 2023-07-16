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

btn5.addEventListener('click', function () {
    btn5.style.background = '#26C2AE'
    btn10.style.background = ''
    btn15.style.background = ''
    btn25.style.background = ''
    btn50.style.background = ''
    calculator(5)
});
btn10.addEventListener('click', function () {
    btn5.style.background = ''
    btn10.style.background = '#26C2AE'
    btn15.style.background = ''
    btn25.style.background = ''
    btn50.style.background = ''

    calculator(10)
});
btn15.addEventListener('click', function () {
    btn5.style.background = ''
    btn10.style.background = ''
    btn15.style.background = '#26C2AE'
    btn25.style.background = ''
    btn50.style.background = ''

    calculator(15)
});
btn25.addEventListener('click', function () {
    btn5.style.background = ''
    btn10.style.background = ''
    btn15.style.background = ''
    btn25.style.background = '#26C2AE'
    btn50.style.background = ''

    calculator(25)
});
btn50.addEventListener('click', function () {
    btn5.style.background = ''
    btn10.style.background = ''
    btn15.style.background = ''
    btn25.style.background = ''
    btn50.style.background = '#26C2AE'

    calculator(50)
});
custom.addEventListener('input', function () {
    calculator(custom.value)
})

function calculator(tip) {
    if (peopleInput.value === '') {
        errorText.innerText = `Can't be zero`;
        errorText.style.color = 'red'
        peopleInput.style.border.color="red"
    }
    else {
        errorText.innerText = ``;
        tipAmount.innerText = (billInput.value * tip / 100) / peopleInput.value;
        totalAmount.innerText = (+billInput.value + (billInput.value * tip / 100)) / peopleInput.value;
    }
}

resetBtn.addEventListener('click', () => {
    tipAmount.innerText = '$0.00'
    totalAmount.innerText = '$0.00'

})














// reset btn 
