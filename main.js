let theQuestions = [
  {
     question: "1. What is the color of the sun?",
     answers: {
       a: "Yellow",
       b: "Green",
       c: "Blue"
     },
     correct: "a"
  },
  {
   question: "2. What is the color of the sun?",
   answers: {
     a: "Yellow",
     b: "Green",
     c: "Blue"
   },
   correct: "a"
  },
  {
   question: "3. What is the color of the sun?",
   answers: {
     a: "Yellow",
     b: "Green",
     c: "Blue"
   },
   correct: "a"
  },
  {
   question: "4. What is the color of the sun?",
   answers: {
     a: "Yellow",
     b: "Green",
     c: "Blue"
   },
   correct: "a"
  },
  {
   question: "5. What is the color of the sun?",
   answers: {
     a: "Yellow",
     b: "Green",
     c: "Blue"
   },
   correct: "a"
  },
  {
   question: "6. What is the color of the sun?",
   answers: {
     a: "Yellow",
     b: "Green",
     c: "Blue"
   },
   correct: "a"
  },
  {
   question: "7. What is the color of the sun?",
   answers: {
     a: "Yellow",
     b: "Green",
     c: "Blue"
   },
   correct: "a"
  },
  {
   question: "8. What is the color of the sun?",
   answers: {
     a: "Yellow",
     b: "Green",
     c: "Blue"
   },
   correct: "a"
  },
  {
   question: "9. What is the color of the sun?",
   answers: {
     a: "Yellow",
     b: "Green",
     c: "Blue"
   },
   correct: "a"
  }
 ];

// Klicka på knapp för att ändra mode
changeMode = () => {
  document.body.classList.toggle("darkMode");
};

//Knapp för att ladda om sidan
let start = document.querySelector("#start");
start.addEventListener("click", () => 
  location.reload()
);