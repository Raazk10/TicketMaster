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

    const searchSuggestions = document.querySelector(
      ".header__search-suggestions"
    );
    searchSuggestions.style.display = "block";

    if (suggestions._embedded) {
      if (suggestions._embedded.venues) {
        suggestions._embedded.venues.forEach((suggestion) => {
          const liElement = document.createElement("li");
          liElement.textContent = `Venue: ${suggestion.name}`;

          suggestionList.appendChild(liElement);
        });
      }
      if (suggestions._embedded.attractions) {
        suggestions._embedded.attractions.forEach((suggestion) => {
          const liElement = document.createElement("li");
          liElement.textContent = `Attraction: ${suggestion.name}`;

          suggestionList.appendChild(liElement);
        });
      }
      if (suggestions._embedded.events) {
        suggestions._embedded.events.forEach((suggestion) => {
          const liElement = document.createElement("li");
          liElement.textContent = `Event: ${suggestion.name}`;

          suggestionList.appendChild(liElement);
        });
      }
    }
  });
}
