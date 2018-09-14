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

  // //Select Start Quiz Button 
  // let startBtn = document.getElementById('start-button');

  // //timer element
  // let timer = document.querySelector('.time');

  // timer function
  var time = function (x) {
    if (x === 0) {
      // alert('Times Up');
      return;
    }
    timer.innerHTML = x;
    return setTimeout(() => {time(--x)}, 1000);
  }

  //repeat function
  let repeat = function(i, n) {
    if( i >= n) {
      return;
    }

    console.log(i);
    return repeat(++i,n);
  }

  //get Questions
  // let displayQuestion = function(item) {
  //   return `<p class="question">${item}</p>`
  // }

  // let displayOptions = function(optionArray) {
  //   return `<button class="option">${optionArray}</button>`;
  // }


  let startGame = function () {
    // time(30);
    // let main = document.querySelector('main');
    // questionArray.forEach((question, i) => {
    //   main.innerHTML = displayQuestion(question);
    // });

    // answerArray[0].forEach(item => {
    //     main.innerHTML += displayOptions(item); 
    // });
  }



  //Initialize function
  function init() {
    startBtn.addEventListener('click', startGame);

    // timer();
  }

  init()

  

  // repeat(0,5)