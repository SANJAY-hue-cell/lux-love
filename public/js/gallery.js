document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const carousel = document.getElementById('carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const closeBtn = document.querySelector('.close');
    let currentSlide = 0;

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            carousel.style.display = 'block';
            showSlide(index);
        });
    });

    closeBtn.addEventListener('click', () => {
        carousel.style.display = 'none';
    });

    function showSlide(index) {
        currentSlide = index;
        carouselItems.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
    }

    window.changeSlide = function(n) {
        currentSlide += n;
        if (currentSlide >= carouselItems.length) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = carouselItems.length - 1;
        }
        showSlide(currentSlide);
    }
});

/* scroll to top */

 // Add your JavaScript here
        // Function to scroll to the top of the page
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
  
        // Show the button when the user scrolls down 20px from the top of the document
        window.onscroll = function() {
            var scrollToTopBtn = document.getElementById("scrollToTopBtn");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };


        


        

        function showAll() {
            const items = document.querySelectorAll('.gallery-item');
            items.forEach(item => item.style.display = 'block');
        }
        
        function showGallery(category) {
            const items = document.querySelectorAll('.gallery-item');
            items.forEach(item => {
                if (item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
        
        // Initially show all images
        showAll();
        
  
  


