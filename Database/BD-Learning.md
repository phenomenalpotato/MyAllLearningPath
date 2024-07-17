# Geral:

- Campos são caracteristicas;

- Registros são compostos de Campos (caracteristicas de algo);

- Tabelas são um conjunto de Registros;

- E um Banco de Dados sáo um conjunto de Tabelas;

- Todo o caractere em SQL em ASPAS SIMPLES e toda a palavra de definição entre CRASES;

- Chaves Primária/ Primary Key são campos onde as pessoas, objetos não terão o mesmo valor. Não vão existir dois registros com o mesmo valor para a chave primária.

- Para um Banco de Dados, o que esta entre aspas ('') são dados. O que não estão entre aspas são considerados Constrains. Ex. de dados:
  ('1', 'Godofredo', '1984-01-02', 'M', '78.5', '1.83', 'Brasil')

- **O termo Tupla se refere a uma linha/ registro de um Banco de Dados;**

- **Os Campos no MYSQL são chamados de Colunas;**

- **ResultSet** é um termo para o resultado de uma instrução/ Consulta. Ex: select \* from tabela; A tabela que retornou, ou seja, o resultado da instrução, é chaamdo de ResultSet;

- O BackUp de um Banco de Dados é chamado de DUMP. Basicamente o Dump é uma sequencia de comandos que foi dado para chegar exatamente naquele estado com aquela estrutura e dados que o Banco de Dados estava no momento do Dump;

- O InnoDB é uma Engine/ Mecanismo no MySQL que permite criar Tabelas com algumas certas caracteristicas no Banco de Dados. Uma das Caracteristicas dessa Engine é suportar Chaves Estrangeiras. Outros Mecanismos que existem são o MyISAM (Um pouco mais antigo) e o XtraDB. O MyISAM não da suporte as 4 Principais Regras de Transação básicas (ACID):

  - A de **ATOMICIDADE:** Uma Transação tem que ser Atomica. Ou seja, ela não pode ser sub-divida em tarefas. Eu tenho uma Tarefa para fazer, ou toda a tarefa é feita ou nada vai ser considerado. Ex: Sua mãe pede para tu arrumar o seu quarto, e você só arruma 50%. A sua arrumação não foi atomica. Você não fez a tarefa que ela pediu por completo. Você não arrumou o Quarto. No caso de um Banco de Dados, você pede para ele salvar um dado, e ele só salva metade, ele tem que voltar para o estado anterior. Pq a transação não foi completada.

  - C de **CONSISTENCIA:** Um Banco de Dados que estava consistente anteriormente, tem que continuar consistente após uma transação. Então, antes de fazer uma transação o BD estava OK, depois de terminar a Transação, ele também tem que estar OK. Não podem ocorrer falhas, não podem ocorrer inconsitencias. E se isso acontecer, tudo isso é desfeito para o estado anterior a da transação em questão.

  - I de **ISOLAMENTO:** Trata do seguinte: Quando eu tenho duas transações acontecendo em paralelo, elas devem acontecer como se estivessem sendo executada de forma isolada. Se eu tenho dois usuários pedindo duas transações ao mesmo tempo, duas atividades ao mesmo tempo, elas não podem interferir uma na outra. Então se eu tiver coisas paralelas acontencendo, elas tem que acontecer como se tivessem isoladas. Uma não pode afetar a outra.

  - D de **DURABILIDADE:** Uma Transação tem que ser duravel. Isso é, ela tem que durar o tempo que for necessário. Exemplo, você salvou o dado de um cliente, você quer que esse dado do cliente fique lá o tempo necessário que precise dele. Não confunda que esse dado precise ser eterno. Até pq pode ser que queira fazer uma alteração nele. Agora, qualquer alteração que eu faça, ela tem que persistir, tem que ser duravel o suficiente enquanto eu precisar desse dado. Você não pode perder dados do nada.

- **Transação é tudo aquilo que você pode pedir para o Banco de Dados e ele executar e te dar uma resposta, é considerado uma Transação. Toda a ação que um Banco de Dados possa executar, é considerado uma Transação. E para toda a Transação acontecer, ela tem que seguir as 4 Principais Regras.**
