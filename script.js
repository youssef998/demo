const box = document.getElementById('giftBox');
const lid = document.getElementById('lid');
const content = document.getElementById('message');

box.addEventListener('click', () => {
    box.classList.toggle('open');
});
