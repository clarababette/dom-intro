describe("The factory function for both the bill with settings", function(){
    
    it("should be able to set call cost.", function() {
        let phoneBill = billWithSettings();
        phoneBill.setCallCost(2.50)

        assert.equal(phoneBill.getCallCost(),2.50);
        assert.equal(phoneBill.getSMSCost(),0.00);
        assert.equal(phoneBill.getWarningLevel(),0.00);
        assert.equal(phoneBill.getCriticalLevel(),0.00)
        assert.equal(phoneBill.getCallCostTotal(),0.00);
        assert.equal(phoneBill.getCallCount(),0);
        assert.equal(phoneBill.getSMSCostTotal(),0.00);
        assert.equal(phoneBill.getSMSCount(),0)
        assert.equal(phoneBill.getTotalCost(),0.00);
    });
    
    it("should be able to set sms cost.", function() {
        let phoneBill = billWithSettings();
        phoneBill.setSMSCost(0.23)

        assert.equal(phoneBill.getCallCost(),0.00);
        assert.equal(phoneBill.getSMSCost(),0.23);
        assert.equal(phoneBill.getWarningLevel(),0.00);
        assert.equal(phoneBill.getCriticalLevel(),0.00)
        assert.equal(phoneBill.getCallCostTotal(),0.00);
        assert.equal(phoneBill.getCallCount(),0);
        assert.equal(phoneBill.getSMSCostTotal(),0.00);
        assert.equal(phoneBill.getSMSCount(),0)
        assert.equal(phoneBill.getTotalCost(),0.00);
    });

    it("should be able to set warning level.", function() {
        let phoneBill = billWithSettings();
        phoneBill.setWarningLevel(5);

        assert.equal(phoneBill.getCallCost(),0.00);
        assert.equal(phoneBill.getSMSCost(),0.00);
        assert.equal(phoneBill.getWarningLevel(),5.00);
        assert.equal(phoneBill.getCriticalLevel(),0.00)
        assert.equal(phoneBill.getCallCostTotal(),0.00);
        assert.equal(phoneBill.getCallCount(),0);
        assert.equal(phoneBill.getSMSCostTotal(),0.00);
        assert.equal(phoneBill.getSMSCount(),0)
        assert.equal(phoneBill.getTotalCost(),0.00);
    });

    it("should be able to set critical level.", function() {
        let phoneBill = billWithSettings();
        phoneBill.setCriticalLevel(20)

        assert.equal(phoneBill.getCallCost(),0.00);
        assert.equal(phoneBill.getSMSCost(),0.00);
        assert.equal(phoneBill.getWarningLevel(),0.00);
        assert.equal(phoneBill.getCriticalLevel(),20.00)
        assert.equal(phoneBill.getCallCostTotal(),0.00);
        assert.equal(phoneBill.getCallCount(),0);
        assert.equal(phoneBill.getSMSCostTotal(),0.00);
        assert.equal(phoneBill.getSMSCount(),0)
        assert.equal(phoneBill.getTotalCost(),0.00);
    });

    it("should be able to set the call and sms costs as well as the warning and critical levels.", function() {
        let phoneBill = billWithSettings();
        phoneBill.setCallCost(3.31);
        phoneBill.setSMSCost(0.42);
        phoneBill.setWarningLevel(12.45);
        phoneBill.setCriticalLevel(35.89);

        assert.equal(phoneBill.getCallCost(),3.31);
        assert.equal(phoneBill.getSMSCost(),0.42);
        assert.equal(phoneBill.getWarningLevel(),12.45);
        assert.equal(phoneBill.getCriticalLevel(),35.89);
        assert.equal(phoneBill.getCallCostTotal(),0.00);
        assert.equal(phoneBill.getCallCount(),0);
        assert.equal(phoneBill.getSMSCostTotal(),0.00);
        assert.equal(phoneBill.getSMSCount(),0)
        assert.equal(phoneBill.getTotalCost(),0.00);
    });

    it("should be able to make a call.", function() {
        let phoneBill = billWithSettings();
        phoneBill.setCallCost(2.50);
        phoneBill.setSMSCost(0.35);
        phoneBill.setWarningLevel(12.45);
        phoneBill.setCriticalLevel(35.89);
        phoneBill.addItem("call");

        assert.equal(phoneBill.getCallCost(),2.50);
        assert.equal(phoneBill.getSMSCost(),0.35);
        assert.equal(phoneBill.getWarningLevel(),12.45);
        assert.equal(phoneBill.getCriticalLevel(),35.89);
        assert.equal(phoneBill.getCallCostTotal(),2.50);
        assert.equal(phoneBill.getCallCount(),1);
        assert.equal(phoneBill.getSMSCostTotal(),0.00);
        assert.equal(phoneBill.getSMSCount(),0)
        assert.equal(phoneBill.getTotalCost(),2.50);
    });

    it("should be able to send a sms.", function() {
        let phoneBill = billWithSettings();
        phoneBill.setCallCost(2.50);
        phoneBill.setSMSCost(0.35);
        phoneBill.setWarningLevel(12.45);
        phoneBill.setCriticalLevel(35.89);
        phoneBill.addItem("sms");

        assert.equal(phoneBill.getCallCost(),2.50);
        assert.equal(phoneBill.getSMSCost(),0.35);
        assert.equal(phoneBill.getWarningLevel(),12.45);
        assert.equal(phoneBill.getCriticalLevel(),35.89);
        assert.equal(phoneBill.getCallCostTotal(),0.00);
        assert.equal(phoneBill.getCallCount(),0);
        assert.equal(phoneBill.getSMSCostTotal(),0.35);
        assert.equal(phoneBill.getSMSCount(),1)
        assert.equal(phoneBill.getTotalCost(),0.35);
    });

    it("should be able to make multiple calls and send multiple sms's.", function() {
        let phoneBill = billWithSettings();
        phoneBill.setCallCost(2.50);
        phoneBill.setSMSCost(0.35);
        phoneBill.setWarningLevel(12.45);
        phoneBill.setCriticalLevel(35.89);
        phoneBill.addItem("sms");
        phoneBill.addItem("call");
        phoneBill.addItem("sms");
        phoneBill.addItem("sms");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("sms");

        assert.equal(phoneBill.getCallCost(),2.50);
        assert.equal(phoneBill.getSMSCost(),0.35);
        assert.equal(phoneBill.getWarningLevel(),12.45);
        assert.equal(phoneBill.getCriticalLevel(),35.89);
        assert.equal(phoneBill.getCallCostTotal(),7.50);
        assert.equal(phoneBill.getCallCount(),3);
        assert.equal(phoneBill.getSMSCostTotal(),1.40);
        assert.equal(phoneBill.getSMSCount(),4)
        assert.equal(phoneBill.getTotalCost(),8.90);
    });

    it("should be able to return class 'danger' when total cost exceeds critical level.", function() {
        let phoneBill = billWithSettings();
        phoneBill.setCallCost(2.50);
        phoneBill.setSMSCost(0.35);
        phoneBill.setWarningLevel(12.45);
        phoneBill.setCriticalLevel(15.00);
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");

        assert.equal(phoneBill.getClass(),"danger");
        assert.equal(phoneBill.getCallCost(),2.50);
        assert.equal(phoneBill.getSMSCost(),0.35);
        assert.equal(phoneBill.getWarningLevel(),12.45);
        assert.equal(phoneBill.getCriticalLevel(),15.00);
        assert.equal(phoneBill.getCallCostTotal(),15.00);
        assert.equal(phoneBill.getCallCount(),6);
        assert.equal(phoneBill.getSMSCostTotal(),0.00);
        assert.equal(phoneBill.getSMSCount(),0)
        assert.equal(phoneBill.getTotalCost(),15.00);
    });

    it("should be able to return class 'warning' when total cost exceeds warning level but does not exceed critical level.", function() {
        let phoneBill = billWithSettings();
        phoneBill.setCallCost(2.50);
        phoneBill.setSMSCost(0.35);
        phoneBill.setWarningLevel(12.45);
        phoneBill.setCriticalLevel(15.00);
        phoneBill.addItem("sms");
        phoneBill.addItem("call");
        phoneBill.addItem("sms");
        phoneBill.addItem("sms");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("sms");
        phoneBill.addItem("call");
        phoneBill.addItem("call");

        assert.equal(phoneBill.getClass(),"warning");
        assert.equal(phoneBill.getCallCost(),2.50);
        assert.equal(phoneBill.getSMSCost(),0.35);
        assert.equal(phoneBill.getWarningLevel(),12.45);
        assert.equal(phoneBill.getCriticalLevel(),15.00);
        assert.equal(phoneBill.getCallCostTotal(),12.50);
        assert.equal(phoneBill.getCallCount(),5);
        assert.equal(phoneBill.getSMSCostTotal(),1.40);
        assert.equal(phoneBill.getSMSCount(),4)
        assert.equal(phoneBill.getTotalCost(),13.90);
    });

    it("should be able to return class 'warning' when total cost exceeds warning level but does not exceed critical level.", function() {
        let phoneBill = billWithSettings();
        phoneBill.setCallCost(2.50);
        phoneBill.setSMSCost(0.35);
        phoneBill.setWarningLevel(12.45);
        phoneBill.setCriticalLevel(15.00);
        phoneBill.addItem("sms");
        phoneBill.addItem("call");
        phoneBill.addItem("sms");
        phoneBill.addItem("sms");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("sms");
        phoneBill.addItem("call");
        phoneBill.addItem("call");

        assert.equal(phoneBill.getClass(),"warning");
        assert.equal(phoneBill.getCallCost(),2.50);
        assert.equal(phoneBill.getSMSCost(),0.35);
        assert.equal(phoneBill.getWarningLevel(),12.45);
        assert.equal(phoneBill.getCriticalLevel(),15.00);
        assert.equal(phoneBill.getCallCostTotal(),12.50);
        assert.equal(phoneBill.getCallCount(),5);
        assert.equal(phoneBill.getSMSCostTotal(),1.40);
        assert.equal(phoneBill.getSMSCount(),4)
        assert.equal(phoneBill.getTotalCost(),13.90);
    });

    it("should not add calls or sms's if the subsequent total will exceed the critical level.", function() {
        let phoneBill = billWithSettings();
        phoneBill.setCallCost(2.50);
        phoneBill.setSMSCost(0.35);
        phoneBill.setWarningLevel(12.45);
        phoneBill.setCriticalLevel(15.00);
        phoneBill.addItem("sms");
        phoneBill.addItem("call");
        phoneBill.addItem("sms");
        phoneBill.addItem("sms");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("sms");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("sms");

        assert.equal(phoneBill.getClass(),"warning");
        assert.equal(phoneBill.getCallCost(),2.50);
        assert.equal(phoneBill.getSMSCost(),0.35);
        assert.equal(phoneBill.getWarningLevel(),12.45);
        assert.equal(phoneBill.getCriticalLevel(),15.00);
        assert.equal(phoneBill.getCallCostTotal(),12.50);
        assert.equal(phoneBill.getCallCount(),5);
        assert.equal(phoneBill.getSMSCostTotal(),1.75);
        assert.equal(phoneBill.getSMSCount(),5)
        assert.equal(phoneBill.getTotalCost(),14.25);
    });

    


});