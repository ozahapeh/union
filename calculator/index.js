const display = document.getElementById('display');

document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const value = e.target.textContent;

        if (value === 'C'){
            display.value = '';
        }else if (value ==='&larr;'){
            display.value = display.value.slice(0, -1)
        }else if (value === '='){
            try{
                const result = eval(display.value);
                display.value = result;
            } catch (error){
                display.value = 'Error';
            }
        }else {
            display.value += value;
        }
    }
});