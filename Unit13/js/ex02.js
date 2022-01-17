function addname() {
	if (document.getElementById('name').value.length == 0) {
		document.getElementById('name').nextElementSibling.innerHTML = "Yêu cầu nhập đầy đủ họ tên!!!";

		return 0;
	}else if (document.getElementById('name').value.length < 8) {
		document.getElementById('name').nextElementSibling.innerHTML = "Họ tên phải lớn hơn 8 ký tự";
		return 0;
	}
	if (document.getElementById('name').value.length > 8) {
		document.getElementById('name').nextElementSibling.innerHTML = "";
		return 1;
	}
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function email() {
	if (document.getElementById('email').value.length == 0) {
		document.getElementById('email').nextElementSibling.innerHTML = "Yêu cầu nhập email!!!";
		return 0 ;
	}else if (validateEmail(document.getElementById('email').value) == false) {
		document.getElementById('email').nextElementSibling.innerHTML = "Email phải đúng dạng chuẩn!!!";
		return 1;
	}
	if (validateEmail(document.getElementById('email').value) == true) {
		document.getElementById('email').nextElementSibling.innerHTML = "";
		return 1;
	}
}

function isVietnamesePhoneNumber(phonenumber) {
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(phonenumber.match(phoneno)) {
    return true;
  }  
  else {  
    return false;
  }
}
function numberphone() {
	if (document.getElementById('phone').value.length == 0) {
		document.getElementById('phone').nextElementSibling.innerHTML = "Yêu cầu nhập số điện thoại!!!";
		return 0 ;
	}else if (isVietnamesePhoneNumber(document.getElementById('phone').value) == false) {
		document.getElementById('phone').nextElementSibling.innerHTML = "số điện thoại phải đúng dạng chuẩn!!!";
		return 0;
	}
	if (isVietnamesePhoneNumber(document.getElementById('phone').value) == true) {
		document.getElementById('phone').nextElementSibling.innerHTML = "";
		return 1;
	}
}

function password() {

	if (document.getElementById('pass').value.length ==0) {
		document.getElementById('pass').nextElementSibling.innerHTML = "Yêu cầu nhập mật khẩu!!!";
		return 0;
	}
	if (document.getElementById('pass').value.length > 0) {
		document.getElementById('pass').nextElementSibling.innerHTML = "";
		return 1;
	}
}

function Confirmpass() {
	if (document.getElementById('Confirmpass').value.length == 0) {
		document.getElementById('Confirmpass').nextElementSibling.innerHTML = "Yêu cầu xác nhận mật khẩu!!!";
		return 0 ;
	}else if (document.getElementById('Confirmpass').value != document.getElementById('pass').value || document.getElementById('Confirmpass').value.length==0) {
		document.getElementById('Confirmpass').nextElementSibling.innerHTML = "mật khẩu không giống, yêu cầu nhập lại!!!";
		return 0;
	}
	if (document.getElementById('Confirmpass').value == document.getElementById('pass').value) {
		document.getElementById('Confirmpass').nextElementSibling.innerHTML = "";
		return 1;
	}
}
function regis() {
	addname();
	email()
	numberphone()
	password()
	Confirmpass()
	if (addname() ==  1 && email() == 1 && numberphone()==1 && password()==1 && Confirmpass()==1) {
		alert('Đăng ký thành công');
	}
	
}
document.getElementById('clear').addEventListener('click',function(){
	document.getElementById('name').nextElementSibling.innerHTML = "";
	document.getElementById('phone').nextElementSibling.innerHTML = "";
	document.getElementById('pass').nextElementSibling.innerHTML = "";
	document.getElementById('Confirmpass').nextElementSibling.innerHTML = "";
	document.getElementById('email').nextElementSibling.innerHTML = "";
	console.log('hudeug')
	document.getElementById('name').value='';
	var geners = document.getElementsByClassName('gener')
	for (var i = 0; i < geners.length; i++) {
		if(geners[i].checked == true){
			geners[i].checked = false;
		}
	}
	document.getElementById('email').value='';
	document.getElementById('phone').value='';
	document.getElementById('pass').value='';
	document.getElementById('Confirmpass').value='';
})