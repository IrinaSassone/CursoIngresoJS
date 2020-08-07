/*
WHILE. Ejercicio 2.
Al presionar el botón mostrar 10 repeticiones con números DESCENDENTES, desde el 10 al 1.
*/
function mostrar()
// 1ERA FORMA. No falla.
{
	var i; // Definir variable de control.
	i=10; // Iniciar la variable.
	while(i>0) // Variable de control (condicion).
	{
		alert(i); // document.write(i+"<br>")
		i=i-1;
	}
}

// OTRA FORMA. NO MAL PERO PUEDE TRAER ERRORES.
/*
{
	var i;
	i=11;
	while(i>0)
	{
		i=i-1; // Variable iniciada en 11, entonces el cálculo se hace arriba porque debe ser 10-1.
		alert(i);
	}
}
*/