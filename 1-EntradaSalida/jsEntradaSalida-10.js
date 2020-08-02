/*
E/S. Ejercicio 10:
Debemos lograr tomar el importe por ID, transformarlo a entero (parseInt) y luego mostrar el 
importe con un descuento del 25% en el cuadro de texto "Resultado".
*/
function mostrarAumento()
{
	var importeIngresado;
	var descuento;
	var importeFinal;
	importeIngresado=txtIdImporte.value;
	importeIngresado=parseInt(importeIngresado);
	descuento=importeIngresado*25/100; // descuento=importeIngresado*0.25;
	importeFinal=importeIngresado-descuento;
	document.getElementById('txtIdResultado').value=importeFinal;
	/* 
	Otra forma de hacerlo:
	importeFinal=importeIngresado*0.75; // Se hace invertido el descuento.
	*/
}
