var SlideIndex = 1;
SlideShow();

setInterval(function() {
	SlideIndex = SlideIndex + 1;
	SlideShow();
},5000);

function SlideShow() {
	var slides = document.getElementsByClassName('slide');
	var dots = document.getElementsByClassName('dot');
	if (SlideIndex > slides.length) {
		SlideIndex = 1;
	}
	if (SlideIndex < 1) {
		SlideIndex = slides.length;
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].classList.remove('ative');
	}
	for (var i = 0; i < dots.length; i++) {
		dots[i].classList.remove('ative-dot');
	}
	slides[SlideIndex-1].classList.add('ative');
	dots[SlideIndex-1].classList.add('ative-dot');
}

document.getElementById('next').addEventListener('click',function(){
	SlideIndex = SlideIndex + 1;
	SlideShow();
})

document.getElementById('prev').addEventListener('click',function(){
	SlideIndex = SlideIndex - 1;
	SlideShow();
})

function ativedot(n) {
	SlideIndex = n;
	SlideShow();
}