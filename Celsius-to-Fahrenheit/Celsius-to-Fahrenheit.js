const inputValue = document.getElementById('number');
const convertBtn = document.getElementById('convert');
const result = document.getElementById('result');
const reset = document.getElementById('reset');



convertBtn.addEventListener("click", () => {
    let fahrenheit = Math.floor((inputValue.value * 9 / 5) + 32);
    const conversionString = `<p>${inputValue.value} degrees Celsius is</p>
    <p>${fahrenheit} degrees Fahrenheit </p>`

    //checking for invalid user input
    if (inputValue.value > 57 || inputValue.value < -90 || inputValue.value === '') {
        result.innerHTML = `Invalid input. Try again.`
    } else if (inputValue.value >= 30 && inputValue.value <= 57) {
        result.innerHTML = `<p class="result-text">Ohh..that's HOT <i class="fas fa-fire"></i></p>${conversionString}`
    } else if (inputValue.value >= 20 && inputValue.value <= 29) {
        result.innerHTML = `<p class="result-text">Not to bad<i class="far fa-sun"></i></p> ${conversionString}`
    } else if (inputValue.value >= 0 && inputValue.value <= 19) {
        result.innerHTML = `<p class="result-text">It's a little chilly <i class="fas fa-snowflake"></i></p> ${conversionString}`
    } else {
        result.innerHTML = `<p class="result-text">Wow, that's cold! <i class="fas fa-icicles"></i></p>${conversionString}`
    }

});


reset.addEventListener('click', () => {
    result.innerHTML = '';
    inputValue.value = '';
})