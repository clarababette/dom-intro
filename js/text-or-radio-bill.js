function billTextRadio() {
    var callsTotal = 0;
    var smsTotal = 0;
    var callCount = 0;
    var smsCount = 0;

    function makeCall() {
        callsTotal += 2.75;
        callCount ++;
    }

    function sendSMS() {
        smsTotal += 0.75;
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

    function getTotalCost() {
        var totalCost = callsTotal + smsTotal;
        return totalCost.toFixed(2);
    }

    function getCallTotal() {
        return callsTotal.toFixed(2);
    }

    function getSMSTotal() {
        return smsTotal.toFixed(2);
    }

    function getCallCount() {
        return callCount;
    }

    function getSMSCount() {
        return smsCount;
    }

    function getClass() {
        if ((callsTotal + smsTotal) > 50) {
            return "danger";
        } else if ((callsTotal + smsTotal) > 30) {
            return "warning";
        }
    }

    return {
        makeCall,
        sendSMS,
        addItem,
        getTotalCost,
        getCallTotal,
        getSMSTotal,
        getCallCount,
        getSMSCount,
        getClass
    }

}