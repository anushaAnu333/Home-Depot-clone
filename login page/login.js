let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

const validate = () =>{
    const email = document.getElementById("box1").value.toLowerCase()
    const button = document.getElementById("submit")
    
    if(regex.test(email)){
        button.disabled=false
    }
    else{
        button.disabled=true
    }
}
const submit = (event) => {
    event.preventDefault();
    const email = document.getElementById("box1").value.toLowerCase()
    if (email) {
        if (email === window.localStorage.getItem("email"))
        {
            console.log(email);
            window.location.href = 'password.html'
        }
        else{
            window.location.href = "AccountSelection.html"
        }
    }
}
document.getElementById("submit").addEventListener("click", submit);

const redirect = (event) =>{
    event.preventDefault();
    window.location.href = 'AccountSelection.html'
}
document.getElementById("createanacc").addEventListener("click", redirect);