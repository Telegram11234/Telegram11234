let body = document.querySelector('body');
let audio = document.querySelector('#audio');
let counterDisplay = document.getElementById('counter');
let startBtn = document.getElementById('startBtn');
let counter = 1000; // Initial counter value
let interval; // For incrementing the counter
let countdownInterval; // For the countdown timer
let countdownTime = 21600; // 6 hours in seconds (21600 seconds)

// Function to format the countdown time as hh:mm:ss
function formatTime(seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = seconds % 60;
    return `${h}h ${m < 10 ? '0' + m : m}m ${s < 10 ? '0' + s : s}s`;
}

// Function to start the countdown and update the button display
function startCountdown() {
    body.classList.add('on'); // Turn on the light
    audio.play();
    startBtn.disabled = true; // Disable the button while counting down

    countdownInterval = setInterval(() => {
        countdownTime--;
        startBtn.innerText = formatTime(countdownTime); // Update button with formatted time

        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            startBtn.innerText = '0h 00m 00s'; // Final display when countdown ends
            body.classList.remove('on'); // Turn off the light when countdown ends
            startBtn.disabled = false; // Re-enable the button
            clearInterval(interval); // Stop the counter incrementing
        }
    }, 1000);
}

// Button click event to start the countdown and counter
startBtn.onclick = function() {
    if (!body.classList.contains('on')) {
        // Reset countdown and button text
        countdownTime = 21600; // Reset to 6 hours
        startBtn.innerText = formatTime(countdownTime);

        // Start the countdown
        startCountdown();

        // Start incrementing the counter
        interval = setInterval(() => {
            counter++;
            counterDisplay.innerText = counter; // Update display with new counter value
        }, 1000);
    }
};
