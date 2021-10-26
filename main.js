// Klicka på knapp för att ändra mode
changeMode = () => {
  document.body.classList.toggle("darkMode");
};

//Knapp för att ladda om sidan
let start = document.querySelector("#start");
start.addEventListener("click", () => 
  location.reload()
);