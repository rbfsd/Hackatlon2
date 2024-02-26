// Écouteur d'événement pour le formulaire de recherche
document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Récupère la valeur de recherche
    var searchTerm = document.getElementById("search").value;

    // Effectue une requête GET à l'API de recherche
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.example.com/search?q=" + searchTerm);
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Affiche les résultats de recherche dans la fenêtre pop-up
        var searchResults = JSON.parse(xhr.responseText);
        var searchResultsHtml = "";
        for (var i = 0; i < searchResults.length; i++) {
          searchResultsHtml += "<p>" + searchResults[i].title + "</p>";
        }
        document.getElementById("search-results").innerHTML = searchResultsHtml;

        // Affiche la fenêtre pop-up
        document.getElementById("search-results").style.display = "block";
      }
    };
    xhr.send();
  });

// Ferme la fenêtre pop-up lorsque l'utilisateur clique en dehors de celle-ci
window.addEventListener("click", function (event) {
  if (event.target === document.getElementById("search-results")) {
    document.getElementById("search-results").style.display = "none";
  }
});

// Écouteur d'événement pour le formulaire d'ajout d'histoire
document
  .getElementById("add-story-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Récupère les valeurs du formulaire
    var storyText = document.getElementById("story").value;
    var disparuId = document.getElementById("disparu-id").value;

    // Crée un objet JavaScript pour les données du formulaire
    var data = {
      story: storyText,
      disparuId: disparuId,
    };

    // Convertit l'objet JavaScript en chaîne de caractères JSON
    var jsonData = JSON.stringify(data);

    // Effectue une requête POST à l'API d'ajout d'histoire
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.example.com/stories");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      if (xhr.status === 201) {
        // Affiche un message de confirmation
        alert("Story added successfully!");

        // Réinitialise le formulaire
        document.getElementById("add-story-form").reset();
      } else {
        // Affiche une erreur
        alert("Error adding story.");
      }
    };
    xhr.send(jsonData);
  });
