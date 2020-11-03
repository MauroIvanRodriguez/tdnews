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

// NAME VALIDATION
fullName.addEventListener("blur", nameValidation);

function nameValidation (e){
    
    var textOfName = e.target.value;

    if (textOfName.length<6 || textOfName.indexOf(" ")<0 ){
        var errorText = document.getElementById("nameError");
        errorText.innerHTML = "<p> Error </p>";
        errorText.style.backgroundColor = "#FF0000";

    }
    else{

        var errorText = document.getElementById("nameError");
        errorText.innerHTML = "<p>OK!</p>";
        errorText.style.backgroundColor = "#008000";
    }
}

//EMAIL VALIDATION

email.addEventListener("blur", emailValidation);

function emailValidation (e){
    
    var textOfEmail = e.target.value;

    if (textOfEmail.indexOf(' ')>0 || textOfEmail.indexOf('@')<0 || textOfEmail.indexOf('.')<0 || textOfEmail.indexOf('.') == (textOfEmail.length-1) ){

        var errorText = document.getElementById('emailError');
        errorText.innerHTML = '<p> Error </p>';

    }
    else{
        var errorText = document.getElementById('emailError');
        errorText.innerHTML = '<p>OK!</p>';
    }
}

// PASSWORD VALIDATION

password.addEventListener("blur", passwordValidation);

var textOfPassword = "";

function passwordValidation (e){
    
    textOfPassword = e.target.value;

    console.log(textOfPassword);
    
    var letters="abcdefghyjklmnñopqrstuvwxyz";

    function hasLetters(textOfPassword){
        textOfPassword = textOfPassword.toLowerCase();
        for(i=0; i<textOfPassword.length; i++){
            if (letters.indexOf(textOfPassword.charAt(i),0)!=-1){
                return 1;
            }
        }
        return 0;
    }
    
    var num="1234567890";

    function hasNumbers(textOfPassword){
        textOfPassword = textOfPassword.toLowerCase();
        for(i=0; i<textOfPassword.length; i++){
            if (num.indexOf(textOfPassword.charAt(i),0)!=-1){
                return 1;
            }
        }
        return 0;
    }
    if (textOfPassword.length<8 || textOfPassword.indexOf(" ")>0 || hasLetters(textOfPassword)==0 || hasNumbers(textOfPassword)==0 ){

        var errorText = document.getElementById("passwordError");
        errorText.innerHTML = "<p> Error </p>";

    }
    else{
        var errorText = document.getElementById("passwordError");
        errorText.innerHTML = "<p>OK!</p>";
    }
}
// REWRITE PASSWORD VALIDATION

repassword.addEventListener("blur", repasswordValidation);

var textOfRepassword = "";

function repasswordValidation (e){
    
    textOfRepassword = e.target.value;
    
    if (textOfRepassword != textOfPassword ){
        var errorText = document.getElementById("repasswordError");
        errorText.innerHTML = "<p>  Error </p>";

    }
    else{
        var errorText = document.getElementById("repasswordError");
        errorText.innerHTML = "<p>OK!</p>";
    }
}
//AGE VALIDATION

age.addEventListener("blur", ageValidation);

function ageValidation (e){
    
    var textOfAge = e.target.value;
    if (textOfAge<18 ){
        console.log(textOfAge);
        var errorText = document.getElementById("ageError");
        errorText.innerHTML = "<p> You are younger </p>";

    }
    else{

        var errorText = document.getElementById("ageError");
        errorText.innerHTML = "<p>OK!</p>";
    }
}
//HONE VALIDATION

phone.addEventListener("blur", phoneValidation);

function phoneValidation (e){
    
    var textOfPhone = e.target.value;

    if (textOfPhone.length=10 && textOfPhone.indexOf(" ")<0 && textOfPhone.indexOf("-")<0 && textOfPhone.startsWith("3")){
        console.log(textOfPhone);
        var errorText = document.getElementById("telephoneError");
        errorText.innerHTML = "<p> OK! </p>";

    }
    else{
        var errorText = document.getElementById("telephoneError");
        errorText.innerHTML = "<p> error </p>";
    }
}

// ADRESS VALIDATION

adress.addEventListener("blur", adressValidation);

var textOfAdress = "";

function adressValidation (e){
    
    textOfAdress = e.target.value;

    var letters="abcdefghyjklmnñopqrstuvwxyz";

    function hasLetters(textOfAdress){
        textOfAdress = textOfAdress.toLowerCase();
        for(i=0; i<textOfAdress.length; i++){
            if (letters.indexOf(textOfAdress.charAt(i),0)!=-1){
                return 1;
            }
        }
        return 0;
    }
    
    var num="1234567890";

    function hasNumbers(textOfAdress){
        textOfAdress = textOfAdress.toLowerCase();
        for(i=0; i<textOfAdress.length; i++){
            if (num.indexOf(textOfAdress.charAt(i),0)!=-1){
                return 1;
            }
        }
        return 0;
    }
    if (textOfAdress.length<5 || textOfAdress.indexOf(" ")<0 || hasLetters(textOfAdress)==0 || hasNumbers(textOfAdress)==0 ){
        var errorText = document.getElementById('adressError');
        errorText.innerHTML = "<p> Error </p>";

    }
    else{
        var errorText = document.getElementById('adressError');
        errorText.innerHTML = "<p> OK!</p>";
    }
}
// CITY VALIDATION

city.addEventListener("blur", cityValidation);

function cityValidation (e){
    
    var textOfCity = e.target.value;

    if (textOfCity.length<3 ){
        var errorText = document.getElementById("cityError");
        errorText.innerHTML = "<p> Error </p>";

    }
    else{

        var errorText = document.getElementById("cityError");
        errorText.innerHTML = "<p>OK!</p>";
    }
}
// POSTALCODE VALIDATION

postalCode.addEventListener("blur", postalCodeValidation);

function postalCodeValidation (e){
    
    var textOfPostalCode = e.target.value;

    if (textOfPostalCode.length<3 ){
        var errorText = document.getElementById("pCError");
        errorText.innerHTML = "<p> Error </p>";

    }
    else{

        var errorText = document.getElementById("pcError");
        errorText.innerHTML = "<p>OK!</p>";
    }
}
//NI VALIDATION

dni.addEventListener("blur", dniValidation);

function dniValidation (e){
    
    var textOfDni = e.target.value;

    if (textOfDni.length==8 || textOfDni.length==7 ){
        var errorText = document.getElementById("dniError");
        errorText.innerHTML = "<p> OK! </p>";

    }
    else{

        var errorText = document.getElementById("dniError");
        errorText.innerHTML = "<p> Error</p>";
        function divColorChange() {errorText.style.color = '#FF0000';}
    }
}
