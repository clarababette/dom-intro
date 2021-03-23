function calculateBill(strPhoneBill) {
   var arrPhoneBill = strPhoneBill.split(',');

    var totalCost = 0;
    var callCount = 0;
    var smsCount = 0;

    function getTotalCost() {
        arrPhoneBill.forEach(function(use) {
            use = use.trim();
          switch (use) {
            case 'call':
               totalCost += 2.75;
               callCount ++;
               break;
            case 'sms':
              totalCost += 0.75;
              smsCount ++;
              break;
            default:
              break;
          }
        });
        
        return totalCost.toFixed(2);
    }

    function getClass() {
        if (totalCost > 30) {
            return "danger";
        } else if (totalCost > 20) {
            return "warning";
        }
    }

    function getCallCount() {
        return callCount;
    }

    function getSMSCount() {
        return smsCount;
    }

    return {
        getTotalCost,
        getClass,
        getCallCount,
        getSMSCount
    }


}