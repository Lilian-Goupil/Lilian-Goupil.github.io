$(document).ready(function(){
    checkAndApplyColorMode();

    $.getScript(urlTermynalJS, function() {
        let termynal = new Termynal(".termynal", {
            startDelay: 400,
            typeDelay: 80,
            lineDelay: 400
        });
    });
});