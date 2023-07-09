//decracao da variavel de todos os personagens 
const personagens = document.querySelectorAll('.personagem') 
console.log(personagens);

//adiciona um evento quando passar o mouse em cima do personagem
personagens.forEach((personagem) => { 
    personagem.addEventListener('mouseenter', () => {

        //adaptacao para celular 
        if(window.innerWidth < 4500) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

        //remover a acao do personagem da lista
        const personagemselecionado = document.querySelector('.selecionado');
        personagemselecionado.classList.remove('selecionado');

        //adiciona acao do personagem da lista 
        personagem.classList.add('selecionado');
 
        //adiciona acao do personagem grande 
        const imagempersonagemgrande = document.querySelector('.personagem-grande');

        //altera a imagem do personagem grande
        const idpersonagem = personagem.attributes.id.value;
        imagempersonagemgrande.src= `./src/imagens/card-${idpersonagem}.png `;
        
        //altera o nome do personagem grande
        const  nomepersonagem = document.getElementById('nome-personagem')
        nomepersonagem.innerText = personagem.getAttribute('data-name');

        //altera a descricao do personagem grande
        const descricaopersonagem = document.getElementById('descricao-personagem')
        descricaopersonagem.innerText = personagem.getAttribute ('data-description')
    })
})