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

// //Select Start Quiz Button 
let startBtn = document.getElementById('start-button');

//timer element
let timer = document.querySelector('.timer_block');

let questionBlock = document.querySelector('.que-n-ans_block');

// timer function
var time = function (x) {
  if (x === 0) {
    // alert('Times Up');
    return;
  }
  timer.innerHTML = `<p class="center">Time Left : <span class="time">${x}</span></p>`
  console.log(x);
  return setTimeout(() => { time(--x) }, 1000);
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
      if(e.target.innerHTML === correctArr[index].split(' ')[1]) {
        correctAnswersNo++;
        hideBlocks();
        correctAnswerBlock.style.display = 'block';
        
        setTimeout(() => {
          showBlock();
          correctAnswerBlock.style.display = 'none'; 
        }, 1500);
        
        repeat(1+index, questionArray.length);
      } else {
        wrongAnswersNo++;
        hideBlocks();
        wrongAnswerBlock.style.display = 'block';

        setTimeout(() => {
          showBlock();
          wrongAnswerBlock.style.display = 'none'; 
        }, 1500);
        
        repeat(1+index, questionArray.length);
      }
    });
  }); 
}

//repeat function
let repeat = function (i, elmLen) {
  if (i >= elmLen) {
    // alert('Exit')
    return; // call end here
  }

  time(30);

  questionBlock.innerHTML = displayQnABlock(questionArray, answerArray, i);

  let options = document.querySelectorAll('.option');  
  checkOptions(options, correctAnswers, i);
  
  // displayOptions()
  return setTimeout(() => {repeat(++i, elmLen)}, 30000);
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
