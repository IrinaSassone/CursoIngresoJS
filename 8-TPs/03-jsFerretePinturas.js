/*
TP3:
Para el departamento de Pinturas:
A. Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados 
con un mensaje concatenado (Ej.: "32 Fahrenheit son 0 centígrados").
B. Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit 
(Ej.: "0 centígrados son 32 Fahrenheit").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var resultado;
	temperatura=parseInt(txtIdTemperatura.value);
	resultado=(temperatura-32)/1.8;
	alert(+temperatura+" grados Fahrenheit es "+resultado+" grados centígrados.");
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var resultado;
	temperatura=parseInt(txtIdTemperatura.value);
	resultado=(temperatura*1.8)+32;
	alert(+temperatura+" grados centígrados es "+resultado+" grados Fahrenheit.")
}
