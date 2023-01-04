const htmlSkill = document.querySelector('.html-skill')
const texto = document.querySelector('.texto-descricao')
const cssSkill = document.querySelector('.css-skill')
const jsSkill = document.querySelector('.js-skill')
const pySkill = document.querySelector('.python-skill')
const sqlSkill = document.querySelector('.sql-skill')
const phpSkill = document.querySelector('.php-skill')
    //Alterando texto
    htmlSkill.addEventListener('click', function(evento){
        evento.preventDefault()
        texto.innerHTML = 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web.'
    })

    htmlSkill.addEventListener('mouseout', function(){
        texto.innerHTML = 'Clique em alguma habilidade para ler a descrição.'
    })
    cssSkill.addEventListener('click', function(evento){
        evento.preventDefault()
        texto.innerHTML = 'CSS é um mecanismo para adicionar estilo a um documento web.'
    })
    cssSkill.addEventListener('mouseout', function(){
        texto.innerHTML = 'Clique em alguma habilidade para ler a descrição.'
    })

    jsSkill.addEventListener('click', function(evento){
        evento.preventDefault()
        texto.innerHTML = 'JavaScript é uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.'
    })
    jsSkill.addEventListener('mouseout', function(){
        texto.innerHTML = 'Clique em alguma habilidade para ler a descrição.'
    })

    pySkill.addEventListener('click', function(evento){
        evento.preventDefault()
        texto.innerHTML = 'Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.'
    })
    pySkill.addEventListener('mouseout', function(){
        texto.innerHTML = 'Clique em alguma habilidade para ler a descrição.'
    })

    sqlSkill.addEventListener('click', function(evento){
        texto.innerHTML = 'O MySQL é um SGBD, um Sistema de gerenciamento de banco de dados, que usa a linguagem SQL como interface.'
    })
    sqlSkill.addEventListener('mouseout', function(){
        texto.innerHTML = ' Clique em alguma habilidade para ler a descrição.'
    })

    phpSkill.addEventListener('click', function(evento){
        texto.innerHTML = 'O PHP é uma linguagem de script open source de uso geral, muito utilizada, e especialmente adequada para o desenvolvimento web e que pode ser embutida dentro do HTML.'
    })
    phpSkill.addEventListener('mouseout', function(){
        texto.innerHTML = ' Clique em alguma habilidade para ler a descrição.'
    })