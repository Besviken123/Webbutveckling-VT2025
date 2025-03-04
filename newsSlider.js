let currentIndex = 0; // Keep track of which news is displayed
// Array with news(pictures + text)
const newsData = [
    {
        img: "Bilder/newsGraphic.jpg",
        text1: "FOUNDATIONS",
        text2: "UTE NU!",
        text3: "Återvänd till rötterna av",
        text4: "Magic The Gathering med nya FOUNDATIONS",
        text5: "Tryck för att se nya släppet!",
        link: "underConstruction.html"
    },
    {
        img: "Bilder/newsGraphic2.jpg",
        text1: "NYA FIGURER",
        text2: "EXKLUSIVA SLÄPP!",
        text3: "Samlarfigurer från populära serier",
        text4: "Finns nu i begränsad upplaga!",
        text5: "Se hela sortimentet här!",
        link: "underConstruction.html"
    },
    {
        img: "Bilder/newsGraphic3.jpg",
        text1: "TURBO PAKET!",
        text2: "SNABB FRAKT PÅ ALLT!",
        text3: "Beställ innan 14:00 och få din order",
        text4: "redan nästa dag!",
        text5: "Läs mer om våra leveransvillkor!",
        link: "underConstruction.html"
    }
];

$(document).ready(function () {
    // Start a timer that changes news every x seconds
    setInterval(changeNews, 8000);
    $('.changeNewsButton').click(changeNews);
});

function changeNews() {
    // Get current image
    let $currentImage = $(".newsImage");

    // Create a new image element for the next news item
    let $newImage = $("<img>")
        .addClass("newsImage")
        .attr("src", newsData[(currentIndex + 1) % newsData.length].img)
        .css({
            position: "absolute",
            top: "0",
            left: "100%", // Start off-screen to the right
            width: "100%",
            height: "100%",
            zIndex: 1, // Keep it behind text & button
            objectFit: "cover"
        });

    // Append new image inside the container
    $(".newsGraphic").append($newImage);

    // Animate old image moving left and fading out
    $currentImage.animate({ left: "-100%" }, 900, function () {
        $(this).remove(); // Remove old image after animation
    });

    // Animate new image moving in from the right
    $newImage.animate({ left: "0%" }, 900);

    // Update currentIndex
    currentIndex = (currentIndex + 1) % newsData.length;

    // Update text with fade effect
    $(".newsText1, .newsText2, .newsText3, .newsText4, .newsText5").fadeOut(700, function () {
        $(".newsText1").text(newsData[currentIndex].text1);
        $(".newsText2").text(newsData[currentIndex].text2);
        $(".newsText3").text(newsData[currentIndex].text3);
        $(".newsText4").text(newsData[currentIndex].text4);
        $(".newsText5").text(newsData[currentIndex].text5);
        $(this).fadeIn(300);
    });

    // Update the link
    $(".newstext-on-graphic a").attr("href", newsData[currentIndex].link);
}
