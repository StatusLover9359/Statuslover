document.getElementById('help-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:statuslover963@gmail.com?subject=Help Request from ${name}&body=${message} %0A%0A From: ${name} (%0AEmail: ${email})`;

    window.location.href = mailtoLink;
});