/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada=prompt("Ingrese el número clave.");
	while(claveIngresada!="utn750")
	{
		claveIngresada=prompt("Reingrese el número clave.");
	}
	alert("Ingresó.");
	
}

//OTRA FORMA PERO NO TAN BIEN:
/*{
	var claveIngresada;
	claveIngresada=prompt("Ingrese el número clave.");
	while(!(claveIngresada=="utn750"))//es mejor preguntar directo
	{
		claveIngresada=prompt("Reingrese el número clave.");
	}
	alert("Ingresó.");

}*/