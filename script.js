// script.js

// Function to handle click event on the "Explore Courses" button
function exploreCourses() {
    // You can add functionality here to navigate to the courses page or perform any other action
    console.log("Explore Courses button clicked");
}

// Function to fetch and display featured courses
function fetchFeaturedCourses() {}
    // In a real-world scenario, you would fetch data from a server using AJAX or fetch API
    // For simplicity, we'll just mock some data here
    const courses = [
        { title: "Artificial Intelligence/Machine Learning", description: "Unlocking the potential of AI to drive efficiency, innovation, and growth." },
        { title: "Web Development", description: "Master the fundamentals of building web pages with HTML and CSS." },
        { title: "Data Analytics", description: "Turning raw data into actionable insights - that's our specialty." }
    ];
    const course = [
        {
            title: 'Course 1',
            description: 'Description of Course 1',
            links: {
                beginners: [
                    { title: 'Beginner Link 1', url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-artificial-intelligence' },
                    { title: 'Beginner Link 2', url: 'https://example.com/beginner-link-2' }
                ],
                intermediate: [
                    { title: 'Intermediate Link 1', url: 'https://example.com/intermediate-link-1' },
                    { title: 'Intermediate Link 2', url: 'https://example.com/intermediate-link-2' }
                ],
                advanced: [
                    { title: 'Advanced Link 1', url: 'https://example.com/advanced-link-1' },
                    { title: 'Advanced Link 2', url: 'https://example.com/advanced-link-2' }
                ]
            }
        }
        // Add more courses here...
    ];
    

    // Get the container element where we'll append the course cards
    const container2 = document.querySelector('.featured-courses .container2');

    // Clear any existing content in the container
    container2.innerHTML = '';

    // Loop through the courses and create a course card for each one
  courses.forEach(course => {
      const card = document.createElement('div');
         card.classList.add('course-card');
        card.innerHTML = `
            <h3>${course.title}</h3>
          <p>${course.description}</p>
             <a href="https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-artificial-intelligence" class="btn">Beginners </a>  <a href="https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-neural-networks-and-deep-learning" class="btn">Intermediate</a>  <a href="https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-neural-networks-and-deep-learning" class="btn">Advanced</a>
         `;
         container2.appendChild(card);
     });
 

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
// script.js

// Function to handle the click event on the "Enroll Now" button
function enrollNow() {
    // Specify the URL of your local page
    var localPageURL = "http://127.0.0.1:5500/quiz/quiz.html";
    


    // Open the local page in a new tab/window
    window.open(localPageURL, "_blank");
}

// Get the button element
var enrollNowButton = document.getElementById("enrollNowButton");

// Add event listener to the button
enrollNowButton.addEventListener("click", enrollNow);
function enrollNow() {
    // Specify the URL of your local page
    var localPageURL = "http://127.0.0.1:5500/quiz2/quiz2.html";
    


    // Open the local page in a new tab/window
    window.open(localPageURL, "_blank");
}

// Get the button element
var enrollNowButton = document.getElementById("enrollNowButton");

// Add event listener to the button
enrollNowButton.addEventListener("click", enrollNow);
