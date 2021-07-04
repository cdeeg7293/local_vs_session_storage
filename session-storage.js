if (window.sessionStorage) {
  const txtUsername = document.getElementById('username')
  const txtAnswer = document.getElementById('answer')

  txtUsername.value = sessionStorage.getItem('username')
  txtAnswer.value = sessionStorage.getItem('answer')

  txtUsername.addEventListener('input', function () {
    localStorage.setItem('username', txtUsername.value)
  }, false)

  txtAnswer.addEventListener('input', function () {
    localStorage.setItem('answer', txtAnswer.value)
  }, false)
}
