
var dollars, quarters, dimes, nickels;

function calculateChange() {
  var amountDue = document.getElementById('amount-due').value;
  var amountReceived = document.getElementById('amount-received').value;
  var change = amountReceived - amountDue;
  document.getElementById('change-output').innerHTML = change.toFixed(2);

  var dollars = Math.floor(change);
  document.getElementById("dollars-output").innerHTML = dollars;
  var remainderAfterdollars = change - dollars ;

  quarters = Math.floor(remainderAfterdollars / 0.25);
  document.getElementById('quarters-output').innerHTML = quarters;
  remainderAfterquarters = remainderAfterdollars- (quarters * 0.25);

   dimes = Math.floor(remainderAfterquarters / 0.10);
  document.getElementById('dimes-output').innerHTML = dimes;
  remainderAfterdimes = remainderAfterquarters - (dimes * 0.10);

   nickels = Math.floor(remainderAfterdimes / 0.05);
  document.getElementById('nickels-output').innerHTML = nickels;
  

   pennies =  Math.floor(Math.round(remainderAfterdimes % 0.05 * 100));
  document.getElementById('pennies-output').innerHTML = pennies;

};

document.getElementById("calculate-change").addEventListener("click", calculateChange);