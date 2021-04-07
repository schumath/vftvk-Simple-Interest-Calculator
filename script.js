function compute()
{
    var amount = document.getElementById("amount").value
    var rate = +document.getElementById("rate").value;
    rate = (Math.round(rate * 100) / 100).toFixed(1);
    var years = +document.getElementById("years").value;
    var thisyear = 2021;
    var targetyear = years + thisyear;
    var targetamount = amount * rate / 100 * years;
    
    if (amount > 0) {
        document.getElementById('result').innerHTML = 
            "If you deposit " + amount + " <br>" +
            "at an interest rate of " + rate + "%.<br>" +
            "You will receive an amount of " + targetamount + ",<br>" +
            "in the year " + targetyear + ".";
    } else {
        document.getElementById('result').innerHTML = "Invalid Amount. Enter positive number."
        alert("Enter positive number.");
    }
}

window.onload = function () {
    updateSlider();
}
    
function updateSlider() {
    var rate = document.getElementById("rate").value 
    rate = (Math.round(rate * 100) / 100).toFixed(1);
    document.getElementById('output').innerHTML = rate

}


        