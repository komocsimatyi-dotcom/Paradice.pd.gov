document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
        button.style.filter = 'blur(1px)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
            button.style.filter = 'none';
        }, 150);
    });
});
