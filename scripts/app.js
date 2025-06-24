let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3000);

// Add audio element for spin sound
let spinSound = new Audio('assets/sounds/spin.mp3'); 

// Add spin count and limit
let spinCount = 0;
const spinLimit = 3;

spinBtn.addEventListener('click', () => {
    spinCount++;
    spinBtn.disabled = true; // Disable button
    spinBtn.style.pointerEvents = 'none'; // Prevent further clicks (for CSS)
    spinSound.currentTime = 0;
    spinSound.play();

    wheel.style.transform = `rotate(${value}deg)`;
    value += Math.ceil(Math.random() * 3000);   
});

// Stop sound and re-enable button when wheel stops spinning
wheel.addEventListener('transitionend', () => {
    spinSound.pause();
    spinSound.currentTime = 0;
    if (spinCount >= spinLimit) {
        spinBtn.disabled = true;
        spinBtn.classList.add('disabledBtn');
        spinBtn.style.pointerEvents = 'none';
    } else {
        spinBtn.disabled = false;
        spinBtn.classList.remove('disabledBtn');
        spinBtn.style.pointerEvents = '';
    }
});
