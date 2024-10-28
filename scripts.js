const details = {
    1: 
    {
        title: "Rogue-like Unity Game",
        description: "A 2D pixel art rogue-like game developed in Unity, featuring a player-controlled character, weapon system, and dynamic enemy interactions. This project showcases my skills in game development and C# programming.",
        gif: '<img src="./imgs/bento-duck.gif" alt="Unity Game GIF" style="max-width: 100%; height: 300px;"/>', 
        key_features: 
        `
        <b>Key Features:</b>
        <ul>
            <li>Player-controlled character with smooth movement and attack mechanics.</li>
            <li>Weapon aiming based on mouse position for precise combat.</li>
            <li>Dynamic camera shake effect during combat for enhanced game feel.</li>
            <li>Pixel art environment and character designs, creating a retro aesthetic.</li>
            <li>Basic enemy AI with patrolling, attacking, and health management behaviors.</li>
        </ul>
        `,
        technologies_used:
        `
        <b>Technologies Used:</b>
        <ul>
            <li><b>Game Engine:</b> Unity (C#).</li>
            <li><b>Art:</b> Pixel art created using Aseprite.</li>
            <li><b>Development:</b> C# for scripting player movement, enemy AI, and game mechanics.</li>
            <li><b>Physics:</b> Unity’s built-in physics engine for collision detection and interaction.</li>
        </ul>
        `,
        conclusion: "This project highlights my passion for game development, focusing on core gameplay mechanics, smooth animations, and a cohesive visual style and color palette."
    },
    2: 
    {
        title: "Book Club Web App",
        description: "A full-featured web application for managing book clubs, allowing users to create clubs, invite other members, and manage book collections within clubs.",
        gif: '<img src="./imgs/bento-bookclub.gif" alt="Book Club App GIF" style="max-width: 100%; height: 350px;"/>', 
        link: "https://bookclubplus.netlify.app/",
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
            <li><b>Frontend:</b> React, HTML5, JSX.</li>
            <li><b>Backend:</b> Node.js, Express, JavaScript (ES6+).</li>
            <li><b>Database:</b> MongoDB for storing user and book club data.</li>
            <li><b>User Authentication:</b> JSON Web Tokens (JWT) for secure login and session management.</li>
            <li><b>Styling and UI:</b> Tailwind CSS, and animations for seamless transitions in modals.</li>
            <li><b>Deployment:</b> Hosted using Netlify and Render for performance.</li>
        </ul>
        `,
        conclusion: "This project demonstrates my ability to build interactive, scalable, and user-friendly web applications with both frontend and backend technologies."
    },
    3: 
    {
        title: "Activity Tracker App",
        description: "A simple React Native app that allows users to create activities linked to specific dates, providing an easy way to track tasks and mark them as done or not done.",
        gif: '<img src="./imgs/bento-calendar.gif" alt="Tasks App GIF" style="max-width: 100%; height: 350px;"/>', 
        key_features: 
        `
        <b>Key Features:</b>
        <ul>
            <li>Users can select a date and create multiple activities for that day.</li>
            <li>Each activity has a toggle option to mark it as 'Done' or 'Not Done.'</li>
            <li>Visual indicators (such as checkmarks) display task completion status.</li>
            <li>Clean and minimal UI for easy navigation and usage.</li>
        </ul>
        `,
        technologies_used: 
        `
        <b>Technologies Used:</b>
        <ul>
            <li><b>Frontend:</b> React Native, JSX.</li>
            <li><b>Backend:</b> JavaScript (ES6+).</li>
            <li><b>Styling and UI:</b> CSS mobile-first design.</li>
            <li><b>Deployment:</b> Project made for personal use, using GitHub for version control.</li>
        </ul>
        `,
        conclusion: "This project showcases my ability to build simple and intuitive mobile applications that improve productivity by helping users manage their daily tasks effectively."
    },
    4: 
    {
        title: "Supermarket List App",
        description: `A mobile application that helps users create and organize supermarket shopping lists, allowing them to easily track and add products for a more efficient shopping experience.`,      
        gif: '<img src="./imgs/supermarket.gif" alt="Supermarket List App GIF" style="max-width: 100%; height: 350px;"/>',  
        key_features: 
        `
        <b>Key Features:</b>
        <ul>
            <li>Create multiple shopping lists, each tailored to different shopping needs.</li>
            <li>Add various products like groceries, produce, and household items to specific lists.</li>
            <li>Add products to the database so they can be added to a list.</li>
            <li>Edit or remove items from lists to keep them up-to-date and organized.</li>
            <li>Responsive mobile design, ensuring a seamless user experience.</li>
        </ul>
        `,
        technologies_used:
        `
        <b>Technologies Used:</b>
        <ul>
            <li><b>Frontend:</b> React Native, JSX.</li>
            <li><b>Backend:</b> JavaScript (ES6+).</li>
            <li><b>Styling and UI:</b> CSS mobile-first design.</li>
            <li><b>Deployment:</b> Project made for personal use, using GitHub for version control.</li>
        </ul>
        `,
        conclusion: "This project showcases my ability to build user-focused mobile applications with dynamic functionality and an intuitive user interface."
    },
    5: 
    {
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing projects and skills, featuring a responsive design and smooth user experience.",
        gif: '<img src="./imgs/bento-portfolio.gif" alt="Tasks App GIF" style="max-width: 100%; height: 350px;"/>',
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
            <li><b>Frontend:</b> HTML5.</li>
            <li><b>Backend:</b> JavaScript (ES6+).</li>
            <li><b>Styling and UI:</b> CSS3 with animations for a smooth user experience.</li>
            <li><b>Deployment:</b> Hosted using Netlify.</li>
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
    const gif = document.getElementById('gif');
    const link = document.getElementById('link');
    const keyFeatures = document.getElementById('keyFeatures');
    const technologiesUsed = document.getElementById('technologiesUsed');
    const conclusion = document.getElementById('conclusion');

    // Update modal content with the corresponding details
    if (details[id]) {
        modalTitle.textContent = details[id].title;
        modalDescription.textContent = details[id].description;
        gif.innerHTML = details[id].gif;
        if(details[id].link) {
            link.style.display = "inline"; 
            link.href = details[id].link; 
        } else {
            link.style.display = "none"; 
        }
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
