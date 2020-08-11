function signupval() {
  let uname = document.getElementById("uname");
  let email = document.getElementById("email");
  let pass = document.getElementById("pass");
  let cpass = document.getElementById("cpass");
  let uname_val = document.getElementById("uname").value;
  let email_val = document.getElementById("email").value;
  let pass_val = document.getElementById("pass").value;
  let cpass_val = document.getElementById("cpass").value;
  let uname_Error = document.getElementById("uerror");
  let email_Error = document.getElementById("mail-error");
  let pass_Error = document.getElementById("pass-error");
  let cpass_Error = document.getElementById("cpass-error");

  let testEmail = /^([a-z A-Z 0-9 \. -]+)@([a-z A-Z 0-9 -]{2,20}).([a-z]{2,15}).([a-z]{2,4})?$/;

  if (uname_val == "") {
    uname.style.backgroundColor = "rgba(224, 87, 87, 0.4)";
    uname.placeholder = "Please Fill This Fill";
    return false;
  } else if (uname_val.length < 4) {
    uname_Error.innerHTML = "Enter More Than 3 Chars";
    return false;
  }

  if (email_val == "") {
    email.style.backgroundColor = "rgba(224, 87, 87, 0.4)";
    email.placeholder = "Please Fill This Fill";
    return false;
  } else if (!testEmail.test(email_val)) {
    email.style.backgroundColor = "rgba(224, 87, 87, 0.4)";
    email_Error.innerHTML = "Enter A Valid Email";
    return false;
  }

  if (pass_val == "") {
    pass.style.backgroundColor = "rgba(224, 87, 87, 0.4)";
    pass.placeholder = "Please Fill This Fill";
    return false;
  } else if (pass_val.length < 5) {
    pass.style.backgroundColor = "rgba(224, 87, 87, 0.4)";
    pass_Error.innerHTML = "Enter More Than 4 Chars";
    return false;
  }

  if (pass_val != cpass_val) {
    pass.style.backgroundColor = "rgba(224, 87, 87, 0.4)";
    cpass.style.backgroundColor = "rgba(224, 87, 87, 0.4)";
    cpass_Error.innerHTML = "Password & Confirm Password Must be The Same";
    return false;
  }
  let con = confirm("Sign Up Sucessful. Press 'Ok' To Leave This Page");
  if (con == true) {
    window.open("blog.html", "_self");
  } else {
    return false;
  }
}
let login = document.getElementsByClassName("log-in-row")[0];
let signup = document.getElementsByClassName("sign-up-row")[0];
function Login() {
  login.style.display = "block";
  login.style.transition = "all 2s";
  signup.style.display = "none";
}
function Signup() {
  login.style.display = "none";
  signup.style.display = "block";
}

function loginDone() {
  userName = document.getElementById("l-uname");
  u_val = userName.value;
  userPass = document.getElementById("l-pass");
  p_val = userPass.value;
  if (u_val == "") {
    userName.style.backgroundColor = "rgba(224, 87, 87, 0.4)";
    userName.placeholder = "Please Fill This Field";
    return false;
  }
  if (p_val == "") {
    userPass.style.backgroundColor = "rgba(224, 87, 87, 0.4)";
    userPass.placeholder = "Please Fill This Field";
    return false;
  }
  let con = confirm("Log In Sucessful. Press 'Ok' To Leave This Page");
  if (con == true) {
    window.open("blog.html", "_self");
  } else {
    return false;
  }
}

$(document).ready(function () {
  $(".sidenav").sidenav();
});

//Gsap
gsap.from(".sign-up", { opacity: 0, duration: 1, y: -50 });
