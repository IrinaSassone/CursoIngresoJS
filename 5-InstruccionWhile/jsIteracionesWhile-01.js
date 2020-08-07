/*
WHILE. Ejercicio 1:
Al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10.
*/
function mostrar()
// 1ERA FORMA.
{
	var i; // Deeclaración de la variable.
	i=1; // Inicialización de la variable. 
	while(i<10) // Variable d control (condición)
	{
		alert(i);
		// Modificación de la variable de control.
		i=i+1; // También se puede utilizar los operadores ++ (incremento). Ej: i++;
	}
}

// OTRA FORMA DE HACER.
/*
{
	var i;
	i=0; // IDEALMENTE se recomienda iniciar variables en CERO.
	while(i<10)
	{
		i=i+1; // Al hacer el cálculo antes, el conteo empieza desde 1 y no 0.
		// Se puede mostrar tanto como:
		document.write(i+"<br>");
		// ó 
		console.log(i);
	}
}
*/