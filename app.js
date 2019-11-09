window.onload = function() {

	document.getElementById("btn").onclick =function(){list()};
	function list(){
		var str = document.getElementById("txt1").value;
		var xhttp = new XMLHttpRequest();
		var url = "superheroes.php";
 		xhttp.onreadystatechange = function() {
    		if (xhttp.readyState === xhttp.DONE) {
 				if (xhttp.status === 200) {
 					var response = xhttp.responseText;
 					document.getElementById("head").innerHTML="RESULTS";
 					document.getElementById("result").innerHTML=response;
 				} else {
 					alert('There was a problem with the request. \n'+xhttp.status);
 				}
			} 
  		};
  		xhttp.open("GET", url+"?q="+str,true);
  		xhttp.send();
	}

}