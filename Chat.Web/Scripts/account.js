const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const accContainer = document.querySelector(".account-container");

sign_up_btn.addEventListener("click", () => {
  accContainer.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  accContainer.classList.remove("sign-up-mode");
});

document.getElementById("SignInSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    var isValid = true;
    if (document.getElementById("LoginVM_Username").value == "") {
        document.getElementById("e1").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("e1").style.display = "none";
    }
    if (document.getElementById("LoginVM_Password").value == "") {
        document.getElementById("e2").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("e2").style.display = "none";
    }
    if (isValid) {
        document.getElementById("sign-in-form").submit();
    }
});

document.getElementById("SignUpSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    var isValid = true;
    if (document.getElementById("RegisterVM_Username").value == "") {
        document.getElementById("e3").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("e3").style.display = "none";
    }
    if (document.getElementById("RegisterVM_DisplayName").value == "") {
        document.getElementById("e4").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("e4").style.display = "none";
    }
    if (document.getElementById("RegisterVM_Password").value == "") {
        document.getElementById("e5").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("e5").style.display = "none";
    }
    if (document.getElementById("RegisterVM_ConfirmPassword").value == "") {
        document.getElementById("e6").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("e6").style.display = "none";
    }
    if (document.getElementById("RegisterVM_Password").value != document.getElementById("RegisterVM_ConfirmPassword").value) {
        document.getElementById("e7").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("e7").style.display = "none";
    }
    if (isValid) {
        document.getElementById("sign-up-form").submit();
    }
});