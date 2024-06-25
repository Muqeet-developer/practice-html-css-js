const display = document.querySelector('.display');
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.textContent;
        if (keyValue === 'c') {
            display.value = '';
        } else if (keyValue === '=') {
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'SORY ERROR';
            }
        } else {
            display.value += keyValue;
        }
    });
});
