let power = ["OFF", "ON"]
let i = 0
function changePower() {
    document.getElementById("power_buzzer").innerText = n[i]
    i++
    if (i === n.length){
        i = 0
    }
}