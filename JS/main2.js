



// Add selected occasion to multi-select
function addOccasion() {
    const select = document.getElementById('occasionSelect');
    const selectedDiv = document.getElementById('occasionSelected');
    const value = select.value;
    if (value && ![...selectedDiv.children].some(child => child.textContent === value)) {
        const span = document.createElement('span');
        span.innerHTML = `${value} <i onclick="this.parentElement.remove()">x</i>`;
        selectedDiv.appendChild(span);
    }
    select.value = '';
}

// Add selected relationship to multi-select
function addRelationship() {
    const select = document.getElementById('relationshipSelect');
    const selectedDiv = document.getElementById('relationshipSelected');
    const value = select.value;
    if (value && ![...selectedDiv.children].some(child => child.textContent === value)) {
        const span = document.createElement('span');
        span.innerHTML = `${value} <i onclick="this.parentElement.remove()">x</i>`;
        selectedDiv.appendChild(span);
    }
    select.value = '';
}
// Add selected occasion to multi-select
function addOccasion() {
    const select = document.getElementById('occasionSelect');
    const selectedDiv = document.getElementById('occasionSelected');
    const value = select.value;

    // Check if the value is already added
    if (value && !Array.from(selectedDiv.children).some(child => child.dataset.value === value)) {
        const span = document.createElement('span');
        span.dataset.value = value; // Add a unique identifier to avoid duplicates
        span.innerHTML = `${value} <i onclick="this.parentElement.remove()">x</i>`;
        selectedDiv.appendChild(span);
    }
    select.value = ''; // Reset the select dropdown
}

// Add selected relationship to multi-select
function addRelationship() {
    const select = document.getElementById('relationshipSelect');
    const selectedDiv = document.getElementById('relationshipSelected');
    const value = select.value;

    // Check if the value is already added
    if (value && !Array.from(selectedDiv.children).some(child => child.dataset.value === value)) {
        const span = document.createElement('span');
        span.dataset.value = value; // Add a unique identifier to avoid duplicates
        span.innerHTML = `${value} <i onclick="this.parentElement.remove()">x</i>`;
        selectedDiv.appendChild(span);
    }
    select.value = ''; // Reset the select dropdown
}

// Handle form submission
document.getElementById('SuggestionForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // Show success message
    alert('Thank you for your suggestion!');
    e.target.reset();
});


//  Function to create a snowflake
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '.'; // Snowflake character
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowflake.style.opacity = Math.random();
    document.body.appendChild(snowflake);

    // GSAP animation for snowflake falling
    gsap.to(snowflake, {
        y: window.innerHeight + 50, // Move to the bottom of the screen
        x: "+=" + (Math.random() * 50 - 25), // Slight horizontal drift
        rotation: Math.random() * 360, // Rotating effect
        duration: Math.random() * 5 + 3, // Random fall speed
        ease: 'linear',
        onComplete: () => {
            snowflake.remove(); // Remove snowflake after animation ends
        }
    });
}

// Create snowflakes continuously
setInterval(createSnowflake, 100);


// Animate background shapes
gsap.to('.bg-shape', {
    y: 20,
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut',
    stagger: 0.2
});


const budgetRange = document.getElementById('budgetRange');
const budgetValue = document.getElementById('budgetValue');

budgetRange.addEventListener('input', function () {
    budgetValue.textContent = '$' + this.value;
});


