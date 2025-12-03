// Navbar script
    document.addEventListener("scroll", function () {
    var nav = document.getElementById("navMain");
    var bsCollapse = bootstrap.Collapse.getInstance(nav);

    if (bsCollapse && nav.classList.contains("show")) {
        bsCollapse.hide();  // Close the slide menu on scroll
    }
});

// Ways to carrer
// 1. Select all study columns regardless of which row they are in
    const slides = document.querySelectorAll('.study-col');
    let currentIndex = 0;

    function changeSlide(direction) {
        // Remove active class from current
        slides[currentIndex].classList.remove('active');

        // Update Index
        currentIndex += direction;

        // Loop logic
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }

        // Add active class to new slide
        slides[currentIndex].classList.add('active');
    }


    // Testimonial
   document.addEventListener("DOMContentLoaded", function() {
        const wrapper = document.querySelector('.cards-wrapper');
        const prevBtn = document.querySelector('.prev-arrow');
        const nextBtn = document.querySelector('.next-arrow');

        // Function to determine how far to scroll (scrolls 1 card width)
        function getScrollAmount() {
            // Get the width of the first card + its margin
            const card = wrapper.querySelector('.col-md-3');
            return card.offsetWidth + 16;
        }

        nextBtn.addEventListener('click', () => {
            wrapper.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            wrapper.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        });
    });

    // Carrer Toolbox
     // Toolbox Slider Logic
    const toolSlides = document.querySelectorAll('.tool-slide');
    let currentToolIndex = 0;

    function moveToolboxSlide(direction) {
        // 1. Remove active class from current
        toolSlides[currentToolIndex].classList.remove('active');

        // 2. Update Index
        currentToolIndex += direction;

        // 3. Loop logic (Start <-> End)
        if (currentToolIndex >= toolSlides.length) {
            currentToolIndex = 0;
        } else if (currentToolIndex < 0) {
            currentToolIndex = toolSlides.length - 1;
        }

        // 4. Add active class to new slide
        toolSlides[currentToolIndex].classList.add('active');
    }


