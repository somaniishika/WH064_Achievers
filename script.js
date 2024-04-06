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
