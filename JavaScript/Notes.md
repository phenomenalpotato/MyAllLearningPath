# O que é um Algoritmo e Data Structure:

**_Um Algoritmo é basicamente um conjunto de instruções que servem para completar uma tarefa._**

**_Uma Data Structure é uma maneira de organizar dados de uma maneira que seja fácil de trabalhar com eles. Por exemplo, um Array é um Data Structure._**

Nós usamos **Data Structres** para **Armazenar** Dados e usamos **Algoritmos** para **Manipular** esses Dados. Por exemplo, podemos usar uma Linked List para guardar uma lista de Nomes e deopis usar um Algoritmo para tratar essa Lista e imprimir todos os nomes;

---

# Geral:

Para criar uma variavel temos que usar o comando var ou let

Ex: var nome = "Mar" ou let nombre = "Mir"

Se quisermos atribuir um novo valor a uma variavel, não é necessário usar o comando var. Só é necessário quando queremos criar uma nova variavel.

Em JS você pode começar os identificadore de uma variavel (Nome da Variavel) com letra, $ ou \_ É possível usar letras e números, É possível usar acentos e
Símbolos.

O que os Identificadores não pode é: Começar com números, Não podem conter Espaços, Não podem ser palavras reservadas;

A priori o JS não discrimina os numeros Reais dos números Inteiros. É tudo Number.

Dicas para nomes de Identificadores:

- Maiusculas e minusculas fazem diferença. Se criar uma variavel (a) e tentar usar uma variavel (A), vai dar erro.

- Tente usar nomes coerentes para as variaveis

typeof() para saber qual é o tipo de uma variavel;

Fazendo uma concatenção entre Strings e Number: 'O aluno ' + nome + ' com idade de ' + idade + ' anos tirou ' + note + ' na prova '

Mas pode fazer de jeito mais fácil usando PlaceHolders ${} deve usar `` as Crases na Frase para o PlaceHolder funcionar. Com Crases você pode usar Template string

s.length -> É um atributo para ver quantos caracteres tem uma String

s.toUpperCase() -> É um método para transformar todos os caracteres em Maiusculas

s.toLowerCase() -> É um método para trasformar todos os caracters em Minusculos

Caso queira que um Number Float/ Real mostre mais de uma casa Decimal use o metodo: n.toFixed(n). Por exemplo para mostrar mais de duas
casas decimais n1 = 1333.5 n1.toFixed(2) = o resultado sera 1333.50

E caso eu queira trocar um ponto (.) por virgula(,) em um Number Float. Só é fazer:

n1.toFixed(2).replace('.',',') = Resultado 1333,50

Para mostrar o R$ da moeda brasileira:

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) = Resultado será 'R$ 1.333,50'

- Na Estrutura **Switch/ Case**, eu tenho que colocar dentro em cada e todo o **Case** um comando **break**. Se o programa não achar algum break dentro do case, ele irá continuar executando todos os cases abaixo dele até achar um break ou o default. É uma estrutura muito boa para testar valores pontuais. **Só funciona com NUMEROS INTEIROS OU CARACTERES**

  - **Caso necessite testar intervalos, exemplo: (>= <= and or) é muito mais valioso você usar a estrutura IF.**

- Na Estrutura de Repetição **WHILE** ela é considerada uma **Estrutura de Repetição com Teste Lógico no Inicio.** Pois a expressão para ser testada é testada logo no inicio.

- E o DO WHILE chamamos de **Estrutura de Repetição com Teste Lógico no Final.** Pois a expressão a ser testada é testada somente no final da estrutura.

- Uma soma entre um **Number** e um **Undefined** no JS vai retornar um **NaN - Not a Number** Não é um Numero.

---

# Variaveis:

## Variaveis LET, VAT e CONST

- The var keyword is used to declare function-scoped or global-scoped variables, i.e. they are accessible throughout the function or the entire program, respectively.

