/* 
Ejercicio 8:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	var destinoIngresado;
	destinoIngresado=txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("En este destino hace frío.");
			break;
		default:
			alert("En este destino hace calor.");
			break;
	}
}