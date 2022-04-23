class Carousel {
    constructor(listId = 'slides', itemClass = "slide", interval = 2000, nextBtnId = "next", previousBtnId = "previous") {
        this.slides = document.querySelectorAll(`#${listId} .${itemClass}`);
        this.isPlaying = true;
        this.currentSlide = 0;
        this.slideInterval = setInterval(this.nextSlide.bind(this), interval);
        this.slideControls = document.querySelectorAll('#slide-controls .slide-control')
        this.slideControls[0].classList.add('slide-control--active')

        Array.from(this.slideControls).forEach((item, index) => {
            item.addEventListener('click', () => {
                this.pauseSlideshow();
                this.goToSlide(index)
                this.playSlideshow();
            })
        })

        this.nextBtn = document.getElementById(nextBtnId);
        this.previousBtn = document.getElementById(previousBtnId);

        this.nextBtn.addEventListener('click', () => {

            this.pauseSlideshow();
            this.nextSlide();
            this.playSlideshow();
        });
        this.previousBtn.addEventListener('click', () => {
            this.pauseSlideshow();
            this.previousSlide();
            this.playSlideshow();
        });

        this.nextSlide()
    }

    nextSlide() {
        this.goToSlide(this.currentSlide + 1);
    }

    previousSlide() {
        this.goToSlide(this.currentSlide - 1);
    }

    goToSlide(n) {
        this.slides[this.currentSlide].className = 'slide';
        this.slideControls[this.currentSlide].classList.remove('slide-control--active')

        this.currentSlide = (n + this.slides.length) % this.slides.length;
        this.slideControls[this.currentSlide].classList.add('slide-control--active')
        this.slides[this.currentSlide].className = 'slide showing';
    }

    pauseSlideshow() {
        this.isPlaying = false;
        clearInterval(this.slideInterval);
    }

    playSlideshow() {
        this.isPlaying = true;
        this.slideInterval = setInterval(this.nextSlide.bind(this), 2000);
    }
}

let carousel = new Carousel();