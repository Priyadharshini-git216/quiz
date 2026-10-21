const questions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        answer: "Delhi"
    },
    {
        question: "Which language is used to style a webpage?",
        options: ["HTML", "CSS", "Python", "Java"],
        answer: "CSS"
    },
    {
        question: "Which language adds functionality to webpages?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript"
    },
    {
        question: "How many days are there in a week?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const scoreElement = document.getElementById("score");

restartButton.style.display = "none";

function showQuestion() {
    const question = questions[currentQuestion];

    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";

    question.options.forEach(option => {
        const button = document.createElement("button");

        button.textContent = option;

        button.onclick = () => checkAnswer(option);

        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const buttons = optionsElement.querySelectorAll("button");

    buttons.forEach(button => {
        button.disabled = true;

        if (button.textContent === questions[currentQuestion].answer) {
            button.style.background = "lightgreen";
        }

        if (
            button.textContent === selectedAnswer &&
            selectedAnswer !== questions[currentQuestion].answer
        ) {
            button.style.background = "lightcoral";
        }
    });

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
        scoreElement.textContent = "Score: " + score;
    }
}

nextButton.onclick = () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        questionElement.textContent = "Quiz Completed! 🎉";
        optionsElement.innerHTML = "";

        nextButton.style.display = "none";
        restartButton.style.display = "inline-block";

        scoreElement.textContent =
            "Your Final Score: " + score + "/" + questions.length;
    }
};

restartButton.onclick = () => {
    currentQuestion = 0;
    score = 0;

    scoreElement.textContent = "Score: 0";

    nextButton.style.display = "inline-block";
    restartButton.style.display = "none";

    showQuestion();
};

showQuestion();