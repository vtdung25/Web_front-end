$(document).ready(function(){
	$('.add').on('click',function(){
		$('.tab').removeClass('ative')
		$(this).parent().parent().parent().toggleClass('ative');
	})
 })