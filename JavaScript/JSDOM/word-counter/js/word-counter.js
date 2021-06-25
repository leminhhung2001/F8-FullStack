export class countWords {
  constructor(textInput) {
    this.textInput = textInput;
    this.textInput.addEventListener("input", () => this.cnt());
  }

  cnt() {
    const result = this.validateWord(this.textInput.value.trim());
    this.emitEvent(result);
  }

  emitEvent(result) {
    let countEvent = new CustomEvent("count", {
      bubbles: true,
      cancelable: true,
      detail: {
        result,
      },
    });
    this.textInput.dispatchEvent(countEvent);
  }

  validateWord(data) {
    const re = /\S+/g;
    const matches = data.match(re);

    return {
      words: matches ? matches.length : 0,
      characters: data.length,
    };
  }
}
