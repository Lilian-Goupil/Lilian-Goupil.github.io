$(document).ready(function(){
    checkAndApplyColorMode();

    let collapsibleSelect = document.querySelector('.collapsible.expandable');
    let collapsibleInstance = M.Collapsible.init(collapsibleSelect, {
        accordion: false
    });

    let materialBoxedSelect = document.querySelectorAll('.materialboxed');
    let materialBoxedInstance = M.Materialbox.init(materialBoxedSelect);
});