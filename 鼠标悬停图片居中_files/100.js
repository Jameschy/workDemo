var s = $(".colBox");
for(var i = 0; i < s.length; i++) {
	s.eq(i).css({
		top: s.eq(i).position().top,
		left: s.eq(i).position().left
	})
}
s.css("position", "absolute")
$.each(s, function(k, v) {
	$(v).bind("mouseover", function() {
		if(!s.is(":animated")) {
			if(!$(v).hasClass("centerImg")) {
				var sss = $(".centerImg");
				var ls = sss.position().left;
				var ts = sss.position().top;
				var ws = sss.width();
				var hs = sss.height();
				s.eq(k).addClass("centerImgTop").animate({
					left: ls,
					top: ts,
					width: ws,
					height: hs
				}, 360);
				sss.animate({
					left: $(v).position().left,
					top: $(v).position().top,
					width: $(v).width(),
					height: $(v).height()
				}, 400, "swing", function() {
					$(this).removeClass("centerImg");
					s.eq(k).addClass("centerImg").removeClass("centerImgTop")
				});
			}
		}
	})
});