function calculateBill() {
    let q1 = Number(document.getElementById("q1").value);
    let p1 = Number(document.getElementById("p1").value);

    let q2 = Number(document.getElementById("q2").value);
    let p2 = Number(document.getElementById("p2").value);

    let q3 = Number(document.getElementById("q3").value);
    let p3 = Number(document.getElementById("p3").value);

    let total = (q1 * p1) + (q2 * p2) + (q3 * p3);
    let discount = 0;

    if (total > 2000)
        discount = total * 0.10;

    let payable = total - discount;

    document.getElementById("result").innerHTML =
        "Total: ₹" + total.toFixed(2) +
        "<br>Discount: ₹" + discount.toFixed(2) +
        "<br>Final Payable: ₹" + payable.toFixed(2);
}