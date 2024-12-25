document.querySelector('.file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const audioList = document.getElementById('audioList');
        const audioItem = document.createElement('div');
        audioItem.className = 'audio-item';

        const audio = document.createElement('audio');
        audio.src = URL.createObjectURL(file);
        audio.controls = true;

        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download';
        downloadButton.addEventListener('click', function() {
            const a = document.createElement('a');
            a.href = audio.src;
            a.download = file.name;
            a.click();
        });

        audioItem.appendChild(audio);
        audioItem.appendChild(downloadButton);
        audioList.appendChild(audioItem);
    }
});
