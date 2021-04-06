$(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
        $("header").addClass("scrolled");
        $(".menu").addClass("scrolled");
        $(".logo").attr('src', './logo2.svg');
        $(".logo").height(48);
    } else {
        $("header").removeClass("scrolled");
        $(".menu").removeClass("Scrolled");
        $(".logo").attr('src','./LogoFullture-White.svg');
        $(".logo").height(80);
    }
})