- The let keyword is used to declare block-scoped variables, that is, variables accessible only within the nearest curly braces block where it is defined.
  The const keyword is used to declare variables that are constant, meaning their values cannot be reassigned.
  Explicitly declaring variables improves code readability and maintainability. It makes it clear to other developers that you are creating a new variable and sets expectations about its scope. It also helps catch typos and avoid potential issues caused by accidentally reusing variable names.

- If you assign a value to a variable without declaring it with var, let, or const, JavaScript treats it as an implicit global variable. Implicit globals can lead to unintended consequences and make it difficult to track and manage variables. They can cause naming conflicts, make code harder to understand, and introduce bugs that are hard to trace.

- You should explicitly declare all the variables of your code. Use the const keyword if the variable is only assigned once and the let keyword otherwise.

---

## Variaveis Compostas

- **Variaveis Simples** só conseguem armazenar **um valor** por vez. Caso faça atribuição de um valor e posteriormente no código tente dar outro valor para aquela variavel, ela perderá o valor antigo que será substituido por o novo.

- **Variaveis Compostas** devem ser capazes de armazenar **vários valores** em uma mesma estrutura. Ela nã vai pereder os valores anteriores para os novos valores atribuidos a ela.

  - **Um Array/ Vetor/ Variável Composta é composto de Elementos**. O Elemento de um Vetor é um par que agrupa o **espaço da memória, o valor colocado dentro dele e o indice**. O **indice/ chave/ key** seria o numero indicador do array.

  **_Um Vetor/ Array/ Variavel Composta, é uma variavel que tem vários elementos, cada elemento é composto por seu valor e sua chave de Identificação._**

  Ex: let num = []; <- Definindo e Declarando uma variavel composta de nome _num_

- **Para adicionar um novo Elemento no array**, basta colocar o colchetes apos o array em quetão com a chave de onde que adicionar o novo elemento.

  Ex: num[4] = 6;

  Vai adicionar na quarta posição desse _array_ _num_ o valor _6_

- **Para adicionar um novo valor a um array em sua ultima posição**, mesmo que não saiba qual o indice dela. Use o metodo interno push(valor):

  Ex: num.push(7);

  Vai adicionar o _valor 7_ na ultima posição do _array num_

- Para saber o cumprimento do array, use o atributo .length

  Ex: num.length

  Vai retornar o cumprimento do _array num_

- Para pegar todos esses **valores do meu array e ordenar em ordem crescente**, com o metodo .sort()

  Ex: num.sort()

- **_Para buscar valores em especifico, com o metodo .indexOf() E vai me retornar a chave onde esse valor em especifico se encontra. E se não encontrar nenhum valor que bate com o que pediu, te retorna o valor -1._**

  Ex: num.indexOf(7) <- **_Vai buscar onde está o VALOR 7._** _E não o indice 7._

- **Todo array em JS é um Objeto.**

- O JS é heterogeneo quando se trata dos Arrays. Ele pode receber em um Array vários valores de outros tipos (Number, e String etc) e não só de um. Por exemplo:

  let teste = [9, "man", 9.7];

---

## O que é um Objeto:

- **Objetos são variaveis Compostas que alem de guardar valores (como o Array), que seriam no caso dele, os atributos, Objetos podem guardar funcionalidades. Mais conhecidos como Métodos.**

- **_Para o JS arrays e objetos são do tipo OBJETO_ São estruturas que vieram da mesma classe, mesma origem.**

- Para declarar um _Objeto_ utiliza as chaves {}

  Ex: let amigo = {}

- A diferenças entre um _Objeto_ e um _Array_ é que no caso do _Array_ ele é limitado a ter os indices/ chaves dele somente **numericos**, e não em **Strings**/ **Nomes** como os _Objetos_ podem

  Ex: let amigo = {nome:'José', sexo:'M', peso:85.3, engordar(p){}}; -> engordar() é uma função como um item nesse objeto amigo{}

---

## Função:

- São **_ações_** executadas assim que são **_chamadas_** ou em decorrência de algum **_evento_**. Pode receber **_parâmetros_** e **_retornar_** um resultado.

