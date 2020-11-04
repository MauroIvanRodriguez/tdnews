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
var buttonOne = document.getElementById("button");

// NAME VALIDATION
fullName.addEventListener("blur", nameValidation);

function nameValidation (e){
    
    var textOfName = e.target.value;

    if (textOfName.length<6 || textOfName.indexOf(" ")<0 ){
        var errorText = document.getElementById("nameError");
        errorText.innerHTML = "<p> Error </p>";
        var oneOp = 1;
        console.log(oneOp);
    }
    else{
        var errorText = document.getElementById("nameError");
        errorText.innerHTML = "<p> OK! </p>";
        var oneOp = 2;
        console.log(oneOp);
    }
}


//EMAIL VALIDATION

email.addEventListener("blur", emailValidation);

function emailValidation (e){
    
    var textOfEmail = e.target.value;

    if (textOfEmail.indexOf(' ')>0 || textOfEmail.indexOf("@")<0 || textOfEmail.indexOf(".")<0 || textOfEmail.indexOf(".") == (textOfEmail.length-1) ){

        var errorText = document.getElementById("emailError");
        errorText.innerHTML = "<p> Error </p>";
        var twoOp = 1;
        console.log(twoOp);

    }
    else{
        var errorText = document.getElementById("emailError");
        errorText.innerHTML = "<p> OK! </p>";
        var twoOp = 2;
        console.log(twoOp);
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
        var threeOp = 1;
        console.log(threeOp);

    }
    else{
        var errorText = document.getElementById("passwordError");
        errorText.innerHTML = "<p> OK! </p>";
        var threeOp = 2;
        console.log(threeOp);
    }
}

// REWRITE PASSWORD VALIDATION

repassword.addEventListener("blur", repasswordValidation);

var textOfRepassword = "";

function repasswordValidation (e){
    
    textOfRepassword = e.target.value;
    
    if (textOfRepassword != textOfPassword ){
        var errorText = document.getElementById("repasswordError");
        errorText.innerHTML = "<p> Error </p>";
        var fourOp = 1;
        console.log(fourOp);

    }
    else{
        var errorText = document.getElementById("repasswordError");
        errorText.innerHTML = "<p> OK! </p>";
        var fourOp = 2;
        console.log(fourOp);
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
        var fiveOp = 1;
        console.log(fiveOp);

    }
    else{

        var errorText = document.getElementById("ageError");
        errorText.innerHTML = "<p> OK! </p>";
        var fiveOp = 2;
        console.log(fiveOp);
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
        var sixOp = 2;
        console.log(sixOp);

    }
    else{
        var errorText = document.getElementById("telephoneError");
        errorText.innerHTML = "<p> Error </p>";
        var sixOp = 1;
        console.log(sixOp);
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
        var sevenOp = 1;
        console.log(sevenOp);

    }
    else{
        var errorText = document.getElementById('adressError');
        errorText.innerHTML = "<p> OK!</p>";
        var sevenOp = 2;
        console.log(sevenOp);
    }
}

// CITY VALIDATION

city.addEventListener("blur", cityValidation);

function cityValidation (e){
    
    var textOfCity = e.target.value;

    if (textOfCity.length<3 ){
        var errorText = document.getElementById("cityError");
        errorText.innerHTML = "<p> Error </p>";
        var eightOp = 1;
        console.log(eightOp);

    }
    else{

        var errorText = document.getElementById("cityError");
        errorText.innerHTML = "<p>OK!</p>";
        var eightOp = 2;
        console.log(eightOp);
    }
}

// POSTALCODE VALIDATION

postalCode.addEventListener("blur", postalCodeValidation);

function postalCodeValidation (e){
    
    var textOfPostalCode = e.target.value;

    if (textOfPostalCode.length<3 ){
        var errorText = document.getElementById("pCError");
        errorText.innerHTML = "<p> Error </p>";
        var nineOp = 1;
        console.log(nineOp);

    }
    else{

        var errorText = document.getElementById("pcError");
        errorText.innerHTML = "<p>OK!</p>";
        var nineOp = 2;
        console.log(nineOp);
    }
}

//DNI VALIDATION

dni.addEventListener("blur", dniValidation);

function dniValidation (e){
    
    var textOfDni = e.target.value;

    if (textOfDni.length==8 || textOfDni.length==7 ){
        var errorText = document.getElementById("dniError");
        errorText.innerHTML = "<p> OK! </p>";
        var tenOp = 2;
        console.log(tenOp);
    }else{
        var errorText = document.getElementById("dniError");
        errorText.innerHTML = "<p> Error</p>";
        var tenOp = 1;
        console.log(tenOp);
    }
}

// FORM COMPLETED

function recheck (e){
    if (fullName.value == "" || email.value== "" || password.value== "" ||repassword.value== "" || age.value == "" || phone.value== "" || adress.value== "" || city.value== ""|| postalCode.value== "" || dni.value== "" ){
        if (fullName.value ==""){
            fullName.focus ();
        }else if(email.value== ""){ 
            email.focus();
        }else if(password.value== ""){ 
            password.focus();
        }else if(repassword.value== ""){ 
            repassword.focus();
        }else if(age.value== ""){ 
            age.focus();
        }else if(phone.value== ""){ 
            phone.focus();
        }else if(adress.value== ""){ 
            adress.focus();
        }else if(city.value== ""){ 
            city.focus();
        }else if(postalCode.value== ""){ 
            postalCode.focus();
        }else if(dni.value== ""){ 
            dni.focus();
    }else{
            alert ("all the gaps fill properly");
        }
    }
}

buttonOne.onclick = showResult;
function showResult (){
    if(oneOp == 2 && twoOp == 2 && threeOp == 2 && fourOp == 2 && fiveOp == 2 && sixOp == 2 && sevenOp == 2 && eightOp == 2 && nineOp == 2 && tenOp == 2){
        alert (textOfName,textOfEmail,textOfPhone,textOfPostalCode );
    }else{
        alert ();
    }
}


