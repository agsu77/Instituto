$(document).ready(function () {

	
	$(".alert").hide();
	$("table").hide();
	cargardatos();


 });


function cargardatos(){

		$.ajax({
				method: "GET",
				url: "http://www.scaggiano.com.uy/json.js",
				success: function(data) { //Funcion exitosa ajax
				
					 var alumnos = JSON.parse(data);
				 
								 
				 	for(var i=0;i<alumnos.length;i ++){
				 		$("#tabla").append( " <tr> <td> "+ alumnos[i].nombre +" </td>  <td> "+ alumnos[i].apellido +" </td>  <td> "+
				 		 alumnos[i].edad +" </td> <td> "+ alumnos[i].email +" </td> <td>  <img src=" + alumnos[i].foto +"> </td>  </tr>  " );
											 		

				 	}//for

				 	$("table").show();
					$(".alert-success").show();
					
				 }, //Success

				 error: function(){ //Funcion error de ajax

				 	$(".alert-danger").show()
				 }//error
				
			}); // Cierro Ajax





}