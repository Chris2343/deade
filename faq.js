function toggleAnswer(element) {
    var content = element.nextElementSibling;
    element.querySelector("span").textContent = (content.style.display === "block") ? "+" : "-";
    content.style.display = (content.style.display === "block") ? "none" : "block";
}

document.addEventListener('DOMContentLoaded', function() {
    const dropdownOpen = document.getElementById('dropdown-open');
    const dropdownClose = document.getElementById('dropdown-close');
    const sidemenu = document.getElementById('sidemenu');

    dropdownOpen.addEventListener('click', function() {
        sidemenu.style.transform = 'translateX(0)';
    });

    dropdownClose.addEventListener('click', function() {
        sidemenu.style.transform = 'translateX(-100%)';
    });
})