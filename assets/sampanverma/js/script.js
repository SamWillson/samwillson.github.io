$(document).ready(function(){
    $(".toggle-menu").on("click", function(e){
        e.preventDefault()
        if(!$(".page").hasClass("scaled")){
            $(".page").addClass("scaled")
        }else{
            $(".page").removeClass("scaled")
        }
    });
    $("[open-page]").on("click", function(e){
        e.preventDefault()
        page_selector = ".page-" + $(this).attr("open-page")
        $(".page").addClass("closed");
        $(".page").removeClass("scaled");
        $(page_selector).removeClass("closed");
    });

    sliderWidth = $(".project-image").length * 470;
    $(".project-slider").css({"width": sliderWidth + "px"})

    ww = $(window).width();
    $(document).on("mousemove", function(e){
        per = ((sliderWidth - (3*470)) * e.pageX)/ww;
        $(".project-slider").css({"margin-left": "-" + per + "px"});
    })
});