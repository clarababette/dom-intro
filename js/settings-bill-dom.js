var settingsBillAddBtn = document.querySelector(".settingsBillAddBtn");
var settingsBillResetBtn = document.querySelector(".settingsBillResetBtn");
var updateSettingsBtn = document.querySelector(".updateSettings");

var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
var totalSettingsElem = document.querySelector(".totalSettings");

var callCostInput = document.querySelector(".callCostSetting");
var smsCostInput = document.querySelector(".smsCostSetting");

var warningLevelInput = document.querySelector(".warningLevelSetting");
var criticalLevelInput = document.querySelector(".criticalLevelSetting");

var settingsBill = billWithSettings();
settingsBill.widget();

function displaySettingsValues() {
    callTotalSettingsElem.innerHTML = settingsBill.getCallCostTotal();
    smsTotalSettingsElem.innerHTML = settingsBill.getSMSCostTotal();
    totalSettingsElem.innerHTML = settingsBill.getTotalCost();
    document.querySelector(".callCountFour").innerHTML = settingsBill.getCallCount();
    document.querySelector(".smsCountFour").innerHTML = settingsBill.getSMSCount(); 
}

updateSettingsBtn.addEventListener("click", function() {
    
    settingsBill.setCallCost(callCostInput.value);
    callCostInput.placeholder = "currently set at " + settingsBill.getCallCost();
    callCostInput.value = "";

    settingsBill.setSMSCost(smsCostInput.value);
    smsCostInput.placeholder = "currently set at " + settingsBill.getSMSCost();
    smsCostInput.value = "";

    settingsBill.setWarningLevel(warningLevelInput.value);
    warningLevelInput.placeholder = "currently set at " + settingsBill.getWarningLevel();
    warningLevelInput.value = "";

    settingsBill.setCriticalLevel(criticalLevelInput.value);
    criticalLevelInput.placeholder = "currently set at " + settingsBill.getCriticalLevel();
    criticalLevelInput.value = "";

    totalSettingsElem.classList.remove("danger");
    totalSettingsElem.classList.remove("warning");
    displaySettingsValues();
    totalSettingsElem.classList.add(settingsBill.getClass());
    


});

settingsBillAddBtn.addEventListener("click", function() {
    var billItem = document.querySelector(".billItemTypeWithSettings:checked").value;
    settingsBill.addItem(billItem);
    displaySettingsValues();
    totalSettingsElem.classList.add(settingsBill.getClass());
});

settingsBillResetBtn.addEventListener("click", function() {
    settingsBill.resetTotals();
    totalSettingsElem.classList.remove("danger");
    totalSettingsElem.classList.remove("warning");
    displaySettingsValues();
})

