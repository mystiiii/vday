document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const instructionText = document.querySelector('.instruction-text');
    if (envelope) {
        envelope.addEventListener('click', () => {
            envelope.classList.toggle('open');
            if (envelope.classList.contains('open')) {
                if (instructionText) {
                    instructionText.textContent = "Happy Valentine's Day!";
                    instructionText.style.animation = 'none';
                }
            } else {
                if (instructionText) {
                    instructionText.textContent = "Click to open";
                    instructionText.style.animation = 'pulse 2s infinite';
                }
            }
        });
    }


    // Spotify Widget Toggle
    const spotifyToggle = document.getElementById('spotify-toggle');
    const spotifyContainer = document.getElementById('spotify-container');

    if (spotifyToggle && spotifyContainer) {
        spotifyToggle.addEventListener('click', () => {
            spotifyContainer.classList.toggle('active');
        });
    }
    // Drag functionality for photo memories
    const photos = document.querySelectorAll('.scattered-photo');
    photos.forEach(photo => {
        // Simple random floating animation delay
        photo.style.setProperty('--rotation', (Math.random() * 20 - 10) + 'deg');
        makeDraggable(photo);
    });
    function makeDraggable(element) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        element.onmousedown = dragMouseDown;
        element.ontouchstart = dragMouseDown; // Support for touch
        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX || e.touches[0].clientX;
            pos4 = e.clientY || e.touches[0].clientY;
            // Bring to front
            element.style.zIndex = 100;
            element.style.cursor = 'grabbing';
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
            document.ontouchend = closeDragElement;
            document.ontouchmove = elementDrag;
        }
        function elementDrag(e) {
            e = e || window.event;
            // e.preventDefault(); // This might interfere with scrolling if not careful, but needed for drag
            // calculate the new cursor position:
            let clientX = e.clientX || e.touches[0].clientX;
            let clientY = e.clientY || e.touches[0].clientY;
            pos1 = pos3 - clientX;
            pos2 = pos4 - clientY;
            pos3 = clientX;
            pos4 = clientY;
            // set the element's new position:
            element.style.top = (element.offsetTop - pos2) + "px";
            element.style.left = (element.offsetLeft - pos1) + "px";
            // Remove percentage based positioning once moved to keep it stable
        }
        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
            document.ontouchend = null;
            document.ontouchmove = null;
            element.style.zIndex = 10; // Return to normal high z-index
            element.style.cursor = 'grab';
        }
    }
});