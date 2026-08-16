// ===============================
// STUDENT NAME
// ===============================

let name = localStorage.getItem("studentName");

if (name) {
    document.getElementById("welcomeMessage").innerHTML =
        "👋 Welcome, " + name + "!";
}


// ===============================
// LOGOUT
// ===============================

function logout() {
    localStorage.removeItem("studentName");

    alert("Logged out successfully!");

    window.location.href = "login.html";
}


// ===============================
// TARGET EXAM
// ===============================

let exam = localStorage.getItem("targetExam");

let target = document.getElementById("targetExam");

if (exam && target) {
    target.innerHTML = exam;
}


// ===============================
// DATE & TIME
// ===============================

function showDateTime() {

    let dateTime = document.getElementById("dateTime");

    if (dateTime) {

        let now = new Date();

        dateTime.innerHTML =
            now.toDateString() +
            "<br>" +
            now.toLocaleTimeString();
    }
}

showDateTime();
setInterval(showDateTime, 1000);


// ===============================
// STUDY STREAK
// ===============================

function updateStudyStreak() {

    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem("lastVisit");

    let streak =
        parseInt(localStorage.getItem("studyStreak")) || 0;

    if (lastVisit !== today) {

        if (lastVisit) {

            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            if (lastVisit === yesterday.toDateString()) {
                streak++;
            } else {
                streak = 1;
            }

        } else {
            streak = 1;
        }

        localStorage.setItem("studyStreak", streak);
        localStorage.setItem("lastVisit", today);

        const lastStudyVisit =
            document.getElementById("lastStudyVisit");

        if (lastStudyVisit) {
            lastStudyVisit.textContent = today;
        }
    }

    const studyStreak =
        document.getElementById("studyStreak");

    if (studyStreak) {
        studyStreak.textContent = streak;
    }
}

updateStudyStreak();


// ===============================
// LAST STUDY VISIT
// ===============================

const savedVisit =
    localStorage.getItem("lastVisit");

if (savedVisit) {

    const lastStudyVisit =
        document.getElementById("lastStudyVisit");

    if (lastStudyVisit) {
        lastStudyVisit.textContent = savedVisit;
    }
}


// ===============================
// SSC CGL COUNTDOWN
// ===============================

function updateExamCountdown() {

    const examDate =
        new Date("2026-09-01T00:00:00");

    const today = new Date();

    const difference =
        examDate - today;

    const days =
        Math.ceil(
            difference / (1000 * 60 * 60 * 24)
        );

    const countdown =
        document.getElementById("examCountdown");

    if (!countdown) {
        return;
    }

    if (days > 0) {

        countdown.textContent =
            days + " days remaining";

    } else if (days === 0) {

        countdown.textContent =
            "🎯 Exam Day is Today!";

    } else {

        countdown.textContent =
            "Exam date has passed.";
    }
}

updateExamCountdown();


// ===============================
// QUICK SEARCH
// ===============================

const dashboardSearch =
    document.getElementById("dashboardSearch");

if (dashboardSearch) {

    dashboardSearch.addEventListener("input", function () {

        const searchText =
            this.value.toLowerCase().trim();

        const cards =
            document.querySelectorAll(".container .card");

        cards.forEach(function (card) {

            // Keep the Quick Search card always visible
            if (card.contains(dashboardSearch)) {
                card.style.display = "";
                return;
            }

            const cardText =
                card.innerText.toLowerCase();

            if (searchText === "") {
                card.style.display = "";
            } else if (cardText.includes(searchText)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}