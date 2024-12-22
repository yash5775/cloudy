document.querySelector('.file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const mailList = document.getElementById('mailList');
        const mailItem = document.createElement('div');
        mailItem.className = 'mail-item';

        const mailName = document.createElement('p');
        mailName.textContent = file.name;

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

        mailItem.appendChild(mailName);
        mailItem.appendChild(downloadButton);
        mailItem.appendChild(viewer);
        mailList.appendChild(mailItem);
    }
});
