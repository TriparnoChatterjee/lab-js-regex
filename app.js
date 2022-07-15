/* Fill your code*/
function formValidate() {
  var name = document.forms["RegForm"]["Name"];
  var email = document.forms["RegForm"]["EMail"];
  var phone = document.forms["RegForm"]["phone"];
  var password = document.forms["RegForm"]["Password"];
  var cpassword = document.forms["RegForm"]["cPassword"];
  var address = document.forms["RegForm"]["Address"];
  var validate = document.getElementById("validate");

  var errName = document.getElementById("name");
  var errEmail = document.getElementById("email");
  var errPhone = document.getElementById("phone");
  var errAddress = document.getElementById("address");
  var errpassword = document.getElementById("pwd");
  var errcpwd = document.getElementById("cpwd");

  let regexName = /.{8,15}/;
  let regexSpace = /\s/;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regexPass =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;
  let patternPhone = /^[6-9]\d{9}$/;
  if (name.value === "") {
    errName.innerText = "Name should not be empty";
  }
  if (regexName.test(name.value) === false) {
    errName.innerText = "atleast 8 to 15 characters required";
    name.focus();
    return false;
  } else {
    errName.innerText = "";
  }
  if (address.value === "") {
    errAddress.innerText = "Kindly Fill Address";
    address.focus();
    return false;
  } else {
    errAddress.innerText = "";
  }
  if (email.value === "" || regexSpace.test(email.value)) {
    errEmail.innerText = "email cannot be empty or contain spaces";
    email.focus();
    return false;
  } else if (regexEmail.test(email.value) === false) {
    errEmail.innerText = "Enter a proper email Id";
    email.focus();
    return false;
  } else {
    errEmail.innerText = "";
  }
  if (password.value == "") {
    errpassword.innerText = "Kindly fill Password field";
    password.focus();
    return false;
  } else if (regexPass.test(password.value) === false) {
    errpassword.innerText =
      "Password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number and symbols (min 6 char. and max 15 char)";
    password.focus();
    return false;
  } else {
    errpassword.innerText = "";
  }
  if (cpassword.value == "") {
    errcpwd.innerText = "Kindly Retype your Password";
    cpassword.focus();
    return false;
  } else if (cpassword.value !== password.value) {
    errcpwd.innerText = "Passwords are not matching";
    cpassword.focus();
    return false;
  } else {
    errcpwd.innerText = "";
  }

  if (phone.value == "") {
    errPhone.innerText = "Kindly Enter your Phone Number";
    phone.focus();
    return false;
  } else if (patternPhone.test(phone.value) === false) {
    errPhone.innerText = "Phone no. must be valid";
    phone.innerText = "";
    phone.focus();
    return false;
  } else {
    errPhone.innerText = "";
  }

  validate.innerText = "Regex Validation Success"
  checkbtn.focus();
  
  return false;
}
