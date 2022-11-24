const quizData = [
  {
    question: "제일 맛있는 음식은?",
    a: "치킨",
    b: "피자",
    c: "떡볶이",
    d: "곱창",
    correct: "a",
  },
  {
    question: "1+1 = ?",
    a: "1",
    b: "11",
    c: "창문",
    d: "귀요미",
    correct: "c",
  },
  {
    question: "내 생일은?",
    a: "4월",
    b: "5월",
    c: "6월",
    d: "7월",
    correct: "a",
  },
  {
    question: "맥북 좋아요",
    a: "최고",
    b: "아님",
    c: "맥북 왜씀?",
    d: "아 졸려",
    correct: "a",
  },
  {
    question: "GDSC",
    a: "짱",
    b: "짱",
    c: "짱",
    d: "짱",
    correct: "d",
  },
];

let currentQuestion = 0;
let score = 0;
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
console.log(answerEls);
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");
const answerArr = [];
loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuestion];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

const getSelected = () => {
  let answer = undefined;

  answerEls.forEach((answerel) => {
    if (answerel.checked) {
      answer = answerel.id;
    }
  });
  return answer;
};

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      console.log("b");
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>정답을 이만큼 맞추셨네요 at ${score}/${quizData.length} question</h2>
      <button onclick="location.reload()" >Reload</button>
      `;
      delete answerArr;
    }
  } else {
    alert("답을 선택해 주세요!");
  }
});
