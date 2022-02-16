let form = document.querySelector(".userform")


let userMessage = JSON.parse(localStorage.getItem("user")) || []

let createUserMessage = ({
    name,
    email,
    password,
    type,
    message
}) => {
    userMessage.push({
        name,
        email,
        password,
        type,
        message
    })
    localStorage.setItem("user", JSON.stringify(userMessage))
    return userMessage;
}

// clearing the form value 

function clearValue() {
    form.reset();
}
document.querySelector(".alert-btn").addEventListener("click", function () {
    document.querySelector(".alert-message").style.display = "none"
})
document.querySelector(".alert-message").style.display = "none"
let submitBtn = document.querySelector(".submit-btn")

submitBtn.addEventListener("click", function (e) {
    e.preventDefault()
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let newCustomer = document.querySelector(".newcustomer")
    let oldCustomer = document.querySelector(".oldcustomer")

    let type;
    if (newCustomer.checked) {
        type = newCustomer.value;
    } else if (oldCustomer.checked) {
        type = oldCustomer.value;
    }
    let message = document.querySelector("#usermessage").value;
    if (name == '' || profession == '' || email == "" || password == '' || message == '') {
        window.alert("Your information Plz")
    } else {


        createUserMessage({
            name,
            email,
            password,
            type,
            message
        });
        clearValue()
        document.querySelector(".alert-message").style.display = "block"
        setTimeout(() => {
            document.querySelector(".alert-message").style.display = "none"
        }, 3000);
    }


})