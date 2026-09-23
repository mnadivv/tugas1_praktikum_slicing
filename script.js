const readButton = document.querySelector(".read");
const progressText = document.querySelector(".progress span");

let progress = 0;

readButton.addEventListener("click", function () {
    progress++;

    if (progress > 5) {
        progress = 5;
    }

    progressText.textContent = progress + "/5";
});