
function openModal(id) {
    document.getElementById(id).style.display = 'block';
}
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}
// Open modal based on data attribute
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', () => {
        const modalId = item.getAttribute('data-modal');
        if (modalId) openModal(modalId);
    });
});

// Close modal when clicking the close button
document.querySelectorAll('.close-button').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        if (modal) closeModal(modal.id);
    });
});

// Close modal if user clicks outside the modal content
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});
