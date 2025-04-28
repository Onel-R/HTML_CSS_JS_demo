function compute()
{
    let p = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;

    if (p <= 0) {
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();
    } else {
        let interest = p * years * (rate/100);
        var amount = parseInt(p) + parseFloat(interest);
        var year = new Date().getFullYear() + parseInt(years);

        let result = document.getElementById("result");
        result.innerHTML = `If you deposit <mark> ${p} </mark>,<br>` +
                        `at an interest rate of <mark> ${rate}% </mark>.<br>` +
                        `You will receive an amount of <mark> ${interest} </mark>,<br>` +
                        `in the year <mark> ${year} </mark> <br>`;

    }
}

function updateRate() {
    let rate = document.getElementById("rate").value;
    let rateVal = document.getElementById("rate_val");
    rateVal.innerText = rate;
}
        