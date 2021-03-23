describe("The factory function for both the text and radio bills", function(){
    it("should be able to make a call.", function() {
        let phoneBill = billTextRadio();
        phoneBill.addItem("call");
        assert.equal(phoneBill.getCallTotal(),2.75);
        assert.equal(phoneBill.getCallCount(),1);
        assert.equal(phoneBill.getSMSTotal(),0.00);
        assert.equal(phoneBill.getSMSCount(),0)
        assert.equal(phoneBill.getTotalCost(),2.75);
    });

    it("should be able to send a sms.", function() {
        let phoneBill = billTextRadio();
        phoneBill.addItem("sms");
        assert.equal(phoneBill.getCallTotal(),0.00);
        assert.equal(phoneBill.getCallCount(),0);
        assert.equal(phoneBill.getSMSTotal(),0.75);
        assert.equal(phoneBill.getSMSCount(),1)
        assert.equal(phoneBill.getTotalCost(),0.75);
    });

    it("should be able to make multiple calls and send multiple sms's.", function() {
        let phoneBill = billTextRadio();
        phoneBill.addItem("call");
        phoneBill.addItem("sms");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("sms");
        phoneBill.addItem("call");
        assert.equal(phoneBill.getCallTotal(),11.00);
        assert.equal(phoneBill.getCallCount(),4);
        assert.equal(phoneBill.getSMSTotal(),1.50);
        assert.equal(phoneBill.getSMSCount(),2)
        assert.equal(phoneBill.getTotalCost(),12.50);
    });
    
    it("should be able to return class 'warning' when total exceeds 30.00 but does not exceed 50.00.", function() {
        let phoneBill = billTextRadio();
        phoneBill.addItem("call");
        phoneBill.addItem("sms");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("sms");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        assert.equal(phoneBill.getClass(),"warning");
    });

    it("should be able to return class 'danger' when total exceeds 50.00.", function() {
        let phoneBill = billTextRadio();
        phoneBill.addItem("call");
        phoneBill.addItem("sms");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("sms");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        phoneBill.addItem("call");
        assert.equal(phoneBill.getClass(),"danger");
    });

});