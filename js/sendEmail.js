function sendEmail()
{
    var args = [];
    if (typeof subject !== 'undefined') {
        args.push('subject=' + encodeURIComponent(document.getElementById("subject").value));
    }
    if (typeof body == 'undefined') {
        args.push('body=' + encodeURIComponent(document.getElementById("message").value 
        + "\n\nThank you, \n" + document.getElementById("name").value) + "\n");
    }

    var url = 'mailto:' + encodeURIComponent("tylermoody@delta.edu");
    if (args.length > 0) {
        url += '?' + args.join('&');
    }

    window.location.href = url;
}
