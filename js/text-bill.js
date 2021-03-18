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
var callsTextTotalElem = document.querySelector(".callTotalOne");
var smsTextTotalElem = document.querySelector(".smsTotalOne");
var totalTextCostElem = document.querySelector(".totalOne");
var callsTextTotal = 0;
var smsTextTotal = 0;



function textBillTotal() {
     var billTextEntered = billTypeText.value.trim()
    
    switch (billTextEntered) {
        case "call":
            callsTextTotal += 2.75;
            break;
        case "sms":
            smsTextTotal += 0.75;
            break;
        case "clear":
            callsTextTotal = 0;
            smsTextTotal = 0;
            totalTextCostElem.classList.remove("danger");
            totalTextCostElem.classList.remove("warning")
            break;
        default:
            billTypeText.value = "Try again!"
            break;
    }

    callsTextTotalElem.innerHTML = callsTextTotal.toFixed(2);
    smsTextTotalElem.innerHTML = smsTextTotal.toFixed(2);
    var totalTextCost = callsTextTotal + smsTextTotal;
    totalTextCostElem.innerHTML = totalTextCost.toFixed(2);

    if (totalTextCost > 50) {
        totalTextCostElem.classList.add("danger");
    }
    else if (totalTextCost > 30){
        totalTextCostElem.classList.add("warning");
    }
};

addToBillBtn.addEventListener("click", textBillTotal);

