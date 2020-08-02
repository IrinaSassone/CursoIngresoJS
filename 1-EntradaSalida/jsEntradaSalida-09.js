/*
E/S. Ejercicio 9: 
Debemos lograr tomar el importe por ID, transformarlo a entero (parseInt), luego mostrar el importe 
con un aumento del 10% en el recuadro de texto "Resultado".
*/
function mostrarAumento()
{
	var sueldo;
	var porcentaje;
	var resultado;

	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);

	//resultado = sueldo + porcentaje;

	resultado = sueldo * 1.1; //porcentaje = sueldo * 10 / 100;

	txtIdResultado.value = resultado;

	/*porcentaje = 1000 * 0.1; 
	resultado = 1000 + 1.1;*/
}
