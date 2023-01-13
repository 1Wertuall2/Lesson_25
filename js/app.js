(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window["FLS"] = true;
    isWebp();
    "use strict";
    const searchBody = document.querySelector(".search");
    document.addEventListener("click", search);
    function search(event) {
        if (event.target.closest(".search__button")) searchBody.classList.toggle("_active");
        if (!event.target.closest(".search__form")) searchBody.classList.remove("_active");
    }
    document.addEventListener("keyup", (function(e) {
        if ("Escape" === e.code) searchBody.classList.remove("_active");
    }));
    const textInput = document.querySelector(".search__input");
    const textCounter = document.querySelector(".search__lim span");
    const textCounterLimit = textInput.getAttribute("maxlength");
    textCounter.innerHTML = textCounterLimit;
    textInput.addEventListener("keyup", txtSetCounter);
    textInput.addEventListener("keydown", (function(event) {
        if (event.repeat) txtSetCounter();
    }));
    function txtSetCounter() {
        const textCounterRezult = textCounterLimit - textInput.value.length;
        textCounter.innerHTML = textCounterRezult;
    }
})();