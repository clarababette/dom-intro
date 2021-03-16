// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var billTypeText = document.querySelector(".billTypeText");
var addToBillBtn = document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");
var callsTotal = 0;
var smsTotal = 0;

function textBillTotal() {
    var billTextEntered = billTypeText.value.trim();

    switch (billTextEntered) {
        case "call":
            callsTotal += 2.75;
            break;
        case "sms":
            smsTotal += 0.75;
            break;
        case "clear":
            callsTotal = 0;
            smsTotal = 0;
            totalCostElem.classList.remove("danger");
            totalCostElem.classList.remove("warning");
            break;
        default:
            billTypeText.value = "Try again!"
            break;
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

addToBillBtn.addEventListener("click", textBillTotal);