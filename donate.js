// =====================================
// UGET INSPIRES FOUNDATION
// donate.js
// =====================================

// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Elements
const donationForm = document.getElementById("donationForm");
const amountInput = document.getElementById("amount");
const displayAmount = document.getElementById("displayAmount");

//======================================
// LIVE DONATION AMOUNT
//======================================

amountInput.addEventListener("input", () => {

    let amount = Number(amountInput.value);

    if (isNaN(amount) || amount <= 0) {

        displayAmount.textContent = "GHS 0.00";

        return;

    }

    displayAmount.textContent =
        "GHS " + amount.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

});

//======================================
// FORM SUBMIT
//======================================

donationForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const amount = Number(document.getElementById("amount").value);

    const message = document.getElementById("message").value.trim();

    //----------------------------------

    if (fullname === "") {

        alert("Please enter your full name.");

        return;

    }

    //----------------------------------

    if (email === "") {

        alert("Please enter your email.");

        return;

    }

    //----------------------------------

    if (phone === "") {

        alert("Please enter your phone number.");

        return;

    }

    //----------------------------------

    if (amount < 1 || isNaN(amount)) {

        alert("Please enter a valid donation amount.");

        return;

    }

    //----------------------------------
    // PAYSTACK PAYMENT
    //----------------------------------

    let handler = PaystackPop.setup({

        key: "pk_test_e58c19239890c021e8d0f7b6ded1cc22d4fa7982",

        email: email,

        amount: amount * 100,

        currency: "GHS",

        firstname: fullname.split(" ")[0],

        lastname: fullname.split(" ").slice(1).join(" "),

        metadata: {

            custom_fields: [

                {
                    display_name: "Full Name",
                    variable_name: "full_name",
                    value: fullname
                },

                {
                    display_name: "Phone Number",
                    variable_name: "phone",
                    value: phone
                },

                {
                    display_name: "Message",
                    variable_name: "message",
                    value: message
                }

            ]

        },

        //----------------------------------
        // PAYMENT SUCCESS
        //----------------------------------

        callback: function (response) {

            alert(
                "Thank you for your donation!\n\nPayment Successful.\nReference: " +
                response.reference
            );

            console.log(response);

            // Optional:
            // Send payment details to your server here
            // before redirecting.

            donationForm.reset();

            displayAmount.textContent = "GHS 0.00";

            window.location.href = "index.html";

        },

        //----------------------------------
        // USER CLOSED PAYMENT
        //----------------------------------

        onClose: function () {

            alert("Payment window closed.");

        }

    });

    handler.openIframe();

});