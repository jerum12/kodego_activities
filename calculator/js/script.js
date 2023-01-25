function clearScreen() {
    document.getElementById('result').value = "";
}

function display(value) {
        document.getElementById('result').value += value;
}   

function compute() {
        let x = document.getElementById('result').value;
        alert(x);
}