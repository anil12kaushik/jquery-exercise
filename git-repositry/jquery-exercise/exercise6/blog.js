$(document).ready(function() {
var $blog = $('#blog');
$blog.find('h3').click(function(e) {
e.preventDefault();
var $h3 = $(this);
var $p = $h3.next('p').css('font-size','12px');
$p.slideToggle();
$h3.parent().siblings()
.find('p:visible').slideUp();
});
});

