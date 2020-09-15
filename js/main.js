$(document).ready(function(){
    let nav = $("#navbarContent");
    $(".navbar a").click(function() {
          
        $("body,html").animate({
         scrollTop:$("#" + $(this).data('value')).offset().top - $("#header").height()
        }, 700);
        nav.removeClass("show");

    });
     
});