/*
Ejercicio 10:
Una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar.
en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche
*/

function mostrar()
{
	var estacion;
	var destino;

	estacion=txtIdEstacion.value;
	destino=txtIdDestino.value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					alert("Se viaja.");
					break;
				default:
					alert("No se viaja.");
					break;
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Mar del Plata":
				case "Cataratas":
					alert("Se viaja.");
					break;
				default:
					alert("No se viaja.");
					break;
			}
			break;
		case "Otoño":
			switch(destino)
			{
				case "Bariloche":
				case "Mar del Plata":
				case "Cataratas":
				case "Cordoba":
					alert("Se viaja.");
					break;
			}
			break;
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					alert("No se viaja.");
					break;
				default:
					alert("Se viaja.");
					break;
			}
			break;
	}
}