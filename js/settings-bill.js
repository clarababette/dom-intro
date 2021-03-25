function billWithSettings() {
    var callCost = 0;
    var smsCost = 0;
    var warningLevel = 0;
    var criticalLevel = 0;

    var callCostTotal = 0;
    var callCount = 0;
    var smsCostTotal = 0;
    var smsCount = 0;
    var isWidget = false;

    function makeCall() {
        if ((callCostTotal + smsCostTotal + callCost) <= criticalLevel) {
            callCostTotal += callCost;
            callCount ++;
        } else if (isWidget == true) {
            alert("Cannot add. Critical level reached.");
        }
    }

    function sendSMS() {
        if ((callCostTotal + smsCostTotal + smsCost) <= criticalLevel) {
            smsCostTotal += smsCost;
            smsCount ++;
        } else if (isWidget == true) {
            alert("Cannot add. Critical level reached.");
        }
    }

    function addItem(item) {
        item.trim();
        if (item == "call") {
            makeCall();
        } else if (item == "sms") {
            sendSMS();
        }
    }

    
    function getClass() {
        if ((callCostTotal + smsCostTotal) >= criticalLevel) {
            return "danger";
        } else if ((callCostTotal + smsCostTotal) >= warningLevel) {
            return "warning";
        }
    }

    function changeCheck(oldCost, newCost) {
        if(oldCost != newCost && (callCostTotal + smsCostTotal) != 0) {
            let updateCost = confirm("Click 'OK' to update the totals based on the new cost.\nAll new items will be based on the new cost regardless.");
            reCalculateTotal(updateCost);
        }
    }

    function setCallCost(cost) {
        let oldCost = callCost;
        let newCost = cost;
        if(cost !== "") {
            callCost = parseFloat(cost);
            if(isWidget == true) {
                changeCheck(oldCost,newCost);
            }
        }
        
    }

    function getCallCost() {
        return callCost.toFixed(2);
    }

    function setSMSCost(cost) {
        let oldCost = smsCost;
        let newCost = cost;
        if(cost !== "") {
            smsCost = parseFloat(cost);
            if(isWidget == true) {
                changeCheck(oldCost,newCost);
            }
        }
    }

    function getSMSCost() {
        return smsCost.toFixed(2);
    }

    function setWarningLevel(level) {
        if(level !== "") {
            warningLevel = parseFloat(level);
        }
    }

    function getWarningLevel() {
        return warningLevel.toFixed(2);
    }

    function setCriticalLevel(level) {
        if(level !== "") {
            criticalLevel = parseFloat(level);
        }
    }

    function getCriticalLevel() {
        return criticalLevel.toFixed(2);
    }

    function getCallCostTotal() {
        return callCostTotal.toFixed(2);
    }

    function getSMSCostTotal() {
        return smsCostTotal.toFixed(2);
    }

    function getTotalCost() {
        var totalCost = callCostTotal + smsCostTotal;
        return totalCost.toFixed(2);
    }

    function getCallCount() {
        return callCount;
    }

    function getSMSCount() {
        return smsCount;
    }

    function reCalculateTotal(requestResponse) {
        if(requestResponse) {
            callCostTotal = callCost * callCount;
            smsCostTotal = smsCost * smsCount;
        }
    }

    function resetTotals() {
        callCostTotal = 0;
        smsCostTotal = 0;
        callCount = 0;
        smsCount = 0;
    }

    function widget() {
        isWidget = true;
    }


    return {
        makeCall,
        sendSMS,
        addItem,
        getClass,
        setCallCost,
        getCallCost,
        setSMSCost,
        getSMSCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        getCallCostTotal,
        getSMSCostTotal,
        getTotalCost,
        getCallCount,
        getSMSCount,
        reCalculateTotal,
        changeCheck,
        resetTotals,
        widget
    }
}