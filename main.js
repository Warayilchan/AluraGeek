import { API_BASE_URL } from './config.js';
console.log("Base URL:", API_BASE_URL);

let quantidade = 0;

async function listaProdutos () {
    const conexao = await fetch(`${API_BASE_URL}/produtos`);
    const valores = await conexao.json()
    console.log(valores)
    
    quantidade = valores.length;
    console.log(quantidade)

    valores.forEach(item => {
        var novoCard = document.createElement('div');
        novoCard.classList.add('card');

        var imagem = document.createElement('img');
        imagem.classList.add('card__img');
        imagem.src = item.imagem;

        var paragrafoNome = document.createElement('p');
        paragrafoNome.classList.add('card__paragrafo--nome');
        paragrafoNome.textContent = item.nome;

        var paragrafoPreco = document.createElement('p');
        paragrafoPreco.classList.add('card__paragrafo--preco');
        paragrafoPreco.textContent = "R$" + item.preco;

        var imagemLixeira = document.createElement('img');
        imagemLixeira.classList.add('card__img--lixeira'); 
        imagemLixeira.src = "./imgs/lixeira.png";

        imagemLixeira.addEventListener('click', function() {
            removerProduto(item.id)
        });

        novoCard.appendChild(imagem);
        novoCard.appendChild(paragrafoNome);
        novoCard.appendChild(paragrafoPreco);
        novoCard.appendChild(imagemLixeira);
        document.getElementById('produtos__grid').appendChild(novoCard);
    });
};

listaProdutos();

document.getElementById('preco').addEventListener("input", () => {
    let value = document.getElementById('preco').value.replace(/\D/g, "");
    value = (parseInt(value, 10) / 100).toFixed(2); 
    document.getElementById('preco').value = value.replace(".", ","); 
});

async function addProdutos(nome, preco, imagem) {
    const produto = {
        id: nome + " " + quantidade,
        nome: nome,
        preco: preco,
        imagem: await imageToBase64(imagem)
    }

    try {const requisito = await fetch(`${API_BASE_URL}/produtos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
      }) 
      console.log(requisito)

      listaProdutos();
    } 
    
    catch(error) {
        console.log(error)
    }
};

function imageToBase64(input) {
    return new Promise((resolve, reject) => {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;

        if (file) {
            reader.readAsDataURL(file); 
        }
    });
}

document.querySelector('#add').addEventListener('click', function (event) {
    const nome = document.querySelector('#nome').value;
    const preco = document.querySelector('#preco').value;
    const imagem = document.querySelector('#imagem');

    addProdutos(nome, preco, imagem);
});

async function removerProduto(id) {
    if (window.confirm("Você tem certeza que quer excluir o produto?")) {

    try {
        const conexao = await fetch(`${API_BASE_URL}/produtos/${id}`, {
            method: 'DELETE'
        });

        listaProdutos()
    } catch (error) {
        console.log("Erro ao fazer requisição para remover o produto:", error);
        }
    }
}