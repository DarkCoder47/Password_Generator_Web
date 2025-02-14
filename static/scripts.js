document.getElementById('password-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const numPasswords = document.getElementById('num_passwords').value;
    const length = document.getElementById('length').value;

    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            num_passwords: numPasswords,
            length: length
        })
    })
    .then(response => response.json())
    .then(data => {
        const passwordsContainer = document.getElementById('passwords-container');
        passwordsContainer.innerHTML = '';

        if (data.passwords) {
            data.passwords.forEach(password => {
                const passwordElement = document.createElement('div');
                passwordElement.classList.add('password');
                passwordElement.textContent = password;
                passwordsContainer.appendChild(passwordElement);
            });
        } else {
            passwordsContainer.textContent = data.error || 'An error occurred';
        }
    })
    .catch(error => console.error('Error:', error));
});
