
var Array1 = ["Enter your first name", "Enter your email address in the form user@domain", "Enter password with 6-8 values",
              "Enter your email address in the form user@domain", "Enter password with 6-8 values",  ""];

var comment1;
var comment2;

function init() {
    comment1 = document.getElementById("comment");
    comment2 = document.getElementById("commentNew");

    registerListeners(document.getElementById("name"), 0, comment2);
    registerListeners(document.getElementById("email"), 1, comment1);
    registerListeners(document.getElementById("password"), 2, comment1);
    registerListeners(document.getElementById("emailNew"), 3, comment2);
    registerListeners(document.getElementById("passwordNew"), 4, comment2);
}

function registerListeners(object, messageNumber, comment) {
    object.addEventListener("focus", function () {
        comment.innerHTML = messageNumber === 0 ? Array1[messageNumber] : messageNumber === 1 ? Array1[messageNumber] : Array1[messageNumber];
    }, false);
    object.addEventListener("blur", function () {
        comment.innerHTML = Array1[3];
    }, false);
}

window.addEventListener("load", init, false);
