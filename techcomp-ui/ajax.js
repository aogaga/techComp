

(function(){
	  document.getElementById("btn").addEventListener('click', doajaxCall);

function doajaxCall(){
	console.log("i was clicked");
	

	var http; 
	if(window.XMLHttpRequest){
		http = new XMLHttpRequest();
	}else{
		 http = new ActiveXObject("Microsoft.XMLHTTP");
	}

	if (!http) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }

console.log(http.responseText);
    const url = 'http://localhost:4567/';
    http.open("GET", url);
    http.send();
	
	
	if(http.status === 200){
		console.log(http.response)
	}

	if (http.readyState === XMLHttpRequest.DONE) {
      if (http.status === 200) {
        alert(http.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
}
})();