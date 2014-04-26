function getXML(){
  if (window.XMLHttpRequest){
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else{
    // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("GET","estados.xml",false);
  xmlhttp.send();
  xmlDoc=xmlhttp.responseXML;

  var table = document.getElementById('table');
  var nombre="";
  var x=xmlDoc.getElementsByTagName("estado");
  for (i=0;i<x.length;i+=2){
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var td2 = document.createElement('td');

    nombre = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
    td.innerHTML = nombre;
    td.className = "clickable";
    td.setAttribute("onclick","getInfo(" + i + ");");

    nombre = x[i+1].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
    td2.innerHTML = nombre
    td2.className = "clickable";
    td2.setAttribute("onclick","getInfo(" + (i+1) + ");");

    tr.appendChild(td);
    tr.appendChild(td2);
    table.appendChild(tr);
  }
}

function getInfo(id){
  if (window.XMLHttpRequest){
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else{
    // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("GET","estados.xml",false);
  xmlhttp.send();
  xmlDoc=xmlhttp.responseXML;
  var nombreEstado = document.getElementById('nombreEstado');
  var region = document.getElementById('region');
  var capital = document.getElementById('capital');

  var x=xmlDoc.getElementsByTagName("estado");
  console.log(x);
    nombreEstado.innerHTML = x[id].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
    region.innerHTML = "Region: " + x[id].getElementsByTagName("region")[0].childNodes[0].nodeValue;
    capital.innerHTML = "Captial: " + x[id].getElementsByTagName("capital")[0].childNodes[0].nodeValue;

}
