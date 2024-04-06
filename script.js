// script.js

// Function to handle click event on the "Explore Courses" button
function exploreCourses() {
    // You can add functionality here to navigate to the courses page or perform any other action
    console.log("Explore Courses button clicked");
}

// Function to fetch and display featured courses
function fetchFeaturedCourses() {
    // In a real-world scenario, you would fetch data from a server using AJAX or fetch API
    // For simplicity, we'll just mock some data here
    const courses = [
        { title: "JavaScript Fundamentals", description: "Learn the basics of JavaScript programming." },
        { title: "HTML & CSS Essentials", description: "Master the fundamentals of building web pages with HTML and CSS." },
        { title: "React Crash Course", description: "Get started with React.js and build interactive user interfaces." }
    ];

    // Get the container element where we'll append the course cards
    const container = document.querySelector('.featured-courses .container');

    // Clear any existing content in the container
    container.innerHTML = '';

    // Loop through the courses and create a course card for each one
    courses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card');
        card.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <a href="#" class="btn">Enroll Now</a>
        `;
        container.appendChild(card);
    });
}

// Call the fetchFeaturedCourses function when the page loads to display featured courses
window.onload = function() {
    fetchFeaturedCourses();
};
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var section = document.querySelector(".special-section");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the section, open the modal
section.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("explore-domain-btn").addEventListener("click", function() {
    const domainList = document.getElementById("domain-list");
    if (domainList.style.display === "none") {
        domainList.style.display = "block";
    } else {
        domainList.style.display = "none";
    }
});
