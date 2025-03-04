document.addEventListener("DOMContentLoaded", function () {
    let searchBox = document.querySelector(".search input");

    searchBox.addEventListener("focus", function () {
        this.style.border = "2px solid gray"; // Highlight border
        this.style.backgroundColor = "#f0f8ff"; // Light background
        this.style.borderRadius = "8px"; // Optional: add rounded corners
    });

    searchBox.addEventListener("blur", function () {
        this.style.border = ""; // Reset border
        this.style.backgroundColor = ""; // Reset background
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all button containers
    let buttons = document.querySelectorAll(".icon-btn");

    // Loop through each button and add hover effect
    buttons.forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.backgroundColor = "#cedbe7"; // color
            this.style.borderRadius = "8px"; // Optional: add rounded corners
        });

        button.addEventListener("mouseout", function () {
            this.style.backgroundColor = ""; // Reset to default
            this.style.borderRadius = "";
        });
    });
});
