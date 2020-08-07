/*
PARCIAL 2020.
Ejercicio 2:
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
-- Tipo validad("arena";"cal";"cemento")
-- Cantidad de bolsas,
-- Precio por bolsa (más de cero),
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar, bruto sin descuento y...
b) el importe total a pagar con descuento (solo si corresponde).
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro.
*/
function mostrar()
{
	var producto;
	var cantidadBolsa;
	var importeBruto;
	var importeConDescuento;
	var importeFinal;
}


	// Informar el tipo con mas cantidad de bolsas.
	document.write("El producto "++" tiene mayor cantidad de bolsas ");
	// El tipo mas caro.
	document.write("El producto más caro es "++" con un precio total de"++".");





	function mostrar()
{
	// Definir variables.
	var producto;
	var cantidadBolsa;
	var importeBruto;
	var importeFinal;
	var importeFinalArena;
	var importeFinalCal;
	var importeFinalCemento;
	var productoMasCaro;
	var seguirIngresandoProductos;
	var contadorProductosIngresados;
	var acumuladorArena;
	var acumuladorCal;
	var acumuladorCemento;
	var banderaArena;
	var banderaCal;
	var banderaCemento;
	cantidadBolsa=0;
	importeFinalArena=0;
	importeFinalCal=0;
	importeFinalCemento=0;
	contadorProductosIngresados=0;
	acumuladorArena=0;
	acumuladorCal=0;
	acumuladorCemento=0;
	seguirIngresandoProductos="si";
	do
	{
		// Tipo de producto.
		producto=prompt("Ingrese el producto:");
		while(producto.toLowerCase()!="arena" && producto.toLowerCase()!="cal" && producto.toLowerCase()!="cemento")
		{
			producto=prompt("¡ERROR! \nPor favor, reingrese el producto:");
			producto=producto.toLowerCase();
		}
		// Cantidad de bolsas.
		cantidadBolsa=prompt("Ingrese la cantidad de bolsas del producto:");
		cantidadBolsa=parseInt(cantidadBolsa);
		// Precio por bolsa.
		importeBruto=prompt("Ingrese el precio por bolsa:");
		importeBruto=parseFloat(importeBruto);
		while(importeBruto<0) // ¡¡¡¡¡POR QUÉEEEEEEEE!!!!! 
		{
			importeBruto=prompt("¡ERROR! \nPor favor, reingrese el precio por bolsa:");
			importeBruto=parseFloat(importeBruto);
		}
		switch(producto)
		{
			case "arena":
				importeFinalArena=importeBruto*cantidadBolsa;
				acumuladorArena++;
				break;
			case "cal":
				importeFinalCal=importeBruto*cantidadBolsa;
				acumuladorCal++;
				break;
			case "cemento":
				importeFinalCemento=importeBruto*cantidadBolsa;
				acumuladorCemento++;
				break;
		}
		contadorProductosIngresados++;
		seguirIngresandoProductos=prompt("¿Desea ingresar otro producto?");
	}while(seguirIngresandoProductos.toLowerCase()=="si");

	// Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
	if(cantidadBolsa>9 && cantidadBolsa<29)
	{
		importeFinal=importeFinalArena+importeFinalCal+importeFinalCemento;
		importeConDescuento=importeFinal*0.15;
		importeConDescuento=importeFinal-importeConDescuento;
	}
		// Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
	else
	{
		importeFinal=importeFinalArena+importeFinalCal+importeFinalCemento;
		importeConDescuento=importeFinal*0.25;
		importeConDescuento=importeFinal-importeConDescuento;	
	}
	// El importe total a pagar, bruto sin descuento y...
	document.write("El importe total a pagar es de $"+importeFinal+".");
	// El importe total a pagar con descuento (solo si corresponde).
	document.write("El importe total a pagar con descuento es de $"+importeConDescuento+".");
}
