'use strict'

// dom elements
const billInput = document.getElementById('bill-input');

const btn5 = document.getElementById('btn5');
const btn15 = document.getElementById('btn15');
const btn25 = document.getElementById('btn25');
const btn50 = document.getElementById('btn50');
const custom = document.getElementById('btn-input');

const peopleInput = document.getElementById('people-input');

const tipAmount = document.getElementById('tip-amount');
const totalAmount = document.getElementById('total-amount');

const resetBtn = document.getElementById('reset-btn');

// reset btn 
function resetBtn() {
    billInput.value = '';
    custom.value='Custom';
    peopleInput.value = '';

    tipAmount.value='$0.00';
    totalAmount.value='$0.00';

    resetBtn.style.backgroundColor= #0D686D;


 


}