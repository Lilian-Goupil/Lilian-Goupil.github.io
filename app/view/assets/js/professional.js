$(document).ready(function(){
    checkAndApplyColorMode();

    let collapsibleSelect = document.querySelector('.collapsible.expandable');
    let collapsibleInstance = M.Collapsible.init(collapsibleSelect, {
        accordion: false
    });
});