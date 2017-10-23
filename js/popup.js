
function test() {
	swal(
	  'Oops...',
	  'You have chosen more than three modules ',
	  'error'
	)
}

function testChecked() {

	var semester1 = document.getElementByName('SEM1');
	var semester2 = document.getElementByName('SEM2');
	var hasChecked = false;
	var numberOfChecked = 3;

	for (var i = 0; i < semester1.length; i++) {

		if (semester1[i].checked == numberOfChecked && semester2[i].checked==numberOfChecked) {
			hasChecked=true;
			test();
			break;
		} else {
			hasChecked=false;
			test();
		}

	}

}
