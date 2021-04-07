function compute()
{
    //p = document.getElementById("principal").value;

    var amount = document.getElementById("amount").value
    var rate = +document.getElementById("rate").value;
    var years = +document.getElementById("years").value;
    var thisyear = 2021;
    var targetyear = years + thisyear;
    var targetamount = amount * rate / 100 * years;
    


    document.getElementById('result').innerHTML = 
        "If you deposit " + amount + " <br>" +
        "at an interest rate of " + rate + "%.<br>" +
        "You will receive an amount of " + targetamount + ",<br>" +
        "in the year " + targetyear + ".";
    
    
    amount //displays this value to the html page
    console.log(amount)
    
}

window.onload = function () {
    updateSlider();
}
    
function updateSlider() {
    var val = document.getElementById("rate").value //gets the oninput value
    document.getElementById('output').innerHTML = val //displays this value to the html page
    //console.log(val)
}


        