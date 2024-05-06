// public/username.js
const socket = io();

document.getElementById('username-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const username = document.getElementById('username').value;
    if (username.trim() !== '') {
        localStorage.setItem('username', username);
        window.location.href = '/chat.html';
    }
});
