"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
const socket = (0, socket_io_client_1.io)();
const messageContainer = document.getElementById('message-container');
const messageList = document.getElementById('messages');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('input-message');
function addMessageToUI(message) {
    const li = document.createElement('li');
    li.innerText = message;
    messageList === null || messageList === void 0 ? void 0 : messageList.appendChild(li);
}
messageForm === null || messageForm === void 0 ? void 0 : messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();
    if (message) {
        socket.emit('message', message);
        messageInput.value = '';
    }
});
socket.on('message', (message) => {
    addMessageToUI(message);
});
