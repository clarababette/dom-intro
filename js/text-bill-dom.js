const thisTextBill = {
  widgName: "Text input bill",
  instructions: [
    "<i>Enter call or sms in the textbox. Update the appropriate total and the global total when the ADD button in pressed.</i>",
    "<i>Calls costs R2.75 and a SMS R0.75</i>",
    "<i>If the total cost exceed R30.00 show the total cost in orange, if over R50 show it in red.</i>",
  ],
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
    document.querySelector("#callCountText").innerHTML = theTextBill.getCallCount();
    document.querySelector("#smsCountText").innerHTML = theTextBill.getSMSCount();
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

