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
    let boxQuestion = document.querySelector("#boxQuestion");
     boxQuestion.innerText =  `${theQuestions.length+1}. Which of these animals live on the North Pole?`; 
   })
   //gör output array till string och visa i browsern
   theQuiz.innerHTML = output.join("");
 };  
 
 let boxContainer = document.querySelector("#box")
 let box1 = document.querySelector("#box1");
 let box2 = document.querySelector("#box2");
 let box3 = document.querySelector("#box3");

 let checkAnswers = () =>{
   //välj alla div med class="answers"
   let ansOpt = theQuiz.querySelectorAll(".answers"); 
   let count = 0; //räknar poäng
   if(box1.checked && box3.checked && box2.checked === false){
     boxContainer.style.color = "green";
     count ++;
    } else {
     boxContainer.style.color= "red";
    }
   theQuestions.forEach((item, index) => {
     let selectedButton = `input[name=answerOption${index}]:checked`;
     let usersAnswer = (document.querySelector(selectedButton) || {}).value; //||{} = eller tomt object för att inte få error om användaren inte klickar i ett svar 
     if(usersAnswer === item.correct){
     ansOpt[index].style.color = "green";
       count++;
     } else {
       ansOpt[index].style.color = "red";
     }
   }); 
   let numOfQ = theQuestions.length+1;
    if(count > numOfQ*0.75){
     results.style.color = "green";
    } else if (count > numOfQ *0.5){
     results.style.color = "orange";
    } else {
     results.style.color = "black";
    }
   results.innerText = `You got ${count} point out of ${numOfQ} `;
 };
 quiz();
 checkAnswersButton.addEventListener("click", checkAnswers);
 
 //Knapp för att ladda om sidan
 let start = document.querySelector("#start");
 start.addEventListener("click", () => 
   location.reload()
 );