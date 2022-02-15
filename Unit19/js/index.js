$(document).ready(function(){
	firt = 1;
  	end = 4;
  	var width = $(window).width();
    if (width <= 992 && width >= 768){
      firt = 1
      end = 2
    }else if (width> 320 && width < 768){
      firt = 1
      end = 1
    }

	setInterval(function(){
		$('.slide').removeClass('ative');
    	var node = document.getElementsByClassName('slide')[firt-1];
    	$('.start_slide')[0].append(node.cloneNode(true))
		for (var i = firt; i <= end; i++) {
			$('.slide').eq(i).addClass('ative');

		}
		firt = firt + 1;
		end = end +1;

		if (firt % 8 < 5) {
			$('.dost1').css('color' , 'red');
			$('.dost2').css('color' , '#ccc');
		}else if (firt % 8 < 5){
			$('.dost1').css('color' , '#ccc');
			$('.dost2').css('color' , 'red')
		}
	},3000);
	$("#formDemo").validate({
		rules:{
			email: {
				required : true,
				email : true
			}
		},
		messages: {
			email: {
				required : 'Vui lòng nhập Email!',
				email : 'Email chưa đúng định dạng!'
			}	
		}
	});
	$('.add').on('click',function(){
		$('.present').slideUp(500);
		$('.remove').removeClass('exchange');
		$('.add').removeClass('change');
		$(this).addClass('change');
		$('.add').removeClass('exchange');
		$('.remove').removeClass('change');
		$(this).next().addClass('exchange');
		$(this).parent().next().slideDown(500);
	})
	$('.remove').on('click',function(){
		$(this).addClass('change');
		$('.add').removeClass('change');
		$('.remove').removeClass('exchange');
		$(this).prev().addClass('exchange');
		$(this).parent().next().slideUp(500);
	})
	$('.bars').on('click',function(){
		$('.bars').css('display','none');
		$('.smail_menu').slideDown(500);
		$('.time').css('display' , 'block');
	})
	$('.time').on('click',function(){
		$('.time').css('display','none');
		$('.smail_menu').slideUp(500);
		$('.bars').css('display' , 'block');
	})
	$('.opacity').hover(function(){
		$(this).next().css('display' , 'none');
		$(this).css('display' , 'none');
	})
	$('.opacity').mouseout(function(){
		$(this).next().css('display' , 'block');
		$(this).css('display' , 'block');
	})
})