let navStatus = 0;

const toggleNav = () => {
  if(!navStatus) {
     $('.main').css('width', '100%')
     $('li').css('display', 'block')
     navStatus = 1;
  } else {
    $('.main').css('width', '0')
    $('li').css('display', 'none')
    navStatus = 0;    
  }
}
