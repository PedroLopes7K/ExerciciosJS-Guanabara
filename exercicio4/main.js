function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  let res = document.getElementById('res')
  res.innerHTML = ''

  if (num.value.length == 0) {
    alert('insira um numero')
    return
  }
  let n = Number(num.value)
  let resultado = 0
  for (let i = 1; i <= 10; i++) {
    resultado = n * i
    // console.log(resultado)
    res.innerHTML += ` ${n} x ${i} = ${resultado} </br>`
  }
}
