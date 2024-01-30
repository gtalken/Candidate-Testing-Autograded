const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName= ""
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question= "Who was the first American woman in space? "
let correctAnswer= "Sally Ride"
let candidateAnswer= ""


//TODO: Variables for Part 2

let questions =["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers= ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers=[];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName=input.question("Enter your name: ");
}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for (let i=0; i<questions.length;i++){
    let userResponse= input.question(questions[i]);
    candidateAnswers.push(userResponse);
  }
 return candidateAnswers;
}

function gradeQuiz(candidateAnswers){
  let correctCount= 0;
  console.log("Candidate Name:",candidateName)
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for(let i=0;i<questions.length;i++){

  if (candidateAnswers[i].toLowerCase()===correctAnswers[i].toLowerCase()){
    console.log(`\n${i+1})${questions[i]}`);
    correctCount++;
  }else {
    console.log(`\n${i+1})${questions[i]}`);
  }
  console.log(`Your answer: ${candidateAnswers[i]} \nCorrect answer: ${correctAnswers[i]}`);
}
let score =(correctCount/questions.length)*100;

if (score >=80){
  console.log(`\nOverall Grade: ${score}%(${correctCount} of 5 responses correct)<<<`)
  console.log(">>>Status:PASSED<<<")
  
}else{
  console.log(`\nOverall Grade: ${score}%(${correctCount} of 5 responses correct)<<<`)
  console.log(">>>Status:FAILED<<<")
  
}
  let grade=score;  //TODO 3.2 use this variable to calculate the candidates score.
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello",candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};