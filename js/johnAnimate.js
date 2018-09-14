if(!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    hoverAnimate()
}

function hoverAnimate() {
    var banerB = $(".bannerBox");
    for(var i = 0; i < banerB.length; i++) {
        banerB.eq(i).css({
            top: banerB.eq(i).position().top,
            left: banerB.eq(i).position().left
        })
    }
    banerB.css("position", "absolute")
    $.each(banerB, function(centerk, centerv) {
        $(centerv).bind("mouseover", function() {
            if(!banerB.is(":animated")) {
                if(!$(centerv).hasClass(".centerImg")) {
                    var cis = $(".centerImg");
                    var lcis = cis.position().left;
                    var tcis = cis.position().top;
                    var wcis = cis.width();
                    var hcis = cis.height();
                    banerB.eq(centerk).addClass("centerImgTop").animate({
                        left: lcis,
                        top: tcis,
                        width: wcis,
                        height: hcis
                    }, 600);
                    cis.animate({
                        left: $(centerv).position().left,
                        top: $(centerv).position().top,
                        width: $(centerv).width(),
                        height: $(centerv).height()
                    }, 400, "swing", function() {
                        $(this).removeClass("centerImg");
                        banerB.eq(centerk).addClass("centerImg").removeClass("centerImgTop")
                    });
                }
            }

        })
    });
}