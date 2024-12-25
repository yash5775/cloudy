document.querySelector('.file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const photoList = document.getElementById('photoList');
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';

        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.alt = file.name;

        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download';
        downloadButton.addEventListener('click', function() {
            const a = document.createElement('a');
            a.href = img.src;
            a.download = file.name;
            a.click();
        });

        photoItem.appendChild(img);
        photoItem.appendChild(downloadButton);
        photoList.appendChild(photoItem);
    }
});
