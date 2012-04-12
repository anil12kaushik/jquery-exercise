$(document).ready(function() {
var $blog = $('#blog');
$blog.find('h3')
.each(function() {
var $this = $(this),
$target = $('<div/>').insertAfter($this);
$this.data('target', $target);
})
.click(function(e) {
e.preventDefault();
var $this = $(this),
$a = $this.find('a'),
$target = $this.data('target'),
href = $a.attr('href'),
id = '#' + href.split('#')[1];
$target.load('anil.htm',function(){
alert('load is performed');
});
});
});
