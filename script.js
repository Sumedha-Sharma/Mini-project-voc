

function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var termsAndConditions = document.getElementById("termsAndConditions");

    var alertMess = document.getElementById("alert-mess");
    alertMess.innerHTML = "";

    if (!firstName || !lastName || !email || !password || !confirmPassword || !dob || !gender || !termsAndConditions.checked) {
        displayAlert("Please fill in all the required fields.");
        return false;
    }

    if (password !== confirmPassword) {
        displayAlert("Passwords do not match.");
        return false;
    }

    if (!isValidEmail(email)) {
        displayAlert("Please enter a valid email address.");
        return false;
    }
   
    clearForm();
    return true;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function displayAlert(message) {
    var alertContainer = document.getElementById("alert-con");
    var alertMessageDiv = document.getElementById("alert-mess");
    var closeButton = document.getElementById("close");

    alertContainer.style.display = "flex";

    alertMessageDiv.innerHTML = message;

    closeButton.addEventListener("click", function() {
       
        alertContainer.style.display = "none";
    });
}

function clearForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("ratherNotSay").checked = false;
    document.getElementById("termsAndConditions").checked = false;
}