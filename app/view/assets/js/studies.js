$(document).ready(function(){
    var actualTheme;
    var actualTextTheme;

    if($(".nav-wrapper").hasClass("darkTheme")) {
        actualTheme = "darkTheme";
        actualTextTheme = "darkThemeText";

        $(".lightTheme").addClass("darkTheme");
        $(".darkTheme").removeClass("lightTheme");

        $(".lightThemeText").addClass("darkThemeText");
        $(".darkThemeText").removeClass("lightThemeText");
    } else {
        actualTheme = "lightTheme";
        actualTextTheme = "lightThemeText";

        $(".darkTheme").addClass("lightTheme");
        $(".lightTheme").removeClass("darkTheme");

        $(".darkThemeText").addClass("lightThemeText");
        $(".lightThemeText").removeClass("darkThemeText");
    }

    var collapsibleSelect = document.querySelector('.collapsible.expandable');
    var collapsibleInstance = M.Collapsible.init(collapsibleSelect, {
        accordion: false
    });
});