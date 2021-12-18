function Verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let Fano = document.getElementById('txtano')
  let res = document.getElementById('res')

  if (Fano.value.length == 0 || Fano.value > ano) {
    alert('[ERRO] Verifique os dados é tente novamente!')
  } else {
    let Fsex = document.getElementsByName('radsex')
    let idade = ano - Number(Fano.value)
    let genero = ''
    let img = document.createElement('img')
    if (Fsex[0].checked) {
      genero = 'Homem'
      if (idade < 18) {
        img.setAttribute('src', 'Criança H.jpg')
      } else if (idade >= 18 && idade < 50) {
        img.setAttribute('src', 'Adulto H.jpg')
      } else {
        img.setAttribute('src', 'idoso H.jpg')
      }
    } else if (Fsex[1].checked) {
      genero = 'Mulher'
      if (idade < 18) {
        img.setAttribute('src', 'Criança M.jpg')
      } else if (idade >= 18 && idade < 50) {
        img.setAttribute('src', 'Adulto M.jpg')
      } else {
        img.setAttribute('src', 'idoso M.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}
