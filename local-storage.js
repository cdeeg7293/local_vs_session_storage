if (window.localStorage) {
  const txtUsername = document.getElementById('username') // get form elements
  const txtAnswer = document.getElementById('answer')

  txtUsername.value = localStorage.getItem('username') // Elements populated
  txtAnswer.value = localStorage.getItem('answer') // by localStorage data

  txtUsername.addEventListener('input', function () {
    localStorage.setItem('username', txtUsername.value)
  }, false)

  txtAnswer.addEventListener('input', function () {
    localStorage.setItem('answer', txtAnswer.value)
  }, false)
}
