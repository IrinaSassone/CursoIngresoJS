/*
TP2:
Para el departamento de Construcción:
A. Mostrar la cantidad de alambre a comprar si se ingresara el largo y
el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B. Mostrar la cantidad de alambre a comprar si se ingresara el radio  de un terreno circular y 
se debe alambra con tres hilos de alambre.
C. Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var cantidadDeAlambre;

	largo=parseInt(txtIdLargo.value);
	ancho=parseInt(txtIdAncho.value);

	perimetro=(largo*2)+(ancho*2);
	cantidadDeAlambre=perimetro*3;

	alert("Tenes que comprar "+cantidadDeAlambre+" de alambre.");
}

function Circulo () 
{
 	var radio;
 	var perimetro;
 	var cantidadDeAlambre;

	radio=parseInt(txtIdRadio.value);

	perimetro=Math.PI*2*radio;
	cantidadDeAlambre=perimetro*3;

	alert("Tenes que comprar "+cantidadDeAlambre+" de alambre.");

}

function Materiales () 
{
	var base;
	var altura;
	var area;
	var cantidadCemento;
	var cantidadCal;

	base=parseInt(txtIdAncho.value);
	altura=parseInt(txtIdLargo.value);

	area=base*altura;
	cantidadCemento=area*2;
	cantidadCal=area*3;

	alert("Necesitas "+cantidadCemento+" bolsas de cemento y "+cantidadCal+" bolsas de cal para hacer el contrapiso de la medida ingresada.");
}