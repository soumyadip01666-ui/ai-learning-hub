// Button click animation
document.querySelector(".main-btn").addEventListener("click", () => {
    alert("Redirecting to Tools Page...");
});

// Card hover glow effect (extra JS animation)
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", e => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});
// SEARCH FILTER
document.getElementById("search").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();

        card.style.display = text.includes(value) ? "block" : "none";
    });
});
// EXPLORE INPUT BUTTON
document.querySelector(".explore-input button").addEventListener("click", () => {
    let text = document.querySelector(".explore-input input").value;

    if (text.trim() === "") {
        alert("Please type something!");
    } else {
        alert("You typed: " + text);
    }
});
// CONTACT FORM ALERT
document.querySelector(".send-btn")?.addEventListener("click", () => {
    alert("Message sent successfully!");
});
<button onclick="goToExplore()" class="main-btn">Explore Tools</button>
