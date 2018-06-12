$(document).ready(function () {
	
	$(".alert").hide();
	$("table").hide();
	cargardatos();

 }); //fin document ready

var alumnos=[];

function Persona(nom,ape,age,mail,photo) { //CREO CLASE
	this.nombre=nom;
	this.apellido=ape;
	this.edad=age;
	this.email=mail;
	this.foto=photo;
}

$("#enviar").click(function () { //Boton enviar
	
	if( ($("#name").val().trim() == "") || ($("#secondName").val().trim() == "") || ($("#mail").val().trim() == "") ){
		$(".alert-campos").show();
	}//fin if
	else{
		inputvalid();
	} //fin else

}); //Fin boton enviar

function cargardatos(){
	$.ajax({
		method: "GET",
		url: "http://www.scaggiano.com.uy/json.js",
		success: function (data) { //Funcion exitosa ajax			
			 alumnos = JSON.parse(data);
			crearTabla();	 	
			$(".alert-success").show();
		 }, //Success
		error: function(){ //Funcion error de ajax
			 $(".alert-danger").show()
		}//error
				
		}); // Cierro Ajax
} //fin funcion cargar datos

function crearTabla() {
	$("#tabla").html("");
 	for(var i=0;i<alumnos.length;i ++){
 		$("#tabla").append( " <tr> <td> "+ alumnos[i].nombre +" </td>  <td> "+ alumnos[i].apellido +" </td>  <td> "+
		 alumnos[i].edad +" </td> <td> "+ alumnos[i].email +" </td> <td>  <img src=" + alumnos[i].foto +"> </td>  </tr>  " );
 			$("table").show();
		
	}//fin for
} //Fin crearTabla

function inputVacio() {
	$("#name").val("");
	$("#secondName").val("");
	$("#age").val("");
	$("#mail").val("");
	$("#photo").val("");
} //Fin inputVacio

function inputvalid() {
	if ( /^[a-z][a-z]*/.test($("#name").val()) && /^[a-z][a-z]*/.test($("#secondName").val()) ) {
		var inputNom= $("#name").val() ;
		var inputApe= $("#secondName").val() ;
		var inputAge= $("#age").val() ;
		var inputMail= $("#mail").val() ;
		var inputFoto= $("#photo").val() ;
		var persona1 = new Persona(inputNom,inputApe,inputAge,inputMail,inputFoto);
		alumnos.push(persona1);
		crearTabla();
		$("#formu").modal("hide");
		inputVacio();
	}
	else{
		$(".alert-letras").show();
	}
} //fin inputvalid