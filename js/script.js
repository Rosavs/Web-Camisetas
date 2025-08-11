function pedido(){
		var nvalor = document.getElementById("name").value;
		const destiny1 = document.getElementById("result1");
		var tvalor = document.getElementById("talla").value;
		const destiny2 = document.getElementById("result2");
		var cvalor = document.getElementById("color").value;
		const destiny3 = document.getElementById("result3");


		alert("¡Hola " + nvalor +"!" + " La talla elegida es la " + tvalor + " y el color es " + cvalor);

		const destiny = document.getElementById("result");
		destiny.append("Camiseta Talla " + tvalor +"  Color " + cvalor + " ");
	}