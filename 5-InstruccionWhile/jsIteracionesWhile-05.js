/*
WHILE. Ejercicio 5:
Al presionar el botón pedir un sexo 'F' para femenino y 'M' para masculino.
*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado=prompt("Ingrese 'F' si es de sexo femenino o 'M' si es de sexo masculino:");

	while(sexoIngresado!="F" && sexoIngresado!="M")
	{
		sexoIngresado=prompt("Por favor, vuelva a ingresar 'F' si es de sexo femenino o 'M' si es de sexo masculino:")
	}
	txtIdSexo.value=sexoIngresado;
}