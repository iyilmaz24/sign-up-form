password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$/

// 6 to 12 characters in length
// Must have at least one uppercase letter
// Must have at least one lower case letter
// Must have at least one digit
// Should contain other characters

addEventListener("DOMContentLoaded", () => {

    passwordInput = document.getElementById("password");
    passwordConfirm = document.getElementById("confirm-password");

    console.log(passwordInput, passwordConfirm)
    
})