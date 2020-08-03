/*
IF. Ejercicio 7:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
// 1ERA FORMA. 
{
	var edad;
	var estadoCivilIngresado;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	estadoCivilIngresado=estadoCivil.value;
	
	if(edad<18)
	{
		if(estadoCivilIngresado!="Soltero")
		{
			alert("Es muy pequeño para NO ser soltero.");
		}
	}
}

// 2DA FORMA. Hecha con operadores. 
/*
{
	var edad;
	var estadoCivilIngresado;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	estadoCivilIngresado=estadoCivil.value;

	if(edad<18 && estadoCivilIngresado!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
}
*/