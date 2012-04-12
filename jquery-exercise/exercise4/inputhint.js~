$(document).ready(function() {
var $search = $('#search');
var $input = $search.find('input.input_text');
var hint = 'enter search item';

$input
.val(hint)
.addClass('hint')
.live('focus', function() {
$input.val('').removeClass('hint');
})
.live('blur', function() {
if (!$.trim($input.val())) {
$input.val(hint).addClass('hint');
}
});
});
