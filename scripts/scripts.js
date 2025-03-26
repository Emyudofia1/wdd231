function filterCourses(type) {
    let courses = document.querySelectorAll('.course');
    courses.forEach(course => {
        if (type === 'all' || course.classList.contains(type)) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    });
}

// Display last updated date
document.getElementById("lastUpdate").textContent = new Date().toLocaleString();
