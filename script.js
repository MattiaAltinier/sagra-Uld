document.addEventListener('DOMContentLoaded', () => {
    const incrementCode = 'UccellatoriCimetta'; // Sostituisci con il tuo codice di accesso per increment.html

    const numberDisplay = document.getElementById('number-display');
    const fullScreenNumber = document.getElementById('full-screen-number');
    const incrementButton = document.getElementById('increment-button');
    const authButton = document.getElementById('auth-button');
    const authCode = document.getElementById('auth-code');
    const authError = document.getElementById('auth-error');
    const authSection = document.getElementById('auth-section');
    const contentSection = document.getElementById('content-section');
    
    let currentNumber = localStorage.getItem('currentNumber') || 0;

    const updateDisplays = () => {
        if (numberDisplay) numberDisplay.textContent = currentNumber;
        if (fullScreenNumber) fullScreenNumber.textContent = currentNumber;
    };

    if (authButton) {
        authButton.addEventListener('click', () => {
            const enteredCode = authCode.value;
            if (enteredCode === incrementCode) {
                authSection.style.display = 'none';
                contentSection.style.display = 'block';
                updateDisplays();
            } else {
                authError.textContent = 'Codice di accesso errato.';
            }
        });
    }

    if (incrementButton) {
        incrementButton.addEventListener('click', () => {
            currentNumber++;
            localStorage.setItem('currentNumber', currentNumber);
            updateDisplays();
        });
    }

    updateDisplays();
});
