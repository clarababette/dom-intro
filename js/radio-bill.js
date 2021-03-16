// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
var callsTotalElem = document.querySelector(".callTotalTwo");
var smsTotalElem = document.querySelector(".smsTotalTwo");
var totalCostElem = document.querySelector(".totalTwo");
var radioBillResetBtn = document.querySelector(".radioBillResetBtn");


var callsTotal = 0;
var smsTotal = 0;

function radioBillTotal() {
    var billItem = document.querySelector(".billItemTypeRadio:checked").value;
    
    if (billItem == "call") {
        callsTotal += 2.75;
    } else if (billItem == "sms") {
        smsTotal += 0.75;
    }

    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);

    if (totalCost > 50) {
        totalCostElem.classList.add("danger");
    }
    else if (totalCost > 30){
        totalCostElem.classList.add("warning");
    }
    
};

radioBillAddBtn.addEventListener("click", radioBillTotal);
radioBillResetBtn.addEventListener("click", function(){
    
    callsTotal = 0;
    smsTotal = 0;
    totalCostElem.classList.remove("danger");
    totalCostElem.classList.remove("warning");

    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
        
});
