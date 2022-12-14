
let dropdown = ['Trains','Busses','Flights','Hotels','Suggestions'];
function list() {
  
  let list='';
    dropdown.forEach((s)=>{
         list +=`<option>${s}</option>`;
    })     
    document.getElementById('dropDown').innerHTML = list;
    console.log(dropdown)
}

list();
function nextpage(){
   console.log(document.getElementById('username').value);
    if(document.getElementById('username').value == 's' && document.getElementById('password').value == 's'){
      console.log(document.getElementById('dropDown').value)
        switch(document.getElementById('dropDown').value)
    {
case "Trains":
window.location="trains.html";
break;

case "Busses":
window.location="../Bus.html";
break;

case "Flights":
window.location="../athira_index.html";
break;

case "Suggestions":
window.location="../vamshi_project_Task1.html";
break;

case "Hotels":
window.location="../krunal_index.html";
break;
}
    }
else if((document.getElementById('username').value == "")&&(document.getElementById('password').value == "")){
  document.getElementById('error1').innerHTML="*Please enter a Username*";
  document.getElementById('error2').innerHTML="*Please enter a Password*";
}
       
    else if(document.getElementById('username').value == ""){ 
      document.getElementById('error2').innerHTML="";
        document.getElementById('error1').innerHTML="*Please fill this field*";
       
      }
      else if(document.getElementById('password').value == "") {
        document.getElementById('error1').innerHTML="";
        document.getElementById('error2').innerHTML="*Please fill this field*";
      }
      
}

function trains_info() {
    
    window.location = "../chandrika html/book.html"
}



function authenticate(){
    let authorised;
    
    //get input values
   // let username = document.getElementById('username').value;
   // let password = document.getElementById("password").value;
    
    //check to see if the password and username match
    if(document.getElementById('username').value == "a" && document.getElementById('dropdown').value == "a"){
      authorised = true;
    }else if(document.getElementById('username').value == "" || document.getElementById('dropdown').value == ""){ // username or password do not match
      authorised = false;
      //alert user
      alert("Sorry, inputs are incorrect.");
    }
    else {
        authorised = false;
    }
    //return result
    
    return authorised;
    
  }


function trainButton(){
  let t=document.getElementById('button'); 
  t.style.backgroundColor='blue';
}

function buttonleave(){
  let t=document.getElementById('button'); 
  t.style.backgroundColor='black';
}



function set(){
  if((document.getElementById('fname').value == "")&&(document.getElementById('email').value == "")){
    document.getElementById('errorname').innerHTML="*Please enter your name*";
    document.getElementById('errormail').innerHTML="*Please enter your email*";
  }
         
      else if((document.getElementById('fname').value == "")&&(document.getElementById('email').value != "")){ 
        document.getElementById('errormail').innerHTML="";
          document.getElementById('errorname').innerHTML="*Please enter your name*";
         
        }
        else if(document.getElementById('errorname').value == ""&&(document.getElementById('fname').value != "")) {
          document.getElementById('errorname').innerHTML="";
          document.getElementById('errormail').innerHTML="*Please fill this email*";
        }
        else if((document.getElementById('fname').value != "")&&(document.getElementById('email').value != "")) {
          window.location="confirmation.html";
        }
  let n= document.getElementById('fname').value;
  localStorage.setItem('fname',n);

  let dateasd= document.getElementById('selectdate').value;
  localStorage.setItem('selectdate',dateasd);
}


function getAttributes(){
  let t = localStorage.getItem('fname'); 
  let d = localStorage.getItem('selectdate');
  document.getElementById('name1').innerHTML = t;
  document.getElementById('date').innerHTML = d;
  // localStorage.clear();
}

function next(){
  window.location="trains-info.html";
}