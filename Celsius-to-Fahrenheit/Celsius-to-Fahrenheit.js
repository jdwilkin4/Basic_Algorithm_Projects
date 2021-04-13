// lowest -90 highest 57

const inputValue = document.getElementById('number').value;
const errorMsg = document.getElementById('error');
const convertBtn = document.getElementById('convert');
const result = document.getElementById('result');


convertBtn.addEventListener("click", () => {
    result.innerHTML = (inputValue * 9 / 5) + 32;
});

