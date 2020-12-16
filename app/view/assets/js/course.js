$(document).ready(function(){
    checkAndApplyColorMode();

    $.getScript(urlTimelineJS);

    let myTimeline = [{
            date: "Septembre 2016",
            content: "Service Civique - Education Nationale"
        },{
            date: "Septembre 2017",
            content: "Entrée en DAEU B Scientifique - UCA"
        },{
            date: "Juin 2018",
            content: "Obtention du DAEU B Scientifique - Mention : Bien"
        },{
            date: "Septembre 2018",
            content: "Entrée en BTS SIO - Godefroy de Bouillon Clermont-Ferrand"
        },{
            date: "Juin 2019",
            content: "Stage 1ère année BTS SIO - CG-Net Saint-Flour"
        },{
            date: "Septembre 2019",
            content: "Passage en 2ème année BTS SIO - Godefroy de Bouillon Clermont-Ferrand"
        },{
            date: "Janvier 2020",
            content: "Stage 2ème année BTS SIO - Blizz Clermont-Ferrand"
        },{
            date: "Juillet 2020",
            content: "Obtention du BTS SIO - Godefroy de Bouillon Clermont-Ferrand"
        }, {
            date: "Octobre 2020",
            content: "Entrée en formation CDA - Human Booster Clermont-Ferrand"
        }, {
            date: "À venir...",
            content: "Stage formation CDA - À venir..."
        }, {
            date: "À venir...",
            content: "Fin de formation CDA - Human Booster Clermont-Ferrand"
        }
    ];

    setTimeout(function() {
        $(".timeline").roadmap(myTimeline, {
            eventsPerSlide: 3,
            slide: 3,
            prevArrow:"<i class=\"material-icons timelineArrow\">keyboard_arrow_left</i>",
            nextArrow:"<i class=\"material-icons timelineArrow\">keyboard_arrow_right</i>"
        });
    }, 500);
});