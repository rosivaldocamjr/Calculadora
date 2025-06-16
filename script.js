function insert(num) {
    var numero = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = numero + num
}
function clean() {
    document.getElementById('res').innerHTML = ""
}
function back() {
    var res = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = res.substring(0, res.length -1)
}
function calcular() {
    var res = document.getElementById('res').innerHTML
    if(res) {
        try {
            document.getElementById('res').innerHTML = eval(res)
        } catch (e) {
            document.getElementById('res').innerHTML = "Erro"
        }
    } else {
        document.getElementById('res').innerHTML = "Nada"
    }
}
