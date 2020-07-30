/*
Ejercicio 6:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
//1ER EJEMPLO COMO HAY QUE HACERLO:
function mostrar()
{
	var edad;

	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if(edad<13)
	{
		alert("Sos niño.");
	}else
	{
		if(edad<18)
		{
			alert("Sos adolescente.");
		}else
		{
			alert("Sos mayor de edad.");
		}
	}
}

//2DO EJEMPLO MAS O MENOS BIEN:
/*
	var edad;
	
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if(edad>17) 
	{
		alert("Sos mayor de edad.");
	}else 
	{
		if(edad>12)
		{
			alert("Sos adolescente.");	
		}else
		{
			alert("Sos niño.");
		}
	}
*/

//ERROR!!!!!!!
/*
	if(edad<12)
	{
		alert("Sos niño.");
	}else
	{
		if(edad<18)
		{
			alert("Sos adolecente.");
		}
	}
	if(edad>18)
	{
		alert("Sos mayor de edad.");
	}
*/