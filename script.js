document.getElementById("skipBtn").addEventListener("click", function() {
    window.location.href = "login.html";
});

document.getElementById("circleIcon").addEventListener("click", function() {
    window.location.href = "burn.html";
});

function redirectToTracker() {
    // Redirect to tracker.html
    window.location.href = "tracker.html";
}

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Fetch the registered email and password from localStorage
    var registeredEmail = localStorage.getItem("email");
    var registeredPassword = localStorage.getItem("password");

    // Check if the entered email and password match the registered ones
    if (email === registeredEmail && password === registeredPassword) {
        // Redirect to home.html if login is successful
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

function register() {
    // Retrieve registration data
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Store registration data in localStorage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // Redirect to login page
    window.location.href = "login.html";
}

 // Add event listener to toggle switches
 const toggleSwitches = document.querySelectorAll('.switch input');
 toggleSwitches.forEach(switch_ => {
   switch_.addEventListener('change', () => {
     // Add your logic here to handle the toggle switch changes
     console.log(`Switch ${switch_.checked ? 'on' : 'off'}`);
   });
 });