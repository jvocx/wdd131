

document.addEventListener("DOMContentLoaded", () => {

    let numReviews = Number(window.localStorage.getItem("reviewCount-ls")) || 0;


    numReviews++;


    window.localStorage.setItem("reviewCount-ls", numReviews);


    const reviewDisplay = document.querySelector("#reviewCount");
    if (reviewDisplay) {
        reviewDisplay.textContent = numReviews;
    }


    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});