import './style.css'

document.querySelector('[data-js=app]').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

document.querySelector('#hideApp').addEventListener('click', function () {
  const divApp = document.querySelector('[data-js=app]').style;
  const hideAppText = document.querySelector('#hideApp')
  if (divApp.display === 'none') {
    divApp.display = "block";
    hideAppText.innerHTML = `Desaparecer 🐱‍👤`
  } else {
    divApp.display = "none";
    hideAppText.innerHTML = `Reaparecer 🌟`
  }
})
