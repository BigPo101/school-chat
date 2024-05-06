// public/chat.js
const socket = io();
const username = localStorage.getItem('username');

if (!username) {
    window.location.href = '/';
}

document.querySelector('h1').textContent += `, ${username}`;

const messages = document.getElementById('messages');
const form = document.getElementById('chat-form');
const input = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const message = input.value;
    if (message.trim() !== '') {
        socket.emit('chat message', { username, message });
        input.value = '';
    }
});

socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = `${msg.username}: ${msg.message}`;
    messages.appendChild(item);
});
