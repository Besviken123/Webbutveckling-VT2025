$(document).ready(function () {
    // Hide all submenus initially
    $(".submenu").hide();

    // Click event on main category
    $(".forum-navbar ul li a").click(function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Slide up other submenus except the one clicked
        $(".submenu").not($(this).next(".submenu")).slideUp();

        // Toggle the submenu for the clicked category
        $(this).next(".submenu").slideToggle();
    });
});
