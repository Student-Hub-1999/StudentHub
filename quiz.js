// ===============================
// SSC MOCK TEST - QUIZ JAVASCRIPT
// ===============================

// Correct answers
const answers = {
    q1: "B",
    q2: "B",
    q3: "C"
};

// Timer
let timeLeft = 60;
let timerStarted = true;

const timerElement = document.getElementById("timer");

// Start countdown
const countdown = setInterval(function () {

    timeLeft--;

    timerElement.innerHTML = timeLeft;

    // Time finished
    if (timeLeft <= 0) {

        clearInterval(countdown);

        alert("⏰ Time is up!");

        checkQuiz();
    }

}, 1000);


// Submit test
function checkQuiz() {

    // Stop timer
    clearInterval(countdown);

    let score = 0;
    let total = 3;

    // Check answers
    for (let question in answers) {

        let selected = document.querySelector(
            'input[name="' + question + '"]:checked'
        );

        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    // Calculate percentage
    let percentage = Math.round((score / total) * 100);

    // Show result
    document.getElementById("result").innerHTML =
        "🎉 Your Score: " + score + "/" + total +
        " (" + percentage + "%)";

    // Show Try Again button
    document.getElementById("retryBtn").style.display = "inline-block";

    // Save result for Dashboard
    localStorage.setItem("quizScore", score);
    localStorage.setItem("quizTotal", total);
    localStorage.setItem("quizPercentage", percentage);

    if (percentage >= 50) {
        localStorage.setItem("quizStatus", "Passed");
    } else {
        localStorage.setItem("quizStatus", "Needs Improvement");
    }

    // Disable Submit button
    let submitButton = document.querySelector(
        'button[onclick="checkQuiz()"]'
    );

    if (submitButton) {
        submitButton.disabled = true;
    }
}
