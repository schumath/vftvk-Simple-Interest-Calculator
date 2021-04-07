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
            "If you deposit <span id=\"yellowback\">" + amount + "</span> <br>" +
            "at an interest rate of <span id=\"yellowback\">" + rate + "%</span>.<br>" +
            "You will receive an amount of <span id=\"yellowback\">" + targetamount + "</span>,<br>" +
            "in the year <span id =\"yellowback\">" + targetyear + "</span>";
    } else {
        document.getElementById('result').innerHTML = "Invalid Amount. Enter positive number."
        alert("Enter positive number.");
        document.getElementById("amount").focus();
        document.getElementById("amount").select();
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


        