import fetchApi from "./fetchApi.js";

export default async function getEventData() {
  const searchInput = document.querySelector(".header__search-input");

  searchInput.addEventListener("input", async () => {
    const suggestions = await fetchApi(searchInput.value);
    console.log(suggestions);

    const suggestionList = document.querySelector(
      ".header__search-suggestions-list"
    );
    suggestionList.innerHTML = "";

    if (suggestions.venues) {
      const searchSuggestions = document.querySelector(
        ".header__search-suggestions"
      );
      searchSuggestions.style.display = "block";
      suggestions.venues.forEach((suggestion) => {
        const liElement = document.createElement("li");
        liElement.textContent = suggestion.name;

        suggestionList.appendChild(liElement);
      });
    } else if (suggestions.events) {
      suggestions.events.forEach((suggestion) => {
        const liElement = document.createElement("li");
        liElement.textContent = suggestion.name;

        suggestionList.appendChild(liElement);
      });
    }
  });
}
