/*
IF. Ejercicio 4:
Al ingresar una edad debemos informar si la persona es adolescente, 
edad entre 13 y 17 años (inclusive).
*/
function mostrar()
// 1ERA FORMA. Hecha con if adentro de otro if.
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if(edad>12) 
	{
		if(edad<18)
		{
			alert("Sos adolescente.");
		}			
	}
}

// 2DA FORMA. Hecha con operadores.
/*
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if(edad>12 && edad<18) 
	{
		alert("No sos adolescente.");
	}
}
*/