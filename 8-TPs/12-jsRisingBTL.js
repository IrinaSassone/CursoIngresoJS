/*
TP12:
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga 
de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) 
y luego asignarla a cuadros de textos. 
Los datos requeridos son los siguientes:
A. Edad, entre 18 y 90 años inclusive.
B. Sexo, “M” para masculino y “F” para femenino.
C. Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos.
D. Sueldo bruto, no menor a 8000.
E. Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F. Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
*/
function ComenzarIngreso () 
{
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBrutoIngresado;
	var numeroDeLegajoIngresado;
	var nacionalidadIngresada;
	
	edadIngresada=prompt("Ingrese su edad:");
	edadIngresada=parseInt(edadIngresada);
	while(!(edadIngresada>17 && edadIngresada<91))
	{
		edadIngresada=prompt("ERROR. \nPor favor, reingrese su edad:");
		edadIngresada=parseInt(edadIngresada);
	}
	//--------------------------------------------------------------------------------------------------
	sexoIngresado=prompt("Ingrese su sexo teniendo en cuenta que 'F' es para femenino y 'M' es para masculino:");
	while(!(sexoIngresado.toLowerCase()=="f" || sexoIngresado.toLowerCase()=="m"))
	{
		sexoIngresado=prompt("ERROR. \nPor favor, reingrese su sexo teniendo en cuenta que 'F' es para femenino y 'M' es para masculino:");
	}
	//--------------------------------------------------------------------------------------------------
	estadoCivilIngresado=prompt("Ingrese su estado civil teniendo en cuenta que '1' es para soltero/a, '2' es para casado/a, '3' es para divorciado/a y '4' es para viudo/a:");
	estadoCivilIngresado=parseInt(estadoCivilIngresado);
	while(!(estadoCivilIngresado==1 || estadoCivilIngresado==2 || estadoCivilIngresado==3 || estadoCivilIngresado==4))
	{
		estadoCivilIngresado=prompt("ERROR. \nPor favor, reingrese su estado civil teniendo en cuenta que '1' es para soltero/a, '2' es para casado/a, '3' es para divorciado/a y '4' es para viudo/a:");
		estadoCivilIngresado=parseInt(estadoCivilIngresado);
	}
	//--------------------------------------------------------------------------------------------------
	sueldoBrutoIngresado=prompt("Ingrese su sueldo bruto:");
	sueldoBrutoIngresado=parseFloat(sueldoBrutoIngresado);
	while(!(sueldoBrutoIngresado>7999)) // (sueldoBrutoIngresado<8000)
	{
		sueldoBrutoIngresado=prompt("ERROR. \nPor favor, reingrese su sueldo bruto:");
		sueldoBrutoIngresado=parseFloat(sueldoBrutoIngresado);
	}
	//--------------------------------------------------------------------------------------------------
	numeroDeLegajoIngresado=prompt("Ingrese su número de legajo:");
	numeroDeLegajoIngresado=parseInt(numeroDeLegajoIngresado);
	while(!(numeroDeLegajoIngresado>999 && numeroDeLegajoIngresado<10000))
	{
		numeroDeLegajoIngresado=prompt("ERROR. \nPor favor, reingrese su número de legajo:");
		numeroDeLegajoIngresado=parseInt(numeroDeLegajoIngresado);
	}
	//--------------------------------------------------------------------------------------------------
	nacionalidadIngresada=prompt("Ingrese su nacionalidad teniendo en cuenta que 'A' es para argentino/a, 'E' es para extranjero/a y 'N' es para nacionalizado/a:");
	while(!(nacionalidadIngresada.toLowerCase()=="a" || nacionalidadIngresada.toLowerCase()=="e" || nacionalidadIngresada.toLowerCase()=="n"))
	{
		nacionalidadIngresada=prompt("ERROR. \nPor favor, reingrese su nacionalidad teniendo en cuenta que 'A' es para argentino/a, 'E' es para extranjero/a y 'N' es para nacionalizado/a:");
	}

	txtIdEdad.value=edadIngresada;
	switch(sexoIngresado.toLowerCase()) // PREGUNTAR SI ESTÁ BIEN HECHO.
	{
		case "f":
			sexoIngresado="Femenino";
			break;
		case "m":
			sexoIngresado="Masculino";
			break;	
	}
	txtIdSexo.value=sexoIngresado;
	switch(estadoCivilIngresado)
	{
		case 1:
			estadoCivilIngresado="Soltero/a";
			break;
		case 2:
			estadoCivilIngresado="Casado/a";
			break;
		case 3:
			estadoCivilIngresado="Divorciado/a";
			break;
		case 4:
			estadoCivilIngresado="Viudo/a";
			break;
	}
	txtIdEstadoCivil.value=estadoCivilIngresado;
	/*
	if(sexoIngresado.toLowerCase()=="f")
	{
		txtIdSexo.value="Femenino";
	}
	else
	{
		if(sexoIngresado.toLowerCase()=="m")
		{
			txtIdSexo.value="Masculino";
		}
	}
	*/
	txtIdSueldo.value=sueldoBrutoIngresado;
	txtIdLegajo.value=numeroDeLegajoIngresado;
	switch(nacionalidadIngresada.toLowerCase()) 
	{
		case "a":
			nacionalidadIngresada="Argentino/a";
			break;
		case "e":
			nacionalidadIngresada="Extranjero/a";
			break;
		case "n":
			nacionalidadIngresada="Nacionalizado/a";
			break;
	}
	txtIdNacionalidad.value=nacionalidadIngresada;
	/*
	if(nacionalidadIngresada.toLowerCase()=="a")
	{
		txtIdNacionalidad.value="Argentino/a";
	}
	else
	{
		if(nacionalidadIngresada.toLowerCase()=="e")
		{
			txtIdNacionalidad.value="Extranjero/a";
		}
		else
		{
			if(nacionalidadIngresada.toLowerCase()=="n")
			{
				txtIdNacionalidad.value="Nacionalizado/a";
			}
		}
	}
	*/
}