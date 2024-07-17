# JOIN - Junções:

Juntando resultados de duas tabelas diferentes. Quando faço um InnerJoin somente é mostrado no resultado, os registros que tem relação um ao outro.

select nome_da_tabela.nome_da_coluna, nome_da_tabela.nome_da_coluna, nome_da_table.nome_da_coluna
from nome_da_tabela_1 inner join nome_da_outra_tabela
on nome_da_outra_tabela.chave_primaria_da_outra_tabela = nome_da_tabela_1.nome_da_chave_estrangeira_em_tabela_1; <-> Sempre que uso o JOIN, para dar sentido ao Resultado, existe a Clausula ON que é usada para filtrar qual registro tem a relação com qual outro regsitro da outra tabela. ON vai indicar onde existe a ligação das tabelas. Ex: A chave primaria e chave estrangeira.

    select go.nome, cu.nome, cu.ano from gafanhotos as go
    inner join cursos as cu
    on cu.idcurso = go.cursopreferido
    order by go.nome;

O OUTER JOIN vai tratar os conceitos do INNER JOIN junto com aqueles dados que não tem relação nenhuma com a(s) outra(s) tabela(s). No OUTER eu tenho que escolher uma das tabelas como preferencial. Então definir qual das tabelas é preferencial usando o Comando LEFT ou RIGHT.

    select go.nome, cu.nome, cu.ano
    from gafanhotos as go left outer join cursos as cu
    on cu.idcurso = go.cursopreferido;

**Como seria um Relacionamento de Cardinalidade N PARA N:**

- **Em um Relacionamento N - N eu tenho que trazer as Chaves Primarias das duas tabelas para a Tabela Dominante/ Central.**

  create table gafanhoto_assiste_curso(
  id int not null auto_increment,
  data date,
  idgafanhoto int, <-> Criando o registro que será a Chave Estrangeira dessa Tabela. Tem que ser do mesmo tipo de dado da Chave Primaria da outra tabela gafanhotos, nesse caso é INT
  idcurso int, <-> Criando outro registro que será outra Chave Estrangeira dessa Tabela. Tem que ser do mesmo tipo de dado da Chave Primaria da outra tabela cursos, nesse caso é INT
  primary key (id), <-> PK dessa tabela
  foreign key(idgafanhoto) references gafanhotos(id), <-> Dizendo qual a Chave Estrangeira dessa tabela (idgafanhoto) dessa Tabela referenciando a Chave Primaria da tabela gafanhotos
  foreign key(idcurso) references cursos(idcurso) <-> Dizendo qual a Chave Estrangeira dessa tabela (idcurso) dessa Tabela referenciando a Chave Primaria da Tabela cursos
  ) default charset = utf8mb4;

  **Como pegar dados de 3 tabelas diferentes com Relacionamento N - N:**

  select gafanhotos.nome, cursos.nome, gafanhoto_assiste_curso.data from gafanhotos
  inner join gafanhoto_assiste_curso
  on gafanhotos.id = gafanhoto_assiste_curso.idgafanhoto
  inner join cursos
  on cursos.idcurso = gafanhoto_assiste_curso.idcurso
  order by gafanhotos.nome;
