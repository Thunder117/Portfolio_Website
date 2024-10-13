const details = {
    1: 
    {
        title: "Book Club Web App",
        description: "A full-featured web application for managing book clubs, allowing users to create clubs, invite other members, and manage book collections within clubs.",
        key_features: 
        `
        <b>Key Features:</b>
        <ul>
            <li>Users can create and manage book clubs, adding or removing books with a smooth modal interface.</li>
            <li>Real-time search functionality to find users by their username and invite them to join book clubs.</li>
            <li>Responsive design with dynamic modals for adding books to existing clubs.</li>
        </ul>
        `,
        technologies_used:
        `
        <b>Technologies Used:</b>
        <ul>
            <li><b>Frontend:</b> React, HTML5, CSS3, JavaScript (ES6+)</li>
            <li><b>Backend:</b> Node.js, Express</li>
            <li><b>Database:</b> MongoDB for storing user and book club data.</li>
            <li><b>User Authentication:</b> JSON Web Tokens (JWT) for secure login and session management.</li>
            <li><b>Styling and UI:</b> Tailwind CSS, CSS Modules, and animations for seamless transitions in modals.</li>
            <li><b>Deployment:</b> Hosted on **AWS/Docker** for scalability and performance.</li>
        </ul>
        `,
        conclusion: "This project demonstrates my ability to build interactive, scalable, and user-friendly web applications with both frontend and backend technologies."
    },
    2: 
    {
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing projects and skills, featuring a responsive design and smooth user experience.",
        key_features: 
        `
        <b>Key Features:</b>
        <ul>
            <li>Clean and modern design with intuitive navigation for showcasing various projects.</li>
            <li>Interactive modals to display detailed information about each project.</li>
            <li>Responsive layout that adapts to different screen sizes for optimal viewing on any device.</li>
        </ul>
        `,
        technologies_used:
        `
        <b>Technologies Used:</b>
        <ul>
            <li><b>Frontend:</b> HTML5, CSS3, JavaScript (ES6+)</li>
            <li><b>Styling and UI:</b> CSS Modules and animations for a smooth user experience.</li>
            <li><b>Deployment:</b> Hosted using **AWS/Docker** for enhanced performance and reliability.</li>
        </ul>
        `,
        conclusion: "This project demonstrates my skills in building responsive and user-friendly websites, showcasing my work and abilities as a web developer."
    }
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
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const keyFeatures = document.getElementById('keyFeatures');
    const technologiesUsed = document.getElementById('technologiesUsed');
    const conclusion = document.getElementById('conclusion');

    // Update modal content with the corresponding details
    if (details[id]) {
        modalTitle.textContent = details[id].title;
        modalDescription.textContent = details[id].description;
        keyFeatures.innerHTML = details[id].key_features; 
        technologiesUsed.innerHTML = details[id].technologies_used; 
        conclusion.textContent = details[id].conclusion;
    } else {
        modalTitle.textContent = 'Details not available for this item.';
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
