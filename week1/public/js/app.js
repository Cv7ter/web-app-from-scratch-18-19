var request = new XMLHttpRequest();
//var api = "https://api.chucknorris.io/jokes/random";
//var api = "https://blokweb.org/stories";
//var api = "https://api.unsplash.com/photos?client_id=44318672e19eef622d1b4830b84f2a7162b0507b1d170245134a5cc23986759a";
var home = "https://api.unsplash.com/photos?client_id=44318672e19eef622d1b4830b84f2a7162b0507b1d170245134a5cc23986759a";
var id = "client_id=44318672e19eef622d1b4830b84f2a7162b0507b1d170245134a5cc23986759a"
var ruser = "";


request.onreadystatechange = function() { // .addeventlistener
    if (this.readyState == 4 && this.status == 200) {

       // Typical action to be performed when the document is ready:
       var data = JSON.parse(request.responseText);
       console.log(data);

    var fotonr = 0;
    while(fotonr < data.length) {
       image = data[fotonr]['urls']['small'];
       console.log(image);
        document.getElementById(fotonr).setAttribute("src", image);
       document.getElementById(fotonr).addEventListener("click", getDetail);
       fotonr++
    }

    function getDetail()  { // uit de scope van event handling
//        name = data[this.id]['user']['name'];
        user = data[this.id]['user']['username'];
       ruser = user; 
var api = "https://api.unsplash.com/users/" + ruser + "/photos?" + id;
       request.open("GET", api, true);
       request.send();
    }

  }

};

request.open("GET", home, true);
request.send();
