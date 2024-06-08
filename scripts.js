let slideIndices = [1, 1, 1];
let slideId = ["project1", "project2", "project3"];

function plusSlides(n, no) {
    showSlides(slideIndices[no - 1] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.querySelectorAll(`#${slideId[no - 1]} .slides`);
    if (n > x.length) {slideIndices[no - 1] = 1}
    if (n < 1) {slideIndices[no - 1] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndices[no - 1] - 1].style.display = "block";
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});

// Initialize slides
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < slideIndices.length; i++) {
        showSlides(slideIndices[i], i + 1);
    }
});
