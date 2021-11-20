function buttontap(num) {
    var button = document.getElementById("screen");
    button.value += num
}

function results() {
    var result = document.getElementById("screen");
    var finalresult = eval(result.value)
    result.value = finalresult
}

function oneClear(){
    var clear = document.getElementById("screen")

    // console.log(input.value.slice(0 , -1))

    clear.value = clear.value.slice(0 , -1)

}

function allClear(){
    var allclear = document.getElementById("screen")
    allclear.value = ""   
}