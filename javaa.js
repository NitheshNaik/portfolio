document.addEventListener('DOMContentLoaded', function() {
    const changingText = document.querySelector('.changing-text');
    const words = ['Coder', 'Developer','Designer'];
    let index = 0;

    setInterval(() => {
        changingText.textContent = words[index];
        index = (index + 1) % words.length;
    }, 1500); // Change every 3 seconds
});
