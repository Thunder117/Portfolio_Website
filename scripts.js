const details = {
    1: 
    {
        title: "Book Club Web App",
        description: "A full-featured web application for managing book clubs, allowing users to create and join clubs, invite other members, and manage book collections within clubs.",
        key_features: 
        `
        **Key Features:**
            - Users can create and manage book clubs, adding or removing books with a smooth modal interface.
            - Real-time search functionality to find users by their username and invite them to join book clubs.
            - Responsive design with dynamic modals for adding books, viewing club details, and managing memberships.
        `,
        technologies_used:
        `
         **Technologies Used:**
            - **Frontend:** React, HTML5, CSS3, JavaScript (ES6+)
            - **Backend:** Node.js, Express
            - **Database:** MongoDB for storing user and book club data.
            - **User Authentication:** JSON Web Tokens (JWT) for secure login and session management.
            - **Styling and UI:** CSS Modules and animations for seamless transitions in modals.
            - **Deployment:** Hosted on AWS/Docker for scalability and performance.
        `,
        conclusion: "This project demonstrates my ability to build interactive, scalable, and user-friendly web applications with both frontend and backend technologies."
    },    
    2: 
    {
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing projects and skills, featuring a responsive design and smooth user experience.",
        key_features: 
        `
        **Key Features:**
            - Clean and modern design with intuitive navigation for showcasing various projects.
            - Interactive modals to display detailed information about each project.
            - Responsive layout that adapts to different screen sizes for optimal viewing on any device.
        `,
        technologies_used:
        `
        **Technologies Used:**
            - **Frontend:** HTML5, CSS3, JavaScript (ES6+)
            - **Styling and UI:** CSS Modules and animations for smooth transitions in modals.
            - **Deployment:** Hosted using AWS/Docker for enhanced performance and reliability.
        `,
        conclusion: "This project demonstrates my skills in building responsive and user-friendly websites, showcasing my work and abilities as a software developer."
    },
    3: 
    {
        title: "Details about Bento 1: This is a delicious bento with rice, veggies, and chicken.",
        description: "Description 1"
    },
    4: 
    {
        title: "Details about Bento 1: This is a delicious bento with rice, veggies, and chicken.",
        description: "Description 1"
    },
    5: 
    {
        title: "Details about Bento 1: This is a delicious bento with rice, veggies, and chicken.",
        description: "Description 1"
    },
    6: 
    {
        title: "Details about Bento 1: This is a delicious bento with rice, veggies, and chicken.",
        description: "Description 1"
    },
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

    // Update modal content with the corresponding details
    if (details[id]) {
        modalTitle.textContent = details[id].title;
        modalDescription.textContent = details[id].description;
        keyFeatures.innerHTML = details[id].key_features; // Updated to innerHTML for better formatting
        technologiesUsed.innerHTML = details[id].technologies_used; // Updated to innerHTML for better formatting
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
