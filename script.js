
const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();

})

email.addEventListener("blur", () => {
    checkInputEmail();
})

username.addEventListener("blur", () => {
    checkInputUsername();
})

password.addEventListener("blur", () => {
    checkInputPassword();
})
passwordConfirmation.addEventListener("blur", () => {
    checkInputPasswordConfirmation();
})

function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "Preencha um UserName")
    } else {
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "Preencha um Email")
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === "") {
        errorInput(password, "Senha obrigatoras")
    } else if (passwordValue.length < 8) {
        errorInput(password, "senha 8 carracter")
    }
    else {
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }

}
function checkInputPasswordConfirmation() {
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;
    if (passwordConfirmation === "") {
        errorInput(passwordConfirmation, "a confirmaçao é obrigarao")
    } else if (confirmationPasswordValue !== passwordValue) {
        errorInput(passwordConfirmation, "As senhas estao deifrerer ")
    }
    else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }

}

function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every((item) => {
        return item.className === "form-content"
    });

    if (isValid) {
        //  alert("cadastrasda OK");
        form.submit();
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"

}







