/*
E/S. Ejercicio 7: 
Debemos lograr tomar los números por ID, transformarlos a enteros (parseInt), 
realizar la operación correcta y mostrar el resultado por medio de "alert".
Ejemplo: "La resta es de 750".
*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;
	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	suma=numeroUno+numeroDos;
	alert("El resultado de la suma es de: "+suma);
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resta=numeroUno-numeroDos;
	alert("El resultado de la resta es de: "+resta);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicacion;
	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	multiplicacion=numeroUno*numeroDos;
	alert("El resultado de la multiplicación es de: "+multiplicacion);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var division;
	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	division=numeroUno/numeroDos;
	alert("El resultado de la división es de: "+division);
}