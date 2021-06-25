const inputElement = document.querySelector("#password");
const toggleElement = document.querySelector("#togglePassword");

toggleElement.addEventListener("click", (e) => {
  const type =
    inputElement.getAttribute("type") === "password" ? "text" : "password";
  inputElement.setAttribute("type", type);

  //  toggle the eye / eye slash icon
  toggleElement.classList.toggle("bi-eye");
});
