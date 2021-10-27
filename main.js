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

let theQuiz = document.querySelector("#quiz")
let results = document.querySelector("#results");
let checkAnswersButton = document.querySelector("#check");

//skriv ut frågor och svarsalternativ
let quiz = () => {
  let output = []; 
  theQuestions.forEach((item, index) => {
    let options = [];
    for(letter in item.answers){
      //skapa en radio button för varje svarsalternativ
      options.push(`<lable><input type="radio" name="answerOption${index}"value="${letter}">
        ${item.answers[letter]}
      </lable>`
      ); 
    }
    //lägg till fråga och svarsalternativ till output []
    output.push(`<h2 class="question"> ${item.question} </h2>
    <div class="answers"> ${options.join("")} </div>`
    ); 
  })
  //gör output array till string och visa i browsern
  theQuiz.innerHTML = output.join("");
}  


let checkAnswers = () =>{

  let count = 0; //räknar poäng
    theQuestions.forEach((item, index) => {
      let selectedButton = `input[name=answerOption${index}]:checked`;
      let usersAnswer = (document.querySelector(selectedButton) || {}).value; //||{} = eller tomt object för att inte få error om användaren inte klickar i ett svar 
      if(usersAnswer === item.correct){
        count++;
      }
  })
  results.innerText = `You got ${count} point out of ${theQuestions.length} `;
};

  quiz();
  checkAnswersButton.addEventListener("click", checkAnswers);

//Knapp för att ladda om sidan
let start = document.querySelector("#start");
start.addEventListener("click", () => 
  location.reload()
);