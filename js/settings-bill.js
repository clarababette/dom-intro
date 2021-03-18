// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

var settingsBillAddBtn = document.querySelector(".settingsBillAddBtn");
var settingsBillResetBtn = document.querySelector(".settingsBillResetBtn");
var updateSettingsBtn = document.querySelector(".updateSettings");

var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
var totalSettingsElem = document.querySelector(".totalSettings");

var callCost = 0;
var smsCost = 0;
var totalCostSettings = 0;
var warningLevelSet = 0;
var criticalLevelSet = 0;

var callsTotalSettingsBill = 0;
var smsTotalSettingsBill = 0;


var callCostInput = document.querySelector(".callCostSetting");
var smsCostInput = document.querySelector(".smsCostSetting");

var warningLevelInput = document.querySelector(".warningLevelSetting");
var criticalLevelInput = document.querySelector(".criticalLevelSetting");

function updateSettings() {

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
        }
    } else if (billItemSettings == "sms") {
        if(totalCostSettings + smsCost > criticalLevelSet) {
            alert("Cannot add. Critical level reached.");
            settingsBillTotal.stop(); 
        }   else {
                smsTotalSettingsBill += smsCost;
        }
    }

    totalCostSettings = callsTotalSettingsBill + smsTotalSettingsBill;

    

    callTotalSettingsElem.innerHTML = callsTotalSettingsBill.toFixed(2);
    smsTotalSettingsElem.innerHTML = smsTotalSettingsBill.toFixed(2);
    
    totalSettingsElem.innerHTML = totalCostSettings.toFixed(2);  
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
//settingsBillAddBtn.addEventListener("click", function() {
  //  alert(totalCostSettings);
  //  });

settingsBillResetBtn.addEventListener("click", function() {
 
    callsTotalSettingsBill = 0;
    smsTotalSettingsBill = 0;
    totalSettingsElem.classList.remove("danger");
    totalSettingsElem.classList.remove("warning");
    

    callTotalSettingsElem.innerHTML = callsTotalSettingsBill.toFixed(2);
    smsTotalSettingsElem.innerHTML = smsTotalSettingsBill.toFixed(2);
    totalCostSettings = callsTotalSettingsBill + smsTotalSettingsBill;
    totalSettingsElem.innerHTML = totalCostSettings.toFixed(2);
    
});