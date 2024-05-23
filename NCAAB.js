function generateCover() {
    const fileInput = document.getElementById('playerUpload');
    const playerImage = document.getElementById('playerImage');

    if (fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            playerImage.src = e.target.result;
            playerImage.style.display = 'block'; // Make the image visible
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

