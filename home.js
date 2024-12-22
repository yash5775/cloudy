function openPage(pageUrl) {
    window.location.href = pageUrl;
}

// Donut Chart for Storage Box
const ctx = document.getElementById('storageChart').getContext('2d');
const storageChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Used', 'Free'],
        datasets: [{
            data: [60, 40], // Example data: 60% used, 40% free
            backgroundColor: ['#36A2EB', '#6B7280'], // Muted red and neutral gray
            hoverBackgroundColor: ['rgb(23, 143, 224)', '#4B5563'], // Slightly darker shades for hover
            borderColor: '#1F2937', // Border color matching dark theme
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#E5E7EB', // Light gray for text
                }
            }
        }
    }
});