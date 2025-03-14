const questions = [
    {
        question: "Thủ đô của Việt Nam là gì?",
        answers: ["Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng", "Huế"],
        correct: 0
    },
    {
        question: "2 + 2 bằng mấy?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "Con vật nào là chúa sơn lâm?",
        answers: ["Hổ", "Voi", "Báo", "Sư tử"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

function showQuestion() {
    const q = questions[currentQuestionIndex];
    questionElement.innerText = q.question;
    answersElement.innerHTML = "";
    
    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("answer");
        button.onclick = () => selectAnswer(index);
        answersElement.appendChild(button);
    });
    nextButton.disabled = true;
}

function selectAnswer(index) {
    const correctIndex = questions[currentQuestionIndex].correct;
    document.querySelectorAll(".answer")[correctIndex].style.background = "lightgreen";
    if (index !== correctIndex) {
        document.querySelectorAll(".answer")[index].style.background = "tomato";
    }
    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerText = "Bạn đã hoàn thành đố vui!";
        answersElement.innerHTML = "";
        nextButton.style.display = "none";
    }
});

showQuestion();
