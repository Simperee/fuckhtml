var body = document.querySelector('body');
var menuTrigger = document.querySelector('#toggle-menu-main-mobile');
var menuContainer = document.querySelector('#menu-main-mobile');
var hamburgerIcon = document.querySelector('.hamburger');
var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");
var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
setTheme(savedTheme);

if (menuTrigger !== null) {
  menuTrigger.addEventListener('click', function(e) {
    menuContainer.classList.toggle('open');
    hamburgerIcon.classList.toggle('is-active');
    body.classList.toggle('lock-scroll');
  });
}

function setTheme(mode) {
	localStorage.setItem("dark-mode-storage", mode);
}

toggle.addEventListener("click", () => {
	if (toggle.className === "fal fa-moon-o") {
		setTheme("dark");
	} else if (toggle.className === "fal fa-sun-o") {
		setTheme("light");
	}
});

function setTheme(mode) {
	if (mode === "dark") {
		darkTheme.disabled = false;
		toggle.className = "fal fa-sun-o";
	} else if (mode === "light") {
		darkTheme.disabled = true;
		toggle.className = "fal fa-moon-o";
	}
}