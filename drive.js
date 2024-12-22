document.querySelector('.file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const driveList = document.getElementById('driveList');
        const driveItem = document.createElement('div');
        driveItem.className = 'drive-item';

        const fileName = document.createElement('p');
        fileName.textContent = file.name;

        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download';
        downloadButton.addEventListener('click', function() {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(file);
            a.download = file.name;
            a.click();
        });

        const viewer = document.createElement('iframe');
        viewer.src = URL.createObjectURL(file);
        viewer.width = '100%';
        viewer.height = '500px';

        driveItem.appendChild(fileName);
        driveItem.appendChild(downloadButton);
        driveItem.appendChild(viewer);
        driveList.appendChild(driveItem);
    }
});
