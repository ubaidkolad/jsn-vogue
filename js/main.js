$(document).ready(function () {
  $('.loading').fadeOut(3000)
  $('.sidenav').sidenav()
  $('.slider').slider({ full_width: true })
  $('.carousel').carousel()
})

$(window).scroll(function () {
  let text = document.getElementById('flowtext')
  var top_of_element = $('#flowtext').offset().top
  var bottom_of_element =
    $('#flowtext').offset().top + $('#flowtext').outerHeight()
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight()
  var top_of_screen = $(window).scrollTop()

  if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
    text.classList.add('w3-animate-left')
    console.log(true)
  } else {
    console.log(false)
  }
})

$(window).scroll(function () {
  let text = document.getElementById('flowtext1')
  var top_of_element = $('#flowtext1').offset().top
  var bottom_of_element =
    $('#flowtext1').offset().top + $('#flowtext1').outerHeight()
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight()
  var top_of_screen = $(window).scrollTop()

  if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
    text.classList.add('w3-animate-right')
    console.log(true)
  } else {
    console.log(false)
  }
})

$(window).scroll(function () {
  let text = document.getElementById('flowtext3')
  var top_of_element = $('#flowtext3').offset().top
  var bottom_of_element =
    $('#flowtext3').offset().top + $('#flowtext3').outerHeight()
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight()
  var top_of_screen = $(window).scrollTop()

  if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
    text.classList.add('w3-animate-left')
    console.log(true)
  } else {
    console.log(false)
  }
})

$(window).scroll(function () {
  let text = document.getElementById('flowtext4')
  var top_of_element = $('#flowtext4').offset().top
  var bottom_of_element =
    $('#flowtext4').offset().top + $('#flowtext4').outerHeight()
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight()
  var top_of_screen = $(window).scrollTop()

  if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
    text.classList.add('w3-animate-right')
    console.log(true)
  } else {
    console.log(false)
  }
})

$(window).scroll(function () {
  let text = document.getElementById('flowtext5')
  var top_of_element = $('#flowtext5').offset().top
  var bottom_of_element =
    $('#flowtext5').offset().top + $('#flowtext5').outerHeight()
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight()
  var top_of_screen = $(window).scrollTop()

  if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
    text.classList.add('w3-animate-left')
    console.log(true)
  } else {
    console.log(false)
  }
})

$(window).scroll(function () {
  let text = document.getElementById('flowtext6')
  var top_of_element = $('#flowtext6').offset().top
  var bottom_of_element =
    $('#flowtext6').offset().top + $('#flowtext6').outerHeight()
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight()
  var top_of_screen = $(window).scrollTop()

  if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
    text.classList.add('w3-animate-left')
    console.log(true)
  } else {
    console.log(false)
  }
})
