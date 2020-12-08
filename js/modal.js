 let modal = document.getElementById("my_modal");
 let btn = document.getElementById("request");
 let span = document.getElementsByClassName("close_modal_window")[0];

 btn.onclick = function () {
    modal.style.display = "block";
    clearTimeout(slideInterval);
 }

 span.onclick = function () {
    modal.style.display = "none";
    slideInterval = setInterval(nextSlide,3000);
 }

 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        slideInterval = setInterval(nextSlide,3000);
    }
}