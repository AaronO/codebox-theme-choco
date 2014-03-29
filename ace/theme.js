define([
    "text!ace/theme.css"
], function(cssContent) {

    return {
        'isDark': true,
        'cssClass': "ace-monokai",
        'cssText': cssContent
    };
});