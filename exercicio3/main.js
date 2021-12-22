function contar() {
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let resposta = document.getElementById('res')

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert('[ERRO] Preencha todos os dados!')
    return
  }

  resposta.innerHTML = 'Contando...'
  let i = Number(ini.value)
  let f = Number(fim.value)
  let p = Number(passo.value)
  if (i < f) {
    // for (let c = i; c <= f; c += p) {
    //   resposta.innerHTML += ` ${c} \u{1F449}`
    // }
    while (i <= f) {
      i += p
      resposta.innerHTML += ` ${i} \u{1F449}`
    }
    resposta.innerHTML += '\u{1F3C1}'
  } else {
    for (let c = i; c >= f; c -= p) {
      resposta.innerHTML += ` ${c} \u{1F449}`
    }
    resposta.innerHTML += '\u{1F3C1}'
  }
}
