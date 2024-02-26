let candleCount = 0;

function switchOnCandle() {
  candleCount++;
  const candleImage = document.createElement("img");
  candleImage.src = "/Hackatlon2/public/images/pexels-george-becker-333515.jpg"; // Ajoute le chemin de ton image
  candleImage.alt = "Candle Image";
  candleImage.style.width = "200px"; // Ajuste la taille de l'image selon tes besoins

  const candleText = document.createElement("p");
  candleText.textContent = `Merci d'avoir participé à honorer leur mémoire. ${candleCount} bougie(s) allumée(s).`;

  const closeButton = document.createElement("button");
  closeButton.textContent = "Fermer";
  closeButton.style.backgroundColor = "#1b4a59"; // Couleur du bouton
  closeButton.style.color = "#fff"; // Couleur du texte du bouton
  closeButton.style.padding = "10px";
  closeButton.style.border = "none";
  closeButton.style.borderRadius = "5px";
  closeButton.style.cursor = "pointer";
  closeButton.addEventListener("click", () => {
    container.remove();
  });

  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "50%";
  container.style.left = "50%";
  container.style.transform = "translate(-50%, -50%)";
  container.style.textAlign = "center";
  container.style.backgroundColor = "#fff"; // Couleur de fond du conteneur
  container.style.padding = "20px";
  container.style.borderRadius = "10px";

  container.appendChild(candleImage);
  container.appendChild(candleText);
  container.appendChild(closeButton);

  document.body.appendChild(container);
}

// countdown

// // Set the target date
// var targetDate = new Date("October 7, 2023 00:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function () {
//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the target date
//   var distance = targetDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="countdown"
//   document.getElementById("countdown").innerHTML =
//     days +
//     " Days, " +
//     hours +
//     " Hours, " +
//     minutes +
//     " Minutes, " +
//     seconds +
//     " Seconds ";
// }, 1000);

document.addEventListener("DOMContentLoaded", function () {
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  // Votre logique de compte à rebours ici

  // Exemple :
  const endDate = new Date("2024-12-31T23:59:59").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.textContent = days + "d";
    hoursElement.textContent = hours + "h";
    minutesElement.textContent = minutes + "m";
    secondsElement.textContent = seconds + "s";
  }

  // Mettez à jour le compte à rebours toutes les secondes (1000 ms)
  setInterval(updateCountdown, 1000);

  // Appel initial pour éviter un délai d'une seconde au chargement de la page
  updateCountdown();
});
