function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert('[ERRO] faltaram os dados')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i < f) {
        //Contagem crescente
            for(var c = i; c <= f; c+=p ){
                res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += ` \u{1F3C1}`
    } else {
        //contagem decrescente
        for(var c = i; c >= f;c -= p ){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }
    res.innerHTML += ` \u{1F449}`
    }
}

function tabuada(){
    var num = document.getElementById("txtn")
    var tab = document.getElementById("seltab")
    if (num.value.length == 0){
        window.alert("Digite um numero.")
    }else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while ( c <= 10 ) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value =`tab${c}`
            tab.appendChild(item)
            c++
}
}
}