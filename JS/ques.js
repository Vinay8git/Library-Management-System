function submitForm() {
    const form = document.getElementById('questionForm');
    const resultDiv = document.getElementById('result');

    const formData = new FormData(form);
    let resultString = 'Form Data:\n';

    for (const [key, value] of formData.entries()) {
        resultString += `${key}: ${value}\n`;
    }

    resultDiv.textContent = resultString;
}
