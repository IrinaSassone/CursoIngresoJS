/*
PARCIAL 2020.
Ejercicio 3:
En el ingreso a un viaje en avión nos solicitan nombre, edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")
y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos.
c) La cantidad de hombres que hay solteros o viudos.
d) Cuantas personas de la tercera edad (mas de 60 años) tienen mas de 38 de temperatura.
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	// Definir variables.
	var nombre;
	var nombreTemperaturaCorporalMaxima;
	var edad;
	var terceraEdad;
	var promedioEdadHombresSolteros;
	var cantidadMayoresEdadViudos;
	var sexo;
	var estadoCivil;
	var cantidadHombresSolteros;
	var cantidadHombresSolterosYViudos;
	var temperaturaCorporal;
	var temperaturaCorporalMaxima;
	var acumuladorDeDatos;
	var respuesta;
	// Iniciar variables. 
	terceraEdad=0;
	cantidadMayoresEdadViudos=0;
	cantidadHombresEstadoCivil=0;
	cantidadHombresSolteros=0;
	cantidadHombresSolterosYViudos=0;
	respuesta="si";
	acumuladorDeDatos=0;
	banderaTemperaturaCorporal=1;
	do
	{
		// Ingresar nombre.
		nombre=prompt("Ingrese su nombre:");
		// Ingresar edad. 
		edad=prompt("Ingrese su edad:");
		edad=parseInt(edad)
		while(edad<0 || isNaN(edad))
		{
			edad=prompt("ERROR. \nPor favor, reingrese su edad en números:");
			edad=parseInt(edad)
		}
		// Ingresar sexo.
		sexo=prompt("Ingrese su sexo siendo 'F' para femenino y 'M' para masculino:");
		sexo=sexo.toLowerCase();
		while(sexo!="f" && sexo!="m")
		{	
			sexo=prompt("ERROR. \nPor favor, reingrese su sexo siendo 'F' para femenino y 'M' para masculino:");
			sexo=sexo.toLowerCase();
		}
		// Ingresar estado civil.
		estadoCivil=prompt("Ingrese su estado civil ya sea 'soltero', 'casado' o 'viudo':");
		estadoCivil=estadoCivil.toLowerCase();
		while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
		{
			estadoCivil=prompt("ERROR. \nPor favor, reingrese su estado civil ya sea 'soltero', 'casado' o 'viudo':");
			estadoCivil=estadoCivil.toLowerCase();
		}
		// Cuantos mayores de edad estan viudos.
		if(edad>17 && estadoCivil=="viudo")
		{
			cantidadMayoresEdadViudos++;
		}
		// La cantidad de hombres que hay solteros o viudos.
		if(sexo=="m" && (estadoCivil=="soltero" || estadoCivil=="viudo"))
		{
			cantidadHombresSolterosYViudos++;
		}
		else
		{
			if(sexo=="m" && estadoCivil=="soltero")
			{
				cantidadHombresSolteros++; // NO SUMA EDAAAAAAAAAAAAAAAAAAAADDDDDDDDDD!!!!!!!!!!!!!!!!!!!!!!
			}
		}
		// Ingresar temperatura corporal.
		temperaturaCorporal=prompt("Ingrese su temperatura corporal:");
		temperaturaCorporal=parseFloat(temperaturaCorporal);
		while(temperaturaCorporal<33 || temperaturaCorporal>46 || isNaN(temperaturaCorporal))
		{
			temperaturaCorporal=prompt("ERROR. \nPor favor, reingrese un número válido para temperatura corporal:");
			temperaturaCorporal=parseFloat(temperaturaCorporal);
		}
		// El nombre de la persona con mas temperatura.
		if(banderaTemperaturaCorporal==1 || temperaturaCorporal>temperaturaCorporalMaxima)
		{
			temperaturaCorporalMaxima=temperaturaCorporal;
			nombreTemperaturaCorporalMaxima=nombre;
		}
		banderaTemperaturaCorporal=0;
		// Cuantas personas de la tercera edad (mas de 60 años) tienen mas de 38 de temperatura.
		if(edad>59 && temperaturaCorporal>37)
		{
			terceraEdad++;
		}
		acumuladorDeDatos++;
		respuesta=prompt("¿Desea ingresar los datos de otro pasajero?:")
	}while(respuesta.toLowerCase()=="si");
	// El promedio de edad entre los hombres solteros.
	promedioEdadHombresSolteros=edad/cantidadHombresSolteros;
	document.write("La temperatura más alta es de "+temperaturaCorporalMaxima+"°C del pasajero llamado "+nombreTemperaturaCorporalMaxima+". </br>Hay "+cantidadMayoresEdadViudos+" mayores de edad viudos. </br>La cantidad de hombres que hay solteros o viudos es de "+cantidadHombresSolterosYViudos+". </br>Hay "+terceraEdad+" personas de tercera edad que tienen más de 38°C de temperatura. </br>El promedio de edad entre los hombres solteros es de "+promedioEdadHombresSolteros+".");
}

/*
1. Lucas 15 M soltero 37.9

2. Marcela 38 F casada 40.3

3. Lucio 48 M viudo 39.8

4. Marcelo 89 M viudo 35.5

5. Jose 79 M casado 38.8

6. Alberto 57 M soltero 37.8
*/