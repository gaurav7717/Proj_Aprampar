// $(document).ready(function () {
//     $("#testimonial-carousel").owlCarousel({
//         items: 2, // Number of items to display in the carousel
//         loop: true, // Infinite loop
//         margin: 10, // Margin between items
//         nav: true, // Show navigation arrows
//         autoplay: true, // Enable autoplay
//         autoplayTimeout: 5000, // Autoplay interval in milliseconds
//         autoplayHoverPause: true, // Pause on hover
//     });
// });
// const counters = document.querySelectorAll('.counter');
// const speed = 200; // The lower the slower

// counters.forEach(counter => {
// 	const updateCount = () => {
// 		const target = +counter.getAttribute('data-target');
// 		const count = +counter.innerText;

// 		// Lower inc to slow and higher to slow
// 		const inc = target / speed;

// 		// console.log(inc);
// 		// console.log(count);

// 		// Check if target is reached
// 		if (count < target) {
// 			// Add inc to count and output in counter
// 			counter.innerText = count + inc;
// 			// Call function every ms
// 			setTimeout(updateCount, 1);
// 		} else {
// 			counter.innerText = target;
// 		}
// 	};

// 	updateCount();
// });