# As funções de Agregação servem para Selecionar ou Totalizar alguma coisa:

select count() from nome_da_tabela; <-> A Função COUNT() para contar quantos registros tem em uma determinada tabela baseado na expressão que eu definir dentro dos parentes como argumento.

    select count(*) from cursos; <-> A Função COUNT() para contar quantos registros tem em uma determinada tabela.

    select count(*) from cursos
    where carga > 35; <-> Retornara somente a quantidade de matchs onde a carga for maior que 35

select count(nome_da_coluna) from nome_da_tabela; <-> Você pode fazer para ele te retornar a quantidade de registros que um determinado tem.

    select count(nome) from cursos;

select max(nome_da_coluna) from nome_da_tabela; <-> Com a função MAX() ele verá o valor maximo dentro de um campo na tabela. E te retornara com esse valor maximo encontrado

    select max(carga) from cursos; <-> Qual o valor maximo na coluna carga.

select MIN(nome_da_coluna) from nome_da_tabela; <-> Pode usar a Função MIN() que ao contrario do MAX() vai te devolver o menor valor encontrado em uma coluna.

    select min(carga) from cursos;

select sum(nome_da_coluna) from nome_da_tabela; <-> Pode usar a Função SUM() para somar os registros de uma coluna.

    select sum(totalaulas) from cursos where ano = '2014';

select avg(nome_da_coluna) from nome_da_tabela; <-> Pode usar a função AVG() para fazera média de uma coluna.

    select avg(totalaulas) from cursos;
