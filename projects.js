document.addEventListener("DOMContentLoaded", function() {
	const carouselContainer = document.querySelector(".carousel-container");
	const carousel = carouselContainer.querySelector(".carousel");
	const buttons = carousel.querySelectorAll(".carousel button");
	const scrollContainer = document.querySelector("article");

	buttons.forEach((button) => {
	});

	let currentIndex = 0;
	let isDown = false;
	let scrollLeft;
	let startX;
	let pageDic = {"0": 0, 
		"1": window.innerWidth,
		"2": 2 * window.innerWidth,
		"3": 3 * window.innerWidth,
		"4": 4 * window.innerWidth
	}
	function changeNum(index) {
		buttons.forEach((button, i) => {
			if (i === index) {
				button.classList.add("current");
			}
			else {
				button.classList.remove("current");
		  }
		});
			scrollContainer.scrollLeft = pageDic[index];
			console.log(pageDic[index]);
	}

	buttons.forEach((button, i) => {
		button.addEventListener("click", () => {
			console.log(currentIndex);
			currentIndex = i;
			console.log(currentIndex);
			changeNum(currentIndex);
		});
	});

	scrollContainer.addEventListener("mousedown", (e) => {
		isDown = true;
		scrollContainer.classList.add("active");
		startX = e.pageX - scrollContainer.offsetLeft;
		scrollLeft = scrollContainer.scrollLeft;
	});

	scrollContainer.addEventListener("mouseleave", (e) => {
		isDown = false;
		scrollContainer.classList.remove("active");
	});

	scrollContainer.addEventListener("mouseup", (e) => {
		isDown = false;
		scrollContainer.classList.remove("active");
	});

	scrollContainer.addEventListener("mousemove", (e) => {
		if (!isDown == true) {return;}

		e.preventDefault();

		const x = e.pageX - scrollContainer.offsetLeft;
		const walk = (x - startX) * 2;
		scrollContainer.scrollLeft = scrollLeft - walk;
	});

});


