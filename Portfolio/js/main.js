$(document).ready(function () {
    $("#dugme").click(function () {
        $("#testiranje").toggleClass("bright tamna");
    });
    $(".darkmode").click(function () {
        $("body").toggleClass("bright dark");
        $(".avatar").attr("src", "../images/vk-avatar-2.png");
        $('.main').css('background-image', 'url(' + "images/background-dark.png" + ')');
        $(".logo").attr("src", "../images/logo-dark.png");
        $(".element h3").toggleClass("bright dark");
    });
    /* Set the width of the side navigation to 250px */
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
});