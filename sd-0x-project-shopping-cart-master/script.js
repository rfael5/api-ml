

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement(sku, name, image, preco) {
  const section = document.createElement('div');
  section.className = 'item';

  $('.item').append(sku,'</br>');
  $('.item').append(name,'</br>');
  $('.item').append(`R$${preco.toFixed(2)}`,'</br>');
  $('.item').append(image,'</br>');
  $('.item').append(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function inserirElementos() {
  $.ajax({
    type: 'POST',
    url: "https://api.mercadolibre.com/sites/MLB/search?q=computador",
    dataType: 'json',
    success: dados => {console.log(dados.results)
  
        const produto = dados.results             

        
        produto.forEach(function(valor, indice, array){     
          const nomeProduto = produto[indice]["title"]
          const imagem = '<img src='+produto[indice]["thumbnail"]+'>'
          const preco = produto[indice]["price"]
          const sku = produto[indice]["id"]
          //createProductItemElement(sku, nomeProduto, imagem)
                 
          const elementos = createProductItemElement(sku, nomeProduto, imagem, preco)        
            
          document.getElementById("items").appendChild(elementos)        
         
          
        
       
            
        })}

})}

window.onload = () => {
  inserirElementos()
    
     };


