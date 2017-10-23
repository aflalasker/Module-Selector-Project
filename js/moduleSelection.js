function logic() {

		$(document).ready(function() {
		$("input[name='SEM1']").change(function() {
			var maxAllowed = 3;
				var count = $("input[name='SEM1']:checked").length;
					if (count > maxAllowed) {
						$(this).prop("checked", "");
							alert('Select a maximum of ' + maxAllowed + 'options' );
				}
	});
});

}