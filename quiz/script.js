const quizData = [
  {
    question: "who is zenith?",
    a: "noble guy",
    b: "developer@miles",
    c: "megalodon",
    d: "humble",
    correct: "b",
  },
  {
    question: "who is the president of Cameroon",
    a: "Paul biya",
    b: "Elen musk",
    c: "gates",
    d: "milesMoral",
    correct: "a",
  },
  {
    question: "who is the richest man in the world?",
    a: "colony",
    b: "Bill gates",
    c: "Mark zukerburg",
    d: "Elon Musk",
    correct: "d",
  },
  {
    question: "how tall is zenith",
    a: "1.5m",
    b: "5.4m",
    c: "55.4m",
    d: "none of the above",
    correct: "d",
  },
  {
    question: "what is the name of zenith's mother?",
    a: "Kalla Kalla",
    b: "coco Kallala",
    c: "Kalla marie",
    d: "none of the above",
    correct: "c",
  },
];

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const answerElem = document.querySelectorAll(".answerElem");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const popup = document.getElementById("popup");
const questionEl = document.getElementById("questionEl");
const closePop = document.getElementById("close");
let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
  deSelectAnswer();
  const currentQuizeData = quizData[currentQuiz];
  questionEl.innerText = currentQuizeData.question;
  a_text.innerText = currentQuizeData.a;
  b_text.innerText = currentQuizeData.b;
  c_text.innerText = currentQuizeData.c;
  d_text.innerText = currentQuizeData.d;
}

function getSelected() {
  let answer = undefined;
  answerElem.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deSelectAnswer() {
  answerElem.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function removePop() {
  popup.classList.add("active");
  closePop.addEventListener("click", () => {
    popup.classList.remove("active");
    console.log("closed");
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer == undefined) {
    removePop();
  } else {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      const quiz = document.getElementById("quiz");
      quiz.innerHTML = `
        <h3>YOU SCORED ${score}/5</h3>
        <button onclick="location.reload()">Reload</button>
        `;
    }
  }
});
