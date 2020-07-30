/* 
E/S. Ejercicio 4:
Debemos lograr tomar un dato por "prompt" y lo muestro por 'ID' al presionar el botón "Mostrar".
*/
function mostrar()
{
	var nombre; //Variable única
	nombre=prompt("Ingresa tu nombre."); //Prompt de única funcionalidad.
	txtIdNombre.value=nombre; //Para mostrar en Rectángulo(?) insertado se hace al revés el .value
	//Otra forma de hacerlo: document.getElementById('txtIdNombre').value=nombre;
}