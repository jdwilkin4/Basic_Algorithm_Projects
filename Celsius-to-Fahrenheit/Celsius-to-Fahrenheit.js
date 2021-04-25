const inputValue = document.getElementById('number');
const convertBtn = document.getElementById('convert');
const result = document.getElementById('result');
const reset = document.getElementById('reset');



convertBtn.addEventListener("click", () => {

    //checking for invalid user input
    if (inputValue.value > 57 || inputValue.value < -90 || inputValue.value === '') {
        result.innerHTML = `Invalid input. Try again.`
    } else if (inputValue.value >= 30 && inputValue.value <= 57) {
        let fahrenheit = Math.floor((inputValue.value * 9 / 5) + 32);
        result.innerHTML = `
        <p>Ohh..that's HOT <i class="fas fa-fire"></i></p> 
        <p>${inputValue.value} degrees Celsius is</p>
        <p>${fahrenheit} degrees Fahrenheit </p>`
    } else {
        result.innerHTML = `${inputValue.value} degrees Celsius is ${fahrenheit} degrees Fahrenheit.`
    }

});

reset.addEventListener('click', () => {
    result.innerHTML = '';
    inputValue.value = '';
})