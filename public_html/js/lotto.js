var textarea = document.getElementById("numbers");
function clickButton() {
    textarea.value = getNumbers();
}

function getNumbers() {
    var numbers = new Array();

    for (var i = 0; i < 7; i++) {
        var number = Math.floor(Math.random() * 39) + 1;
        while (checkIfExists(numbers, numbers.length, number)) {
            number = Math.floor(Math.random() * 39) + 1;
        }
        numbers.push(number);
    }
    numbers.sort(function(a, b) {
        return a - b;
    });
    return numbers;
}

function checkIfExists(array, length, numberToCheck) {
    for (i = 0; i < length; i++) {
        if (numberToCheck === array[i]) {
            return true;
        }
    }
    return false;
}