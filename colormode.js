document.addEventListener("DOMContentLoaded", function() {
	const buttons = document.querySelectorAll(".color-mode-btn");
	const r = document.querySelector(":root");


	function enableD() {
		localStorage.setItem("darkMode", "enabled");
		
		r.style.setProperty("--color-bg", "#3b3b3b");
		r.style.setProperty("--color-primary", "#dadad9");
		r.style.setProperty("--color-secondary", "#bbbbbb");
	}

	function disableD() {
		localStorage.setItem("darkMode", "disabled");

		r.style.setProperty("--color-bg", "#f1f1ef");
		r.style.setProperty("--color-primary", "#3b3b3b");
		r.style.setProperty("--color-secondary", "#8b8b8b");
	}

	function getD() {
		return localStorage.getItem('darkMode');
	}


	let darkModePreference = getD();
	
	if (darkModePreference === "disabled" && darkModePreference !== null) {
			
			r.style.setProperty("--color-bg", "#f1f1ef")
			r.style.setProperty("--color-primary", "#3b3b3b");
			r.style.setProperty("--color-secondary", "#8b8b8b");


		} else {
			r.style.setProperty("--color-bg", "#3b3b3b")
			r.style.setProperty("--color-primary", "#dadad9");
			r.style.setProperty("--color-secondary", "#bbbbbb");

		}

	

	buttons.forEach((button) => {
		button.addEventListener("click", (e)  => {
			if (darkModePreference === "disabled") {
			

			enableD();
			darkModePreference = getD();
		} else {
			

			disableD();
			darkModePreference = getD();
		}
		});
	});

	
	/* Begin Variable Initation */
	const scrollContainer = document.querySelector(".page .frame .content .proj-page-row");
	const projCons = scrollContainer.querySelectorAll(".proj-page-col");
	const motionBtnsDown = scrollContainer.querySelectorAll(".proj-page-col .proj-content .motion-btn-down")
	const motionBtnsUp = scrollContainer.querySelectorAll(".proj-page-col .proj-content .motion-btn-up")

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
	/* End Variable Initiation */

	/* Begin Side-Sroll Funcs */
	function changeNum(index) {
			scrollContainer.scrollLeft = pageDic[index];
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
		projCons.forEach((el, index) => {
			if (isInViewPort(el)) {
				scrollContainer.scrollTo({
					left: pageDic[index],
					behavior: "smooth"
				});
			}
		});
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
		const rect = el.getBoundingClientRect();
		const isVisible = (rect.left <= window.innerWidth / 2) && (rect.right >= window.innerWidth / 2);
		return isVisible;
	}
	/* End Side-Scroll Funcs */

	/* Begin Button Funcs */
	motionBtnsUp.forEach((el) => {
		el.addEventListener("click", (e) => {
			let parent = e.currentTarget.parentElement.parentElement.parentElement;
			parent.scrollTo ({
				top: 0,
				behavior: "smooth",
			});
		})
	})
	motionBtnsDown.forEach((el) => {
		el.addEventListener("click", (e) => {
			let parent = e.currentTarget.parentElement.parentElement.parentElement;
			parent.scrollTo ({
				top: parent.clientHeight,
				behavior: "smooth",
			});
		})
	})
	/* End Button Funcs */



})