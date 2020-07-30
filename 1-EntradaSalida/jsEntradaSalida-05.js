/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
//concatenar

function mostrar()
{	
	//txtIdEdad txtIdNombre
	var nombre;
	var edad;

	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;

	alert("Usted se llama " +nombre+ "y tengo " +edad+ " años");

}

