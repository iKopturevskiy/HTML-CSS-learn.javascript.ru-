(function() {
    const close = document.getElementById('modal-close-menu');
    const modal = document.getElementById('modal-menu');
    const modalOpen = document.getElementById('modal-open-menu');

    if (!close || !modalOpen || !modal) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        modal.style.opacity = '1';
        modal.style.zIndex = '1';
    });

    close.addEventListener('click', () => {
        modal.style.opacity = '0';
        modal.style.zIndex = '0';
    });
})();