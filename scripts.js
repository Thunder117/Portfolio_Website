function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

const hiddenObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const barObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry.target, entry.isIntersecting); // Debugging
        if (entry.isIntersecting) {
            entry.target.classList.add('longer');
        } else {
            entry.target.classList.remove('longer');
        }
    });
});

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => hiddenObserver.observe(el));

const barElement = document.querySelectorAll(".bar");
barElement.forEach((el) => barObserver.observe(el));
