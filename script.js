
    const sidemenu = document.getElementById('sidemenu');
    const dropdownClose = document.getElementById('dropdown-close');
    const signinButton = document.getElementById('signin-button');

    // Toggle sidemenu visibility when dropdown button is clicked
    dropdownClose.addEventListener('click', () => {
        sidemenu.classList.toggle('active');
    });

    // Hide sidemenu when a navigation link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidemenu.classList.remove('active');
        });
    });

    // Handle Sign In button click (you can replace this with your own sign-in logic)
    signinButton.addEventListener('click', () => {
        // Add your sign-in code here
        alert('Sign in button clicked');
    });

    document.addEventListener("DOMContentLoaded", function() {
        var faqTitles = document.querySelectorAll(".faq-title");
    
        faqTitles.forEach(function(title) {
            title.addEventListener("click", function() {
                title.parentElement.classList.toggle("open");
            });
        });
    });
    
