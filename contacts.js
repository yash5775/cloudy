document.querySelector('.file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const contactsList = document.getElementById('contactsList');
        const contactsItem = document.createElement('div');
        contactsItem.className = 'contacts-item';

        const contactName = document.createElement('p');
        contactName.textContent = `File Name: ${file.name}`;

        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download';
        downloadButton.addEventListener('click', function() {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(file);
            a.download = file.name;
            a.click();
        });

        // Determine file type and parse accordingly
        const fileExtension = file.name.split('.').pop().toLowerCase();
        if (fileExtension === 'vcf') {
            // Parse vCard (.vcf) file
            parseVCard(file, contactsItem);
        } else if (fileExtension === 'csv') {
            // Parse CSV (.csv) file
            parseCSV(file, contactsItem);
        } else if (fileExtension === 'xml') {
            // Parse XML (.xml) file
            parseXML(file, contactsItem);
        } else {
            // Unsupported file type
            contactName.textContent = `Unsupported file type: ${file.name}`;
        }

        contactsItem.appendChild(contactName);
        contactsItem.appendChild(downloadButton);
        contactsList.appendChild(contactsItem);
    }
});

function parseVCard(file, contactsItem) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const fileContent = e.target.result;
        const nameMatch = fileContent.match(/FN:(.*)/);
        const phoneMatch = fileContent.match(/TEL:(.*)/);
        const emailMatch = fileContent.match(/EMAIL:(.*)/);

        // If we find a match for each field, display it
        const contactName = document.createElement('p');
        contactName.textContent = `Name: ${nameMatch ? nameMatch[1] : 'N/A'}`;

        const contactPhone = document.createElement('p');
        contactPhone.textContent = `Phone: ${phoneMatch ? phoneMatch[1] : 'N/A'}`;

        const contactEmail = document.createElement('p');
        contactEmail.textContent = `Email: ${emailMatch ? emailMatch[1] : 'N/A'}`;

        contactsItem.appendChild(contactName);
        contactsItem.appendChild(contactPhone);
        contactsItem.appendChild(contactEmail);
    };
    reader.readAsText(file);
}

function parseCSV(file, contactsItem) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const fileContent = e.target.result;
        const rows = fileContent.split('\n');
        rows.forEach((row, index) => {
            if (index > 0) {  // Skip header row
                const columns = row.split(',');
                if (columns.length > 1) {
                    const contactName = document.createElement('p');
                    contactName.textContent = `Name: ${columns[0]}`;

                    const contactPhone = document.createElement('p');
                    contactPhone.textContent = `Phone: ${columns[1]}`;

                    const contactEmail = document.createElement('p');
                    contactEmail.textContent = `Email: ${columns[2]}`;

                    contactsItem.appendChild(contactName);
                    contactsItem.appendChild(contactPhone);
                    contactsItem.appendChild(contactEmail);
                }
            }
        });
    };
    reader.readAsText(file);
}

function parseXML(file, contactsItem) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const fileContent = e.target.result;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(fileContent, 'text/xml');

        // Extract details from XML (assuming <name>, <phone>, <email> tags)
        const contactName = xmlDoc.getElementsByTagName('name')[0]?.textContent || 'N/A';
        const contactPhone = xmlDoc.getElementsByTagName('phone')[0]?.textContent || 'N/A';
        const contactEmail = xmlDoc.getElementsByTagName('email')[0]?.textContent || 'N/A';

        const nameElem = document.createElement('p');
        nameElem.textContent = `Name: ${contactName}`;

        const phoneElem = document.createElement('p');
        phoneElem.textContent = `Phone: ${contactPhone}`;

        const emailElem = document.createElement('p');
        emailElem.textContent = `Email: ${contactEmail}`;

        contactsItem.appendChild(nameElem);
        contactsItem.appendChild(phoneElem);
        contactsItem.appendChild(emailElem);
    };
    reader.readAsText(file);
}