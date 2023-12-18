// Get references to the input and suggestions ul
const destinationInput = document.getElementById('destinationInput');
const suggestionsList = document.getElementById('suggestions');

// Hardcoded suggestions for demonstration purposes
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

// Add event listener to input for real-time suggestions
destinationInput.addEventListener('input', updateSuggestions);

function updateSuggestions() {
    // Clear previous suggestions
    suggestionsList.innerHTML = '';

    // Get the current input value
    const inputText = destinationInput.value.toLowerCase();

    // Filter suggestions based on the input value
    const filteredSuggestions = allSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(inputText)
    );

    // Display filtered suggestions as a list
    filteredSuggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('li');
        suggestionItem.textContent = suggestion;
        suggestionsList.appendChild(suggestionItem);
    });
}
