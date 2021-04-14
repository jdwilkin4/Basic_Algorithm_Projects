// lowest -90 highest 57

const inputValue = document.getElementById('number');
const errorMsg = document.getElementById('error');
const convertBtn = document.getElementById('convert');
const result = document.getElementById('result');
const reset = document.getElementById('reset');



convertBtn.addEventListener("click", () => {
    //work on error messages
    let fahrenheit = Math.floor((inputValue.value * 9 / 5) + 32);
    result.innerHTML = `${inputValue.value} degrees Celsius is ${fahrenheit} degrees Fahrenheit.`
});

reset.addEventListener('click', () => {
    result.innerHTML = '';
    inputValue.value = '';
})