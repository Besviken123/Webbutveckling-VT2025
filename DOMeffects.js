document.addEventListener("DOMContentLoaded", function () {
    let searchBox = document.querySelector(".search input");

    searchBox.addEventListener("focus", function () {
        this.style.border = "2px solid gray"; // Highlight border
        this.style.backgroundColor = "#f0f8ff"; // Light background
        this.style.borderRadius = "8px"; // add rounded corners
    });

    searchBox.addEventListener("blur", function () {
        this.style.border = ""; // Reset border
        this.style.backgroundColor = ""; // Reset background
    });
});

// icon buttons 
document.addEventListener("DOMContentLoaded", function () {
    // Select all button containers
    let buttons = document.querySelectorAll(".icon-btn");

    // Loop through each button and add hover effect
    buttons.forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.backgroundColor = "#cedbe7"; // color
            this.style.borderRadius = "8px"; // add rounded corners
        });

        button.addEventListener("mouseout", function () {
            this.style.backgroundColor = ""; // Reset to default
            this.style.borderRadius = "";
        });
    });
});


/* VG - Dragable support guy with a parking zone 
$(document).ready(function () {
    // Makes Support dragable
    $("#support-maskot").draggable({
        containment: "window",
        scroll: false
    });

    // Dropzone: When the support object is placed in zone
    $("#support-dropzone").droppable({
        accept: "#support-maskot",
        drop: function (event, ui) {
            $(this).css("background-color", "green").text("Supporten är parkerad!"); // Support is parked message
        },
        out: function (event, ui) {
            $(this).css("background-color", "#4C587E").text("Support parkeringsplats!"); // Support can be parked message
        }
    });
});
*/