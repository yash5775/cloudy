function handleFileSelect(event) {
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        alert(`Photo selected: ${fileName}`);
    }
}