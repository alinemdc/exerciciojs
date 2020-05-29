var receita = {
    titulo: "Bolo de cenoura",
    porções: 10,
    ingredientes: ["farinha", "ovo", "óleo"],
}

console.log(receita.titulo);
console.log(receita.porções);

for(i=0; i<receita.ingredientes.length;i++){
    console.log(receita.ingredientes[i]);
}




let livros = [
    {
    titulo: "Auto-ajuda",
    autor: "Mario Quintana",
    livroLido: true,
    },
    {
    titulo: "Matemática básica",
    autor: "João da Silva",
    livroLido: false,
    },
    {
    titulo: "Banco de dados",
    autor: "Maria de Jesus",
    livroLido: false,
    },
    {
    titulo: "Sei lá",
    autor: "João de Deus",
    livroLido: true,
    }
]

for(i=0;i<livros.length;i++){
    console.log(livros[i].titulo);
    console.log(livros[i].autor);
    if (livros[i].livroLido == true){
        console.log("Você já leu esse livro");
    }else
        console.log("Você não leu esse livro");
    }
