const showpassword = () => {
    if (document.getElementById("password").type === "text")
        document.getElementById("password").type = "password";
    else
        document.getElementById("password").type = "text"
}

function signupsubmit(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const firstname = document.getElementById("zipcode").value;
    const lastname = document.getElementById("phone").value;
    if (email && password && firstname && lastname) {
        window.localStorage.setItem("email", email.toLowerCase());
        window.localStorage.setItem("password", password);
        window.localStorage.setItem("fristname", firstname);
        window.localStorage.setItem("lastname", lastname);
        console.log(email, password);
        window.location.href = 'login.html'
    }
    else{
        window.alert("Fill all the details");
    }
}
document.getElementById("submit").addEventListener("click", signupsubmit);