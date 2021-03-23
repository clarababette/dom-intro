
var calculateBtn = document.querySelector(".calculateBtn");
var billTotal = document.querySelector(".billTotal");
var billString = document.querySelector(".billString");

calculateBtn.addEventListener('click', function(){
  document.querySelector(".total").classList.remove("warning");
  document.querySelector(".total").classList.remove("danger");  
  
  var phoneBill = calculateBill(billString.value);

   billTotal.innerHTML = phoneBill.getTotalCost();
   document.querySelector(".total").classList.add(phoneBill.getClass());
   document.querySelector(".callCountOne").innerHTML = phoneBill.getCallCount();
   document.querySelector(".smsCountOne").innerHTML = phoneBill.getSMSCount();
});



