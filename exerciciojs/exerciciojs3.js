function tabela(){
    
    let dia = document.getElementById("dia");
    let preco = document.getElementById("preco");
    let quantidade = document.getElementById("quantidade");
 

    fetch("https://www.mercadobitcoin.net/api/BTC/trades/")
    .then(
        Response => Response.json()
    )
    .then(
        data=>{
            for(i = 0; i < 10; i ++){
                dia.innerHTML = dia.innerHTML + "<td>" + data[i].date + "</td><br>"
                preco.innerHTML = preco.innerHTML + "<td>" + data[i].price + "</td><br>"
                quantidade.innerHTML = quantidade.innerHTML + "<td>" + data[i].amount + "</td><br>"

               
            }
            
        }
    )
 }