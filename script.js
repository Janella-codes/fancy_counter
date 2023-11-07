const counterEl = document.querySelector('.counter');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');
const counterTitleEl = document.querySelector('.counter__title');

resetButtonEl.addEventListener('click', () => {
    // set counter element with new value 
    counterValueEl.textContent = 0;

    // remove visual feedback from user
    counterEl.classList.remove('counter--limit');

    // reset counter title
    counterTitleEl.textContent = 'Fancy Counter';

    // enable increase and decrease buttons 
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;

    // unfocus (blur) reset button
    resetButtonEl.blur();

});

decreaseButtonEl.addEventListener('click', () => {
    //get current value of counter
    const currentValue = counterValueEl.textContent;

    //convert value to number type
    const currentValueAsNumber = +currentValue;

    //decrement by 1 
    let newValue = currentValueAsNumber - 1;

    // check if new value is less than 0
    if (newValue < 0) {
        //if it is, set value to 0
        newValue = 0;
    }

    // update counter element with new value 
    counterValueEl.textContent = newValue;

    // unfocus (blur) decrease button
    decreaseButtonEl.blur();

});

function incrementCounter() {
    //get current value of counter
    const currentValue = counterValueEl.textContent;

    //convert value to number type
    const currentValueAsNumber = +currentValue;

    //increment by 1 
    let newValue = currentValueAsNumber + 1;

    // check if new value is greater than 10

    if (newValue > 7 || newValue == 7) {
        //if it is, set value to 10
        newValue = 7;

        // give visual feedback to user
        counterEl.classList.add('counter--limit');

        // update counter title to say limit reached
        counterTitleEl.innerHTML = 'Limit! Buy <b>Pro</b> for > 7';

        // disable increase and decrease buttons
        increaseButtonEl.disabled = true;
        decreaseButtonEl.disabled = true;
    }   

    // set counter element with new value 
    counterValueEl.textContent = newValue;

    // unfocus (blur) increase button
    increaseButtonEl.blur();
}

increaseButtonEl.addEventListener('click', incrementCounter);
document.addEventListener('keydown', incrementCounter); 