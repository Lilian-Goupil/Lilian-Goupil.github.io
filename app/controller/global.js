$(document).ready(function(){
    // Sidenav menu initialization.
    var sidenavSelect = document.querySelectorAll('.sidenav');
    var sidenavInstance = M.Sidenav.init(sidenavSelect);

    // Loading the home page by default.
    $(".mainContainer").load("app/view/pages/home.html")

    // Changing the color theme by applying the proper CSS class when the user changes the theme.
    $(".changeTheme").click(function(event) {
        if(event.target.tagName.toUpperCase() != "LABEL") {
            if($(".nav-wrapper").hasClass("darkTheme")) {
                $(".darkTheme").addClass("lightTheme");
                $(".lightTheme").removeClass("darkTheme");

                $(".darkThemeText").addClass("lightThemeText");
                $(".lightThemeText").removeClass("darkThemeText");
            } else {
                $(".lightTheme").addClass("darkTheme");
                $(".darkTheme").removeClass("lightTheme");

                $(".lightThemeText").addClass("darkThemeText");
                $(".darkThemeText").removeClass("lightThemeText");
            }
        }
    });

    $(".navLink").click(function(event) {
        // Links have and ID ending by a number, removing said number for redirection.
        var targetPage = (event.target.id).substring(0, (event.target.id).length - 1);

        // Changing active link in the sidenav menu.
        $(".active").removeClass("active");
        $(this).parent().addClass("active");

        // Fading out the actual content then fading in the requested page after loading it.
        $(".mainContainer").fadeOut(500);
        setTimeout(function() {
            $(".mainContainer").empty();
            $(".mainContainer").load("app/view/pages/" +targetPage +".html")
            $(".mainContainer").fadeIn(500);
        }, 400);
    });
});