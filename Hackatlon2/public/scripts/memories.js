function fetchData() {
  const apiUrl = "http://localhost:3000/api/data";

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Assuming the data is an array of names
      updateNameList(data);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

function updateNameList(names) {
  const nameListElement = document.getElementById("nameList");

  // Clear existing list items
  nameListElement.innerHTML = "";

  // Create new list items for each name
  names.forEach((name) => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    nameListElement.appendChild(listItem);
  });
}

// Call the fetch function when needed
fetchData();
