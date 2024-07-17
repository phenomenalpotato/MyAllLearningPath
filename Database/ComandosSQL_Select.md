## Comandos SQL - Select:

select \* from nome_da_tabela; <-> Comando para selecionar todos os dados/registros da tabela pessoas.

select \* from nome_da_tabela
order by nome_da_coluna; <-> Com o Comando ORDEY BY vai te mostrar ordenado em ordem por a coluna que você escolheu. Normalmente o comando SELECT vai te retornar o com a ordem da Chave Primária. Ex:

    select * from cursos
    order by nome;

    Caso queira que seja mostrado de forma debaixo para cima, na ordem alfabética inversa:

    select * from cursos
    order by nome desc; <-> O DESC como Parametro do SELECT vem de Descendent de Descendente. Caso eu queira que mostra na form Ascendente só trocar o desc por ASC.

select nome_da_coluna, nome_de_outra_coluna, nome_de_outra_coluna from nome_da_tabela <-> Só quero selecionar as COLUNAS ESPECIFICADAS NO COMANDO.
order by nome_de_uma_coluna;

    select nome, carga, ano from cursos
    order by ano, nome;

select \* from nome_da_tabela
where nome_de_uma_coluna = 'dado_que_quer_que_seja_procurado_se_tem_match' <-> Para filtrar linhas. Encontrar um ou mais registros em especifico usando a Clausula WHERE.
order by nome_da_coluna <-> Usando a clausula ORDER BY;

    Quero saber quais são os cursos que serão lançados em 2016:

    select * from cursos
    where ano = '2016'
    order by nome;

    select nome, descricao, carga from cursos
    where ano <= '2015' <-> Pode usar Operadores Relacionais no SQL com o Comando WHERE.
    order by nome;

    select ano, nome, descricao, carga from cursos
    where ano = '2010'
    order by ano, nome;

    select ano, nome, descricao, carga from cursos
    where ano <> '2010' <-> Operador Relacional "<>" que é a mesma coisa que o Operador Relacional Diferente "!="
    order by ano, nome;

select nome_da_coluna, nome_de_outra_coluna from nome_da_tabela
where nome_da_coluna between um_valor and outro_valor; <-> Comparação Entre dois dados/ valores usando os Operadores Between e AND

    select nome, ano from cursos
    where ano between 2014 and 2016;

select nome_da_coluna, nome_de_outra_coluna, nome_de_outra_coluna from nome_da_tabela
where nome_de_uma_coluna in (nome_de_um_valor, nome_de_outro_valor) <-> A diferença entre o BETWEEN e o IN, no IN eu vou poder ter valores especificos, no Between eu só vou poder especificar faixas de valores.
order by nome_de_uma_coluna;

    select nome, descricao, ano from cursos
    where ano in (2014, 2016, 2010)
    order by ano;

select \* from nome*da_tabela
where nome_da_coluna > nome_de_um_valor and nome_de_outra_coluna < \_valor*; <-> Com o Operador Relacional AND você pode comparar dois Operandos para filtrar a sua busca com o Comando WHERE. Somente vai retornar os registros que tenham os dois valores como verdadeiros.

    select * from cursos
    where carga > 35 and totalaulas < 30;

select \* from nome*da_tabela
where nome_da_coluna > nome_de_um_valor or nome_de_outra_coluna < \_valor*; <-> Com o Operador OR você vai filtrar somente se um ou Outro Valor comparado for verdadeiro.

select \* from nome_da_tabela
where nome_da_coluna like 'letra_quira_procurar%'; <-> Operador LIKE é usado para filtrar, procurar por dados parecidos com o que você pediu. O "%" é um WildCard que podemos usar para substituir nenhum ou vários caracteres.

    select * from cursos
    where nome like 'p%';

    select * from cursos
    where nome like '%4'; <-> Posso colocar o Wildcard "%" em qualquer lugar.

    select * from cursos
    where nome like '%Q%'; <-> Aqui significa que pode ser qualquer coisa na frente e qualquer coisa atŕas. Vai selecionar os dados que tenham "Q" e qualquer lugar da palavra ou frase, até mesmo, no caso do MYSQL, selecionar, se aplicado, caracteres, dados com acentuação.

    select * from cursos
    where nome not like '%h%'; <-> Com o NOT a query vai retornar somente dados que não tenham "Q" em nenhuma delas.

    select * from cursos
    where nome like 'PH%P';

select \* from nome_da_tabela
where nome_da_coluna like '[abc]%'; <-> Vai retornar somente os registros que começam ou com a ou com b ou com c na Coluna.

    select * from cursos
    where nome like '[abc]%';

select \* from nome_da_tabela
where nome_da_coluna like '[a-c]%'; <-> Vai retornar somente os registros que começam com qualquer coisa de um a ate o f na Coluna.

    select * from cursos
    where nome like '[a-h]%';

select \* from nome_da_tabela
where nome_da_coluna like '[abc]%'; <-> Vai retornar somente os registros que NÃO começam ou com a ou com b ou com c na Coluna.

    select * from cursos
    where nome like '[!abc]%';

select \* from nome*da_tabela
where nome_da_coluna like '%valor_que_quer*'; <-> "\_" É outra WildCard que exije que tehna outro caracter naquele byte, espaço. Não pode ser algo vazio, diferente do WildCard "%" que pode ser qualquer coisa até mesmo um espaço vazio.

    select * from cursos
    where nome like '%L_';

select distinct nome_da_coluna from nome_da_tabela; <-> O DISTINCT serve para mostrar somente os dados que tem uma ocorrencia/ aparecem na tabela.

    select distinct nacionalidade from gafanhotos;

select nome_da_coluna from nome_da_tabela
group by nome_da_coluna; <-> Comando GROUP BY caso eu queira saber quantas ocorrencias acontecem em uma das minhas colunas. A partir desse momento os registros foram agrupados em grupos da mesma ocorrencia.

    select carga from cursos
    group by carga;

    select carga, count(nome) from cursos <-> Vai conseguir contar, com a função de agregação count() quantos registros estão agrupados tambem. Assim dizendo quantos registros estão agrupados em um Grupo.
    group by carga;

select nome_da_coluna, count(nome_de_uma_coluna) from nome_da_tabela
group by nome_da_coluna
having count(nome_da_coluna) > um_valor; Com o Comando HAVING para o GROUP BY é semelhante ao WHERE para o SELECT. Dentro do HAVING você só pode trabalhar com o campo que agrupou.

    select carga, count(nome) from cursos
    group by carga
    having count(nome) > 3;

    select ano, count(*) from cursos
    group by ano
    having ano > '2014';

    select carga, count(*) from cursos
    where ano > 2015
    group by carga
    having carga > (select avg(carga) from cursos); <-> Pode pegar o ResultSet de outro comando para fazer uma Operação.
