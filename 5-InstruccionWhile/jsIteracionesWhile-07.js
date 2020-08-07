/*
WHILE. Ejercicio 7:
Al presionar el botón pedir números hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.
*/
function mostrar()
// 1ERA FORMA. Con do/while.
{
	var numeroIngresado;
	var contador;
	var acumulador;
	var pregunta;
	contador=0;
	acumulador=0;
	do // Al usar do no se inicia la variable porque lo contempla en el while.
	{
		numeroIngresado=prompt("Ingrese un número:");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
		pregunta=prompt("¿Quiere ingresar otro número?");

	}while(pregunta=='si');
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;	
}

// 2DA FORMA. Con while.
/*
{
	var numeroIngresado;
	var contador;
	var acumulador;
	var pregunta;
	contador=0;
	acumulador=0;
	pregunta='si'; // Se inicia la variable.
	while(pregunta=='si')
	{	
		numeroIngresado=prompt("Ingrese un número:");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
		pregunta=prompt("¿Quiere ingresar otro número?");
	}
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;	
}
*/