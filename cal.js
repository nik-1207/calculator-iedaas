dis = (key) => {
    if (key == "+" || key == "-" || key == "*" || key == "/") {
        document.getElementById("num1").innerText = document.getElementById("num2").innerText + key
        document.getElementById("num2").innerText = ""

    } else {
        document.getElementById("num2").innerText += key
    }

}
solve = () => {
    num1 = document.getElementById("num1").innerText
    num2 = document.getElementById("num2").innerText
    operation = num1[num1.length - 1]
    num1 = num1.substring(0, num1.length - 1)
    try {
        if (Number.isInteger(num1)) {
            num1 = parseInt(num1)
        } else if (Number(num1) === num1 && num1 % 1 !== 0) {
            num1 = parseFloat(num1)
        } else {
            x = "Invalid Input"
        }
        console.log(parseFloat("0.0.1"))
        x = eval((num1 + operation + num2))
        if (x == "Infinity" || x == "NAN") {
            x = "Invalid Input"
        }
        document.getElementById("num2").innerText = x
    } catch (e) {

        console.log(e)
        document.getElementById("num1").innerText = ""
        document.getElementById("num2").innerText = "Invalid Input"
    }
}
reset = () => {
    document.getElementById("num1").innerText = ""
    document.getElementById("num2").innerText = "0"
}
del = () => {
    console.log(document.getElementById("num2").innerText)
    if (document.getElementById("num2").innerText === "Invalid Input") {
        console.log(document.getElementById("num2").innerText)
        reset()
    } else {
        num2 = document.getElementById("num2").innerText;
        x = num2.substring(0, num2.length - 1)
        document.getElementById("num2").innerText = x
    }
}