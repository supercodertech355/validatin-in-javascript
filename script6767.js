// Async function to fetch greeting
async function fetchGreeting() {
    const loadingEl = document.getElementById('loading');
    const resultEl = document.getElementById('result');
    const greetingEl = document.getElementById('greeting');
    const btn = document.getElementById('fetchBtn');

    try {
        // Show loading state
        loadingEl.style.display = 'block';
        resultEl.style.display = 'none';
        btn.disabled = true;

        // Simulate async API call with timeout
        const greeting = await getAsyncGreeting();

        // Hide loading and show result
        loadingEl.style.display = 'none';
        greetingEl.textContent = greeting;
        resultEl.style.display = 'block';

    } catch (error) {
        loadingEl.style.display = 'none';
        greetingEl.textContent = 'Error: ' + error.message;
        resultEl.style.display = 'block';
    } finally {
        btn.disabled = false;
    }
}

// Async function that simulates API delay
async function getAsyncGreeting() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const greetings = [
                'Hello! Welcome to async programming! 🎉',
                'Greetings! Your async code is working! ✨',
                'Welcome! Async/await is awesome! 🚀',
                'Hi there! This was fetched asynchronously! 💫'
            ];
            const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
            resolve(randomGreeting);
        }, 1500); // 1.5 second delay to show async behavior
    });
}

// Event listener for button
document.getElementById('fetchBtn').addEventListener('click', fetchGreeting);