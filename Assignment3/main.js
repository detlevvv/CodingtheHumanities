// D.A.J. Hiep.
// Function that gets called after DOM is loaded.
$(document).ready(function() {
// Variable that stores the request URL. It is looking for painted artwork for postcards in the Europeana database.
	var requestUrl = "http://www.europeana.eu/api/v2/search.json?wskey=VfU7ZEAdC&query=title%3Apainting+artwork+for+postcard&start=1&rows=24&profile=standard";
// Creates a new XMLHttprequest.
	var xhr = new XMLHttpRequest();
// Opens a XML HTTP GET request to the Europeana API.
	xhr.open("GET", requestUrl, false);
// Creates new function that console logs the readyState.
	xhr.onreadystatechange = function(){
		console.log(xhr.readyState);
// If conditional that uses JSON.parse to turn the responseText into a Javascript object when readyState is equal to 4.
		if (xhr.readyState === 4){
			var json = JSON.parse(xhr.responseText);
// Create index variable.
			var index;
// Create result array, where all the image URL's are going to be stored.			
			var result = [];
// For loop that extracts the image URL's stored in the edmPreview property of each item.
			for (index = 0; index < json.items.length; ++index) {
				if (json.items[index].edmPreview && json.items[index].edmPreview.length > 0) {
					result.push(json.items[index].edmPreview[0]);
				}
			}
// Runs the imageturner function which is stored in imageturner.js with the Europeana image URLs in the result parameter.
			imageturner(result);
		}
	};
// Sends XMLHttpRequest to server.
	xhr.send();
});