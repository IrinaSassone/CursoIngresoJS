/*
E/S. Ejercicio 2:
Debemos lograr tomar un nombre con "prompt" y luego mostrarlo por "alert"
al presionar el botón "Mostrar".
*/
function mostrar()
{
	var nombre; // Única variable.
	nombre=prompt("Ingresa tu nombre:"); // Prompt.
	alert("El nombre ingresado es: "+nombre); // Alert para mostrar por botón.
	// alert(nombre); -> únicamente muestra la variable.
	
	//TEST:
	/*
	var nombre="maria"; // Funciona pero únicamente para el nombre definido en la variable.
	alert(nombre); // Para este ejemplo, genera error.
	*/

	//ERRORES:
	/*
	nombre=maria; // Variable definida para un único nombre, por ende, está mal.
	alert(maria); // Alert mal hecho.
	alert(Nombre); // No es la misma variable, no entra.
	alert("ok"); // El alert no muestra la variable definida, por ende, está mal.
	*/
}