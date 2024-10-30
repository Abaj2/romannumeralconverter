const inputValue = document.getElementById('number');
const convertButton = document.getElementById('convert-btn')
const output = document.getElementById('output')
const outputText = document.getElementById('output-text')

function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let result = '';
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral; 
            num -= romanNumerals[i].value;      
        }
    }
    outputText.innerText = result

    return result; 
}


convertButton.onclick = function() {
  output.style.display = 'block'
  output.style.textAlign = 'center'
  if (inputValue.value === "") {
    outputText.innerText = "Please enter a valid number"
  }
  else if (inputValue.value < 1) {
    outputText.innerText = "Please enter a number greater than or equal to 1"
    outputText.style.top = '20px'
  }
  else if (inputValue.value >= 4000) {
    outputText.innerText = "Please enter a number less than or equal to 3999"
    outputText.style.top = '20px'
  }
  else{
    convertToRoman(inputValue.value)
  }
  
}
document.addEventListener('keydown', function(e) {
  if(event.key === 'Enter') {
    convertButton.click();
  }
});
