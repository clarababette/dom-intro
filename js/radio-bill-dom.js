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
