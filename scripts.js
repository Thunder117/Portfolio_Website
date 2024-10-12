const details = {
    1: "Details about Bento 1: This is a delicious bento with rice, veggies, and chicken.",
    2: "Details about Bento 2: A bento filled with sushi, miso soup, and a salad.",
    3: "Details about Bento 3: This bento contains teriyaki beef with noodles and a side of tempura.",
    4: "Details about Bento 4: A vegetarian bento with tofu, rice, and mixed vegetables.",
    5: "Details about Bento 5: A seafood bento with salmon, shrimp, and a side of pickles.",
    6: "Details about Bento 6: A traditional Japanese bento with grilled fish, rice, and seaweed."
};

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
        if (entry.isIntersecting) {
            entry.target.classList.add('longer');
        } else {
            entry.target.classList.remove('longer');
        }
    });
});

function openModal(id) {
    const modal = document.getElementById('myModal');
    const modalContent = document.querySelector('.modal-content');
    const modalDetails = document.getElementById('modalDetails');

    // Update modal content with the corresponding details
    if (details[id]) {
        modalDetails.textContent = details[id];
    } else {
        modalDetails.textContent = 'Details not available for this item.';
    }

    // Show the modal container
    modal.classList.add('modal-open');
}

function closeModal() {
    const modal = document.getElementById('myModal');

    modal.classList.remove('modal-open');
}

// Close modal if clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        closeModal();
    }
}

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => hiddenObserver.observe(el));

const barElement = document.querySelectorAll(".bar");
barElement.forEach((el) => barObserver.observe(el));
