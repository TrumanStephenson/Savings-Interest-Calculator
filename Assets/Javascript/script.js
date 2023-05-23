function calculateinterest() {
    // Get user input
    var principal = parseFloat(document.getElementById("principal").value);
    var timePeriod = parseFloat(document.getElementById("interestRate").value);
    var timePeriod = parseFloat(document.getElementById("timePeriod").value);

    // Calculate interest
    var interest = principal * (interestRate/100) * timePeriod;

    // Calculate total amount
    var totalAmount = principal + interest;

    // Display result
    document.getElementById("result").innerHTML = "Total amount with interest: " + totalAmount;
}