const thisTextBill = {
  text: true,
  addBtnID: "addBtnText",
  resetBtnID: "resetBtnText",
  callCountID: "callCountText",
  callCount: 0,
  smsCountID: "smsCountText",
  smsCount: 0,
  callTotalID: "callTotalText",
  callTotal: "0.00",
  smsTotalID: "smsTotalText",
  smsTotal: "0.00",
  sumTotalID: "sumTotalText",
  sumTotal: "0.00",
};
var theTextBill = billTextRadio();

document.addEventListener("DOMContentLoaded", function () {
  var templateSourceText = document.querySelector(".billsTemplate").innerHTML;
  var billsTemplateText = Handlebars.compile(templateSourceText);
  var textBill = document.querySelector(".textBill");

  textBill.innerHTML = billsTemplateText(thisTextBill);

  var addToBillBtn = document.querySelector("#addBtnText");
  var callsTextTotalElem = document.querySelector("#callTotalText");
  var smsTextTotalElem = document.querySelector("#smsTotalText");
  var totalTextCostElem = document.querySelector("#sumTotalText");
  var textBillResetBtn = document.querySelector("#resetBtnText");
  var billTypeText = document.querySelector(".billTypeText");

  var theTextBill = billTextRadio();

  function displayValues() {
    callsTextTotalElem.innerHTML = theTextBill.getCallTotal();
    smsTextTotalElem.innerHTML = theTextBill.getSMSTotal();
    totalTextCostElem.innerHTML = theTextBill.getTotalCost();
    document.querySelector(
      "#callCountText"
    ).innerHTML = theTextBill.getCallCount();
    document.querySelector(
      "#smsCountText"
    ).innerHTML = theTextBill.getSMSCount();
  }

  addToBillBtn.addEventListener("click", function () {
    theTextBill.addItem(billTypeText.value);
    displayValues();
    totalTextCostElem.classList.add(theTextBill.getClass());
  });

  textBillResetBtn.addEventListener("click", function () {
    billTypeText.value = "";
    theTextBill = billTextRadio();
    totalTextCostElem.classList.remove("danger");
    totalTextCostElem.classList.remove("warning");
    displayValues();
  });
});
