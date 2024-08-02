const lift = document.getElementById('lift');
const floorIndicator = document.getElementById('floor-indicator');

const floors = {
    0: 'Ground Floor',
    1: 'Floor 1',
    2: 'Floor 2',
    3: 'Floor 3',
    4: 'Floor 4',
    5: 'Floor 5',
    6: 'Floor 6'
};

const positions = {
    0: 'translateY(600px)',
    1: 'translateY(500px)',
    2: 'translateY(400px)',
    3: 'translateY(300px)',
    4: 'translateY(200px)',
    5: 'translateY(100px)',
    6: 'translateY(0px)'
};

function goToFloor(floor) {
    lift.style.transform = positions[floor];
    floorIndicator.textContent = floors[floor];
}

function goToGround() {
    lift.style.transform = positions[0];
    floorIndicator.textContent = floors[0];
}