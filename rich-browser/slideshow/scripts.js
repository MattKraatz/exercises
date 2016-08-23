$(document).ready(main)

function main() {
  $('.glyphicon-menu-left').click(prvImg)
  $('.glyphicon-menu-right').click(nextImg)
  window.setInterval(nextImg,5000)

  function nextImg() {
    if ($('.current').next()[0].localName === 'div') {
      $('.current').removeClass('current').addClass('hidden').next().addClass('current').removeClass('hidden')
    } else {
      $('.current').removeClass('current').addClass('hidden')
      $('div').first().removeClass('hidden').addClass('current')
    }
  }

  function prvImg() {
    if ($('.current').prev()[0].localName === 'div') {
      $('.current').removeClass('current').addClass('hidden').prev().removeClass('hidden').addClass('current')
    } else {
      $('.current').removeClass('current').addClass('hidden')
      $('div').last().removeClass('hidden').addClass('current')
    }
  }
}
