var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');
var Toerror = document.getElementById('To-error');
var Fromerror = document.getElementById('from-error');


// NAME VALIDATION
function validateName()
{
     var name= document.getElementById('contact-name').value;

     if(name.length == 0){
        nameError.innerHTML = 'Name is reuired';
        return false;
     }
   
    
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'write valid name';
    return false;
}
     nameError.innerHTML = '<i class="fa-solid fa-check-to-slot"></i>';
     return true;
}



// phone number validation
function validatePhone()
{
 var phone = document.getElementById('contact-phone').value;

 if(phone.length == 0){

    phoneError.innerHTML = 'Phone no is required';
    return false;

 }
 if(phone.length  !== 10){

    phoneError.innerHTML = 'Phone no should be 10 digit';
    return false;

 }

if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = 'only digit please';
    return false;
}
phoneError.innerHTML ='<i class="fa-solid fa-check-to-slot"></i>';
return true;
}





// validate Email
function validateEmail()
{
 var email = document.getElementById('contact-email').value;

 if(email.length == 0)

 {
    emailError.innerHTML = 'Email is Required'
    return false;
 }
if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
 emailError.innerHTML = 'Email Invalid'
 return false;
}
emailError.innerHTML = '<i class="fa-solid fa-check-to-slot"></i>';
return true;
}



//validate From
function validateFrom()
{
    var From = document.getElementById('from').value;


    
 if(From.length == 0)

 {
    messageError.innerHTML = 'Review is Required'
    return false;
 }
 if(!From.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    Fromerror.innerHTML = 'write valid place';
    return false;
}
    
    messageError.innerHTML = '<i class="fa-solid fa-check-to-slot"></i>';
    return true;
}
//validate To
function validateTo()
{
    var Too = document.getElementById('to').value;


    
 if(Too.length == 0)

 {
    messageError.innerHTML = 'Review is Required'
    return false;
 }
 if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    Toerror.innerHTML = 'write valid plcace';
    return false;
}
    
    messageError.innerHTML = '<i class="fa-solid fa-check-to-slot"></i>';
    return true;
}



// validation for submit buitton

function validateForm()
{
    if(!validateName() || !validatePhone() ||  !validateEmail() || !validateFrom() || !validateTo()){
        submitError.innerHTML = 'Please Fill All Field Correctly' ;
        return false;
    }
}


