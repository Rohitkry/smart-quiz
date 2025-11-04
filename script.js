const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Rome", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const quizContainer = document.getElementById("quiz");
const scoreElement = document.getElementById("score");
const feedbackElement = document.getElementById("feedback");
const restartButton = document.getElementById("restart-btn");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => selectAnswer(option));
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreElement.textContent = `${score}/${questions.length}`;
    if (score === questions.length) {
        feedbackElement.textContent = "🌟 Excellent! You nailed it!";
    } else if (score >= questions.length * 0.6) {
        feedbackElement.textContent = "👍 Good job! Keep practicing.";
    } else {
        feedbackElement.textContent = "😅 Better luck next time.";
    }
}

nextButton.addEventListener("click", () => {
    showQuestion();
});

restartButton.addEventListener("click", startQuiz);

// Initialize quiz
startQuiz();
