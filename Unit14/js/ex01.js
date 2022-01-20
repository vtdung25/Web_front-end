$(document).ready(function(){
	$('body').on('click','.remove', function(){
		$(this).parent().remove();
	})
	$('body').on('click','.item', function(){
		$(this).toggleClass('ative');
		$(this).children().eq(0).toggleClass('ative-check');
		$(this).children().eq(1).toggleClass('ative-further');
	})
	$('button').click(function() {
		if ($('#title').val().length == 0) {
			alert('bạn chưa nhập nội dung');
		}else {
			var i = $('.item').length
			if(i % 2 == 0){
				$('#list').prepend('<div class="item dark"><i class="check fas fa-check"></i> <p id="further">' + $('#title').val() + '</p> <i class="remove fas fa-times"></i></div>');
			}else{
				$('#list').prepend('<div class="item light"><i class="check fas fa-check"></i> <p id="further">' + $('#title').val() + '</p> <i class="remove fas fa-times"></i></div>');
			}
			$('#title').val('');
		}
	})
})