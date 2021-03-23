describe("The calculate bill factory function", function(){
    it("should be able to total the cost of calls made and sms's sent", function() {
        let phoneBill = calculateBill("call,sms,call,sms");

        assert.equal(phoneBill.getTotalCost(),7.00);
    });

    it("should be able to total the cost of calls made and sms's sent", function() {
        let phoneBill = calculateBill("call,sms,call,sms,call,sms,call");

        assert.equal(phoneBill.getTotalCost(),13.25);
    });

    it("should be able to count the number of calls made and sms's sent", function() {
        let phoneBill = calculateBill("call,sms,call,sms,call,sms,call,sms,call,sms,call,call,sms");
        phoneBill.getTotalCost();

        assert.equal(phoneBill.getCallCount(),7);
        assert.equal(phoneBill.getSMSCount(),6);
    });

    it("should be able to return class 'danger' when the total exceeds 30.00", function() {
        let phoneBill = calculateBill("call,sms,call,sms,call,sms,call,sms,call,sms,call,call,sms,call,call,call");
        phoneBill.getTotalCost();
        
        assert.equal(phoneBill.getClass(),"danger");
        
    });

    it("should be able to return class 'warning' when the total exceeds 20.00 but does not exceed 30.00", function() {
        let phoneBill = calculateBill("call,sms,call,sms,call,sms,call,call,call,call");
        phoneBill.getTotalCost();
        
        assert.equal(phoneBill.getClass(),"warning");
        
    });
});