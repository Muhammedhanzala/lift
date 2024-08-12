
window.addEventListener('load', function() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        document.getElementById('auth-container').style.display = 'flex';
        document.getElementById('main-content').style.display = 'none';
    }
});


function showLoginForm() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}


function showSignUpForm() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}

function handleSignUp(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;


    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Sign Up Successful! You can now log in.');
        showLoginForm();
    }
}


function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem('loggedIn', 'true');
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        alert('Invalid username or password.');
    }
}


const lift = document.getElementById('lift');
const floorIndicator = document.getElementById('floor-indicator');

const floors = {
    1: 'Floor 1',
    2: 'Floor 2',
    3: 'Floor 3',
    4: 'Floor 4',
    5: 'Floor 5'
};

const positions = {
    1: 'translateY(600px)',
    2: 'translateY(450px)',
    3: 'translateY(300px)',
    4: 'translateY(150px)',
    5: 'translateY(45px)'
};

function goToFloor(floor) {
    lift.style.transform = positions[floor];
    floorIndicator.textContent = floors[floor];
    localStorage.setItem('currentFloor', floor);
}

function goToGround() {
    lift.style.transform = 'translateY(600px)';
    floorIndicator.textContent = 'Ground Floor';
    localStorage.setItem('currentFloor', '0');
}

function initializeLift() {
    const savedFloor = localStorage.getItem('currentFloor') || '0';
    if (savedFloor === '0') {
        goToGround();
    } else {
        goToFloor(parseInt(savedFloor));
    }
}


window.addEventListener('load', initializeLift);
