function billWithSettings() {
    var callCost = 0;
    var smsCost = 0;
    var warningLevel = 0;
    var criticalLevel = 0;

    var callCostTotal = 0;
    var callCount = 0;
    var smsCostTotal = 0;
    var smsCount = 0;

    function makeCall() {
        callCostTotal += callCost;
        callCount ++;
    }

    function sendSMS() {
        smsCostTotal += smsCost;
        smsCount ++;
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
        if ((callCostTotal + smsCostTotal) > criticalLevel) {
            return "danger";
        } else if ((callCostTotal + smsCostTotal) > warningLevel) {
            return "warning";
        }
    }

    function setCallCost(cost) {
        callCost = parseFloat(cost);
    }

    function getCallCost() {
        return callCost;
    }

    function setSMSCost(cost) {
        smsCost = parseFloat(cost);
    }

    function getSMSCost() {
        return smsCost;
    }

    function setWarningLevel(level) {
        warningLevel = parseFloat(level);
    }

    function getWarningLevel() {
        return warningLevel.toFixed(2);
    }

    function setCriticalLevel(level) {
        criticalLevel = parseFloat(level);
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
        getSMSCount
    }
}