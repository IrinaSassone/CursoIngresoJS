/*
E/S. Ejercicio 9: 
Debemos lograr tomar el sueldo por ID, transformarlo a entero (parseInt) y luego mostrar el sueldo 
con un aumento del 10% en el recuadro de texto "Resultado".
*/
function mostrarAumento()
{
	var sueldoIngresado;
	var aumento;
	var sueldoConAumento;
	sueldoIngresado=txtIdSueldo.value;
	sueldoIngresado=parseInt(sueldoIngresado);
	aumento=sueldoIngresado*10/100; // aumento=sueldoIngresado*0.10
	sueldoConAumento=sueldoIngresado+aumento;
	txtIdResultado.value=sueldoConAumento;
	/* 
	EJEMPLO HECHO DE LAS DOS FORMAS:
	aumento = sueldoIngresado * 0.1; 
	sueldoConAumento = sueldoIngresado + aumento;
	---------------------------------------------
	sueldoConAumento = sueldoIngresado * 1.1;
	*/
}