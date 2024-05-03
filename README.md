# speed_radar_web

Essa aplicação é a implementação de um servidor NodeJS para o projeto final da disciplina de IoT no SENAI. Esse servidor centraliza os serviços de conexão e comunicação usados pela ESP-32 e pela página web.

# Requisitos

- NodeJS 18.x.x+;
- Microsoft SQL Server 2019+;

# Uso da TypeORM

Fazemos uso da ```TypeORM``` para mapear os objetos do servidor para tabelas no banco de dados. Isso significa que o código do servidor já possui as definições das tabelas necessárias no banco, sem a necessidade de executar queries SQL para montar as tabelas.

No entanto, são necessárias fazer algumas configurações para que o servidor seja capaz de se comunicar com o banco de dados. Seguem instruções abaixo do passo a passo dessas configurações; assume-se que o SQL Server Management Studio esteja sendo usado como cliente SQL. Alguns passos podem ser diferentes se outro cliente for empregado.

***

1. Acesse o SQL Server Management Studio e crie um banco de dados. ```CREATE DATABASE <nome_do_seu_db>```
2. Localize a pasta ```Segurança```. Com um clique do botão direito, navegue pelas opções ```Novo``` > ```Logon...```
3. Dê um nome ao seu novo Logon, e marque o radio button ```Autenticação do SQL Server```. Defina uma senha, e desmarque a checkbox ```Import política de senha```. Selecione o banco de dados recém criado na caixa de seleção ```Banco de dados padrão```.
4. Procure a aba ```Mapeamento de usuário```. Nela, marque a checkbox corresponde ao banco recém criado. Após isso, marque a checkbox ```db_owner``` e dê OK no seu novo Logon.
5. Para testá-lo, desconecte da sua instância e tente se conectar de novo. Quando o prompt de conexão surgir, troque a seleção de Autenticação para ```Autenticação do SQL Server```, e entre com o nome e a senha definidos.
6. Após isso, feche o Management Studio e abra o SQL Server Configuration Manager.
7. Navegue pelas abas:
```Configuração de Rede do SQLServer``` > ```Protocolos para <nome_da_sua_instância>```.
8. Abra o protocolo TCP/IP. Mude o valor da propriedade ```Habilitado``` para ```Sim```.
9. Navegue para a aba ```Endereços IP```. Aqui, no IP1, mude seleção da propriedade ```Habilitado``` para ```Sim```. Mude as valores das outras propriedades da seguinte forma: ```Portas TCP``` para ```1433``` e ```Portas TCP Dinâmicas``` para um valor vazio. Dê OK nas suas configurações.
10. Voltando à aba inicial, localize o serviço ```SQL Server Browser``` e abra suas propriedades. Navegue para a aba ```Serviço``` e localize a propriedade ```Modo inicial```. Mude sua seleção para ```Automático```.
11. De volta à tela inicial, clique com o botão direito no serviço recém configurado e selecione a opção ```Iniciar```.
12. Por fim, localize o serviço ```<nome_da_sua_instância>```. Com o botão direito, selecione a opção ```Reiniciar```.
13. Feche o Configuration Manager.
14. Clone o repositório para uma pasta de sua escolha:
```git clone https://github.com/AndreLuisPLuz/speed_radar_server.git```
15. No nível raíz do repositório, crie um novo arquivo ```.env```. Copie os conteúdo do arquivo ```.env.example``` para dentro dele.
16. Troque as informações de exemplo pelas informações usadas no seu banco. Alguns desses campos não são tão intuitivos: ```DB_NAME``` se refere ao nome que você deu ao banco de dados criado no primeiro passo. ```DB_PORT``` é a porta que você configurou para a sua conexão TCP, normalmente a 1433. ```DB_HOST```pode ser encontrado no SQL Server Management Studio; selecione o nível raíz do seletor de objetos com o botão direito do mouse e abra as propriedades. Copie o valor da propriedade ```Nome``` e cole aqui.
17. Salve o arquivo e teste sua conexão com o banco, rodando o comando ```npm run dev``` no seu terminal.

# Rodando o servidor

Toda vez que se desejar usar o sistema, o servidor deve ser inicializado com o comando ```npm run dev```.
Não fazê-lo implicará que a ESP-32 será incapaz de salvar suas informações no banco de dados, e que a página web será incapaz de acessá-las.