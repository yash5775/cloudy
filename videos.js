document.querySelector('.file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const videoList = document.getElementById('videoList');
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';

        const video = document.createElement('video');
        video.src = URL.createObjectURL(file);
        video.controls = true;

        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download';
        downloadButton.addEventListener('click', function() {
            const a = document.createElement('a');
            a.href = video.src;
            a.download = file.name;
            a.click();
        });

        videoItem.appendChild(video);
        videoItem.appendChild(downloadButton);
        videoList.appendChild(videoItem);
    }
});
