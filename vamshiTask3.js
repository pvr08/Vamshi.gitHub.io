let $ = (selector) => document.querySelector(selector);



function validate() {
  let cardno = $('#cardno');
  let name = $('#name');
  let date = $('#date');
  let cvv = $('#cvv');


    if (cardno.value == '') {
    alert("Please enter Card Number");
  } 
  if(name.value == '')
  {
    alert("Please enter name");
  }
  if(date.value == '')
  {
    alert("Please enter expiry date");
  }
  if(cvv.value == '')
  {
    alert("Please enter CVV");
  }
}