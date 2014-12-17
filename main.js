//menuha

        $("header nav").click(function() {
            if($(window).width() <= 1024) {
               $("header nav ul").removeClass("tableimp");
                if ($('header nav ul').hasClass('active')) {
                    $("header nav ul").fadeOut("700");
                    $("header nav ul").removeClass("active");
                    $(this).removeClass("nav_back");
                }
                else{
                    $("header nav ul").fadeIn("700");
                    $("header nav ul").addClass("active");
                    $(this).addClass("nav_back");
                }
            }
            else{
                $("header nav ul").removeClass("nav_back");
                $("header nav ul").addClass("tableimp");
            }
        });

        $( window ).resize(function() {
		if($(window).width() > 1023) {
		    $("header nav").removeClass("nav_back");
		    $("header nav ul").addClass("tableimp");
		}
		else{
		    $("header nav ul").removeClass("tableimp");
		}
	}); 