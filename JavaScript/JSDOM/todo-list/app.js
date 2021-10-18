const inputElement = document.querySelector(".input");
const addElement = document.querySelector(".btn-primary");
const liElement = document.querySelector(".li");
const listElement = document.querySelector(".list");

addElement.addEventListener("click", (e) => {
  e.preventDefault();
  const value = inputElement.value.trim();
  if (value === "") {
    alert("let input something...");
  } else {
    // add input
    addItem(value);
    inputElement.value = "";

    // delete item
    const deleteElements = document.querySelectorAll(".del");
    for (var i = 0; i < deleteElements.length; i++) {
      deleteElements[i].onclick = function () {
        this.parentNode.parentNode.remove();
      };
    }

    // complete task
    const taskElements = document.querySelectorAll("li");
    for (var i = 0; i < taskElements.length; i++) {
      taskElements[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    // edit task
    const editElements = document.querySelectorAll(".edit");
    for (var i = 0; i < editElements.length; i++) {
      // console.log(editElements[i]);
      editElements[i].onclick = function () {
        let input = this.parentNode.parentNode.firstElementChild;
        input.disabled = false;
        input.onkeyup = function (e) {
          if (e.key === "Enter") {
            input.disabled = true;
          }
        };
      };
    }
  }
});

// add item to list of todos
const addItem = (value) => {
  let item = document.createElement("li");
  item.innerHTML = `
        <input type="text" class="form-control li" id="inputPassword2" value="${value}" disabled>
        <div class="custom">
          <button type="submit" class="btn edit mb-2"><i class="bi bi-pencil"></i></button>
          <button type="submit" class="btn del mb-2"><i class="bi bi-trash"></i></button>
        </div>
          `;
  listElement.appendChild(item);
};
