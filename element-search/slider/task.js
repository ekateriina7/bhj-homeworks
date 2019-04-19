let current = 0;
const slides = Array.from(document.querySelectorAll('.slider__item'));
const switchRight = document.querySelector('.slider__arrow_next');
const switchLeft = document.querySelector('.slider__arrow_prev')

switchRight.onclick = function () {
	current++;
	for (let item of slides) {
		item.className = 'slider__item';
	}
	if (current >= slides.length) {
		current = 0;
	}
	slides[current].className = 'slider__item slider__item_active';
};

switchLeft.onclick = function () {
	current--;
	for (let item of slides) {
		item.className = 'slider__item';
	}
	if (current < 0) {
		current = slides.length - 1;
	}
	slides[current].className = 'slider__item slider__item_active';
};