// Login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get username and password from form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username and password are correct
    if (username.length && password === 'admin') {
        // Store username and password in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Redirect to another page (you can change this URL)
        window.location.href = './ball/ball.html';
    } else if(username.length && password === 'user'){
               // Store username and password in localStorage
               localStorage.setItem('username', username);
               localStorage.setItem('password', password);
       
               // Redirect to another page (you can change this URL)
               window.location.href = './ballhight/ball.html';
    }
});
