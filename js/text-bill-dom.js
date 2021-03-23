

var billTypeText = document.querySelector(".billTypeText");
var addToBillBtn = document.querySelector(".addToBillBtn");
var callsTextTotalElem = document.querySelector(".callTotalOne");
var smsTextTotalElem = document.querySelector(".smsTotalOne");
var totalTextCostElem = document.querySelector(".totalOne");
var textBillResetBtn = document.querySelector(".textBillResetBtn");

var theTextBill = billTextRadio();

function displayValues() {
    callsTextTotalElem.innerHTML = theTextBill.getCallTotal();
    smsTextTotalElem.innerHTML = theTextBill.getSMSTotal();
    totalTextCostElem.innerHTML = theTextBill.getTotalCost();
    document.querySelector(".callCountTwo").innerHTML = theTextBill.getCallCount();
    document.querySelector(".smsCountTwo").innerHTML = theTextBill.getSMSCount();
}

addToBillBtn.addEventListener("click", function() {
    theTextBill.addItem(billTypeText.value);
    displayValues();
    totalTextCostElem.classList.add(theTextBill.getClass());
});

textBillResetBtn.addEventListener("click", function() {
    theTextBill = billTextRadio();
    totalTextCostElem.classList.remove("danger");
    totalTextCostElem.classList.remove("warning");
    displayValues();
})



