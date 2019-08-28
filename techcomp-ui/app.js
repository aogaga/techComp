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