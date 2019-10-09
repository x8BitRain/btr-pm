setTimeout(function() {
  document.querySelector("body > footer").style.display = "block";
 }, 3500);

const copyEmail = () => {
  let copyText = document.getElementById("email");
  let icon = document.getElementById("emailid");
  copyText.select();
  document.execCommand("copy");
  icon.src = "/img/check.svg";
  icon.style.filter =
    "drop-shadow(0px 0 1px green)";
  setTimeout(function() {
    icon.src = "/img/mail.svg";
    icon.style.filter = "drop-shadow(0px 0 0px)";
  }, 2000);
}

