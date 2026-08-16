// ===============================
// 🔍 HOME PAGE SEARCH
// ===============================

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = this.value.toLowerCase().trim();

        // Popular Exam cards
        const examCards = document.querySelectorAll(".exam-grid .card");

        examCards.forEach(function (card) {

            const text = card.textContent.toLowerCase();

            if (searchText === "" || text.includes(searchText)) {
                card.parentElement.style.display = "";
            } else {
                card.parentElement.style.display = "none";
            }

        });


        // Study Resource cards
        const resourceCards = document.querySelectorAll(
            ".features .feature-card"
        );

        resourceCards.forEach(function (card) {

            const text = card.textContent.toLowerCase();

            if (searchText === "" || text.includes(searchText)) {
                card.parentElement.style.display = "";
            } else {
                card.parentElement.style.display = "none";
            }

        });

    });

}


// ===============================
// 💡 DAILY MOTIVATION
// ===============================

const quotes = [
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "You don't have to be great to start, but you have to start to be great.",
        author: "Zig Ziglar"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    }
];

function getNewQuote() {

    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");

    if (!quoteText || !quoteAuthor) {
        return;
    }

    const randomIndex =
        Math.floor(Math.random() * quotes.length);

    quoteText.innerText =
        `"${quotes[randomIndex].text}"`;

    quoteAuthor.innerText =
        `- ${quotes[randomIndex].author}`;
}

window.addEventListener("load", getNewQuote);


// ===============================
// 🚪 LOGOUT
// ===============================

function logout() {

    localStorage.setItem("isLoggedIn", "false");

    alert("You have been logged out!");

    window.location.href = "login.html";
}


// ===============================
// 🔐 DASHBOARD LOGIN PROTECTION
// ===============================

if (window.location.pathname.includes("dashboard.html")) {

    const student =
        localStorage.getItem("studentName");

    if (!student) {

        alert("Please login first");

        window.location.href = "login.html";
    }
}


// ===============================
// 🌙 SAVED THEME
// ===============================

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}