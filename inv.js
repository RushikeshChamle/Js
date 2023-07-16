var balance = 10500;
var cameraOn = true;

function steal(balance, amount) {
  cameraOn = false;
  if (amount < balance) {
    balance = balance - amount;
  }
  cameraOn = true;
  return balance;
}

var amount = steal(balance, 1250);
alert("Your balance is reduced" + amount + "!");
