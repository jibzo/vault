
    
    function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                myFunction(this);
            }
        };

        xhttp.open("GET", "music_collection.xml", true);
        xhttp.send();
    }

    function myFunction(xml) {
        var i;
        var xmlDoc = xml.responseXML;
        var table = "<tr><th>Artist</th><th>Title</th><th>Year</th><th>Format</th></tr>";
        var x = xmlDoc.getElementsByTagName("ALBUM");
        console.log(x)
        for (i = 0; i < x.length; i++) {
            table += "<tr><td>" +
                x[i].getElementsByTagName('ARTIST')[0].childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName('TITLE')[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName('YEAR')[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName('FORMAT')[0].childNodes[0].nodeValue +
                "</td></tr>"; 
        }
        document.getElementById("ajax").innerHTML = table;
    }
