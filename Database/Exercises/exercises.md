## EXERCICIOS:

select nome, sexo from gafanhotos
where sexo = 'F';

select nome, nascimento from gafanhotos
where nascimento between '2000-01-01' and '2015-12-31';

select nome, profissao, sexo from gafanhotos
where profissao = 'Programador' and sexo = 'M';

select nome, nacionalidade, sexo from gafanhotos
where nacionalidade = 'Brazil' and sexo = 'F' and nome like 'J%';

select nome, nacionalidade from gafanhotos
where nome like '%silva%' and nacionalidade != 'Brazil' and peso < '100' and sexo = 'M';

select max(altura) from gafanhotos
where nacionalidade = 'Brazil' and sexo = 'M';

select avg(peso) from gafanhotos;

select min(peso) from gafanhotos
where sexo = 'F' and nacionalidade != 'Brazil' and nascimento between '1990-01-01' and '2000-12-31';

select count(altura) from gafanhotos
where sexo = 'F' and altura > '1.90';

select \* from gafanhotos;

select profissao, count(profissao) from gafanhotos
group by profissao
having count(profissao) > 0;

select sexo, count(sexo) from gafanhotos
where nascimento > '2005-01-01'
group by sexo;

select nacionalidade, count(nacionalidade) from gafanhotos
where nacionalidade != 'Brazil'
group by nacionalidade
having count(nacionalidade) >= 3;

select avg(altura) from gafanhotos;

select altura, peso, count(\*) from gafanhotos
where peso > '100'
group by altura, peso
having altura > (select avg(altura) from gafanhotos);
