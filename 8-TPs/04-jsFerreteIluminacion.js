/*
TP 4:
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o "FelipeLamparas" se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es "FelipeLamparas" se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/
function CalcularPrecio () 
//PRIMERA FORMA -- LA IDEAL:
/*{
	var precioUnitario;
	var precio;
	var precioFinal;
	var precioConDescuento;
	var cantidadDeLamparas;
	var marcaDeLamparas;
	var impuestoIIBB;

	precioUnitario=35;

	cantidadDeLamparas=txtIdCantidad.value;
	cantidadDeLamparas=parseInt(cantidadDeLamparas);

	marcaDeLamparas=document.getElementById("Marca").value;

	precio=precioUnitario*cantidadDeLamparas;

	if(cantidadDeLamparas>5)
	{
		precioConDescuento=(precio*50)/100;
	}
	else		
	{
		if(cantidadDeLamparas==5)
		{	
			if(marcaDeLamparas=="ArgentinaLuz")
			{
				precioConDescuento=(precio*40)/100;
			}
			else
			{
				precioConDescuento=(precio*30)/100;
			}
		}

		if(cantidadDeLamparas==4)
		{
			if(marcaDeLamparas=="ArgentinaLuz" || marcaDeLamparas=="FelipeLamparas")
			{
				precioConDescuento=(precio*25)/100;
			}
			else
			{
				precioConDescuento=(precio*20)/100;
			}
		}

		if(cantidadDeLamparas==3)
		{
			if(marcaDeLamparas=="ArgentinaLuz")
			{
				precioConDescuento=(precio*15)/100;
			}
			else
			{
				precioConDescuento=(precio*5)/100;
			}
			if(marcaDeLamparas=="FelipeLamparas") 
			{
				precioConDescuento=(precio*10)/100;
			}
		}
	}

	precioFinal=precio-precioConDescuento;
	txtIdprecioDescuento.value=precioFinal;

	if(precioFinal>120)
	{
		impuestoIIBB=(precioFinal*10)/100;
		alert("Usted pago "+impuestoIIBB+" de IIBB.");
	}
}

//SEGUNDA FORMA UN POCO MÁS LARGUIHNA:
{
	var precioUnitario;
	var precio;
	var precioFinal;
	var precioConDescuento;
	var cantidadDeLamparas;
	var marcaDeLamparas;
	var impuestoIIBB;

	precioUnitario=35;

	cantidadDeLamparas=txtIdCantidad.value;
	cantidadDeLamparas=parseInt(cantidadDeLamparas);

	marcaDeLamparas=document.getElementById("Marca").value;

	precio=precioUnitario*cantidadDeLamparas;

	if(cantidadDeLamparas>5)
	{
		precioConDescuento=(precio*50)/100;
		precioFinal=precio-precioConDescuento;
	}
	else
	{ 
		if(cantidadDeLamparas==5)
		{
			if(marcaDeLamparas=="ArgentinaLuz")
			{	
				precioConDescuento=(precio*40)/100;
				precioFinal=precio-precioConDescuento;
			}		
			else 
			{
				if(marcaDeLamparas!="ArgentinaLuz")
				{
					precioConDescuento=(precio*30)/100;
					precioFinal=precio-precioConDescuento;
				}
			}
		}

		if(cantidadDeLamparas==4)
		{
			if(marcaDeLamparas=="ArgentinaLuz" || cantidadDeLamparas=="FelipeLamparas")
			{
				precioConDescuento=(precio*25)/100;
				precioFinal=precio-precioConDescuento;
			}
			else 
			{	
				if(marcaDeLamparas!="ArgentinaLuz" || cantidadDeLamparas!="FelipeLamparas")
				{
					precioConDescuento=(precio*20)/100;
					precioFinal=precio-precioConDescuento;
				}
			}
		}
	
		if(cantidadDeLamparas==3)
		{
			if(marcaDeLamparas=="ArgentinaLuz")
			{
				precioConDescuento=(precio*15)/100;
				precioFinal=precio-precioConDescuento;
			}
			else 
			{
				if(marcaDeLamparas!="ArgentinaLuz" || marcaDeLamparas!="FelipeLamparas")
				{
					precioConDescuento=(precio*5)/100;
					precioFinal=precio-precioConDescuento;
				}
			}
			if(marcaDeLamparas=="FelipeLamparas")
			{
				precioConDescuento=(precio*10)/100;
				precioFinal=precio-precioConDescuento;
			}
		}	
	}

	txtIdprecioDescuento.value=precioFinal;

	if(precioFinal>120)
	{
		impuestoIIBB=(precioFinal*10)/100;
		alert("Usted pago "+impuestoIIBB+" de IIBB.");
	}
}
*/

//TERCERA FORMA CON SWITCH:
{
	var precioUnitario;
	var precioFinal;
	var porcentajeDescuento;
	var cantidadDeLamparas;
	var marcaDeLamparas;
	var impuestoIIBB;

	precioUnitario=35;
	porcentajeDescuento=1;

	cantidadDeLamparas=txtIdCantidad.value;
	cantidadDeLamparas=parseInt(cantidadDeLamparas);

	marcaDeLamparas=document.getElementById("Marca").value;

	precioFinal=precioUnitario*cantidadDeLamparas;

	switch(cantidadDeLamparas)
	{
		case 1:
		case 2:
			porcentajeDescuento=1;
			break;
		case 3:
			switch(marcaDeLamparas)
			{
				case "ArgentinaLuz":
					porcentajeDescuento=0.85;
					break;
				case "FelipeLamparas":
					porcentajeDescuento=precio*0.9;
					break;
				default:
					porcentajeDescuento=precio*0.95;
					break;
			}
			break;
		case 4:
			switch(marcaDeLamparas)
			{
				case "ArgentinaLuz":
				case "FelipeLamparas":
					porcentajeDescuento=0.75;
					break;
				default:
					porcentajeDescuento=0.8;
					break;
			}
			break;
		case 5:
			switch(marcaDeLamparas)
			{
				case "ArgentinaLuz":
					porcentajeDescuento=precio*0.6;
					break;
				default:
					porcentajeDescuento=precio*0.7;
					break;
			}
			break;
		default:
			porcentajeDescuento=precio*0.5;
			break;
	}

	precioFinal=precioFinal*porcentajeDescuento;
	txtIdprecioDescuento.value=precioFinal;

	if(precioFinal>120)
	{
		impuestoIIBB=precioFinal*0.1;
		alert("Usted pago "+impuestoIIBB+" de IIBB.");
	}
}

	3:
ArgentinaLuz:0.15
FelipeLamparas:0.10
Otras:0.05
4:
ArgentinaLuz/FelipeLamparas:0.25
Otras:0.20
5: ArgentinaLuz:0.40
Otras:0.30