

function exibirImagem(){

        let imagem = document.getElementById("imagem");
    
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(
            response => response.json()
        )
        .then(data => {
           imagem.innerHTML = "<img src='" + data.message + "'alt= 'Random Photo of a Dog'/>"
            }
        )
        .catch(error => console.error(error))
}