document.addEventListener("DOMContentLoaded", function () {
    // Get all article elements
    let items = document.querySelectorAll(".random-item");

    // Check that there are any items
    if (items.length === 0) {
        console.warn("Inga artiklar hittades i .random-item");
        return;
    }

    // Randomize an index
    let randomIndex = Math.floor(Math.random() * items.length);

    console.log("Visar slumpmässig artikel: ", randomIndex); // Debugging

    // Hide all articles
    items.forEach(item => {
        item.style.display = "none";
    });

    let numToShow = 4; // number of items to show (maximum 8 items)
    let shuffledItems = Array.from(items).sort(() => 0.5 - Math.random());
    shuffledItems.slice(0, numToShow).forEach(item => item.style.display = "block");
});
