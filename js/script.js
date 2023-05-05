$(document).ready(function() {
  $( "#boton1" ).click(function() {
    $.ajax({
      dataType: 'json',
      url: "http://127.0.0.1:5984/instituciones/_design/primero/_view/vista001?include_docs=true"
    }).then(function(data) {
      $("#tabla").empty();
      console.log(data);
      
      $("#tabla").append(
        "<tr> <th>AMIE</th> <th>Nombre Institucion</th> <th>Código Provincia</th> <th>Provincia</th> <th>Código Cantón </th> <th>Cantón</th> <th>Código Parroquia</th> <th>Parroquia</th> <th>Zona Administrativa</th> <tr>"
      );

      for(var i=0; i<data.rows.length; i++){
        var AMIE = data.rows[i].doc.AMIE;
        var Nombre_Institucion = data.rows[i].doc.Nombre_Institucion;
        var Codigo_Provincia = data.rows[i].doc.Codigo_Provincia;
        var Provincia = data.rows[i].doc.Provincia;
        var Codigo_Canton = data.rows[i].doc.Codigo_Canton;
        var Canton = data.rows[i].doc.Canton;
        var Codigo_Parroquia = data.rows[i].doc.Codigo_Parroquia;
        var Parroquia = data.rows[i].doc.Parroquia;
        var Zona_Administrativa = data.rows[i].doc.Zona_Administrativa;

        $("#tabla").append(
          "<tr> <td>"+ AMIE +"</td> <td>"+ Nombre_Institucion +"</td> <td>"+ Codigo_Provincia +"</td> <td>"+ Provincia +"</td> <td>"+ Codigo_Canton +"</td> <td>"+ Canton +"</td> <td>"+ Codigo_Parroquia +"</td> <td>"+ Parroquia +"</td> <td>"+ Zona_Administrativa +"</td> </tr>"
        );
      }
    });
  });


  $( "#boton2" ).click(function() {
    var buscar = $('#buscar').val();

    $.ajax({
      dataType: 'json',
      url: 'http://127.0.0.1:5984/instituciones/_design/primero/_view/vista001?key="'+buscar+'"'
    }).then(function(data) {
      $("#tabla").empty();
      console.log(data);

      $("#tabla").append(
        "<tr> <th>AMIE</th> <th>Nombre Institucion</th> <th>Código Provincia</th> <th>Provincia</th> <th>Código Cantón </th> <th>Cantón</th> <th>Código Parroquia</th> <th>Parroquia</th> <th>Zona Administrativa</th> <tr>"
      );

      for(var i=0; i<data.rows.length; i++){
        var AMIE = data.rows[i].value.AMIE;
        var Nombre_Institucion = data.rows[i].value.Nombre_Institucion;
        var Codigo_Provincia = data.rows[i].value.Codigo_Provincia;
        var Provincia = data.rows[i].value.Provincia;
        var Codigo_Canton = data.rows[i].value.Codigo_Canton;
        var Canton = data.rows[i].value.Canton;
        var Codigo_Parroquia = data.rows[i].value.Codigo_Parroquia;
        var Parroquia = data.rows[i].value.Parroquia;
        var Zona_Administrativa = data.rows[i].value.Zona_Administrativa;

        $("#tabla").append(
          "<tr> <td>"+ AMIE +"</td> <td>"+ Nombre_Institucion +"</td> <td>"+ Codigo_Provincia +"</td> <td>"+ Provincia +"</td> <td>"+ Codigo_Canton +"</td> <td>"+ Canton +"</td> <td>"+ Codigo_Parroquia +"</td> <td>"+ Parroquia +"</td> <td>"+ Zona_Administrativa +"</td> </tr>"
        );
      }
    });
  });


  $( "#boton3" ).click(function() {
    var limite = $('#limite').val();

    if(limite > 0){
      $.ajax({
        dataType: 'json',
        url: "http://127.0.0.1:5984/instituciones/_design/primero/_view/vista001?limit="+limite
      }).then(function(data) {
        $("#tabla").empty();
        console.log(data);

        $("#tabla").append(
          "<tr> <th>AMIE</th> <th>Nombre Institucion</th> <th>Código Provincia</th> <th>Provincia</th> <th>Código Cantón </th> <th>Cantón</th> <th>Código Parroquia</th> <th>Parroquia</th> <th>Zona Administrativa</th> <tr>"
        );

        for(var i=0; i<data.rows.length; i++){
          var AMIE = data.rows[i].value.AMIE;
          var Nombre_Institucion = data.rows[i].value.Nombre_Institucion;
          var Codigo_Provincia = data.rows[i].value.Codigo_Provincia;
          var Provincia = data.rows[i].value.Provincia;
          var Codigo_Canton = data.rows[i].value.Codigo_Canton;
          var Canton = data.rows[i].value.Canton;
          var Codigo_Parroquia = data.rows[i].value.Codigo_Parroquia;
          var Parroquia = data.rows[i].value.Parroquia;
          var Zona_Administrativa = data.rows[i].value.Zona_Administrativa;

          $("#tabla").append(
            "<tr> <td>"+ AMIE +"</td> <td>"+ Nombre_Institucion +"</td> <td>"+ Codigo_Provincia +"</td> <td>"+ Provincia +"</td> <td>"+ Codigo_Canton +"</td> <td>"+ Canton +"</td> <td>"+ Codigo_Parroquia +"</td> <td>"+ Parroquia +"</td> <td>"+ Zona_Administrativa +"</td> </tr>"
          );
        }
      });
    } else {
      alert("El número ingresado debe ser mayor a 0")
    }
  });
});