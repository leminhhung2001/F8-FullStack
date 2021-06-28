const display = (val) => {
  document.querySelector(".calculator-screen").value += val;
};

const calculator = () => {
  const text = document.querySelector(".calculator-screen").value;

  const result = eval(text);

  document.querySelector(".calculator-screen").value = result;
};

const clearText = () => {
  document.querySelector(".calculator-screen").value = "";
};
