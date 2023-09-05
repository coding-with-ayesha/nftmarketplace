$(document).ready(function() {
    $("#menu").click(function() {
        $("#navbar").slideToggle("slow");
    });
});

var swiper5 = new Swiper(".aboutslider", {
    grabCursor: true,
    effect: "creative",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    creativeEffect: {
        prev: {
            shadow: false,
            translate: ["-125%", 0, -600],
            rotate: [0, 0, -90],
        },
        next: {
            shadow: false,
            translate: ["125%", 0, -800],
            rotate: [0, 0, 90],
        },
    },
});