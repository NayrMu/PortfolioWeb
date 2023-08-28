document.addEventListener("DOMContentLoaded", function() {
	const carouselContainer = document.querySelector(".carousel-container");
	const carousel = carouselContainer.querySelector(".carousel");
	const buttons = carousel.querySelectorAll(".carousel button");
	const scrollContainer = document.querySelector("article");
	const projCons = scrollContainer.querySelectorAll(".proj-container");

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
		scrollContainer.scrollTo({
			left: pageDic[index],
			behavior: "smooth"
		});
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
	  projCons.forEach((el, index) => {
			if (isInViewPort(el)) {
				currentIndex = index;
				changeNum(currentIndex);
			}
		});	
	});

	scrollContainer.addEventListener("mousemove", (e) => {
		if (!isDown == true) {return;}

		e.preventDefault();

		const x = e.pageX - scrollContainer.offsetLeft;
		const walk = (x - startX) * 2;
		scrollContainer.scrollLeft = scrollLeft - walk;
	});

	function isInViewPort(el) {
		console.log("also");
		const rect = el.getBoundingClientRect();
		const isVisible = (rect.left <= window.innerWidth / 2) && (rect.right >= window.innerWidth / 2);
		console.log(isVisible);
		return isVisible;
	}

	
});


