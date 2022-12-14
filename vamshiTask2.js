let $ = (selector) => document.querySelector(selector);



function validate() {
  let firstname = $('#fname');
  let lastname = $('#Lname');
  let namepattern = /^[a-zA-z]{2,30}$/;
  let email = $('#email');
  let emailpattern= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let phone = $('#Phone');
  let phonepattern=/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  //   console.dir(namepattern);


     if (firstname.value == '') {
    firstname.nextElementSibling.innerHTML = 'Please enter firstname';
  } else if (!namepattern.test(firstname.value)) {
    firstname.nextElementSibling.innerHTML =
      'Please enter firstname with letter only';
  } else {
    firstname.nextElementSibling.innerHTML = '';
  }

  if (lastname.value == '') {
    lastname.nextElementSibling.innerHTML = 'Please enter lastname';
  } else if (!namepattern.test(lastname.value)) {
    lastname.nextElementSibling.innerHTML =
      'Please enter lastname with letter only';
  } else {
    lastname.nextElementSibling.innerHTML = '';
  }

  if (email.value == '') {
    email.nextElementSibling.innerHTML = 'Please enter email';
  }  else if (!emailpattern.test(email.value)) {
    email.nextElementSibling.innerHTML =
      'Please enter valid email';
  }else {
    email.nextElementSibling.innerHTML = '';
  }

  if (phone.value == '') {
    phone.nextElementSibling.innerHTML = 'Please enter phoneNo';
  } else if (!phonepattern.test(phone.value)) {
    phone.nextElementSibling.innerHTML =
      'Please enter valid number';
  }else {
    phone.nextElementSibling.innerHTML = '';
  }
  if(firstname.value != '' && lastname.value != '' && email.value != '' && phone.value != '' ) {
  window.location = "vamshi_project_task3.html";
  }
 


}



var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var checkinElem = document.querySelector("#selectdate");


checkinElem.setAttribute("min", dateTomorrow);

