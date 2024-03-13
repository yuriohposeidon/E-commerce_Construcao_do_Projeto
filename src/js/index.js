let contador = 0

function loja(lista) {
  const bloco = document.querySelector(".bloco");
  bloco.innerHTML = ""
  for (let i = 0; i < lista.length; i++) {
    const card = lista[i];
    const renderizar = createCard(card);
    bloco.append(renderizar);
  }
}
  let valorTotal = 0
function createCard(objeto) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const tipo = document.createElement("p");
  const h2 = document.createElement("h2");
  const strong = document.createElement("strong");
  const descricao = document.createElement("p");
  const valor = document.createElement("p");
  const adicionar = document.createElement("button"); 
  adicionar.id = objeto.id
  
  let botoes = document.querySelectorAll(".adicionar");


  
  adicionar.addEventListener("click", function (evento) {
    let idElement = evento.target.id
    let itemCarrinho = 0
    for(let i = 0; i < producao.length; i++){
      if(idElement == producao[i].id){
        itemCarrinho = producao[i]
      }
    }    

    let valorElement = parseFloat(itemCarrinho.valor)
    valorTotal = valorTotal + valorElement

    const total = document.querySelector(".total")
    total.innerText = `Valor total R$${valorTotal}`

    let id = parseInt(idElement.substring(4))
    let produto = localizador(id)
    
    contador++
    if(contador == 0){
    }

    const quantidade = document.getElementById("quantidade")
    quantidade.innerText = `Quantidade ${contador}`

    let elementProduto = cardAdicionado(objeto)

    let listaCarrinho =  document.querySelector(".listaCarrinho")

    listaCarrinho.append(elementProduto)
    vazio()
  });

  li.classList.add("cardBox");
  img.classList.add("imagemBloco");
  tipo.classList.add("tipo");
  descricao.classList.add("descricao");
  valor.classList.add("valor");
  adicionar.classList.add("adicionar");

  img.src = objeto.imagem;
  img.alt = objeto.nameItem;
  strong.innerText = objeto.nameItem;
  descricao.innerText = objeto.description;
  valor.innerText = `R$${objeto.valor}`;
  adicionar.innerText = objeto.addCart;
  tipo.innerText = objeto.tag;


  li.append(div);
  div.append(img);
  div.append(tipo);
  h2.append(strong);
  div.append(h2);
  div.append(descricao);
  div.append(valor);
  div.append(adicionar);


  return li;
}
loja(producao);


function vazio(){
  let vazio = document.querySelector(".vazio")
  let vazio_ = document.querySelector(".vazio_")

  if(contador == 0){
    vazio.classList.remove("escondido")
    vazio_.classList.remove("escondido")
    
  } else {
    vazio.classList.add("escondido")
    vazio_.classList.add("escondido")
  }
}

function localizador(id){
  for(let i = 0; i < producao.length; i++){
    let produto = producao[i]
    if(produto.id == id){
      return produto
    }
  }
  return "produto não encontrado"
}

function cardAdicionado(produto){
  const li = document.createElement("li");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const tipo = document.createElement("p");
  const h2 = document.createElement("h2");
  const strong = document.createElement("strong");
  const descricao = document.createElement("p");
  const valor = document.createElement("p");
  const remover = document.createElement("button");
  

  li.classList.add("box");
  img.classList.add("imagemBloco");
  tipo.classList.add("tipo");
  descricao.classList.add("descricao");
  valor.classList.add("valor");
  remover.classList.add("remover");

  img.src = produto.imagem;
  img.alt = produto.nameItem;
  strong.innerText = produto.nameItem;
  descricao.innerText = produto.description;
  valor.innerText = `R$${produto.valor}`;
  remover.innerText = "Remover";
  tipo.innerText = produto.tag;
  remover.id = "item_" + produto.id

  remover.addEventListener("click", function(event){
    li.remove()
    contador--
    const quantidade = document.getElementById("quantidade")
    quantidade.innerText = `Quantidade ${contador}`

    let valorElement = parseFloat(produto.valor)
    valorTotal = valorTotal - valorElement

    const total = document.querySelector(".total")
    total.innerText = `Valor total R$${valorTotal}`
    vazio()

  })

  li.append(img)
  div.append(strong)
  div.append(valor)
  div.append(remover)
  li.append(div)

  return li
}