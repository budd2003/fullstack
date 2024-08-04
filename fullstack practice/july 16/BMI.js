function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight values.");
        return;
    }
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);
    document.getElementById("result").innerText = `Your BMI is: ${bmi}`;
}