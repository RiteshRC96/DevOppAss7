// Example: Simple alert message for contact form submission (placeholder functionality)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon.');
            form.reset();
        });
    }
});
