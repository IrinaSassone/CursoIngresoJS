/*
IF. Ejercicio 5:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/
function mostrar()
// 1ERA FORMA.
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if(edad<13 || edad>17) 
	{
		alert("No sos adolescente.");
	}
}

// 2DA FORMA.
/*
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if(!(edad>12 && edad<18)) // Negar con ! cambia los signos a lo inverso.
	{
		alert("No sos adolescente.");
	}
}
*/