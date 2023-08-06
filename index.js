const form = document.getElementById("doc-form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let firstn = firstName.value.trim();
  let lastn = lastName.value.trim();
  let mail = email.value.trim();
  let pass = password.value.trim();
  let emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (firstn === "") {
    errorFunc(firstName, "First Name cannot be empty");
  } else {
    successFunc(firstName);
  }

  if (lastn === "") {
    errorFunc(lastName, "Last Name cannot be empty");
  } else {
    successFunc(lastName);
  }

  if (mail === "") {
    errorFunc(email, "Email Name cannot be empty");
  } else if (!mail.match(emailPattern)) {
    errorFunc(email, "Not a valid email");
  } else {
    successFunc(email);
  }

  if (pass === "") {
    errorFunc(password, "Password Name cannot be empty");
  } else {
    successFunc(password);
  }
});

function errorFunc(req, message) {
  const formControl = req.parentElement;
  const spans = formControl.querySelectorAll("span");
  const inputs = formControl.querySelectorAll("input");
  const validText = "email@example.com";
  spans.forEach((span) => {
    span.innerText = message;
    span.classList.add("error-message");
  });

  inputs.forEach((input) => {
    input.placeholder = "";

    inputs[2].value = "email@example.com";
  });

  req.classList.add("error");
}

function successFunc(req) {
  req.classList.remove("error");
  req.classList.remove("error-message");
  req.classList.add("success");

  firstName.placeholder = "First Name";
  lastName.placeholder = "Last Name";
  email.placeholder = "Email";
  password.placeholder = "Password";
}
