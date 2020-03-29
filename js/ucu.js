// + 1. Submit the form, only if it is valid
//   + email is between 5 and 50 chars long
//   + email format is correct
//   + name has 0 or 2 whitespaces benween words
//   + name length is 1 or more chars
//   + phone length is 12 or more digits
//   + phone format is correct. Valid formats: "+38032 000 000 00", "+380(32) 000 000 00", "+380(32)-000-000-00", "0380(32) 000 000 00", + any combitaion
//   + message is 10 or more characters.
//   + message must not iclude bad language: ugly, dumm, stupid, pig, ignorant
//-  2. Validate each input on the fly using onchange event
//-  3. Define re-usable validators: length, format, 




// REMARK: Only tasks with + are done
function validateEmail() {
  const emailNode = event.target.elements['email'];
  const emailErrorNode = emailNode.parentNode.querySelector('p.help-block')
  emailErrorNode.innerHTML = '';

  let emailErrors = document.createElement('ul');
  emailErrors.setAttribute("role", "alert");

  if (emailNode.value.length < 5 ) {
    let li = document.createElement('li');
    li.innerText = 'Email is too short';
    emailErrors.appendChild(li)
  }

  if (emailNode.value.length > 50 ) {
    let li = document.createElement('li');
    li.innerText = 'Email is too long';
    emailErrors.appendChild(li)
  }

  if (!emailNode.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    let li = document.createElement('li');
    li.innerText = 'Email format is incorrect';
    emailErrors.appendChild(li)
  }

  if (emailErrors.childElementCount > 0) {
    emailErrorNode.appendChild(emailErrors)
  }
  return false
}


function validateName() {
  const nameNode = event.target.elements['name'];
  const nameErrorNode = nameNode.parentNode.querySelector('p.help-block')
  nameErrorNode.innerHTML = '';

  let nameErrors = document.createElement('ul');
  nameErrors.setAttribute("role", "alert");

  if (nameNode.value.length < 1) {
    let li = document.createElement('li');
    li.innerText = 'Name is too short';
    nameErrors.appendChild(li)
  }

  if (!nameNode.value.match(/^[a-zA-Z]+\s\s[a-zA-Z]*$/) && !nameNode.value.match(/^[a-zA-Z]+$/)) {
    let li = document.createElement('li');
    li.innerText = 'Name does not contain 0 or 2 whitespaces between words';
    nameErrors.appendChild(li)
  }

  if (nameErrors.childElementCount > 0) {
    nameErrorNode.appendChild(nameErrors)
  }
  return false
}


function validatePhone() {
  
  const phoneNode = event.target.elements['phone'];
  const phoneErrorNode = phoneNode.parentNode.querySelector('p.help-block')
  phoneErrorNode.innerHTML = '';

  let phoneErrors = document.createElement('ul');
  phoneErrors.setAttribute("role", "alert");

  if (phoneNode.value.length < 12) {
    let li = document.createElement('li');
    li.innerText = 'Phone is too short';
    phoneErrors.appendChild(li)
  }

  if (!phoneNode.value.match(/^\+?0?[0-9]{3}\(?([0-9]{2})\)?((\s|-)?[0-9]{2,3}){3}$/)) {
    let li = document.createElement('li');
    li.innerText = 'Phone format is incorrect';
    phoneErrors.appendChild(li)
  }

  if (phoneErrors.childElementCount > 0) {
    phoneErrorNode.appendChild(phoneErrors)
  }
  return false
}

function validateMessage() {
  const messageNode = event.target.elements['message'];
  const messageErrorNode = messageNode.parentNode.querySelector('p.help-block')
  messageErrorNode.innerHTML = '';

  let messageErrors = document.createElement('ul');
  messageErrors.setAttribute("role", "alert");

  if (messageNode.value.length < 9) {
    let li = document.createElement('li');
    li.innerText = 'Message is too short';
    messageErrors.appendChild(li)
  }

  if (messageNode.value.match(/ugly/) || messageNode.value.match(/dumm/) || messageNode.value.match(/stupid/) ||
  messageNode.value.match(/pig/) || messageNode.value.match(/ignorant/)) {
    let li = document.createElement('li');
    li.innerText = 'Message must not iclude bad language';
    messageErrors.appendChild(li)
  }

  if (messageErrors.childElementCount > 0) {
    messageErrorNode.appendChild(messageErrors)
  }
  return false
}


function validateMe(event) {
  event.preventDefault();

  validateEmail()
  validateName()
  validatePhone()
  validateMessage()

  return false;
}
