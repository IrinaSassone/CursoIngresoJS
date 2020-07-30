/*
Ejercicio 9:
- Una agencia de viajes debe sacar las tarifas de los viajes, se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final.
A) En Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene
un descuento del 10% Mar del plata tiene un descuento del 20%
B) En Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata 
tiene un aumento del 20%.
C) En Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene 
un aumento del 10% y Cordoba tiene el precio sin descuento.
*/

function mostrar()
{
	var estacion;
	var destino;
	var precioBase;
	var precioFinal;

	precioBase=15000;

	estacion=txtIdEstacion.value;
	destino=txtIdDestino.value;

	switch(estacion)
	{	
		/*En Invierno: bariloche +20% / Cataratas y Cordoba -10% / Mar del Plata -20%*/
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					precioFinal=precioBase*1.2; //aumento
					break;
				case "Mar del Plata":
					precioFinal=precioBase*0.8; //se hace al revés el descuento (20/80)
					break;
				default:
					precioFinal=precioBase*0.9; //descuento
					break;
			}
			break;
		/*En Verano: Bariloche -20% / Cataratas y Cordoba +10% / Mar del Plata +20%*/
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					precioFinal=precioBase*0.8; //descuento
					break;
				case "Mar del Plata":
					precioFinal=precioBase*1.2; //aumento
					break;
				default:
					precioFinal=precioBase*1.1; //aumento
					break;
			}
			break;
		/*En Otoño y Primavera: Bariloche, Cataratas y Mar del Plata +10% / Cordoba =precio.*/
		default:
			switch(destino)
			{	
				case "Cordoba":
					precioFinal=precioBase; //mismo precio
					break;
				default:
					precioFinal=precioBase*1.1; //aumento
					break;
			}
			break;
	}

	alert("El precio final es de: $"+precioFinal);
}		