/*
E/S. Ejercicio 5:
Debemos lograr tomar nombre y edad por ID, y mostrarlos concatenados.
Ejemplo: "Usted se llama José y tiene 66 años" --> Concatenar (+variable+)
*/
function mostrar()
{	
	//Buscar primero en HTML los ID: "txtIdEdad" y "txtIdNombre" en este caso.
	var nombre;
	var edad;
	nombre=txtIdNombre.value;
	edad=txtIdEdad.value;
	alert("Usted se llama "+nombre+" y tiene "+edad+" años.");
}