/*
Ejercicio 3:
Al ingresar una edad debemos informar si la persona es mayor de 
edad, sino informar que es un menor de edad.
*/
function mostrar()
//1ERA FORMA. En teoría es "la mejor forma" pero no para este caso.
//
{
	var edad;
	
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if(edad>17) 
	{
		alert("Sos mayor de edad.")
	}else
	{
		alert("Sos menor de edad.");
	}
}

//2DA FORMA. Mayor consumo de procesador pero funciona mejor para este caso.
{
	var edad;
	
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if(edad<18) 
	{
		alert("Sos menor de edad.");
	}

	if(edad>17) 
	{
		alert("Sos mayor de edad.")
	}
}

