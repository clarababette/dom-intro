const thisRadioBill = {
  widgName: "Radio button bill",
  instructions: [
    "Select the call or sms radio button. Update the appropriate total and the global total when the ADD button in pressed.",
    "<i>Calls costs R2.75 and a SMS R0.75</i>",
    "<i>If the total cost exceed R30.00 show the total cost in orange, if over R50 show it in red.</i>",
    "What is the benefit of using radio buttons?",
  ],
  radio: true,
  addBtnID: "addBtnRadio",
  resetBtnID: "resetBtnRadio",
  callCountID: "callCountRadio",
  callCount: 0,
  smsCountID: "smsCountRadio",
  smsCount: 0,
  callTotalID: "callTotalRadio",
  callTotal: "0.00",
  smsTotalID: "smsTotalRadio",
  smsTotal: "0.00",
  sumTotalID: "sumTotalRadio",
  sumTotal: "0.00",
};

var theRadioBill = billTextRadio();

document.addEventListener("DOMContentLoaded", function () {
  var templateSourceRadio = document.querySelector(".billsTemplate").innerHTML;
  var billsTemplateRadio = Handlebars.compile(templateSourceRadio);
  var radioBill = document.querySelector(".radioBill");

  radioBill.innerHTML = billsTemplateRadio(thisRadioBill);

  var radioBillAddBtn = document.querySelector("#addBtnRadio");
  var callsTotalElem = document.querySelector("#callTotalRadio");
  var smsTotalElem = document.querySelector("#smsTotalRadio");
  var totalCostElem = document.querySelector("#sumTotalRadio");
  var radioBillResetBtn = document.querySelector("#resetBtnRadio");

  function displayRadioValues() {
    callsTotalElem.innerHTML = theRadioBill.getCallTotal();
    smsTotalElem.innerHTML = theRadioBill.getSMSTotal();
    totalCostElem.innerHTML = theRadioBill.getTotalCost();
    document.querySelector(
      "#callCountRadio"
    ).innerHTML = theRadioBill.getCallCount();
    document.querySelector(
      "#smsCountRadio"
    ).innerHTML = theRadioBill.getSMSCount();
  }

  radioBillAddBtn.addEventListener("click", function () {
    var billItem = document.querySelector(".billItemTypeRadio:checked").value;
    theRadioBill.addItem(billItem);
    displayRadioValues();
    totalCostElem.classList.add(theRadioBill.getClass());
  });

  radioBillResetBtn.addEventListener("click", function () {
    theRadioBill = billTextRadio();
    totalCostElem.classList.remove("danger");
    totalCostElem.classList.remove("warning");
    displayRadioValues();
  });
});
