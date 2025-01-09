// 1. 自动递增序号
let rows = document.querySelectorAll('#donation-list tr');
rows.forEach((row, index) => {
    let serialNumberCell = row.querySelector('td:first-child'); // 获取该行的第一个 td 元素
    serialNumberCell.textContent = index + 1; // 设置序号，从 1 开始
});

// 2. 统计总金额
var amountCells = document.querySelectorAll("table td:last-child");
var totalAmount = 0;

for (var i = 0; i < amountCells.length; i++) {
    var amountText = amountCells[i].textContent;
    var amountValue = parseFloat(amountText);
    if (!isNaN(amountValue)) {
        totalAmount += amountValue;
    }
}

// 3. 显示总金额
var totalAmountCell = document.getElementById("total-amount");
if (totalAmountCell) {
    totalAmountCell.textContent = totalAmount.toFixed(2) + "元"; // 显示保留两位小数的金额
}
