const days = document.querySelectorAll('.calendar-item')

days.forEach(function (item) {
  item.addEventListener('click', function (e) {

    if (item.classList.contains('spin'))
      item.classList.remove('spin')
    else {

      days.forEach(function (i) {
        i.classList.remove('spin')
      })
      item.classList.toggle('spin')
    }

  })
})