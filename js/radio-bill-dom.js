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


var theRadioBill = billTextRadio();

function displayRadioValues() {
    callsTotalElem.innerHTML = theRadioBill.getCallTotal();
    smsTotalElem.innerHTML = theRadioBill.getSMSTotal();
    totalCostElem.innerHTML = theRadioBill.getTotalCost();
    document.querySelector(".callCountThree").innerHTML = theRadioBill.getCallCount();
    document.querySelector(".smsCountThree").innerHTML = theRadioBill.getSMSCount();
}

radioBillAddBtn.addEventListener("click", function() {
    var billItem = document.querySelector(".billItemTypeRadio:checked").value;
    theRadioBill.addItem(billItem);
    displayRadioValues();
    totalCostElem.classList.add(theRadioBill.getClass());
});

radioBillResetBtn.addEventListener("click", function() {
    theRadioBill = billTextRadio();
    totalCostElem.classList.remove("danger");
    totalCostElem.classList.remove("warning");
    displayRadioValues();
})
