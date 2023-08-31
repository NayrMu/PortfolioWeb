
document.addEventListener("DOMContentLoaded", function() {
	const scrollContainer = document.querySelector(".page .frame .content .proj-page-row");
	const projCons = scrollContainer.querySelectorAll(".proj-page-col");
	if (scrollContainer !== null) {
		console.log("Yosh");
	} else { console.log("ouuhhhh") }
	

	let currentIndex = 0;
	let isDown = false;
	let scrollLeft;
	let startX;
	let pageDic = {"0": 0, 
		"1": scrollContainer.clientWidth,
		"2": 2 * scrollContainer.clientWidth,
		"3": 3 * scrollContainer.clientWidth,
		"4": 4 * scrollContainer.clientWidth
	}

	function changeNum(index) {
			scrollContainer.scrollLeft = pageDic[index];
			console.log(pageDic[index]);
			scrollContainer.scrollTo({
					left: pageDic[index],
					behavior: "smooth"
				});
	}


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
				scrollContainer.scrollTo({
					left: pageDic[index],
					behavior: "smooth"
				});
			}
			console.log("made it mouseup"); 
		});	
	});

	scrollContainer.addEventListener("mousemove", (e) => {
		if (!isDown == true) {return;}
		e.preventDefault();
		const x = e.pageX - scrollContainer.offsetLeft;
		const walk = (x - startX) * 1.3;
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