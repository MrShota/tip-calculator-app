'use strict'

// dom elements
const billInput = document.getElementsByClassName('.bill-input');

const btn5 = document.getElementsByClassName('.btn5');
const btn15 = document.getElementsByClassName('.btn15');
const btn25 = document.getElementsByClassName('.btn25');
const btn50 = document.getElementsByClassName('.btn50');
const custom = document.getElementsByClassName('.btn-input');

const peopleInput = document.getElementsByClassName('.people-input');

const tipAmount = document.getElementsByClassName('.tip-amount');
const totalAmount = document.getElementsByClassName('.total-amount');

const resetBtn = document.getElementsByClassName('.reset-btn');

// reset btn 
function resetBtn() {
    billInput.value = '';
    custom.value='Custom';
    peopleInput.value = '';

    tipAmount.value='$0.00';
    totalAmount.value='$0.00';

    resetBtn.style.backgroundColor: #0D686D;


 


}