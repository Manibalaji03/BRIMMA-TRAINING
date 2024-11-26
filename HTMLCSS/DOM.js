document.getElementById('studentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Extract form data
    const name = document.getElementById('name').value;
    const regno = document.getElementById('registernumber').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('date').value;
    const year = document.getElementById('year').value;
    const department = document.getElementById('department').value;

    // Collect selected hobbies
    const hobbies = Array.from(document.querySelectorAll('input[name="hobbies[]"]:checked')).map(hobby => hobby.value);

    // Create card container
    const card = document.createElement('div');
    card.classList.add('card'); // Add CSS class

    // Create and append card title
    const cardTitle = document.createElement('h2');
    cardTitle.textContent = 'Student Profile';
    card.appendChild(cardTitle);

    // Create a function to add information lines
    const addInfoLine = (label, value) => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${label}:</strong> ${value}`;
        card.appendChild(p);
    };

    // Add student details to the card
    addInfoLine('Name', name);
    addInfoLine('Register No', regno);
    addInfoLine('Age', age);
    addInfoLine('DOB', dob);
    addInfoLine('Year', `${year} year`);
    addInfoLine('Department', department);
    addInfoLine('Hobbies', hobbies.length > 0 ? hobbies.join(', ') : 'None');

    // Append card to the page
    const profileCard = document.getElementById('profileCard');
    // Clear any existing card
    profileCard.appendChild(card);
});
