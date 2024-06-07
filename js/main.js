document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;
    const counterDisplay = document.getElementById('counter');
    const mainButton = document.getElementById('main-button');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    mainButton.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = `${counter}`;
        // Adding a class for animation
        mainButton.classList.add('clicked');
        counterDisplay.classList.add('animate-counter');
        // Removing the class after animation
        setTimeout(() => {
            mainButton.classList.remove('clicked');
            counterDisplay.classList.remove('animate-counter');
        }, 200);
    });

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            document.querySelectorAll('#content > div').forEach(tab => {
                tab.style.display = tab.id === targetTab ? 'block' : 'none';
            });
        });
    });

    // Initialize to show the main page content
    document.getElementById('main-page').style.display = 'block';
});
