const textInput = document.querySelector("#text");
const updateCount = document.querySelector("#stat");

import { countWords } from "./word-counter.js";

new countWords(textInput);

const render = (event) => {
  console.log(event);
  updateCount.innerHTML = `<p>You've written <span class="highlight">${event.detail.result.words} words</span> 
        and <span class="highlight">${event.detail.result.characters} characters</span>.</p>`;
};

textInput.addEventListener("count", render);
