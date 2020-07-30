/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado=parseInt(numeroIngresado);
	numeroIngresado=prompt("Ingrese un número entre 0 y 9.");
	while(numeroIngresado<0 || numeroIngresado>9)
	{
		numeroIngresado=prompt("¡¡ERROR!! Reingrese un número entre 0 y 9.");
	}
	txtIdNumero.value=numeroIngresado;
	
}//FIN DE LA FUNCIÓN

//(!(numeroIngresado>-1 && numeroIngresado<10))