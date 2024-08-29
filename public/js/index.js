/* carousal autoscroll */
var myCarousel = document.querySelector('#carouselExampleFade');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    ride: 'carousel'
  });

/* scroll card */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.scroll-cards-container');
  const scrollInterval = 3000; // 3 seconds

  setInterval(() => {
      // Get the width of the first card to scroll by that amount
      const firstCard = container.querySelector('.card');
      const cardWidth = firstCard.offsetWidth + parseInt(getComputedStyle(container).gap);

      // Scroll to the next card
      container.scrollBy({
          left: cardWidth,
          behavior: 'smooth'
      });

      // Wait for the scroll to complete before rearranging
      setTimeout(() => {
          // Remove the first card
          container.removeChild(firstCard);

          // Append the removed card to the end
          container.appendChild(firstCard);

          // Reset the scroll position to the beginning
          container.scrollLeft -= cardWidth;
      }, 1000); // Adjust the timeout duration as needed to match the scroll duration
  }, scrollInterval);
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



      /* testimonial */
      document.addEventListener('DOMContentLoaded', function() {
        const container = document.querySelector('.testimonials-container-2-body');
        const cards = document.querySelectorAll('.testimonial-card');
        const leftButton = document.querySelector('.left-button');
        const rightButton = document.querySelector('.right-button');
      
        let currentIndex = 0;
        const visibleCards = 3; // Number of cards visible at a time
      
        function updateVisibleCards() {
          cards.forEach((card, index) => {
            if (index >= currentIndex && index < currentIndex + visibleCards) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        }
      
        leftButton.addEventListener('click', () => {
          if (currentIndex > 0) {
            currentIndex--;
            updateVisibleCards();
          }
        });
      
        rightButton.addEventListener('click', () => {
          if (currentIndex < cards.length - visibleCards) {
            currentIndex++;
            updateVisibleCards();
          }
        });
      
        // Initialize the visible cards
        updateVisibleCards();
      });
      