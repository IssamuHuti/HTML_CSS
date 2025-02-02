<!-- 

open with live server permite acessar as alterações que são feitas no arquivo html criando um servidor teste 
HTML é caseincensitive
todos os arquivos HTML precisa começar com <!doctype html> 

tag
<teste> # tag que tem um corpo, tag de abertura
    <outrotag> # tag que informa o corpo, tag de abertura
        <naotemcorpo> # essa tag não tem corpo, o fechamento dela está nela mesmo, geralmente possui atributos
    </outrotag> # tag de fechamento
</teste> # tag de fechamento
# todas as tags também podem possuir atributos 

se digitar "!" quando abrir um arquivo, o vscode puxa automaticamente a estrutura básica do HTML pronto

inicialização HTML

<html lang="pt-BR">
    <head>
        <meta charset="utf-8">
        <title></title> "informa o titulo da pagina"
    </head>

    <body> "informa o conteudo da pagina"

    </body>
</html> 

<style></style> é criado dentro da tag <head> é ela utiliza linguagem CSS para configurar algumas tags
exemplo:
    <style>
        h1 {
            background: red; alterando o fundo do titulo informado na tag h1 do html em vermelho
        }
        #nomedoid {
            background: blue; altera o tag identificado com uma "id", se o "id" estiver dentro de outro tag que já foi atribuido 
            caracteristica anteriormente, ela sobreescreve a configuração
        }
        .nomeclasse {
            background: yellow; altera todas as tags cuja classe tenha sido mencionado, sobreescreve a configuração anterior, menos
            as configurações definidas por "id"
        }
    </style>

<p></p> cria um paragrafo na introdução de um texto
<b></b> deixa as palavras dentro dela em negrito, se informar um atributo classe ou id dentro dela e informar a cor, a cor da letra muda
<strong></strong> tem um efeito semelhante que o <b>, porém ela é utilizada para dar um destaque de intensidade, além de deixar a palavra dentro dela ficar destacada, pondo destacar com outra cor ou sublinhando
<i></i> italico
<u></u> sublinha uma palavra
<s></s> risca uma palavra
<q></q> cita uma palavra entre aspas
<blockquote></blockquote> cria um paragrafo destacado
<small></small> deixa o texto menor
<sup></sup> faz o 2^2 de forma certa
<del></del> remove um texto(passa uma linha em cima da palavra)
<ins></ins> insere um novo texto sublinhado para destacar que é nova palavra
<em></em> italico, dar enfase
<code></code> permite colocar um código no site, cria dentro do <pre></pre>
<span></span> pode ser utilizada dentro de paragrafos para fazer alterações especificas para palavra, um elemento inline
<div></div> pode ser utilizada fora de paragrafos para fazer alterações especificas para palavra, mas quebra uma linha
<ul></ul> lista os conteudos
<ol></ol> lista os conteudos de forma ordenada
<li></li> entra dentro da <ul> ou <ol>, para cada tag <li> aberto, será um tópico
<article></article>
<section></section> semelhante a <div> atualizada, precisa de uma tag heading como <h1...> ou <header>
<footer></footer> rodapé no <body>
<header></header>
<aside></aside>
<table></table> cria tabela no site
    <caption><caption> cria uma descrição da tabela
    <thead></thead> cabeçalho da tabela
        <tr></tr> representa as linhas da tabela
            <th></th> representa as colunas da tabela
    <tbody></tbody> as informações da tabela
        <tr></tr> representa as linhas da tabela
            <td></td> representa as colunas da tabela
        <tr></tr> 
            <td></td>
        <tr></tr> 
            <td></td>
    <tfoot></tfoot> roda pe da tabela
        <tr></tr> 
            <td></td>
    a tabela acima tem um cabeçalho, três linhas de informações e uma linha que geralmente demonstra valores da soma total, mas não é obrigatório possuir ela
<form></form> cria formulário
    * action = informa se quer acessar algum site
    * method = função que será exercida
    * target = 
    * autocomplete="off" = desativa as consultas anteriores
    <fieldset></fieldset> cria um campo para pesquisa
        <legend></legend> cria uma legenda no campo de pesquisa
        <p>
            <label></label> geralmente utilizam ele para especificar o que se deve fazer para o input
            * no style informar cursor: pointer; para quando clicar em cima em cima do elemento label, selecionar o input
            * for = assim que o for estiver vinculado com id de uma input, permite executar o cursor: pointer

            <input type="text" id="" name="" placeholder="" value=""></input> disponibiliza o campo de pesquisa para buscar informação, fazer input
            * type = informa o tipo de informação que será introduzida
                - text = permite digitar um texto
                - checkbox = permite marcar e desmarcar um item, checked permite deixar marcado
                - radio = permite selecionar somente uma das opções disponíveis para checagem
                - date = permite fazer input de data
                - time = permite fazer input de hora e minutos
                - datetime = permite fazr input de data e hora
                - color = permite informar a cor 
                - email = permite informar o email
                - url = permite informar uma url
                - serch = usa geralmente para pesquisa
                - select = cria uma caixa com valias opções para escolher
                    <option>
                    * value = valor que será informado como valor que será detalhado no servidor
                    * label = o que aparece na tela
                    * selected = já vem preenchida o valor escolhido
                    * disabled = não permite escolher uma das opções
                    * multiple = permite selecionar mais de uma opção
                - textarea = permite escrever um texto dentro de uma caixa de texto
                    <textarea></textarea> digita os valores pré-estabelecido
                    - rows = quantidade de linhas que pode possuir na caixa
                - file = permite informar qualquer tipo de arquivo
                    * accept = "" = informar a extensão dos arquivos que vão poder ser inseridas
                - number = permite informar somente números
                    * min = o valor mínimo que aceita
                    * max = o valor máximo que aceita
                - password = permite informar a senha, quando estiver digitando, o conteúdo é substituido por simbolo
                - range = cria uma barra limitando o valor mínimo e máximo
                    * min = o valor mínimo que aceita
                    * max = o valor maximo que aceita
                    * step = de quanto em quanto irá pular a pesquisa
                    <datalist>
                        - informa o valor na barra de limitação
            * name = nome da caixa de input
            * placeholder = marcação de agua dentro da caixa de texto quando estiver vazio
            * value = valor já preenchido dentro do campo de pesquisa, e o que será informado no sistema
            * disabled = restringe a inserção de informação no input, desativando
            * readonly = restringe a inserção de informação no input
            * required = restringe prosseguimento até que satisfaça as condições

            <button></button> cria campo de botão que envia informações pré-determinadas
            * type = reset(resetar o formulário), submit(enviar)

        <p>

<nav></nav> permite incluir links de sites, precisa informar link no tag <a href="">
<a href="" target="_blank"></a> informa uma página que pode ser encaminhada, um hiperlink, target informa onde vai ser aberta a nova página
<img src="informar caminho da imagem, pode ser link de algum site" alt="logo da coca" width="altura" height="largura">
<h1></h1> cria um titulo dentro do corpo da pagina, vai até h6, são chamdas de headings
<br> faz uma quebra de linha
<hr> cria uma linha entre textos
<meta name="viewport" content="width=device-width, initial-scale=1.0"> # permite que o projeto possa ser aberta em qualquer tela
<... id=""> o "id" é um atributo que nomeia uma tag, e as tagas não podem ser nomeadas com mesmo "id"
<... class=""> o "class" é um atributo que nomeia uma tag também, porém pode ser repetida várias vezes
os atributos "id" e "class" podem ser utilizadas várias vezes dentro de uma tag, porém dentro do mesmo chamado

-->