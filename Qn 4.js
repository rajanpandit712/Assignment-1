function calculate() {
    let marks = [
        Number(document.getElementById("m1").value),
        Number(document.getElementById("m2").value),
        Number(document.getElementById("m3").value),
        Number(document.getElementById("m4").value),
        Number(document.getElementById("m5").value)
    ];

    let total = 0;

    for (let mark of marks)
        total += mark;

    let average = total / 5;
    let grade;

    if (average >= 90)
        grade = "A+";
    else if (average >= 80)
        grade = "A";
    else if (average >= 70)
        grade = "B";
    else if (average >= 60)
        grade = "C";
    else if (average >= 50)
        grade = "D";
    else
        grade = "F";

    let status = marks.every(mark => mark >= 40) ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML =
        "Total: " + total +
        "<br>Average: " + average.toFixed(2) +
        "<br>Grade: " + grade +
        "<br>Status: " + status;
}