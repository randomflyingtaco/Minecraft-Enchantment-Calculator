// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// onPageLoad
$(function() {
    // Google +1 init
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);

    /*

        Funciton called when the user changes the version

    */
    $("#version").change(function(){
        var version = $("#version").val();

        if (version == "rev4") {
            window.open("../rev4/index.html", "_self");
        } else if (version == "rev5") {
            window.open("../rev5/index.html", "_self");
        } else if (version == "rev6") {
            window.open("../rev6/index.html", "_self");
        }
    });
});
