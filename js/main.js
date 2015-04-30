$(function(){
	// The Pi number
	PI = Math.PI;
	// Euler's constant
	E = Math.E;
	// Default options
	$("#res").text(PI);
	$("#digits").val($("#res").text().length - 1);	// since #res value is a string, the dot is not counted as a digit

	// precision (number of digits to be displayed)
	var numOfDigits;

	// Option Selection (Either Pi or E)
	$("input").on("click", function(){
		// precision
		numOfDigits = parseInt($("#digits").val());
		switch($("input:checked").val()){
			case "pi":
				$("#const").text("pi");
				$("#res").text(PI.toPrecision(numOfDigits));
				break;
			case "e":
				$("#const").text("e");
				$("#res").text(E.toPrecision(numOfDigits));
				break;
		}
	});

	// OnInput #digits
	$("#digits").on("input", function(){
		// precision
		numOfDigits = parseInt($("#digits").val());
		switch($("input:checked").val()){
			case "pi":
				$("#const").text("pi");
				$("#res").text(PI.toPrecision(numOfDigits));
				break;
			case "e":
				$("#const").text("e");
				$("#res").text(E.toPrecision(numOfDigits));
				break;
		}
	});

});
