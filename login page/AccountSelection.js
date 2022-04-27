const proxtraAcc = (event) => {
  event.preventDefault();
  window.location.href = "ProxtraAccount.html";
};
document.getElementById("proxtraAccbtn").addEventListener("click", proxtraAcc);
document.getElementById("proxtraAcc").addEventListener("click", proxtraAcc);

const PersonalAcc = (event) => {
    event.preventDefault();
    window.location.href = "personalAccsignup.html";
};
document.getElementById("personalAccbtn").addEventListener("click", PersonalAcc);
document.getElementById("personalAcc").addEventListener("click", PersonalAcc);