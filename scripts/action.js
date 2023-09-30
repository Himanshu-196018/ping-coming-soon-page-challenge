"use strict";
const emailInput = document.getElementById("email");
const errMessage = document.getElementById("err-msg");
const submitButton = document.getElementById("submit-btn");

submitButton.onclick = (e) => {
  e.preventDefault();

  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailInput.value.match(validRegex)) {
    errMessage.innerHTML = "";
    emailInput.style.borderColor = "hsl(223, 100%, 88%)";
    alert(`Email recieved ${emailInput.value}`);
    emailInput.value = "";
  } else {
    emailInput.style.borderColor = "hsl(354, 100%, 66%)";
    errMessage.innerHTML = "Please enter a valid email";
  }
};
