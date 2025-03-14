function toggleMenu() {
    document.querySelector(".nav-menu").classList.toggle("active");
  }

document.addEventListener("DOMContentLoaded", function () {
    var howItWorksSlider = new Swiper(".how-it-works-slider", {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', function() {
        let parent = this.closest('.faq-item');
        let answer = parent.querySelector('.faq-answer');

        document.querySelectorAll('.faq-item').forEach(faq => {
            let otherAnswer = faq.querySelector('.faq-answer');
            if (faq !== parent) {
                faq.classList.remove('active');
                otherAnswer.style.maxHeight = '0px';
                otherAnswer.style.opacity = '0';
                otherAnswer.style.paddingTop = '0px';
                otherAnswer.style.paddingBottom = '0px';
            }
        });

        if (parent.classList.contains('active')) {
            answer.style.maxHeight = '0px';
            answer.style.opacity = '0';
            answer.style.paddingTop = '0px';
            answer.style.paddingBottom = '0px';
            parent.classList.remove('active');
        } else {
            parent.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.opacity = '1';
            answer.style.paddingTop = '20px';
            answer.style.paddingBottom = '20px';
        }
    });
});


document.querySelector(".read-more").addEventListener("click", function () {
    let extraText = document.querySelector(".extra-text");
    let button = this;

    if (extraText.style.display === "none" || extraText.style.display === "") {
        extraText.style.display = "block";
        button.textContent = "Скрыть";
    } else {
        extraText.style.display = "none";
        button.textContent = "Читать больше";
    }
});
