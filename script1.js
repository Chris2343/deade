document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const feedbackInput = document.getElementById('feedback');
    const submitButton = document.getElementById('submit-btn');
    const reviewList = document.getElementById('review-list');
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];

    stars.forEach(star => {
        star.addEventListener('click', setRating);
    });

    submitButton.addEventListener('click', submitReview);

    renderReviews();

    function setRating(event) {
        const rating = parseInt(event.target.getAttribute('data-rating'));
        stars.forEach(star => {
            if (parseInt(star.getAttribute('data-rating')) <= rating) {
                star.innerHTML = '&#9733;';
            } else {
                star.innerHTML = '&#9734;';
            }
        });
    }

    function submitReview() {
        const rating = Array.from(stars).findIndex(star => star.innerHTML === '&#9733;') + 1;
        const feedback = feedbackInput.value.trim();
        
        if (!feedback || rating === 0) {
            return;
        }

        const review = { rating, feedback };
        storedReviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(storedReviews));

        feedbackInput.value = '';
        stars.forEach(star => star.innerHTML = '&#9734;');

        renderReviews();
    }

    function renderReviews() {
        reviewList.innerHTML = '';
        storedReviews.forEach((review, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'review-item';
            listItem.innerHTML = `
                <div class="rating">${'&#9733;'.repeat(review.rating)}</div>
                <div class="feedback">${review.feedback}</div>
            `;
            reviewList.appendChild(listItem);
        });
    }
});
