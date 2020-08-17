"use strict";
// Get input element
const filterInput = document.querySelector("#filterInput");
//Add event listener
filterInput?.addEventListener("keyup", filterNames);
function filterNames() {
    //Get value of input
    const filterValue = document
        .querySelector("#filterInput")
        .value.toUpperCase();
    //Get names ul
    const ul = document.querySelector("#names");
    //Get li from ul
    const li = ul.querySelectorAll("li.collection-item");
    //Loop through collection-item li's
    for (let i = 0; i < li?.length; i++) {
        const a = li[i].querySelector("a");
        //If matched
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = "";
        }
        else {
            li[i].style.display = "none";
        }
    }
}
//# sourceMappingURL=filterableList.js.map