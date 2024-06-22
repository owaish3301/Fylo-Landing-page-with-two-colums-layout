const emailBox = document.querySelector("#email-input");
const emailBox2 = document.querySelector("#email-input-2");
const emailWarnPC = document.querySelector("#email-warning-pc");
const emailWarnMobile = document.querySelector("#email-warning-mobile");
const emailWarn2 = document.querySelector("#email-warning-2");

const check1 = (evt) => {
    let currentValue = evt.target.value;
    currentValue = currentValue.trim();
    
    const isEmailValid = /\w+@\w+\.\w+./g.test(currentValue)
    if(window.innerWidth >= 576){
        if( !isEmailValid ){
            emailWarnPC.style.display = "block";
        }
        else{
            emailWarnPC.style.display = "";
        }
    } else{
        if ( !isEmailValid ){
            emailWarnMobile.style.display = "block";
        }
        else{
            emailWarnMobile.style.display ="";
        }
    }
}


const check2 = (evt) => {
    let currentValue = evt.target.value;
    currentValue = currentValue.trim();
    
    const isEmailValid = /\w+@\w+\.\w+./g.test(currentValue)
    if( !isEmailValid ){
        emailWarn2.style.display = "block";
    }
    else{
        emailWarn2.style.display = "";
    }
}


emailBox.addEventListener("input",check1);
emailBox2.addEventListener("input",check2);