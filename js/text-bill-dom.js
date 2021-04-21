var thisBill = {
        widgName : 'Text input bill',
        instructions : ["Enter call or sms in the textbox. Update the appropriate total and the global total when the ADD button in pressed.","Calls costs R2.75 and a SMS R0.75", "If the total cost exceed R30.00 show the total cost in orange, if over R50 show it in red."],
        text : true,
        addBtnName : "textBillAdd",
        resetBtnName : "textBillReset",
        callCount : 0,
        smsCount : 0,
        callTotal : '0.00',
        smsTotal : '0.00',
        sumTotal : '0.00',
        level : ''

    }
    var theTextBill = billTextRadio();
    
    document.addEventListener('DOMContentLoaded', function() {
        var templateSource = document.querySelector(".billsTemplate").innerHTML;
        var billsTemplate = Handlebars.compile(templateSource);
        var textBill = document.querySelector(".textBill");
        
        // var thisBill = billsTemplate({
            //     widgName : 'Text input bill',
            //     instructions : ["Enter call or sms in the textbox. Update the appropriate total and the global total when the ADD button in pressed.","Calls costs R2.75 and a SMS R0.75", "If the total cost exceed R30.00 show the total cost in orange, if over R50 show it in red."],
            //     text : true,
            //     addBtnName : "textBillAdd",
            //     resetBtnName : "textBillReset",
            //     callCount : 0,
            //     smsCount : 0,
            //     callTotal : '0.00',
            //     smsTotal : '0.00',
            //     sumTotal : '0.00',
            //     level : ''
            
            // });
            console.log(billsTemplate(thisBill));
            console.log(textBill);
            textBill.innerHTML = billsTemplate(thisBill);
            
            
            
            document.querySelector('.textBillAdd').addEventListener("click", function() {
        var billTypeText = document.querySelector(".billTypeText");
        alert("clicked")
        theTextBill.addItem(billTypeText.value);
        displayValues();
        level = theTextBill.getClass();
        textBill.innerHTML = billsTemplate(thisBill);
    });
    
    function displayValues() {
        thisBill.callTotal = theTextBill.getCallTotal();
        thisBill.smsTotal = theTextBill.getSMSTotal();
        thisBill.smsTotal = theTextBill.getTotalCost();
        thisBill.callCount = theTextBill.getCallCount();
        thisBill.smsCount = theTextBill.getSMSCount();
    }
});



// var addToBillBtn = document.querySelector(".addToBillBtn");
// var callsTextTotalElem = document.querySelector(".callTotalOne");
// var smsTextTotalElem = document.querySelector(".smsTotalOne");
// var totalTextCostElem = document.querySelector(".totalOne");
// var textBillResetBtn = document.querySelector(".textBillResetBtn");

//



// textBillResetBtn.addEventListener("click", function() {
//     theTextBill = billTextRadio();
//     totalTextCostElem.classList.remove("danger");
//     totalTextCostElem.classList.remove("warning");
//     displayValues();
// })



