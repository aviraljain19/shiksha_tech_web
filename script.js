document.getElementById('searchButton').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value;
    const coursesSection = document.getElementById('courses');

    // Dummy course data; replace this with actual data
    const courses = [
        { name: 'Course 1' },
        { name: 'Course 2' },
        // ... add more courses
    ];

    let html = '';
    courses.forEach(course => {
        if (course.name.toLowerCase().includes(searchInput.toLowerCase())) {
            html += `<div class="course-item">${course.name}</div>`;
        }
    });

    coursesSection.innerHTML = html;
});
// Initialize carousel after DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});
