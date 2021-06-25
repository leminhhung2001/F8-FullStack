const usernameEl = document.querySelector("#username");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const confirmPasswordEl = document.querySelector("#comfirm-password");

const form = document.querySelector(".signup");

// console.log(usernameEl, emailEl, passwordEl, confirmPasswordEl, form);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPasswordSecure = checkPassword(),
    idPasswordConfirmation = checkConfirmPassword();

  let formValid =
    isUsernameValid &&
    isEmailValid &&
    isPasswordSecure &&
    idPasswordConfirmation;

  if (formValid) {
    // Submit form lên server
  }
});

// Những phần chung để validate
const isRequired = (value) => (value === "" ? false : true);
const lengthInput = (min, max, length) =>
  min > length || max < length ? false : true;

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isPasswordSecure = (password) => {
  const re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return re.test(password);
};
// -----------------------------------------------------------

// Show lỗi
const showError = (input, message) => {
  let getParentElement = input.parentElement;

  input.classList.add("error");
  input.classList.remove("success");

  let getSmallTag = getParentElement.querySelector("small");
  getSmallTag.textContent = message;
};

const showSuccess = (input) => {
  let getParentElement = input.parentElement;

  input.classList.add("success");
  input.classList.remove("error");

  let getSmallTag = getParentElement.querySelector("small");
  getSmallTag.textContent = "";
};
// -----------------------------------------------------------

// Username validation
const checkUsername = () => {
  let check = false;
  const max = 30,
    min = 2;
  const username = usernameEl.value.trim();

  if (!isRequired(username)) {
    showError(usernameEl, "Username cannot be blank.");
  } else if (!lengthInput(min, max, username.length)) {
    showError(
      usernameEl,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(usernameEl);
    check = true;
  }
  return check;
};

const checkEmail = () => {
  let check = false;
  const email = emailEl.value.trim();

  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid.");
  } else {
    showSuccess(emailEl);
    check = true;
  }
  return check;
};

const checkPassword = () => {
  let check = false;

  const password = passwordEl.value.trim();

  if (!isRequired(password)) {
    showError(passwordEl, "Password cannot be blank.");
  } else if (!isPasswordSecure(password)) {
    showError(
      passwordEl,
      "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"
    );
  } else {
    showSuccess(passwordEl);
    check = true;
  }

  return check;
};

const checkConfirmPassword = () => {
  let check = false;
  // check confirm password
  const confirmPassword = confirmPasswordEl.value.trim();
  const password = passwordEl.value.trim();

  if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, "Please enter the password again");
  } else if (password !== confirmPassword) {
    showError(confirmPasswordEl, "Confirm password does not match");
  } else {
    showSuccess(confirmPasswordEl);
    check = true;
  }

  return check;
};

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

form.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "username":
        checkUsername();
        break;
      case "email":
        checkEmail();
        break;
      case "password":
        checkPassword();
        break;
      case "comfirm-password":
        checkConfirmPassword();
        break;
    }
  })
);
