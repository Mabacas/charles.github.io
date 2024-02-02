document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Simple form validation
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const subject = form.querySelector('#subject').value.trim();
        const message = form.querySelector('#message').value.trim();

        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate form submission (replace this with actual form submission logic)
        alert(`Form submitted!\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
        form.reset();
    });
});
