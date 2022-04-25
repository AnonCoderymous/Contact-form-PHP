$(document).ready(function() {
	$("form").submit(function(e) {
		e.preventDefault()
		var _data = {}
		for( let i=0; i<4; i++ ) {
			console.log(i)
			if( !$("input")[i].value || $("input")[i].value.length == 0 || $("textarea").val() == '' || $("textarea").val().length == 0 ) {
				// Form is incomplete.
				swal({
					title: 'Error Occured!',
					text: 'You haven\'t fill the form correctly. Make sure \nfill all the required information below.',
					icon: 'error'
				})
				return false
			}else {
				_data[$("input")[i].name] = $("input")[i].value
			}
		}
		_data["Address"] = $("textarea").val()

		$.ajax({
			url: 'http://192.168.1.6/contact-us/getdata.php',
			method: 'POST',
			dataType: 'application/x-www-form-urlencoded',
			data: _data,
			error:function(){
				swal({
					title: 'Thank you for Contacting Us.',
					text: 'We have received your information. \nWe will contact you shortly',
					icon: 'success'
				})
				$(document).load()
			}
		})
	})
})