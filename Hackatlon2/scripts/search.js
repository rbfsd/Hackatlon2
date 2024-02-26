// search.js
document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const searchTerm = document.getElementById("searchInput").value;

    // Envoyer la requête au serveur pour récupérer les noms des soldats
    fetch(`/api/search?term=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        // Traiter les données récupérées (par exemple, mettre à jour l'affichage)
        console.log(data);
      })
      .catch((error) => console.error("Erreur lors de la recherche :", error));
  });
