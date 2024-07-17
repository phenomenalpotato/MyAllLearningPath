# Comandos SQL:

create DATABASE nome_do_db; <-> Comando para criar um BD Novo pode ser em maiusculo ou minusculo

create table nome_da_tabela(

); <-> Comando para criar uma tabela. Colocar entre os parenteses os Campos da Tabela

**Ex:**

    create table pessoas (
    nome varchar(30), <-> Com varchar como tipo, e o nome do cara é Jorge, ele vai guardar esses bytes e não vai ocupar o resto. Se fosse char ele ocuparia todos os bytes e encheria todo o resto de espaço caso fosse necessário
    idade tinyint(3),
    sexo char(1),
    peso float,
    altura float,
    nacionalidade varchar(20)
    );

**Ou um melhor construido:**

    create table pessoas(
    id int NOT NULL auto_increment, <-> A CONSTRAIN auto_increment funciona que a primeira pessoa que eu cadastrar vai ser o ID 1, a segunda vai ser ID 2, a terceira ID 3, tudo isso automaticamente
    nome varchar(30) NOT NULL, <-> Constrain NOT NULL quer dizer que esse valor não pode estar fazio quando alguem quiser fazer uma inserção de cadastro na tabela.
    nascimento date,
    sexo enum('M', 'F'), <-> Com o ENUM você diz quais serão os valores aceitos. Ou aceitara M ou F.
    peso decimal(5,2), <-> O (5,2) indica que serão 5 casas no total para armazenar o numero inteiro e o 2 sera quantidade de numeros que ficarao após a virgula.
    altura decimal(3,2),
    nacionalidade varchar(20) DEFAULT 'Brazil', DEFAULT 'Brazil' <-> DEFAULT 'Brazil' é uma outra Constrain. Significa que se na Nacionalidade se ninguem digitar nada, por padrão será armazenado o valor Brazil.
    PRIMARY KEY (id) <-> Qual será o meu Primary Key nessa tabela.
    )DEFAULT CHARSET = utf8mb4;

show databases; <-> Para mostrar todos os BDs

use nome_do_bd <-> Para começar a manipular o DB

show tables; <-> Para mostrar as Tabelas no BD

describe nome_da_tabela; <-> Para descrever a Tabela

status; <-> Para ver qual BD esta usando

drop database nome_do_db; <-> Exclui o DB inteiro

insert into pessoas
(id, nome, nascimento, sexo, peso, altura, nacionalidade)
values
('1', 'Godofredo', '1984-01-02', 'M', '78.5', '1.83', 'Brasil'); <-> Comando para inserir dados em todos os campos na tabela pessoas.

A Constrain DEFAULT quer dizer se ele está com auto_increment vai ser usado o dado padrão. EX:

    insert into pessoas
    (id, nome, nascimento, sexo, peso, altura, nacionalidade)
    values
    (DEFAULT,'Maria', '1999-12-30', 'F', '55.2', '1.65', 'Portugal');

Se os campos forem na mesma ordem que estou escrevendo posso fazer dessa forma, eu não preciso descrever os campos da tabela:

    insert into pessoas values
    (DEFAULT,'Creuza', '1920-12-30', 'F', '50.2', '1.65', default);

Caso eu queira cadastar vários dados com o mesmo comando Insert Into:

    alter table nome_da_tabela <-> Comando para alterar a tabela;
    add column nome_do_campo_que_quer_adicionar tipo_de_dado; <-> Comando para adicionar um novo Campo/ Coluna/ Atributo na tabela. Ex:

    alter table pessoas
    add column profisao varchar(10);

alter table nome_da_tabela
drop column nome_do_campo_que_quer_deletar; <-> Comando DROP para deletar um campo/ registro de uma determinada tabela.

alter table nome_da_tabela
add column nome_da_coluna tipo_de_dado after nome_da_Coluna_anterior_usado_de_referencia_para_colocar_a_nova_coluna; <-> Comando ADD para alterar uma coluna.

alter table nome_da_tabela
add column nome_da_coluna tipo_de_dado first; <-> FIRST é para ser usado caso queira colocar uma nova coluna/ atributo como primeira na tabela. Ex:

    alter table pessoas
    add column pri tinyint first;

alter table nome_da_tabela
modify column nome_do_campo novo_tipo_De_Dada; <-> Comando MODIFY para alerar a estrutura da definição, como o tipo de dado ou constrains. Só não pode renomear o campo. Ex:

    alter table pessoas
    modify column profissao varchar(20);

alter table nome_da_tabela
change column nome_antigo_da_coluna nome_novo_da_coluna tipo_do_dado; <-> Comando CHANGE Se quiser modificar o nome da coluna e tambem suas constrains e tipo primitivo.

