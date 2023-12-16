$(".menu > ul > li").click(function(e) {
    //remove active from alredy active
    $(this).siblings().removeClass("active");
    //add active to clicked
    $(this).toggleClass("active");
});

$(".menu-btn").click(function() {
    $(".sidebar").toggleClass("active");
});