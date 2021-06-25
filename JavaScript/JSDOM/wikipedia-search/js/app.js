// ---------------------Template-------------------

// const searchTermElement = document.querySelector("#searchTerm");
// const searchResultElement = document.querySelector("#searchResult");

// searchTermElement.focus();

// searchTermElement.addEventListener("input", (e) => {
//   search(e.target.value);
// });

// // Hàm có chức năng giảm số lần request đến Wiki
// const debounce = (fn, delay = 500) => {
//   let timeoutId;

//   return (...args) => {
//     // cancel the previous timer
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }
//     // setup a new timer
//     timeoutId = setTimeout(() => {
//       fn.apply(null, args);
//     }, delay);
//   };
// };

// const search = debounce(async (searchTerm) => {
//   // if the search term is removed,
//   // reset the search result
//   if (!searchTerm) {
//     // reset the search result
//     searchResultElement.innerHTML = "";
//     return;
//   }

//   try {
//     const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchTerm}`;
//     const response = await fetch(url);
//     const searchResults = await response.json();

//     // render search result
//     const searchResultHtml = generateSearchResultHTML(
//       searchResults.query.search,
//       searchTerm
//     );

//     // add the search result to the searchResultElem
//     searchResultElement.innerHTML = searchResultHtml;
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// const stripHtml = (html) => {
//   const element = document.createElement("div");
//   element.textContent = html;
//   return element.textContent;
// };

// const highlight = (str, keyword, className = "highlight") => {
//   const hl = `<span class="${className}">${keyword}</span>`;
//   return str.replace(new RegExp(keyword, "gi"), hl);
// };

// const generateSearchResultHTML = (results, searchTerm) => {
//   return results
//     .map((result) => {
//       const title = highlight(stripHtml(result.title), searchTerm);
//       const snippet = highlight(stripHtml(result.snippet), searchTerm);

//       return `<article>
//                   <a href="https://en.wikipedia.org/?curid=${result.pageid}">
//                       <h2>${title}</h2>
//                   </a>
//                   <div class="summary">${snippet}...</div>
//               </article>`;
//     })
//     .join("");
// };

// --------------------Coding again--------------

const getInputElement = document.querySelector("#searchTerm");
const getResultElement = document.querySelector("#searchResult");

getInputElement.focus();

getInputElement.addEventListener("input", (e) => {
  search(e.target.value);
});

let timeOut;
const debounce = (fn, delay = 500) => {
  return (...args) => {
    if (timeOut) {
      clearTimeout(timeOut);
    }

    timeOut = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

const search = debounce(async (searchItem) => {
  if (!searchItem) {
    getResultElement.innerHTML = "";
    return;
  }

  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchItem}`;
    const request = await fetch(url);
    const response = await request.json();

    const renderHTML = generateSearchResultHTML(response.query.search, search);

    getResultElement.innerHTML = renderHTML;
  } catch (error) {
    console.log(error);
  }
});

const splitHTML = (html) => {
  const div = document.createElement("div");
  div.textContent = html;
  return div.textContent;
};

const highlight = (str, keyword, className = "highlight") => {
  const hl = `<span class="${className}">${keyword}</span>`;
  return str.replace(new RegExp(keyword, "gi"), hl);
};

const generateSearchResultHTML = (results, searchItem) => {
  return results
    .map((result) => {
      const title = highlight(splitHTML(result.title), searchItem);
      const snippet = highlight(splitHTML(result.snippet), searchItem);

      return `<article>
                    <a href="https://en.wikipedia.org/?curid=${result.pageid}">
                      <h2>${title}</h2>
                    </a>
                    <div class="summary">${snippet}...</div>
                </article>`;
    })
    .join("");
};

// Qua Project này hiểu được cách làm giảm request đến Wiki bằng hàm debounce()
// Hiểu được cách fetch(url)
// Cần bổ sung thêm kiến thức về bất đồng bộ async await
// Hiểu được cách render element từ JS ra HTML
