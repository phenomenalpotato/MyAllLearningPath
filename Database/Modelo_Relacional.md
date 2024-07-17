## Modelo Relacional:

- No Modelo Relacional os dados terão, uma ou mais, relação entre eles.

- Uma **Entidade** para um Banco de Dados é como se fosse um Container, onde eu vou colocar Atributos sobre alguma coisa ou alguma pessoa. Dados são representados de forma de Atributos, esses conjuntos de Atributos vão identiifcar Tuplas, Registros que estão armazenados dentro de uma Entidade.

- Quando você cria um Modelo Relacional, faz a pergunta: **"Entidade tal, pode se relacionar com a outra Entidade?"**

- Todo Lozango (Em um Diagrama Entidade-Relacionamento - DER)/ Ligação que aparece entre duas Entidades é chamado de Relacionamento.

- **Cardinalidade** Ela pode ser Simples ou Multipla, 1 ou N. A partir da Cardinalidade podemos classificar um Relacionamento. Classificações de Relacionamentos: UM-PARA-UM, UM-PARA-MUITOS, MUITOS-PARA-MUITOS.

- **Chave Estrangeira** é a Chave Primária que veio de outra Entidade/ Tabela. Criar Relacionamento entre Tabelas é fazer troca de Chaves. É pegar a Chave Primária de um lado e jogar para outro lado. E lá ela se torna uma Chave Estrangeira. **Se uma Entidade não tem Chave Primaria, ela não consegue ter Relaçao com outra Entidade**.

- Regras Para criação de relacionamento e troca de chaves entre Entidades:

  - No Relacionamente UM-PARA-UM: Tem que se perguntar se não vale a pena juntar as duas tabelas em uma Só. Se não der, Primeiro, Escolha uma Entidade Dominante entre os dois. Pegue a chave primaria da outra entidade e transfira para a Entidade Dominante, Colocando ela como Chave Estrangeira (O nome da Chave Estrangeira não precisa ser o mesmo de como ela estava como se chamava como Chave Primaria na outra Entidade. Mas os Tipos dos Dados (Int, varchar etc) precisa ser o mesmo). Ex: Marido (1) -> caso com <- (1) Esposa

  - No Relacionamento UM-PARA-MUITOS: Você pega a chave Primaria da Entidade 1 e joga para o Lado N/ Muitos como Chave Estrangeira. Ex:
    Funcionario (1) -> cuida <- (n) Dependentes

  - No Relacionamento MUITOS-PARA-MUITOS: Primeira coisa, que deve fazer é transformar p Relacionamento entre essas duas Entidades em uma Entidade em Sí. Ex: Cliente (1) <- (n) Compra (n) -> (1) Produto . Nesse caso o Relacionamento COMPRA vai ter que virar uma Entidade. Aqui as Chaves Primarias vão todas para a Entidade Dominante, nesse caso, a Entidade COMPRA.

- Integridade Referencial: Se eu tentar alterar qualquer estrutura de uma das minhas tabelas, como, por exemplo, apagar um registro, será negado. Pois, já vai existir uma Relação entre uma entidade/ Tabela e outra tabela. Basicamente, eu não consigo afetar um campo se ele for afetar a minha transação. Se essa Transação começar a gerar inconsistencias, a engine não vai deixar acontecer.

alter table nome_da_tabela
add foreign key(nome_da_coluna_já_criado_na_tabela_acima) <-> Para adicionar uma Chave Estrangeira, é necessário explicitar que aquela atributo é uma Chave Estrangeira, com o Comando ADD FOREIGN KEY().
references nome_da_outra_tabela_que_tem_a_foreign_key(nome_da_coluna_na_outra_tabela_da_foreign_key);

    alter table gafanhotos
    add foreign key(cursopreferido)
    references cursos(idcurso); <->   Eu tenho que indicar qual a referencia dessa chave. Isso significa que o cursopreferido na tabela gafanhotos, está ligado com o idcurso da tabela de cursos.
