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

    statusSpan1 = document.getElementById("status-span1");
    statusSpan2 = document.getElementById("status-span2");
    console.log(statusSpan1.textContent, statusSpan2.textContent)
    function displayStatus(statusMsg, spanNum)
    {
        if(spanNum === 1)
        {
            statusSpan1.textContent = "";
            statusSpan1.style.display = "block";
            statusSpan1.textContent = statusMsg;
        }
        if(spanNum === 2)
        {
            statusSpan2.textContent = "";
            statusSpan2.style.display = "block";
            statusSpan2.textContent = statusMsg;
        }
    }

    passwordInput.addEventListener("focusout", (e) => {
        passText = e.target.value;
        if(!password_regex.test(passText))
        {
            displayStatus("Password Doesnt Meet Requirements!", 1);
            passwordStrong = false;
            passwordInput.style.borderColor = "red";
            passwordInput.style.borderStyle = "solid";
        }
        else if(password_regex.test(passText))
        {
            displayStatus("Password Accepted.", 1);
            passwordStrong = true;
            passwordInput.style.borderColor = "green";
            passwordInput.style.borderStyle = "solid";
        }
    })

    passwordConfirm.addEventListener("focusout", (e) => {
        passCtext = e.target.value;
        if((passwordStrong === true) & (passCtext === passText))
        {
            displayStatus("Password Confirmed.", 2);
            passwordMatch = true;
            passwordConfirm.style.borderColor = "green";
            passwordConfirm.style.borderStyle = "solid";
        }
        else if(passwordStrong !== true)
        {
            displayStatus("Password Doesnt Meet Requirements!", 1);
            passwordConfirm.style.borderColor = "orange";
            passwordConfirm.style.borderStyle = "solid";
        }
        else if(passCtext !== passText)
        {
            displayStatus("Passwords Do Not Match!", 2);
            passwordMatch = false;
            passwordConfirm.style.borderColor = "red";
            passwordConfirm.style.borderStyle = "solid";
        }
    })

})