function moveButton() {
    // Get the "No" button element
    const noButton = document.querySelector('.no-btn');

    // Get the window width (for horizontal movement)
    const windowWidth = window.innerWidth;

    // Generate a random horizontal position for the button (within window bounds)
    const randomX = Math.floor(Math.random() * (windowWidth - noButton.offsetWidth));

    // Apply the random horizontal position to the "No" button
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
}

function showModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
