
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
  const section = document.createElement('section');
  section.className = 'item';

  section.append(sku,'</br>');
  section.append(name,'</br>');
  section.append(`R$${preco.toFixed(2)}`,'</br>');
  section.append(image,'</br>');
  section.append(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function inserirItens () {$.ajax({
  type: 'POST',
  url: "https://api.mercadolibre.com/sites/MLB/search?q=computador",
  dataType: 'json',
  success: dados => {console.log(dados.results)  

    
          
    dados.results.forEach(function(valor, indice, array){

            
      
      const produto = dados.results
      //console.log(produto.length)
      const nomeProduto = produto[indice]["title"]
      const imagem = createProductImageElement(produto[indice]["thumbnail"])
      const preco = produto[indice]["price"]
      const sku = produto[indice]["id"]

      /*$('.item').append(nomeProduto)
      $('.item').append(imagem)
      $('.item').append(preco)
      $('.item').append(sku)
      $('.item').append(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))*/
      
                             
      elementos = createProductItemElement(sku, nomeProduto, imagem, preco)
      document.getElementById('items').append(elementos)
                  
        
              
      } )

      
     
     
          
      }}) }
    
    

window.onload = () => {inserirItens()};