alter table nome_da_tabela
rename to novo_nome_da_tabela; Comando RENAME TO para alterar a tabela inteira.

Com as Constrains IF NOT EXISTS Só vai criar uma tabela ou um novo Banco de Dados se ele não existir. E com a Constrain IF EXISTS se ele exisir. Ex:

    create table if not exists cursos(
    nome varchar(30) not null unique, <-> A Constrain UNIQUE é diferente de uma Chave Primaria. Ela não vai deixar ter o mesmo dado igual, mas não vai identificar os registros.
    descricao text,
    carga int unsigned, <-> A Constrain UNSIGNED significa sem sinal. Vai economizar 1 byte para cada dado registrado nesse campo.
    totalaulas int unsigned,
    ano year default '2024'
    ) default charset=utf8mb4;

alter table nome_da_tabela
add primary key(nome_da_coluna); <-> Comando ADD PRIMARY KEY para adicionar uma coluna como uma chave primaria depois da criação da tabela já ter acontecido.

drop table nome_da_tabela_que_quer_apagar <-> Comando DROP para apagar uma tabela.

update nome_da_tabela <-> Comando UPDATE para poder modificar uma linha.
set nome_do_registro = 'valor_novo' <-> Comando SET para escolher a linha que quer modificar
WHERE nome_de_um_registro_de_referencia = 'dado_de_referencia_do_registro'; <-> Comando WHERE para como condição para escolher qual será a referencia para encontrar o registro certo. Ex:

    update cursos
    set nome = 'HTML5'
    WHERE idcurso = '1';

update nome_da_tabela
set nome_do_registro = 'novo_valor_do_registro', nome_de_outro_registro = 'novo_valor_do_outro_registro' <-> Para atualizar dois Atributos ao mesmo tempo
where nome_de_um_registro_de_referencia = 'dado_de_referencia_do_registro'; Ex:

    update cursos
    set nome = 'PHP', ano = '2015'
    where idcurso = '4';

update nome_da_tabela
set nome_do_registro = 'valor_do_registro', nome_do_registro = 'valor_do_registro', nome_do_registro = 'valor_do_registro'
where nome_de_um_registro_de_referencia = 'dado_de_referencia_do_registro'
limit 1; <-> Comando Limit caso eu queira somente limitar o update para uma linha. É para limitar quantas linhas vão poder ser limitadas. Claro que se estiver usando com o WHERE uma Primary Key, o UPDATE só vai pegar um registro já que a PK é unica na tabela inteira. Mas se eu queiser usar o WHERE com um outro registro que não seja uma PK ele pode pegar outros campos que tenham o mesmo valor escolhido no WHERE. Ex:

    update cursos
    set nome = 'Java', carga = '40', ano = '2015'
    where idcurso = '5'
    limit 1;

    update cursos
    set carga = '100', ano = '2050'
    where ano = '2018';

    No segundo exemplo, todos e qualquer registro que tenham como valor '2018' no em seu atributo "ano" vão receber o UPDATE nos campos "carga" e "ano", com os valores 100 e 2050;

    update cursos
    set carga = '305';

delete from nome_da_tabela <-> Comando DELETE para deletar uma linha de uma tabela
where nome_de_uma_das_coluna_da_linha='valor_do_campo';

    delete from cursos
    where idcurso='8';

    Caso queira DELETAR mais de um registro ao mesmo tempo:

    delete from cursos
    where ano='2018'
    limit 3; <-> Com o comando LIMIT vai apagar os 3 primeiros registros com o valor ano='2018' que encontrar na tabela.

    delete from cursos; <-> Vai deletar todos os registros da tabela

truncate table nome_da_tabela; <-> Só Usar o Comando TRUNCATE para apagar todos os registros de uma tabela.

select \* from nome_da_tabela
where nome_da_coluna is null; <-> IS NULL é para mostrar as colunas que tem registros vazios.

    select * from gafanhotos
    where profissao is null;

select \* from nome_da_tabela
where nome_da_coluna is not null; <-> IS NOT NULL retornara somente os resultados das colunas que não estão vazias.

    select * from gafanhotos
    where profissao is not null;

select \* from nome_da_tabela as apelido_da_tabela
where apelido_da_tabela.nome_da_coluna is not null; <-> Caso queira dar um APELIDO a uma COLUNA ou TABELA use o Comando AS.

    select * from gafanhotos as go
    where go.cursopreferido is not null;

    select go.nome, cu.nome, cu.ano from gafanhotos as go
    inner join cursos as cu
    on cu.idcurso = go.cursopreferido
    order by go.nome;
