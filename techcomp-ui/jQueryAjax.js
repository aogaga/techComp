1. 

// JQuery Ajax 

$(document).ready(function(){
	const url = 'http://www.omdbapi.com/?apikey=808d8dfc&t=black panther';

	$("#findMovie").click(function(){
		$.ajax({
			url: url,
			type:"GET",
			success: function(result){
				console.log(result)

				$("#title").text(result.Title)
				console.log($("#poster").src.e)
			},
			error: function(error){
				console.log("Houston we've got a problem")
			}
		})
	});
});


//2 $.get method

$(document).ready(function(){
	const url = 'http://www.omdbapi.com/?apikey=808d8dfc&t=black panther';
	$("#findMovie").click(function(){

		$.get(url, function(data, status){
			console.log(data)
		})	
	});

});


//3 $.post

$(document).ready(function(){
	const data ={
		city: 'Dallas', 
		company: "coding dojo"
	};

	const url = 'http://localhost:4567/allcomp';


	$("#findMovie").click(function(){

		$.post(url, data, function(data, status){
			console.log(`${data} and status is ${status}`);
		})
	});

});


//4 $.getJSON
$(document).ready(function(){
	const url = 'http://www.omdbapi.com/?apikey=808d8dfc&t=black panther';
	$("#findMovie").click(function(){

		$.getJSON(url, function(result){
			console.log(result);
		})	
	});

});


//6 fetch 


$(document).ready(function(){
	const url = 'http://www.omdbapi.com/?apikey=808d8dfc&t=black panther';
	$("#findMovie").click(function(){

		fetch(url)
			.then(response => response.json().then(json => {
				let data = json 
			}))
	});

});


