function Hours() {
  let msg = document.querySelector('div.msg')
  let img = document.querySelector('img.img')
  let date = new Date()
  let Hour = date.getHours()

  msg.innerHTML = `Agora são ${Hour} Horas.`
  if (Hour >= 0 && Hour < 12) {
    img.src = 'Manha.jpg'
    document.body.style.background = '#e2cd9f'
  } else if (Hour >= 12 && Hour <= 18) {
    img.src = 'Tarde.jpg'
    document.body.style.background = '#b9846f'
  } else {
    img.src = 'Noite.jpg'
    document.body.style.background = '#515154'
  }
}

Hours()