- São também conhecidas como **_Rotinas_**.

- Chamada é quando a função é chamada por alguḿm.

- Parametro

- Toda função tem uma **_Ação_**.

- E podem tambem ter um **_Retorno_**.

---

# Operadores:

### Aritméticos:

    (+) -> 5 + 2 é 7

        (+=) Mais-Igual

    (-) -> 5 - 2 é 3

        (-=) Menos-Igual

    (*) -> 5 * 2 é 10

        (*=) Vezes-Igual

    (/) -> 5 / 2 é 2.5

        (/=) Dividido-Igual

    (%) -> 5 % 2 é 1

        (%=) Resto-Igual

    (**) -> 5 ** 2 é 25 (Aqui é a potencia de 5 elevado a 2)

        (**=) Potencia-Igual

#### Incremento

    (--) -> x-- Diminui o valor atribuido de x em 1

    (++) -> x++ Incrementa o valor atribuido de x em 1

    Pós Incremento: x++ Primeiro mostra o valor de x e depois incrementa mais 1
                    x-- Primeiro mostra o valor de x e depois diminui menos 1

    Pré Incremento: ++x Primeiro incrementa o valor de x e depois mostra o valor novo
                    --x Primeiro diminui o valor de x e depois mostra o valor novo

## Ordem de Precedencia:

    Do que vem antes ao último:

    ()

    **

    * / %       <- Se eles estiverem na mesma operação, será os que aparecerem primeiro da ESQUERDA PARA A DIREITA que será executado primeiro

    + -

    Primeiro será feito os Operadores Aritméticos -> Depois os Operadores Relacionais -> E Depois os Operadores Lógicos.

    Primeiro será executado se estiverem em uma mesma expressão o (!) -> Depois (&&) -> Depois o (||)

    Os Operadores Relacionais não tem Ordem de Precedencia. O que aparecer primeiro sera executado.

### Atribuição:

    (=)

### Relacionais:

    (>) Maior

    (<) Menor

    (>=) Maior ou Igual

    (<=) Menor ou Igual

    (==) Igual

    (!=) Diferente

    (===) Operador de identidade Restrita. Serve para casos, como: 5 == '5'. Mesmo sendo diferentes tipos de dados, O JS vai retornar True
    E com esse Operador ele vai testar se os dois Operandos são Identicos, ou seja, se são do mesmo valor e do mesmo tipo. 5==='5' vai retornar False.

    (!==) Operador de Desigual Resitrito. Mesma coisa com o Operador acima.

### Lógicos:

    (!) Negação. "NÃO"

    (&&) Conjução. "E" Lógico

    (||) Disjunção. "OU" Lógico

### Ternário:

    (?)

    (:)

    Ex: 5.5 > 7 ? 'APROVADO' : 'REPROVADO' 5.5 é maior que 7  Se for TRUE retorna "APROVADO"    Se for FALSE retorna "REPROVADO"

    O Operador Ternário sempre será o último executado

---

## Funções:

Existem no JS as **Funções Anonimas**, ou seja, que não tem nome.

Ex:

function { <- A funçãp é anonima, pois não tem nome.

    window.document.write("Func anonima");

}

**Só que para o método possa funcionar, eu tenho que dar um nome para essa função.**

Ex:

function teste() {

    window.alert("Aviso");

}

---

## DOM - Document Object Model

Basicamente é um modelo de objetos dentro do seu navegador, que vai dar acesso ao componentes internos do seu WebSite. O DOM não funciona dentro do
Node.JS. Só está presente quando estou rodando o JavaScript dentro do navegador.

### Àrvore DOM

Ela começa da Raiz, e essa raiz, dentro do Navegador, chamamos de "window". Tudo dentro do JS esta dentro de um Objeto chamado window. Então aquela
Janela do seu navegador é um Objeto DOM, e ele se chama "window". Em minusculo.

Dentro do window, temos vários outros Objetos/ Elementos que podemos seleciona-los e navegar dentro da minha arvore DOM. E exsitem vários metodos para isso. Ex:

