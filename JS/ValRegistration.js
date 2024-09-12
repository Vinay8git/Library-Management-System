function formValidate() {
    // Name validation
    var name = document.forms["myForm"]["un"].value;
    if (!/^[a-zA-Z\s]{6,}$/.test(name)) {
        alert("Name should contain alphabets, space, and the length should not be less than 6 characters.");
        return false;
    }

    // Password validation
    var password = document.forms["myForm"]["pw"].value;
    if (password.length < 6) {
        alert("Password should not be less than 6 characters.");
        return false;
    }

    // Email validation
    var email = document.forms["myForm"]["em"].value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email address. Please follow the standard pattern (name@domain.com).");
        return false;
    }

    // Phone number validation
    var phoneNumber = document.forms["myForm"]["Phone"].value;
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        alert("Phone number must contain 10 digits.");
        return false;
    }

    // If all validations pass, the form will be submitted
    return true;
}
