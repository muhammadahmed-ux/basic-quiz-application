var quesArray = [
  {
    num: 1,
    question: "HTML stands for?",
    Option: {
      a: "Hyper Text Markup Language",
      b: "HighText Machine Language",
      c: "Hyperlinks and Text Markup Language",
      d: "Home Tool Markup Language",
    },
    answer: "Hyper Text Markup Language",
  },
  {
    num: 2,
    question: "Which language runs in a web browser?",
    Option: {
      a:"Java", 
      b:"C", 
      c:"Python", 
      d:"JavaScript" 
    },
    answer: "<h1>",
  },
  {
    num: 3,
    question: "CSS stands for?",
    Option: {
      a: "Cascading Style Sheets",
      b: "Creative Style System",
      c: "Colorful Style Sheet",
      d: "Computer Style Sheet",
    },
    answer: "Cascading Style Sheets",
  },
  {
    num: 4,
    question: "Which HTML tag is used to define an internal style sheet?",
    Option: {
      a: "&lt;style&gt;",
      b: "&lt;script&gt;",
      c: "&lt;css&gt;",
      d: "&lt;link&gt;",
    },
    answer: "&lt;style&gt;",
  },
  {
    num: 5,
    question: "Which property is used to change text color in CSS?",
    Option: {
      a: "font-color",
      b: "color",
      c: "text-color",
      d: "background-color",
    },
    answer: "color",
  },
  {
    num: 6,
    question: "Inside which HTML element do we put the JavaScript?",
    Option: {
      a: "&lt;javascript&gt;",
      b: "&lt;js&gt;",
      c: "&lt;script&gt;",
      d: "&lt;code&gt;",
    },
    answer: "&lt;script&gt;",
  },
  {
    num: 7,
    question: "Which CSS property controls the text size?",
    Option: {
      a: "font-style",
      b: "text-size",
      c: "font-size",
      d: "text-style",
    },
    answer: "font-size",
  },
  {
    num: 8,
    question: "Which of the following is a JavaScript framework?",
    Option: { 
      a:"Django",
       b:"React", 
       c:"Laravel", 
       d:"Flask" 
      },
    answer: "React",
  },
];


// dm
var inpName = document.getElementById("inp_name");
var inpEmail = document.getElementById("inp_email");
var inpRoll = document.getElementById("inp_roll");
var inpInst = document.getElementById("inp_inst");

var userForm = document.querySelector(".formwrapper");
var startScreen = document.querySelector(".start");
var quizBody = document.querySelector(".quizbody");
var resultBody = document.querySelector(".result");

var Ques = document.getElementById("ques");
var Opt = document.getElementById("opt").children;

var ttlq = document.querySelector(".ttlq");
var ttl = document.getElementById("ttl");
var ra = document.getElementById("ra");
var wa = document.getElementById("wa");
var perc = document.getElementById("perc");
var define = document.querySelector(".define");

var resName = document.getElementById("res-name");
var resEmail = document.getElementById("res-email");
var resRoll = document.getElementById("res-roll");
var resInst = document.getElementById("res-inst");

var totalQus = quesArray.length;
var corrAns = 0;
var wrngAns = 0;
var counter = 0;

// Start Quiz
function startQuiz() {
  if (!inpName.value || !inpEmail.value || !inpRoll.value || !inpInst.value) {
    alert("Please fill all fields");
    return;
  }
  userForm.classList.remove("active");
  startScreen.classList.add("active");

  document.getElementById("para-name").innerText = inpName.value;
  document.getElementById("para-email").innerText = inpEmail.value;
  document.getElementById("para-roll").innerText = inpRoll.value;
  ttlq.innerHTML = totalQus;
}

document.querySelector(".btn2").addEventListener("click", loadQuestion);

function loadQuestion() {
  quizBody.classList.add("active");
  startScreen.classList.remove("active");

  var q = quesArray[counter];
  Ques.innerHTML = q.question;
  Opt[0].innerHTML = q.Option.a;
  Opt[1].innerHTML = q.Option.b;
  Opt[2].innerHTML = q.Option.c;
  Opt[3].innerHTML = q.Option.d;

  document.querySelector(".numb").innerHTML = counter + 1;

  for (var li of Opt) {
    li.classList.remove("correctAns", "wrongAns", "disableli");
    li.setAttribute("onclick", "selectOpt(this)");
  }

  document.querySelector(".btn3").style.display = "none";
}

function selectOpt(ele) {
  if (ele.innerHTML === quesArray[counter].answer) {
    ele.className = "correctAns";
    corrAns++;
  } else {
    ele.className = "wrongAns";
    wrngAns++;
    for (var li of Opt) {
      if (li.innerHTML === quesArray[counter].answer) {
        li.classList.add("correctAns");
      }
    }
  }

  for (var li of Opt) {
    li.classList.add("disableli");
  }

  document.querySelector(".btn3").style.display = "block";
}

function nextQuestion() {
  counter++;
  if (counter < quesArray.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizBody.classList.remove("active");
  resultBody.classList.add("active");

  resName.innerHTML = inpName.value;
  resEmail.innerHTML = inpEmail.value;
  resRoll.innerHTML = inpRoll.value;
  resInst.innerHTML = inpInst.value;

  ttl.innerHTML = totalQus;
  ra.innerHTML = corrAns;
  wa.innerHTML = wrngAns;

  var percentage = Math.round((corrAns / totalQus) * 100);
  perc.innerHTML = percentage;

  if (percentage < 60) {
    define.innerHTML = "Sorry, you failed! Try Again!";
    define.classList.add("fail-para");
  } else {
    define.innerHTML = "Congratulations, You Passed!";
    define.classList.add("pass-para");
  }
}

