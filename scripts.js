let slideIndices = [1, 1, 1];
let slideId = ["project1", "project2", "project3"];

function plusSlides(n, no) {
    showSlides(slideIndices[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let slides = document.querySelectorAll(`#${slideId[no]} .slides`);
    if (n > slides.length) {
        slideIndices[no] = 1;
    }
    if (n < 1) {
        slideIndices[no] = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndices[no] - 1].style.display = "block";
}

// Initialize slides
for (let i = 0; i < slideId.length; i++) {
    showSlides(1, i);
}

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});
