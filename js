document.addEventListener('DOMContentLoaded', function () {
    // Fetch and populate language options
    fetch('languages.json')
        .then(response => response.json())
        .then(data => {
            const languageSelect = document.getElementById('languageSelect');
            data.forEach(language => {
                const option = document.createElement('option');
                option.value = language.code;
                option.text = language.name;
                languageSelect.add(option);
            });
        });
});

function translate() {
    const inputText = document.getElementById('inputText').value;
    const languageCode = document.getElementById('languageSelect').value;

    // Call translation API (replace with actual API call)
    const translatedText = translateText(inputText, languageCode);

    // Display translated text
    document.getElementById('outputText').innerText = translatedText;
}

// Replace this function with the actual translation API integration
function translateText(text, targetLanguage) {
    // Example: You can use an external translation API like Google Translate here
    // This is a placeholder function; replace it with the actual implementation
    return `Translation of "${text}" to ${targetLanguage} goes here.`;
}
