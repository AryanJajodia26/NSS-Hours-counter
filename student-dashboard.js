// Update date and time
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    document.getElementById('datetime').textContent = now.toLocaleDateString('en-US', options);
}

setInterval(updateDateTime, 1000);
updateDateTime();

// Progress meter animation
function updateProgressMeter(sem1Hours, sem2Hours) {
    const totalHours = sem1Hours + sem2Hours;
    document.getElementById('total-hours').textContent = totalHours;

    const sem1Progress = (sem1Hours / 60) * 879.6; // 879.6 is the circumference of the circle
    const sem2Progress = (sem2Hours / 60) * 879.6;

    document.querySelector('.sem1').style.strokeDasharray = `${sem1Progress} 879.6`;
    document.querySelector('.sem2').style.strokeDasharray = `${sem2Progress} 879.6`;
}

// Example usage
updateProgressMeter(30, 45);

// Task progress update
function updateTaskProgress(verified, pending, rejected) {
    document.getElementById('verified-hours').textContent = verified;
    document.getElementById('pending-hours').textContent = pending;
    document.getElementById('rejected-hours').textContent = rejected;
}

// Example usage
updateTaskProgress(50, 15, 10);

// Add event cards
function addEventCard(title, date, description) {
    const eventList = document.querySelector('.event-list');
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
        <h3>${title}</h3>
        <p>${date}</p>
        <p>${description}</p>
    `;
    eventList.appendChild(card);
}

// Example usage
addEventCard('Tree Plantation Drive', '2023-07-15', 'Join us in planting trees around the campus.');
addEventCard('Blood Donation Camp', '2023-07-22', 'Donate blood and save lives.');
addEventCard('Cleanliness Drive', '2023-07-29', 'Help keep our campus clean and green.');

// Submit hours button click event
document.getElementById('submit-hours').addEventListener('click', function() {
    alert('Submitting hours functionality to be implemented.');
});

// Logout button click event
document.getElementById('logout').addEventListener('click', function() {
    alert('Logout functionality to be implemented.');
});

// Generate QR Code
function generateQRCode(studentId) {
    const qr = new QRCode(document.getElementById("qrcode"), {
        text: `https://nss.iitp.ac.in/student/${studentId}`,
        width: 128,
        height: 128
    });
}

// Example usage
generateQRCode("2301ME25");

// Hour details dropdown
document.getElementById('hour-details').addEventListener('change', function(e) {
    const selectedSemester = e.target.value;
    if (selectedSemester === 'sem1') {
        alert('Semester 1 details: [Add your logic here]');
    } else if (selectedSemester === 'sem2') {
        alert('Semester 2 details: [Add your logic here]');
    }
});
