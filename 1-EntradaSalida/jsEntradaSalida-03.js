/*
E/S. Ejercicio 3:
Debemos lograr tomar un dato por ID y luego mostrarlo por "alert" al presionar el botón "Mostrar".
*/
function mostrar()
{
	var nombreIngresado; // Ingreso variable.
	//ERROR:
	// nombreIngresado=txtIdNombre; --> [object HTMLImputElement]
	nombreIngresado=txtIdNombre.value; // Se agrega ".value" porque es un valor.
	// Otra forma de definir ID: nombreIngresado=document.getElementById('txtIdNombre').value;
	alert("Su nombre es: "+nombreIngresado);
}