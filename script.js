function getResult(value) {
    const resultField = document.getElementById("result");
    if (resultField.value === "0" || resultField.value === "Error") {
        resultField.value = value;
    } else {
        resultField.value += value;
    }
}
function clearResult() {
    document.getElementById("result").value = "";
}

// Function to delete the last character
function deleteLast() {
    const resultField = document.getElementById("result");
    resultField.value = resultField.value.slice(0, -1);
}

// Function to evaluate the expression
function calculateResult() {
    try {
        const resultField = document.getElementById("result");
        resultField.value = eval(resultField.value);
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

// Optional: Allow keyboard inputs for better UX
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '%', '.', '00'].includes(key)) {
        getResult(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearResult();
    }
});