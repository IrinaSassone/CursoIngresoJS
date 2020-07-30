/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var i;//variable de control
	i=10;
	while(i>0)
	{
		alert(i);//document.write(i+"<br>")
		i=i-1;
	}
}

//OTRA FORMA: NO MAL PERO PUEDE TRAER ERRORES.
/*{
	var i;
	i=11;
	while(i>0)
	{
		i=i-1;
		alert(i);
	}
}*/