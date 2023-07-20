const socket = io();

const messageContainer = document.getElementById('message-container');
const messageList = document.getElementById('messages');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('input-message') as HTMLInputElement;

function addMessageToUI(message: string) {
  const li = document.createElement('li');
  li.innerText = message;
  messageList.appendChild(li);
}

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (message) {
    socket.emit('message', message);
    messageInput.value = '';
  }
});

socket.on('message', (message: string) => {
  addMessageToUI(message);
});