- location: Que diz qual a localização do seu Site. A URL, qual é a página atual, qual foi a página anterior

- document: Que é o documento atual.

  - HTML: Dentro de document, tem o Objeto HTML, que é a parte HTML do Site.

    - head: Dentro (filho) de HTML, tem o Objeto head.

      - meta: Dentro (filho) de head, tem o Objeto meta.
      - title: Dentro (filho) de head, tem o Objeto title.

    - body: Dentro (filho) de HTML, tem o Objeto body.
      - h1: Dentro (filho) de body, tem o Objeto h1.
      - p: Dentro (filho) de body, tem o Objeto p.
        - strong: Dentro (filho) de p, tem o Objeto strong.
      - div: Dentro (filho) de body, tem o Objeto div.

- history: Que vai guardando de onde você veio, e para onde você vai

Como selecionar e navegar pelos elementos DOM:

- Por Marca (TagName):

  - document.getElementsByTagName() -> Consigo selecionar mais de um objeto. Pq exsistem mais de um objeto do mesmo tipo., da mesma Tag. Exemplo, temos mais de dois Paragrafos com a Tag p. Então eu tenho duas tags p.

- Por ID:

  - getElementById() -> Posso identificar um elemento por ID e usar ele pelo ID

- Por Nome:

  - getElementsByName() -> Posso identificar e selecionar por Nome. Aqui igual ao .getElementsByTagName() e diferente ao .getElementById(), o Elements é no plural. Com isso quando quisermos selecionar um elemento/ objeto em especifico devemos usar [] logo após os parenteses.

- Por Classe:

  - getElementsByClassName()

- Por Seletor: -> Essa forma nova é até a mais recomendada pela a maioria dos manuais. Ele é mais rápido quando estou fazendo alterações no meu site. Ele é mais recente, ou seja, navegadores mais antigos sem suporte ao ECMA 5 ou mais novos não vão entender esse comando.
  - querySelector()
  - querySelectorAll()

### Eventos DOM:

**_Eventos são acionados para notificar o código sobre "Mudanças Interessantes" que podem afetar a execução do código. Eles veem da interação do usuário como usando o Mouse ou redimensionar a Janela, mudanças no estado do ambiente debaixo (Ex: Pouca Bateria ou Eventos de Midia do Sisitema Operacional), outras causas:_**

**_Os Eventos podem ser configurados na parte HTML ou no JS. No HTML pode fazer diretamente o metodo sendo chamado dentro das TAGS. E no JS, disparar os eventos com Listeners, que ficam prestando atenção dentro do JS._**

- O que pode acontecer com uma DIV ou outro elemento? Um monte de coisa. O mais comum, **UM EVENTO DE MOUSE** Por exemplo, chegar com o Mouse até chegar dentro da DIV. Quando chegar o Mouse na DIV, vai disparar um Evento chamada **mouseenter**. Que o Mouse entrou na Div.

- Outro coisa que posso fazer, é continuar movendo Mouse dentro da Div. Nesse momento =, vai ser disparado várias vezes o evento **mousemove**. Enquanto eu estiver movendo o Mouse dentro da Div, ele vai continuar disparando esse evento.

- Se eu clicar e segurar o clique, eu tenho o evento **mousedown**. No momento que eu soltar o botão, o clique, ele dispara outro evento, o **mouseup**.

- E o movimento do clique inteiro. Clicar e soltar, sem segurar, como o evento anterior. Que é o evento **click**.

- E ao mover o Mouse para fora dessa Div, tenho o evento **mouseout**.

---

## NodeJS:

**_É um Runtime, que basicamente executará JS no seu computador ao invés do Navegador fazer isso por você._**

**Para executar o NodeJS no terminal:** `node nome_do_arquivo.js`

Para escrever com o NodeJS, não vai funcionar o window. Tem que`usar o **Objeto console -** `console.log('');`

### Jest:

**É um Framework de testes para JavaScript.**
