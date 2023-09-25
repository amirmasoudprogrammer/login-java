// js project//

const button =document.querySelector(".button-check");
const check_line=document.querySelector(".check-line");
const check_pass2=document.querySelector(".pass2");
const check_pass3=document.querySelector(".pass3");
const check_close=document.querySelector(".check-close");
const msg=document.querySelector(".msg");
const msgpass=document.querySelector(".msg-pass");
const input_user=document.querySelector("#user_input");
const input_pass=document.querySelector("#pass-input");
button.addEventListener("click",startforms);
function startforms(e) {
    e.preventDefault();
    msg.innerText="";
    msgpass.innerText="";
    let ifsenddata=true;
    let inputvalue_user = input_user.value;
    let inputvalue_pass = input_pass.value;
    if (inputvalue_user.length === 0 ){
        msg.innerText="You did not enter an email?";
        check_close.classList.add("active");
        ifsenddata=false;

    }else if (inputvalue_user.length === 5) {
        msg.innerText="Your email is correct";
        msg.style.color="green";
        check_line.classList.add("active")
        check_close.classList.remove("active")
        ifsend=false;
    }

    if (inputvalue_user.indexOf("@gmail.com") === -1){
        msg.innerText="You did not enter an email?";
        check_close.classList.add("active");
        ifsenddata=false;
    }
    else {
        msg.innerText="Your email is correct";
        msg.style.color="green";
        check_line.classList.add("active")
        check_close.classList.remove("active")
    }


    if (inputvalue_pass.length === 0){
        msgpass.innerText="You did not enter an pass?";
       check_pass3.classList.add("active");
        ifsenddata=false;
    }
    else if (inputvalue_pass.length >= 4) {
        msgpass.innerText="Your pass is correct";
        msgpass.style.color="green";
        check_pass2.classList.add("active")
        check_pass3.classList.remove("active")
    }


if (ifsenddata){
    alert("yes")
}
}