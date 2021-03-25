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

/*function updateSettings() {

    let oldCallCost = callCost;
    let oldSmsCost = smsCost;

    if (callCostInput.value !== "") {
        callCost = parseFloat(callCostInput.value);
        callCostInput.placeholder = "currently set at " + callCost.toFixed(2);
        callCostInput.value = "";
        };
        
        if (smsCostInput.value !== "") {
        smsCost = parseFloat(smsCostInput.value);
        smsCostInput.placeholder = "currently set at " + smsCost.toFixed(2);
        smsCostInput.value = "";
        };
        
        if (warningLevelInput.value !== "") {
        warningLevelSet = parseFloat(warningLevelInput.value);
        warningLevelInput.placeholder = "currently set at " + warningLevelSet.toFixed(2);
        warningLevelInput.value = "";
        };
    
        if (criticalLevelInput.value !== "") {
        criticalLevelSet = parseFloat(criticalLevelInput.value);
        criticalLevelInput.placeholder = "currently set at " + criticalLevelSet.toFixed(2);
        criticalLevelInput.value = "";
        }

        if ((callCost != oldCallCost || smsCost != oldSmsCost) && totalCostSettings !== 0) {
            let updateCost = confirm("Click 'OK' to update the totals based on the new cost.\nAll new items will be based on the new cost regardless.");
            if (updateCost == true) {
                callsTotalSettingsBill = callCost * callCountFour;
                smsTotalSettingsBill = smsCost * smsCountFour;
                callTotalSettingsElem.innerHTML = callsTotalSettingsBill.toFixed(2);
                smsTotalSettingsElem.innerHTML = smsTotalSettingsBill.toFixed(2);
                totalCostSettings = callsTotalSettingsBill + smsTotalSettingsBill;
                totalSettingsElem.innerHTML = totalCostSettings.toFixed(2);  
            }
        }
        if (totalCostSettings < warningLevelSet) {
            totalSettingsElem.classList.remove("warning");
        }

        if (totalCostSettings < criticalLevelSet) {
            totalSettingsElem.classList.remove("danger");
        }


};

function settingsBillTotal() {
    var billItemSettings = document.querySelector(".billItemTypeWithSettings:checked").value;

    if (billItemSettings == "call") {
        if(totalCostSettings + callCost > criticalLevelSet) {
            alert("Cannot add. Critical level reached.");
            settingsBillTotal.stop();
            
        } else {
        callsTotalSettingsBill += callCost;
        callCountFour ++;
        }
    } else if (billItemSettings == "sms") {
        if(totalCostSettings + smsCost > criticalLevelSet) {
            alert("Cannot add. Critical level reached.");
            settingsBillTotal.stop(); 
        }   else {
                smsTotalSettingsBill += smsCost;
                smsCountFour ++;
        }
    }

    totalCostSettings = callsTotalSettingsBill + smsTotalSettingsBill;

    

    callTotalSettingsElem.innerHTML = callsTotalSettingsBill.toFixed(2);
    smsTotalSettingsElem.innerHTML = smsTotalSettingsBill.toFixed(2);
    totalSettingsElem.innerHTML = totalCostSettings.toFixed(2); 
    document.querySelector(".callCountFour").innerHTML = callCountFour;
    document.querySelector(".smsCountFour").innerHTML = smsCountFour; 
};

function levelSet() {
    
    if (totalCostSettings >= criticalLevelSet) {
        totalSettingsElem.classList.add("danger");
    }
    else if (totalCostSettings >= warningLevelSet) {
        totalSettingsElem.classList.add("warning");
    }
};

updateSettingsBtn.addEventListener("click", updateSettings);



settingsBillAddBtn.addEventListener("click", settingsBillTotal);
settingsBillAddBtn.addEventListener("click", levelSet);


settingsBillResetBtn.addEventListener("click", function() {
 
    callsTotalSettingsBill = 0;
    smsTotalSettingsBill = 0;
    callCountFour = 0;
    smsCountFour = 0;
    totalSettingsElem.classList.remove("danger");
    totalSettingsElem.classList.remove("warning");
    

    callTotalSettingsElem.innerHTML = callsTotalSettingsBill.toFixed(2);
    smsTotalSettingsElem.innerHTML = smsTotalSettingsBill.toFixed(2);
    totalCostSettings = callsTotalSettingsBill + smsTotalSettingsBill;
    totalSettingsElem.innerHTML = totalCostSettings.toFixed(2);
    document.querySelector(".callCountFour").innerHTML = callCountFour;
    document.querySelector(".smsCountFour").innerHTML = smsCountFour; 
    
}); */