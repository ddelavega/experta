// Select
function selec(urls) {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    //Mozilla, Safari, etc
    xmlhttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    //Nuestro querido IE
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try { //Version mas antigua
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) { }
    }
  }
  if (!xmlhttp) {
    alert("No ha sido posible crear un objeto de XMLHttpRequest");
  }
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var listArr = JSON.parse(this.responseText);
      selFunction(listArr);
    }
  };
  xmlhttp.open('GET', urls, true);
  xmlhttp.send();
  function selFunction(listArr) {
    var i;
    var estado="black";
    var t_rows = '';
    for (i = 0; i < listArr.length; i++) {
      t_rows += '<tr>\n';
      t_rows += '<td class="goal-delivery">' + listArr[i].delivery + '</td>\n';
      t_rows += '<td class="goal-uiStudent">' + listArr[i].uiStudent + '</td>\n';
      t_rows += '<td class="goal-assignment">' + listArr[i].assignment + '</td>\n';
      t_rows += '<td class="goal-date"><time datetime="2018-10-24 08:30:45">' + listArr[i].deliveryDate + '</time></td>\n';
      t_rows += '<td class="goal-correction"><span class="text-warning">●&nbsp;' + listArr[i].correction + '</span></td>\n';
      estado = (listArr[i].revision == "failed") ? "danger" : "success";
      t_rows += '<td class="goal-revision"><span class="text-' + estado + '">●&nbsp;' + listArr[i].revision + '</span></td>\n';
      t_rows += '<td class="text-right"><div class="dropdown">\n';
      t_rows += '<a href="#!" class="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n';
      t_rows += '<i class="fas fa-ellipsis-v px-1"></i>\n';
      t_rows += '</a>\n';
      t_rows += '<div class="dropdown-menu dropdown-menu-right">\n';
      t_rows += '<a href="#!" class="dropdown-item"><i class="far fa-arrow-alt-circle-down"></i> Download</a>\n';
      t_rows += '<a href="#!" class="dropdown-item"><i class="far fa-eye"></i> Revision</a>\n';
      t_rows += '<a href="#!" class="dropdown-item"><i class="far fa-clipboard"></i> &nbsp;Navigate</a>\n';
      t_rows += '<a href="#!" class="dropdown-item"><i class="far fa-edit"></i> Correct</a>\n';
      t_rows += '</div>\n';
      t_rows += '</div>\n';
      t_rows += '</td>\n';
      t_rows += '</tr>\n';
      document.getElementById("tabladb").getElementsByTagName("tbody")[0].innerHTML = t_rows;
    }
  }
}
selec('json/datos.json');
