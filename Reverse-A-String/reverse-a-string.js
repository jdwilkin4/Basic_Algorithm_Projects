const userInput = document.getElementById('userInput');
const reverseBtn = document.getElementById('reverse');
const result = document.getElementById('result');
const resetBtn = document.getElementById('reset');


reverseBtn.addEventListener('click', () => {
    if (userInput.value === '') {
        result.innerHTML = `Please provide an input.`;
        result.style.color = 'red';
    } else {
        let reversedWord = userInput.value.split('').reverse().join('')
        result.innerHTML = `When you reverse ${userInput.value} you will get ${reversedWord}.`;
        result.style.color = 'black';
    }

})

resetBtn.addEventListener('click', () => {
    result.innerHTML = '';
    userInput.value = '';
})






