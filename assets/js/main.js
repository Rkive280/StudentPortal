// Login form validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Default credentials
    const defaultEmail = 'student@school.edu';
    const defaultPassword = 'School123';
    
    // Simple validation
    if (email && password) {
        if (email === defaultEmail && password === defaultPassword) {
            // Store user session in localStorage
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('userEmail', email);
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid credentials. Use:\nEmail: student@school.edu\nPassword: School123');
        }
    } else {
        alert('Please fill in all fields');
    }
});

// Check if user is already logged in
if (localStorage.getItem('loggedIn') === 'true' && !window.location.pathname.includes('index.html')) {
    window.location.href = 'dashboard.html';
}

// Logout functionality
function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = 'index.html';
}