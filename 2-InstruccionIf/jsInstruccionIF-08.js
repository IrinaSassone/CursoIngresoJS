/*
Ejercicio 8:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero" NO HACER NADA
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
/*function mostrar()
{
	var edad;
	var estadoCivilIngresado;

	edad=txtIdEdad.value;
	edad=parseInt(edad);

	estadoCivilIngresado=estadoCivil.value;

	if(edad>17 && estadoCivilIngresado=="Soltero") 
	{
		alert("Es soltero y no es menor.");
	}
}


{
	var edad;
	var estadoCivilIngresado;

	edad=txtIdEdad.value;
	edad=parseInt(edad);

	estadoCivilIngresado=estadoCivil.value;

	if(edad>17)
	{
		if(estadoCivilIngresado=="Soltero") 
		{
			alert("Es soltero y no es menor.");
		}
	}
}
*/

/* 
Ejercicio 8 de Switch:
Hacerlo en el ejercicio 08 del IF:

Se pide ingresar una edad y un estado civil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente" //TODOS 

    la menor cantidad de if 
    no repetir los alert o los mensajes
    
*/
function mostrar()
{
	var edad;
	var estadoCivil;
	var mensaje;

	edad=txtIdEdad.value;
	estadoCivil=estadoCivil.value;

	
	edad=parseInt(edad);

	if(edad<13)
	{
		mensaje="Hagan la tarea.";
	}
	else
	(edad>59)
	{
		mensaje="Sos persona de riesgo.";
	}



		edad<18
		mensaje="Respeta a tus mayores.";
			"Casado":
			"Divorciado":
			mensaje="Sos muy joven para no ser soltero.";
		(edad>18)
		mensaje="Sé responsable.";
			"Soltero":
			mensaje="A vivir la vida.";
			"Casado":
			mensaje="A disfrutar la pareja.";
			"Divorciado":
			mensaje="A intentarlo nuevamente.";


}
