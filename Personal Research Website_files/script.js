document.addEventListener('keydown', function(evt) {
    if (evt.keyCode == 27) {
        close();
    }
});

function selectContent(query) {
    var range = document.createRange();
    var selection = window.getSelection();
    var elem = document.querySelector(query);
    range.selectNodeContents(elem);
    selection.removeAllRanges();
    selection.addRange(range);
}

function close() {
    location.href="##";
}
