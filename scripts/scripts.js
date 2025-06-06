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


{/* <script> */}
function filterCourses(dept) {
    const courses = document.querySelectorAll('.course');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    courses.forEach(course => {
        if (dept === 'all' || course.classList.contains(dept)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}


