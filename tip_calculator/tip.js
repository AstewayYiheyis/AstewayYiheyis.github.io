function calcTip() {
    // Enter your code here to make Tip Calculator work
    let subtotal = document.getElementById("subtotal").value;
    let tipRate = document.getElementById("tip").value/100;
    let tip = tipRate * subtotal;
    let total = parseInt(subtotal) + parseInt(tip);

    document.getElementById("total").innerHTML = total;
}