var count = 0;
// select value and button
// qyueryselector picks the first element if you had 2 or more classes with the same name
var value = document.querySelector("#value");
var btns = document.querySelectorAll(".btn");
console.log(btns);
// lets use a forEach loop
btns.forEach(
    function (btn) {
        btn.addEventListener("click", function (e) {
            var styleMedia = (e.currentTarget.classList);
            // if, else if and else
            if (styleMedia.contains("decrease")) {
                count--;
            } // elseif has to be outside curley braces
            else if (styleMedia.contains("increase")) {
                count++;
            } //else has to be outside curley braces
            else {
                count = 0;
            }
            value.textContent = count;
        })
    })