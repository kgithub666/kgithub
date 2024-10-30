
var amountCells = document.querySelectorAll("table td:last-child");


var totalAmount = 0;

for (var i = 0; i < amountCells.length; i++) {
    var amountText = amountCells[i].textContent;
    var amountValue = parseFloat(amountText);
    if (!isNaN(amountValue)) {
        totalAmount += amountValue;
    }
}

var totalAmountCell = document.getElementById("total-amount");
totalAmountCell.textContent = totalAmount.toFixed(2) + "元";