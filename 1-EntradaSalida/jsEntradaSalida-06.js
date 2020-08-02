/*
E/S. Ejercicio 6: 
Debemos lograr tomar los números por ID, transformarlos a enteros (parseInt) y sumarlos.
Mostrar el resulto por medio de "alert".
*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;
	numeroUno=parseInt(numeroUno); //Se parsean los números para que se vuelvan enteros.
	numeroDos=parseInt(numeroDos); //Este también.
	//Se hace la suma --> suma=numeroUno+numeroDos;
	suma=numeroUno+numeroDos;
	//Por alert solo se usa variable "suma" para mostrar el resultado.
	alert(suma);
}