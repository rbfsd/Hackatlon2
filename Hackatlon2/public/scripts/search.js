function performSearch(event) {
  event.preventDefault(); // Empêche la soumission par défaut du formulaire

  const searchInput = document.getElementById("search").value;

  fetch(`/performSearch?name=${searchInput}`)
    .then((response) => response.json())
    .then((data) => displayResults(data))
    .catch((error) => console.log("Fetch error:", error));
}

function displayResults(results) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  results.forEach((result) => {
    // Change resulst en result ici
    const resultCard = document.createElement("div");
    resultCard.classList.add("result-card");

    const nameElement = document.createElement("h2");
    nameElement.textContent = result.name;

    const otherInfoElement = document.createElement("p");
    otherInfoElement.textContent = result.otherInfo; // Assurez-vous que le champ otherInfo existe dans vos données

    resultCard.appendChild(nameElement);
    resultCard.appendChild(otherInfoElement);

    resultsContainer.appendChild(resultCard);
  });
}
