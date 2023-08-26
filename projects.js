console.log("script is running");

document.addEventListener("DOMContentLoaded", function() {
	const carouselContainer = document.querySelector(".carousel-container");
	const carousel = carouselContainer.querySelector(".carousel");
	const buttons = carousel.querySelectorAll(".carousel button");
	console.log('script is running'); 
	buttons.forEach((button) => {
		console.log("1");
	});

	let currentIndex = 0;

	function changeNum(index) {
		buttons.forEach((button, i) => {
			if (i === index) {
				button.classList.add("current");
			}
			else {
				button.classList.remove("current");
		 }
		});
	}

	buttons.forEach((button, i) => {
		console.log("made it");
		button.addEventListener("click", () => {
			console.log(currentIndex);
			currentIndex = i;
			console.log(currentIndex);
			changeNum(currentIndex);
		});
	});
});

