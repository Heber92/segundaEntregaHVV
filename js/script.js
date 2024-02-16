function ordencafe(){
    const menu = [
        {coffeeName: "Latte", price: 79,},
        {coffeeName: "Carmel Macchiato", price: 90,},
        {coffeeName: "Espresso Americano", price: 63,},
        {coffeeName: "Flat White", price: 90,},
        {coffeeName: "Latte Macchiato", price: 90,},
        {coffeeName: "Mocha", price: 90,},
        {coffeeName: "Cafe del Dia", price: 55,},
        {coffeeName: "Mocha Blanco", price: 90,},
    ]
    let shopping = [];
    let list = prompt("Hola Desea Comprar un Café o un Espresso");
    if(list == "si"){
        var customerName = prompt("Ingresa tu nombre para iniciar tu pedido :)");
        alert("Lista de Café y Espressos");
        let completeList = menu.map((product) => product.coffeeName + " $" + product.price);
        alert(completeList.join(" -- "));
    }else if(list == "no"){
        alert("Gracias por visitar nuestra Cafeteria H.I.V. los esperamos");
    }
    while(list != "no"){
        let product = prompt("Agregar bebida que desee ");
        let price = 0;

        if(
            product == "Latte" || product == "Carmel Macchiato" || product == "Espresso Americano" || product == "Flat White" || product == "Latte Macchiato" || product == "Mocha" || product == "Cafe del Dia" || product == "Mocha Blanco"
        ){
            switch(product){
                case "Latte":
                    price = 79;
                    break;
                case "Carmel Macchiato":
                    price = 90;
                    break;
                case "Espresso Americano":
                    price = 63;
                    break;
                case "Flat White":
                    price = 90;
                    break;
                case "Latte Macchiato":
                    price = 90;
                    break;
                case "Mocha":
                    price = 90;
                    break;
                case "Cafe del Dia":
                    price = 55;
                    break;
                case "Mocha Blanco":
                    price = 90;
                    break;
                default:
                    break;
            }
            let unit = parseInt(prompt("Cuantas bebidas quiere de " + product));
            shopping.push({product ,unit ,price });
        } else{
            alert("Lo siento no tenemos esa Bebida");
        }

        list = prompt("Desea comprar otra Bebida");
    }
    alert("Gracias por su compra");

            shopping.forEach((finish) => {
                alert(`"Bebidas: ${finish.product}" - Cantidad: ${finish.unit}" - "Pagar por bebida: $${finish.price}`);
            });
            const finishTotal = shopping.reduce((acc, el) => acc + el.price * el.unit,0);
            alert("LLamando a " + customerName + " su total a pagar es de $" + finishTotal);
            
    
}