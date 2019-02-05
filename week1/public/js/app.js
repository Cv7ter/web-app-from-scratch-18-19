var request = new XMLHttpRequest();
//var api = "https://api.chucknorris.io/jokes/random";
//var api = "https://blokweb.org/stories";
var api = "https://api.unsplash.com/photos?client_id=44318672e19eef622d1b4830b84f2a7162b0507b1d170245134a5cc23986759a";

request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var data = JSON.parse(request.responseText);
       console.log(data);

       var i;
       for(i=0; i<data.length; i++) {
         image = data[i]['urls']['full'];
         
       }
       image = data[0]['urls']['full'];

       document.getElementById("demo").setAttribute("src", image);
       // document.querySelector("main").innerHTML = image;
       //document.getElementById("demo").src = data.icon_url;
       //document.querySelector(".demo") < kan je alles pakken
    }
};
request.open("GET", api, true);
request.send();
