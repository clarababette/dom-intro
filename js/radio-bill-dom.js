const thisRadioBill = {
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
