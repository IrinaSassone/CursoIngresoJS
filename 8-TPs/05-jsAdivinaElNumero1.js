/*
TP5:
Al comenzar el juego generamos un número secreto del 1 al 100. 
En la pantalla del juego dispondremos de un cuadro de texto para ingresar un número 
y un botón "Verificar", si el número ingresado es el mismo que el número secreto se dará 
por terminado el juego con un mensaje similar a este: "¡¡Usted es un ganador!! Y en solo 'x' intentos". 
De no ser igual se debe informar si "falta..." para llegar al número secreto o 
si "se pasó..." del número secreto. 
*/
var numeroSecreto;
var numeroIngresado; 
var contadorIntentos;

function comenzar()
{
	numeroSecreto=Math.floor(Math.random() * 100) + 1;
	numeroIngresado=txtIdNumero.value;
	numeroIngresado=parseInt(numeroIngresado);
	alert(numeroSecreto)
	if(contadorIntentos)
	txtIdIntentos.value=contadorIntentos;
}

function verificar()
{

}

