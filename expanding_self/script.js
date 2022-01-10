const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        panels.forEach(ele => ele.classList.remove('active'));
        panel.classList.add('active');
    })
})