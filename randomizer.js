document.addEventListener("DOMContentLoaded", function () {
    // Hämta alla artikel-element
    let items = document.querySelectorAll(".random-item");

    // Kontrollera att det finns några artiklar
    if (items.length === 0) {
        console.warn("Inga artiklar hittades i .random-item");
        return;
    }

    // Slumpa ett index
    let randomIndex = Math.floor(Math.random() * items.length);

    console.log("Visar slumpmässig artikel: ", randomIndex); // Debugging

    // Dölj alla artiklar
    items.forEach(item => {
        item.style.display = "none";
    });

    let numToShow = 4; // Hur många artiklar ska visas?
    let shuffledItems = Array.from(items).sort(() => 0.5 - Math.random());
    shuffledItems.slice(0, numToShow).forEach(item => item.style.display = "block");
});
