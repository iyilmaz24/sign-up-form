password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$/

// 6 to 12 characters in length
// Must have at least one uppercase letter
// Must have at least one lower case letter
// Must have at least one digit
// Should contain other characters

addEventListener("DOMContentLoaded", () => {

    passwordInput = document.getElementById("password");
    passwordConfirm = document.getElementById("confirm-password");

    passText = "";
    passCtext = "";
    passwordStrong = false;
    passwordMatch = false;

    passwordInput.addEventListener("focusout", (e) => {
        passText = e.target.value;
        if(!password_regex.test(passText))
        {
            console.log(passText + " Not Valid!");
            passwordStrong = false;
        }
        else if(password_regex.test(passText))
        {
            console.log("Password Accepted.");
            passwordStrong = true;
        }
        console.log(passwordStrong)
    })

    passwordConfirm.addEventListener("focusout", (e) => {
        passCtext = e.target.value;
        if(passwordStrong === true & passCtext === passText)
        {
            console.log("Password Confirmed.")
            passwordMatch = true;
        }
        else if(passwordStrong !== true)
        {
            console.log("Password Doesnt Meet Requirements!");
        }
        else if(passCtext !== passText)
        {
            console.log("Passwords Do Not Match!")
            passwordMatch = false;
        }
    })

})