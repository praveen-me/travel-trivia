var questionArray = [
  "What is the capital of Australia?",
  "What is the capital of Liberia?",
  "What is the capital of Taiwan?",
  "What is the capital of Japan?",
  "What is the capital of China?",
  "What is the capital of Turkey?",
  "What is the capital of Colombia?",
  "What is the capital of India?"
];

var answerArray = [
  ["Canberra", "Melbourne", "Sydney", "Darwin"],
  ["Arthington", "Monrovia", "Tuzon", "Marshall"],
  ["Tainan City", "Taichung", "Taipei", "Hsinchu"],
  ["Kyoto", "Hiroshima", "Tokyo", "Osaka"],
  ["Hong Kong", "Macau", "Shanghai", "Beijing"],
  ["Ankara", "Istanbul", "Antalya", "Bursa"],
  ["Medellin", "Bogota", "Cartagena", "Cali"],
  ["Mumbai", "Hyderabad", "Bangalore", "New Delhi"]
];

var correctAnswers = [
  "A. Canberra",
  "B. Monrovia",
  "C. Taipei",
  "C. Tokyo",
  "D. Beijing",
  "A. Ankara",
  "B. Bogota",
  "D. New Delhi"
];

let correctAnswersNo = 0;

let wrongAnswersNo = 0;

let unAnsweredNo = 0;

let timecount = 30;

let interval = '';
// //Select Start Quiz Button 
let startBtn = document.getElementById('start-button');
//timer element
let timer = document.querySelector('.timer_block');

let questionBlock = document.querySelector('.que-n-ans_block');

// timer function
let time = function (questionIndex) {
  // clearTimeout(time);
  if (timecount === 0) {
    unAnsweredNo++;
    repeat(questionIndex + 1, questionArray.length);
    return;
  }
  timer.innerHTML = `<p class="center">Time Left : <span class="time">${timecount}</span></p>`;

  timecount--;

  interval = setTimeout(() => {
    return time(questionIndex);
  }, 1000);
}

let displayOptions = function(ansarr, index) {
  let optionBlock = '';
  return optionBlock += ansarr[index].map((item) => {
    return(
      `<button class="option">${item}</button>`
    )
  }).join('');
}

let displayQnABlock = function(qnsarr, ansarr, index) {
  return `<div class="question">
    <p class="question">Q${index+1}- ${qnsarr[index]}</p>
  </div>
  <div class="options_block">
    ${displayOptions(ansarr, index)}
  </div>`;
}

let correctAnswerBlock = document.querySelector('.correct');
let wrongAnswerBlock = document.querySelector('.wrong');

let hideBlocks = function() {
  timer.style.display = 'none';
  questionBlock.style.display = 'none';
}

let showBlock = function() {
  timer.style.display = 'block';
  questionBlock.style.display = 'block';
}

let checkOptions = function(elm, correctArr, index) {
  elm.forEach(option => {
    option.addEventListener('click', (e) => {
      if (e.target.innerHTML === correctArr[index].split(' ')[1]) {
        correctAnswersNo++;
        // clearTimeout(time);

        hideBlocks();
        correctAnswerBlock.style.display = 'block';
        
        setTimeout(() => {
          showBlock();
          correctAnswerBlock.style.display = 'none'; 
          repeat(1+index, questionArray.length);
        }, 1500);
      } else {
        wrongAnswersNo++;
        // clearTimeout(time);
        hideBlocks();
        wrongAnswerBlock.style.display = 'block';

        setTimeout(() => {
          showBlock();
          wrongAnswerBlock.style.display = 'none';
          repeat(1+index, questionArray.length); 
        }, 1500);
      }
    });
  });
}

let displayStats = function() {
  let main = document.querySelector('main');
  main.innerHTML =  `
    <h2 class="stat_header">Your Statics</h2>
    <div class="display_stat_block">
      <div class="answer_count_block"><span> Correct Answers = </span><span id="correct-answer">${correctAnswersNo}</span></div>
      <div class="answer_count_block"><span> Wrong Answers = </span><span id="wrong-answer">${wrongAnswersNo}</span></div>
      <div class="answer_count_block"><span> UnAnswered = </span><span id="answer-not">${unAnsweredNo}</span></div>  
    </div>
  `
}

//repeat function
let repeat = function (i, elmLen) {
  if (i >= elmLen) {
    displayStats();  
    return; // call end here
  }
  
  timecount = 30;
  clearTimeout(interval);

  time(i);

  questionBlock.innerHTML = displayQnABlock(questionArray, answerArray, i);  

  let options = document.querySelectorAll('.option');  
  checkOptions(options, correctAnswers, i);
}

let startGame = function () {
  repeat(0, questionArray.length);
  startBtn.style.display = 'none';
}

//Initialize function
function init() {
  startBtn.addEventListener('click', startGame); 
}

init()
