/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado=prompt("Ingrese F ó M.");

	while(sexoIngresado!="F" && sexoIngresado!="M")
	{
		sexoIngresado=prompt("¡¡ERROR!! Reingrese F ó M.");
	}
	
	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN