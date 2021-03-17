//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotal = document.querySelector(".billTotal");
//get a reference to the billString
var billString = document.querySelector(".billString");

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

var totalCost = 0;

var totalPhoneBill = function(strPhoneBill) {
    var arrPhoneBill = strPhoneBill.split(',');
    
    
    arrPhoneBill.forEach(function(use) {
        use = use.trim();
      switch (use) {
        case 'call':
           totalCost += 2.75;
           break;
        case 'sms':
          totalCost += 0.75;
          break;
        default:
          break;
      }
    });
    
    return totalCost.toFixed(2);
  };

//link the function to a click event on the calculate button

calculateBtn.addEventListener('click', function(){
    totalCost = 0;
    document.querySelector(".total").classList.remove("warning");
    document.querySelector(".total").classList.remove("danger");

   billTotal.innerHTML = totalPhoneBill(billString.value);

   if (totalCost > 30) {
    document.querySelector(".total").classList.add("danger");
    } else if (totalCost > 20) {
        document.querySelector(".total").classList.add("warning");
    }    
});



