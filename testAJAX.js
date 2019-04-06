var xhr; // define the global variable to process the AJAX request

function callDivChange() {
	xhr = new XMLHttpRequest();
	var filename = document.getElementById("filename").value;
	xhr.open("GET", filename, true);
	xhr.onreadystatechange = processDivChange;
	xhr.send();
}

function processDivChange() {
	// while waiting response from server
	if (xhr.readyState < 4) {
		document.getElementById('div1').innerHTML = "Loading...";
	}
	// 4 = Response from server has been completely loaded
	else if (xhr.readyState === 4) { 
		if (xhr.status == 200 && xhr.status < 300) {
		// http status between 200 to 299 are all successful
		document.getElementById('div1').innerHTML = xhr.responseText;
		}
	}
}