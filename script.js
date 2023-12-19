
var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;

}

function goHome() {
    window.location.href = 'index.html';
}


const destinationInput = document.getElementById('destinationInput');
const suggestionsList = document.getElementById('suggestions');

const allSuggestions = [
    'Paris, France',
    'Tokyo, Japan',
    'New York, USA',
    'Rome, Italy',
    'Sydney, Australia',
    'Barcelona, Spain',
    'Cape Town, South Africa',
    'Bangkok, Thailand',
    'Vancouver, Canada',
    'Dubai, UAE'
];

destinationInput.addEventListener('input', updateSuggestions);

function updateSuggestions() {
    suggestionsList.innerHTML = '';
    const inputText = destinationInput.value.toLowerCase();
    const filteredSuggestions = allSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(inputText)
    );

    filteredSuggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('li');
        suggestionItem.textContent = suggestion;
        suggestionsList.appendChild(suggestionItem);
    });
}
