let navBar = document.querySelector('nav')

window.onload = function () {
  window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > 0) {
      navBar.classList.add('is-scrolling')
    } else {
      navBar.classList.remove('is-scrolling')
    }
  })
}

//sticky nav
var prevScrollPos
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset
  if (prevScrollPos > currentScrollPos) {
    navBar.style.top = '0px'
    prevScrollpos = currentScrollPos
  } else if (currentScrollPos > prevScrollPos + 50) {
    navBar.style.top = '-100px'
  }
  prevScrollPos = currentScrollPos
}


