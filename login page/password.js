const validate = () =>{
    const password = document.getElementById("password").value
    const button = document.getElementById("submit")
    console.log(password)
    if(password){
        button.disabled=false
    }
    else{
        button.disabled=true
    }
}

const showpassword = () => {
    if (document.getElementById("password").type === "text")
        document.getElementById("password").type = "password";
    else
        document.getElementById("password").type = "text"
}

const submit = (event) => {
    event.preventDefault();
    const password = document.getElementById("password").value
    if (email) {
        if (password === window.localStorage.getItem("password"))
        {
            console.log(email);
            window.location.href = 'index.html'
        }
        else{
            window.alert("Wrongpassword");
        }
    }
}
document.getElementById("submit").addEventListener("click", submit);

const cancel = (event) =>{
    event.preventDefault();
    window.location.href = 'login.html'
}

document.getElementById("createanacc").addEventListener("click", cancel);
