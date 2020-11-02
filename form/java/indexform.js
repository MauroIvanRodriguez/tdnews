//VARIABLES

var aform = document.getElementsByClassName("form-register");
var formone = document.getElementsByClassName("first-column");
var formtwo = document.getElementsByClassName("form-right");

var fullName = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var repassword = document.getElementById("repassword");
var age = document.getElementById("age");
var phone = document.getElementById("phone");
var adress = document.getElementById("adress");
var city = document.getElementById("city");
var postalCode = document.getElementById("pc");
var dni = document.getElementById("dni");


//ONBLUR - NAME VALIDATION

fullName.addEventListener("blur", nameValidation);
    function nameValidation(){
 
    alert ("onblur");
    }



 
//ONBLUR - EMAIL VALIDATION

email.addEventListener("blur", emailValidation);

function emailValidation (e){
    
    var textOfEmail = e.target.value;

    if (textOfEmail.indexOf(" ")>0 || textOfEmail.indexOf("@")<0 || textOfEmail.indexOf(".")<0 || textOfEmail.indexOf(".") == (textOfEmail.length-1) ){
        //console.log("index del arroba:" + textOfEmail.indexOf("@")),
        //console.log("index del espacio:" + textOfEmail.indexOf(" ")),
        //console.log("index del punto:" + textOfEmail.indexOf(".")),
        //console.log("error");
        var errorText = document.getElementById("emailError");
        errorText.innerHTML = "<p> *Error </p>";

    }
    else{
        var errorText = document.getElementById("emailError");
        errorText.innerHTML = "<p>✔</p>";
    }
}
