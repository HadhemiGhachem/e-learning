var login = document.getElementById('login') ; 
login.onblur = vide1 ; 
function vide1(){
    if(login.value == ""){
        login.style.borderColor = " red "

    }else if(pass.value !== "@"){
        pass.style.borderColor = " red "
    
    }else if(pass.value !== ".com" ) {
        pass.style.borderColor = " red "

    }
    else{
        login.style.borderColor =" green "
    }

}

var pass = document.getElementById('pass') ; 
pass.onblur = vide2 ; 
function vide2(){
    if(pass.value == ""){
        pass.style.borderColor = " red "
    }
    else{
        pass.style.borderColor =" green "
    }
}











