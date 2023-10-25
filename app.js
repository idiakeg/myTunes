// get the toggle icons
const open = document.getElementById("open");
const close = document.getElementById("close");

// define flags
let on = false;

// add an event listener to open and close elements
open.addEventListener("click", (e) => {
	on = !on;
	if (on) {
		close.style.display = "block";
		open.style.display = "none";
	}
});
close.addEventListener("click", (e) => {
	on = !on;
	if (!on) {
		close.style.display = "none";
		open.style.display = "block";
	}
});
