
var slideIndex = 0;

showSlide();
 
var timer = setInterval(showSlide, 4000);

var slideContainer = document.getElementById('slideshow-container');
var slideControl = document.getElementById('slide-control');

slideContainer.onmouseover = function() {
	// clearInterval(timer);
}

slideControl.onmouseover = function() {
	clearInterval(timer);
}

slideContainer.onmouseleave = function() {
	// timer = setInterval(showSlide,2000);
}

slideControl.onmouseleave = function() {
	// timer = setInterval(showSlide, 2000);
}

 

function showSlide() {
	var i;
	var slides = document.getElementsByClassName('slide-item');
	var dots = document.getElementsByClassName('dot');
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (var i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slideIndex++;
	if (slideIndex > slides.length) slideIndex = 1;
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}

function chooseSlide(n) {
	slideIndex = n;
	showSlide();
	clearInterval(timer);
}

function showMenu() {
	var topNav = document.getElementById('topnav');
	if (topNav.className === "navbar") {
		topNav.className += " show";
	} else {
		topNav.className = "navbar";
	}
}

const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
const logo = document.querySelector('#topnav')

const getOffset = () => {
  if(window.pageYOffset > 150){
    //  logo.style.backgroundColor = 'rgba(0,0,0,0.7)'
     logo.style.backgroundColor = 'rgba(0,0,0)'
     logo.style.transition = 'all .6s ease-out'
     logo.style.boxShadow = '0px 1px 4px black'
	 logo.style.padding = '2px 0px'
  }
  if(window.pageYOffset < 150){
     logo.style.backgroundColor = 'rgba(0,0,0,0)'
     logo.style.transition = 'all .6s ease-out'
     logo.style.boxShadow = 'none' 
	 logo.style.padding = '30px 10px'
  }
}

window.addEventListener('scroll', getOffset)


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 3,
        },
		1024: {
			slidesPerView: 4,
		},
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});