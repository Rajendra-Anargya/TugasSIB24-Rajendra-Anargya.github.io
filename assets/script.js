document.getElementById("halamanUtamaBtn").addEventListener("click", function() {
    window.location.href = "index.html";
  });

  document.addEventListener("DOMContentLoaded", function() {
    var judulElement = document.getElementById("Judul");

    document.getElementById("addColorButton").addEventListener("click", function() {
        judulElement.classList.add("text-color");
    });

    document.getElementById("removeColorButton").addEventListener("click", function() {
        judulElement.classList.remove("text-color");
    });
    var images = [
        "https://i.ibb.co/vcTPNx6/lucas-k-w-QLAGv4-OYs-unsplash.jpg",
        "https://i.ibb.co/MfwC8fx/nathan-dumlao-Sw-Ih3kr1-U-unsplash.jpg",
        "https://i.ibb.co/mNqqyS9/diana-parkhouse-5-RY9-Gtj-PXZM-unsplash.jpg"
    ];
    
    var slideshowContainer = document.querySelector('.slideshow-container');
    
    images.forEach(function(imageUrl) {
        var slide = document.createElement('div');
        slide.className = 'mySlides fade';
    
        var image = document.createElement('img');
        image.src = imageUrl;
        image.style.width = '100%';
    
        slide.appendChild(image);
        slideshowContainer.appendChild(slide);
    });
    
    var prevButton = document.createElement('button');
    prevButton.className = 'prev';
    prevButton.innerHTML = '&#10094;';
    prevButton.onclick = function() { plusSlides(-1); };
    slideshowContainer.appendChild(prevButton);
    
    var nextButton = document.createElement('button');
    nextButton.className = 'next';
    nextButton.innerHTML = '&#10095;';
    nextButton.onclick = function() { plusSlides(1); };
    slideshowContainer.appendChild(nextButton);
    
    var slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName('mySlides');
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[slideIndex - 1].style.display = 'block';
    }
});

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}