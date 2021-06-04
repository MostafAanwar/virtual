let vendorBills, mediaSpend, corpSpend, teamProject, sum, i,
    brex, stripe, amex, unlimitedRewards, lifetimeRewards = 0.0;
const selectElement = document.querySelector('.form1');
const selectElement1 = document.querySelector('.radiobtns');


selectElement.addEventListener('change', (event) => {
    vendorBills = parseInt(document.getElementById('Vendor').value);
    mediaSpend = parseInt(document.getElementById('Media').value);
    corpSpend = parseInt(document.getElementById('Corp').value);
    teamProject = parseInt(document.getElementById('Team').value);
    recalculate();
});
selectElement1.addEventListener('change', (event) => {
    recalculate();
});

function recalculate() {
    sum = parseInt(vendorBills + mediaSpend + corpSpend + teamProject);
    brex = (sum * 0.3).toFixed(2);
    stripe = (sum * 2.9).toFixed(2);
    amex = (sum * 1.3).toFixed(2);
    unlimitedRewards = (sum * 1.1).toFixed(2);
    lifetimeRewards = (sum * 1.2).toFixed(2);
    document.getElementsByClassName('num2')[0].innerHTML = unlimitedRewards;
    document.getElementsByClassName('num3')[0].innerHTML = lifetimeRewards;
    if (document.getElementById('Brex').checked) {
        //Brex radio button is checked
        countup();
        let element = document.querySelector(".radiooptn")
        if (element) {
            element.textContent = "BREX";
        }
        document.getElementsByClassName('num')[0].innerHTML = brex;


    } else if (document.getElementById('Stripe').checked) {
        //Stripe radio button is checked
        document.getElementsByClassName('num')[0].innerHTML = stripe;
        countup();
                let element = document.querySelector(".radiooptn")
        if (element) {
            element.textContent = "Stripe";
        }

    } else if (document.getElementById('Amex').checked) {
        //Amex radio button is checked
        document.getElementsByClassName('num')[0].innerHTML = amex;
        countup();
                        let element = document.querySelector(".radiooptn")
        if (element) {
            element.textContent = "Amex";
        }
    }
};

function countup() {
    if (brex || stripe || amex > unlimitedRewards && brex || stripe || amex > lifetimeRewards) {
        document.getElementById("w3-blue").style.width = "90%";
        if (unlimitedRewards > lifetimeRewards) {
            document.getElementById("w3-blue2").style.width = "80%";
            document.getElementById("w3-blue3").style.width = "70%";
        } else {
            document.getElementById("w3-blue2").style.width = "70%";
            document.getElementById("w3-blue3").style.width = "80%";
        }
    } else if (unlimitedRewards > brex || stripe || amex && unlimitedRewards > lifetimeRewards) {
        document.getElementById("w3-blue2").style.width = "90%";
        if (brex || stripe || amex > lifetimeRewards) {
            document.getElementById("w3-blue").style.width = "80%";
            document.getElementById("w3-blue3").style.width = "70%";
        } else {
            document.getElementById("w3-blue3").style.width = "80%";
            document.getElementById("w3-blue").style.width = "70%";
        }

    }
    $(".num").counterUp({
        delay: 10,
        time: 1000
    });
    $(".num2").counterUp({

        delay: 10,
        time: 1000
    });
    $(".num3").counterUp({
        delay: 10,
        time: 1000
    });
};