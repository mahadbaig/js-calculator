function buttontap(num) {
    var button = document.getElementById("screen")
    button.value += num
}

function results() {
    var result = document.getElementById("screen");
    var finalresult = eval(result.value)
}

function clear() {
    var clear = document.getElementById("screen")
    clear.value = ""
}