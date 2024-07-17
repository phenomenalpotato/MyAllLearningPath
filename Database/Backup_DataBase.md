## BackUp de um Banco de Dados:

Para fazer a exportação de um BD no WorkBench, clique em:

- Na aba **Server**, e depois em **Data Export**, e selecione os Bancos de Dados que queira exportar os dados;

  - Dump structure and Table - Faz o Dump da estrutura da Tabela e dos dados;
  - Dump Data Only - Caso queira só os dados sem a estrutura;
  - Dump Structure Only - Caso queira somente a estrutura sem os dados;

- Opção > **Include Create Schema** - Se não selecionar essa opção dentro do Dump não vai vir a criação do Banco de Dados. Ai vai forçar você a usar o comando Create database e só então possa importar o Dump;

Para fazer a Importação de um Dump de um Banco de Dados no WorkBench:

- Na Aba **Server**, clicar em **Data Import**
  - Escolha a pasta ou arquivo self gerado;
  - Clique no botão Start Import;
