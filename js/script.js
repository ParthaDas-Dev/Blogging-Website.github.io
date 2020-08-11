function searchtopic() {
  let uinput = document.getElementById("user-input").value.toUpperCase().trim();
  // console.log(uinput);
  let ul = document.getElementById("s-list");
  let li = ul.getElementsByTagName("li");
  let resultArea = document.getElementById("s-result");
  resultArea.style.visibility = "visible";

  for (var i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    let text = a.innerText;
    if (text.toUpperCase().indexOf(uinput) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
function Visible() {
  let resultArea = document.getElementById("s-result");
  resultArea.style.visibility = "hidden";
}

function popup() {
  swal(
    "More Info About Search",
    "If You Didn't Find The Thing That You Were Looking For ,Then That Means Either That Thing Is Not Available Or Will Be Add In The Future, We Apologize For The Inconvenience",
    "warning"
  );
}

function emailval() {
  let email = document.getElementById("email");
  let email_val = email.value;
  let test_email = /^([a-z A-Z 0-9 \.-]+)@([a-z A-Z 0-9 -]+).([a-z]).([a-z])?$/;
  if (email_val == "") {
    email.placeholder = "Email Field Can't Be Empty";
    swal("Empty Email!", "Enter A Proper Email Address", "warning");
    return false;
  } else if (!test_email.test(email_val)) {
    swal("Invalid Email Address!", "Enter A Valid Email Address", "error");
    return false;
  } else {
    swal("Well Done!", "Sucessfully Subscribed", "success");
    return true;
  }
}

function Popup3() {
  swal(
    "Currently Unavailable!",
    "We Apologize For The Inconvenience..",
    "warning"
  );
}

AOS.init();
