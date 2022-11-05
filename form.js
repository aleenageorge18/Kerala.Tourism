let email = document.getElementById("email");
let pswd = document.getElementById("pswd");



// login
function validate(){
    let regexp1 = /^([A-Za-z0-9\.-]+)@([A-Z0-9a-z\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(regexp1.test(email.value)!="1"){
        error.innerHTML = "Invalid";
        error.style.color = "red";
        return false;
    }
    else if(psr.test(pswd.value)!="1"){
        error.innerHTML = "invalid";
        error.style.color = "red";
        return false;
    }
    else{
        error.innerHTML = "Valid";
        error.style.color = "green";
        return true;
    }

}


//signup
function verify(){
    let regexp1 = /^([A-Za-z0-9\.-]+)@([A-Z0-9a-z\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(regexp1.test(email.value)!="1"){
        error.innerHTML = "Invalid";
        error.style.color = "red";
        return false;
    }
    else if(psr.test(pswd.value)!="1"){
        error.innerHTML = "invalid";
        error.style.color = "red";
        return false;
    }
    else{
        error.innerHTML = "Valid";
        error.style.color = "green";
        return true;
    }

}