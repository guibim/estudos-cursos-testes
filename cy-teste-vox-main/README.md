
Desafio Técnico Vox Tecnologia

## Projeto de Automação de Testes com Cypress

Este projeto envolve a criação de uma suíte de testes automatizados utilizando o framework Cypress, com o intuito de garantir a qualidade e confiabilidade das principais funcionalidades de uma aplicação web, especialmente no contexto de um site de e-commerce. A automação abrange cenários essenciais, como o fluxo de login, navegação e visualização de produtos, adição e remoção de itens no carrinho de compras, além da finalização do pedido.

Através de uma abordagem eficiente, os testes validam interações com a interface, verificam a integridade dos dados e simulam o comportamento dos usuários. Com o Cypress, é possível executar os testes rapidamente em diferentes ambientes, assegurando que a aplicação continue estável e funcional a cada nova atualização.


## Estrutura dos Testes Realizados
O teste foi organizado com diferentes estruturas de describe, totalizando 5 como o teste solicitou.
1. Login
2. Visualização de Produtos
3. Adicionar ao carrinho
4. Remover do carrinho
5. Finalizar Compra


## Testes realizados de maneira Headless:
![image](https://github.com/user-attachments/assets/46a97b0e-5cd3-4c3a-abd3-c8c396b8b6c4)

## GHERKIN - BDD
### 1 - Login
 Funcionalidade: Autenticação de Usuário <br />
 Para acessar o sistema <br />
 Sendo um usuário registrado  <br />
 Eu preciso ser capaz de realizar o login com meinhas credenciais  <br />

Cenário: Login Válido
- Given que o usuário está na página inicial de login
- When o usuário insere seu username e sua password
- And Clica no botão de login
- Then o usuário é redirecionado para a página principal da loja

Cenário: Login Inválido
- Given que o usuário está na página inicial de login
- When o usuário insere seu username e sua password
- And Clica no botão de login
- Then o sistema retorna o erro de que não foi encontrado essas credenciais no banco de dados.


### 2 - Visualização de Produtos
Funcionalidade:  Visualiza a lista de produtos disponíveis  <br />
Para verificar os produtos <br />
Sendo um usuário registrado <br />
Preciso visualizar os produtos disponíveis <br />


- Cenário: Visualização de Produtos
- Given O usuário está logado 
- When Acessa a página principal da loja
- Then O usuário consegue visualizar todos os itens disponíveis


### 3 - Adicionar ao carrinho
Funcionalidade: Adiciona itens ao carrinho de compras <br />
Para realizar a compra de produtos <br />
Sendo um usuário registrado <br />
Preciso adicionar itens ao carrinho de compras com sucesso <br />

Cenário: Adicionar itens ao carrinho
- Given O usuário está logado
- When Acessa a página principal da loja
- And Clica em um item pela IMAGEM e adiciona ao carrinho
- And Clica em um item pelo título e adiciona ao carrinho
- And Clica direto no botão "ADD TO CART" em um terceiro item 
- Then O Texto de "ADD TO CART" dos itens adicionados se torna "REMOVE"

### 4 - Remove itens do carrinho
Funcionalidade: Remove itens do carrinho de compra <br />
Para alterar meu pedido <br />
Sendo um usuário registrado <br />
Preciso retirar itens do carrinho <br />

- Given O usuário está logado
- When O usuário acessa a pagina principal da loja
- And adiciona itens ao carrinho com o botão "ADD TO CART"
- And verifica o carrinho de compras
- And remove todos os itens adicionados anteriormente clicando nos botões "REMOVE"	
- Then Os itens adicionados não devem existir mais naquela página


### 5 - Finalizar compra
Funcionalidade: Realiza uma compra com sucesso <br />
Para concluir uma compra <br />
Sendo um usuário registrado <br />
Preciso passar por todos os processos até a finalização do pedido. <br />


- Given O usuário esta logado
- When O usuário acessa a pagina principal da loja
- And adiciona itens ao carrinho com o botão "ADD TO CART"
- And verifica o carrinho de compras
- And Clica no botão "CHECKOUT"
- And Preenche os campos com Nome/Sobrenome e Cep 
- And Clica no botão "CONTINUE"
- Then O sistema retorna uma confirmação com os itens que estão sendo comprados
- When o usuário clica em "FINISH"
- Then O sistema retorna um FINISH agradecendo o cliente.
- And O Usuário desloga do sistema.
