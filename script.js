function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    
    if (num.value.length == 0){ 
      window.alert ('Por favor, digite um número!') 
      
} else {
    tab.innerHTML = ''
    let n = Number(num.value)
    for (c = 1; c <= 10;c++){
        let item = document.createElement('option')
        item.innerHTML = n + "x" + c + "=" + n*c
        item.value = 'tab' + c
        tab.appendChild(item)
    }
}
}