const inputValue = document.getElementById('number');
const convertBtn = document.getElementById('convert');
const result = document.getElementById('result');
const reset = document.getElementById('reset');

const converter = () => {
    let userInput = inputValue.value
    let fahrenheit = Math.floor((userInput * 9 / 5) + 32);
    const conversionString = `<p>${userInput} degrees Celsius is</p> <p>${fahrenheit} degrees Fahrenheit </p>`


    //checking for invalid user input
    if (userInput > 57 || userInput < -90 || userInput === '') {
        result.innerHTML = `Invalid input. Try again.`
    } else if (userInput >= 30 && userInput <= 57) {
        result.innerHTML = `<p class="result-text">Ohh..that's HOT <i class="fas fa-fire"></i></p>${conversionString}`
    } else if (userInput >= 20 && userInput <= 29) {
        result.innerHTML = `<p class="result-text">Not to bad<i class="far fa-sun"></i></p> ${conversionString}`
    } else if (userInput >= 0 && userInput <= 19) {
        result.innerHTML = `<p class="result-text">It's a little chilly <i class="fas fa-snowflake"></i></p> ${conversionString}`
    } else {
        result.innerHTML = `<p class="result-text">Wow, that's cold! <i class="fas fa-icicles"></i></p>${conversionString}`
    }
}

//when a user clicks the convert button the converter function is executed
convertBtn.addEventListener("click", converter)

//when the user hits enter the converter function is executed
inputValue.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        converter(e)
    }
})

//if the user hits enter without an input
document.body.addEventListener('keydown', (e) => {
    if (e.key === "Enter" && inputValue.value === '') {
        result.innerHTML = 'Please provide an input.'
    }
})

reset.addEventListener('click', () => {
    result.innerHTML = '<i id="fire" class="fas fa-fire"></i>';
    inputValue.value = '';
})