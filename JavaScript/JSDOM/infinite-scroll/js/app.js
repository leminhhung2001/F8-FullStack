const getQuotesElement = document.querySelector(".quotes");
const getLoaderElement = document.querySelector(".loader");

const getQuotes = async (page, limit) => {
  let url = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`An error occurred: ${response.status}`);
  }
  return await response.json();
};

const renderQuotes = (quotes) => {
  quotes.forEach((quote) => {
    const quoteElement = document.createElement("blockquote");
    quoteElement.classList.add("quote");
    quoteElement.innerHTML = `<span>${quote.id})</span>
                              ${quote.quote}
                              <footer>-${quote.author}<footer>`;
    getQuotesElement.appendChild(quoteElement);
  });
};

const showLoader = () => {
  getLoaderElement.classList.add("show");
};

const hideLoader = () => {
  getLoaderElement.classList.remove("show");
};

const hasMoreQuotes = (page, limit, total) => {
  const startIndex = (page - 1) * limit + 1;
  return total === 0 || startIndex < total;
};

const loadQuotes = (page, limit) => {
  showLoader();

  setTimeout(async () => {
    try {
      if (hasMoreQuotes(page, limit, total)) {
        const response = await getQuotes(page, limit);
        renderQuotes(response.data);
        total = response.total;
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      hideLoader();
    }
  }, 1000000);
};

let currentPage = 1;
const limit = 10;
let total = 0;

window.addEventListener(
  "scroll",
  () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (
      scrollTop + clientHeight >= scrollHeight - 5 &&
      hasMoreQuotes(currentPage, limit, total)
    ) {
      currentPage++;
      loadQuotes(currentPage, limit);
    }
  },

  {
    passive: true,
  }
);

loadQuotes(currentPage, limit);
