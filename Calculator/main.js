
/* create variable screenOutput to hold number */
let screenOutput = document.getElementById('screen');

/* this is to show number on screen */
function onClickNumber(num) {
    screenOutput.value += num;
}

/* this is to check if input is correct else it will alert error */
function compute() {
    try {
        screenOutput.value = eval(screenOutput.value);
    }
    catch (err) {
        alert(err.message)
        screenOutput.value = "";
    }
}

/* this is to clear the screen */
function klear() {
    screenOutput.value = "";
}

/* this is to erase number by 1 */
function del() {
    screenOutput.value = screenOutput.value.slice(0,-1);
}