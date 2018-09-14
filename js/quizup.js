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

// let correctAnswers = 0;

let wrongAnswers = 0;

let unAnswered = 0;

// //Select Start Quiz Button 
let startBtn = document.getElementById('start-button');

//timer element
let timer = document.querySelector('.time');

// timer function
var time = function (x) {
  if (x === 0) {
    // alert('Times Up');
    return;
  }
  timer.innerHTML = x;
  console.log(x);
  return setTimeout(() => { time(--x) }, 1000);
}

let displayOptions = function(ansarr, index) {
  let optionBlock = '';
  return optionBlock += ansarr[index].map((item) => {
    return(
      `<button class="option" style="display:block">${item}</button>`
    )
  }).join('');
}

let displayQnABlock = function(qnsarr, ansarr, index) {
  return `<div class="question">
  ${qnsarr[index]}
  </div>
  <div class="options_block">
    ${displayOptions(ansarr, index)}
  </div>`;
}

let checkOptions = function(elm, correctArr, index) {
  elm.forEach(option => {
    option.addEventListener('click', (e) => {
      if(e.target.innerHTML === correctArr[index].split(' ')[1]) {
        alert("correct");
      } else {
        alert('wrong')
      }
    });
  }); 
}




//repeat function
let repeat = function (i, elmLen) {
  if (i >= elmLen) {
    return; // call end here
  }

  time(30);

  questionBlock.innerHTML = displayQnABlock(questionArray, answerArray, i);

  let options = document.querySelectorAll('.option');  
  checkOptions(options, correctAnswers, i);
  

  // displayOptions()
  return setTimeout(() => {repeat(++i, elmLen)}, 30000);
}



// let displayOptions = function(optionArray) {
//   return `<button class="option">${optionArray}</button>`;
// }


let startGame = function () {
  repeat(0, questionArray.length);
   
  // let main = document.querySelector('main');
  // questionArray.forEach((question, i) => {
  //   main.innerHTML = displayQuestion(question);
  // });

  // answerArray[0].forEach(item => {
  //     main.innerHTML += displayOptions(item); 
  // });


}

let questionBlock = document.querySelector('.que-n-ans_block');


//Initialize function
function init() {
  startBtn.addEventListener('click', startGame);


  
}

init()



  // repeat(0,5)