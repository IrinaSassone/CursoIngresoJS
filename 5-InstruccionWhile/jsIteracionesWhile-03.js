/*
WHILE. Ejercicio 3:
Al presionar el botón pedir la CLAVE. 
Ejemplo: "Es utn750".
*/
function mostrar()
{
	var claveIngresada;
	claveIngresada=prompt("Ingrese el número clave:");
	while(claveIngresada!="utn750")
	{
		claveIngresada=prompt("Por favor, vuelva a ingresar el número clave:");
	}
	alert("El número clave ingresado es el correcto.");
}

// OTRA FORMA PERO NO TAN BIEN:
/*
{
	var claveIngresada;
	claveIngresada=prompt("Ingrese el número clave:");
	while(!(claveIngresada=="utn750")) // Es mejor preguntar directo.
	{
		claveIngresada=prompt("Por favor, vuelva a ingresar el número clave:");
	}
	alert("El número clave ingresada es el correcto.");
}
*/