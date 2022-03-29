const rootElement = document.getElementById('app');

const element = document.createElement('div');
element.textContent = 'Hello world';
element.className = 'container';

rootElement.appendChild(element);
