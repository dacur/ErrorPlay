$(document).ready(function(){
	try{
		var v = {};
		v.first();
	} catch (err){
		console.log("First error message.");
	};

	var textval = $('#txtConfirm').val();

	$('#txtConfirm').keyup(function(e){
		if (e.keyCode == 13){
			DoIt();
			printmessage();
			// console.log("Textval =" + textval);
			// if (isNaN(textval)){
			// 	console.log("Is not a number");
			// } else {
			// 	console.log("Is a number");
			// };
		};
	});

	function DoIt(textval){
		var x = $('#txtConfirm').val();
		if (isNaN(x)){
			alert("Not a number");
		}
		$.ajax({
			url: '/main/giraffe',
			type: 'POST',
			data: {penguin: x}
		});
	};



	var printmessage = function(){
		console.log("Just printing a message once you click ENTER");
	};


	// $(button).on('click', function(){
	// 	alert('clicked')
	// });




	var v = {};
	v.first();

});

window.onerror = function(msg, url, line){
	
	console.log("Second error message.");
	return true;
};