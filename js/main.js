const days = document.querySelectorAll('.calendar-item')

days.forEach(function (item) {
  item.addEventListener('click', function (e) {

    if (item.classList.contains('spin'))
      item.classList.remove('spin')
    else {

     
      item.classList.toggle('spin')
    }

  })
})