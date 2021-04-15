const inputValue = document.getElementById('number');
const convertBtn = document.getElementById('convert');
const result = document.getElementById('result');
const reset = document.getElementById('reset');



convertBtn.addEventListener("click", () => {

    if (inputValue.value > 57 || inputValue.value < -90 || inputValue.value === '') {
        result.innerHTML = `Invalid input. Try again.`
    } else {
        let fahrenheit = Math.floor((inputValue.value * 9 / 5) + 32);
        result.innerHTML = `${inputValue.value} degrees Celsius is ${fahrenheit} degrees Fahrenheit.`
    }

});

reset.addEventListener('click', () => {
    result.innerHTML = '';
    errorMsg.innerHTML = '';
    inputValue.value = '';
})