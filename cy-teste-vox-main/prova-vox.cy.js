/*
1. Login: Teste o login com um usuário válido e inválido.
2. Visualização de Produtos: Teste a visualização da lista de produtos após o login.
3. Adicionar ao Carrinho: Teste a adição de um ou mais produtos ao carrinho.
4. Remover do Carrinho: Teste a remoção de produtos do carrinho.
5. Finalizar Compra: Teste o fluxo de finalização de compra. 
*/

describe('Teste 1 - Login ', () => {

  const baseUrl = 'https://www.saucedemo.com/v1/'
  it('Login Valido', () => {
    // Realiza o login com sucesso  ESCREVER BDD
    cy.visit(baseUrl)

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce{enter}')

    cy.get('.bm-burger-button').should('exist') //Verifica se o login foi realizado com sucesso
  })
  it('Login Invalido', () => {
    // Login Invalido, baseado  ESCREVER BDD 
    cy.visit(baseUrl)

    cy.get('[data-test="username"]').type('userrandom')
    cy.get('[data-test="password"]').type('secret_sauce{enter}')

    cy.contains('Epic sadface').should('exist') //Verifica se o login foi invalido
  });
})

describe('Teste 2 - Visualização  de produtos', () => {
  const baseUrl = 'https://www.saucedemo.com/v1/'
  it('Visualização de Produtos', () => {

    cy.visit(baseUrl)
    // Realiza o Login padrão
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce{enter}')
    // Verifica a existencia de cada um dos itens da lista
    cy.get('#item_4_title_link > .inventory_item_name').should('exist');
    cy.get('#item_0_title_link > .inventory_item_name').should('exist');
    cy.get('#item_1_title_link > .inventory_item_name').should('exist');
    cy.get('#item_5_title_link > .inventory_item_name').should('exist');
    cy.get('#item_2_title_link > .inventory_item_name').should('exist');
    cy.get('#item_3_title_link > .inventory_item_name').should('exist');
  });
});

describe('Teste 3 - Adicionar ao Carrinho', () => {

  const baseUrl = 'https://www.saucedemo.com/v1/'
  it('Adicionar ao Carrinho', () => {
    cy.visit(baseUrl)
    // Realiza o Login padrão
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce{enter}')
    // Realiza a visualização e inclusão no carrinho do item baseado em um click na imagem
    cy.get('#item_4_img_link > .inventory_item_img').click()
    cy.get('.btn_primary').click()
    //verifica se o item foi adicionado com sucesso 
    cy.contains('REMOVE').should('exist')

    // Necessário retornar a pagina da loja pelo menu lateral, pois o sistema retorna erro ao buscar cy.get('.inventory_details_back_button').click() 
    cy.get('.bm-burger-button > button').click()
    cy.get('#inventory_sidebar_link').click()
    // Realiza a visualização e inclusão do item clicando no titulo
    cy.get('#item_5_title_link > .inventory_item_name').click()
    cy.get('.btn_primary').click()
    // Verifica se o item foi adicionado com sucesso
    cy.contains('REMOVE').should('exist')
    // Retorna a lista de itens e adiciona um item direto pelo botão ADD TO CART
    cy.get('.bm-burger-button > button').click()
    cy.get('#inventory_sidebar_link').click()
    // Adiciona  item pelo botão direto ADD TO CART e confirma se a ação foi executada
    cy.get(':nth-child(5) > .pricebar > .btn_primary').click().should('have.text', 'REMOVE');
  });
});

describe('Teste 4 - Remover do Carrinho', () => {
  const baseUrl = 'https://www.saucedemo.com/v1/'
  it('Remover do carrinho', () => {
    cy.visit(baseUrl)
    // Realiza o Login padrão
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce{enter}')
    // Adiciona itens ao carrinho
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
    // Verifica carrinho e remove todos os itens
    cy.get('#shopping_cart_container').click()
    cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .btn_secondary').click()
    cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .btn_secondary').click()
    cy.get(':nth-child(5) > .cart_item_label > .item_pricebar > .btn_secondary').click()
    cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .btn_secondary').should('not.exist')
    cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .btn_secondary').should('not.exist')
    cy.get(':nth-child(5) > .cart_item_label > .item_pricebar > .btn_secondary').should('not.exist')
  });
});
describe('Teste 5 - Finalizar Compra', () => {
  const baseUrl = 'https://www.saucedemo.com/v1/'
  it('Finalizar compra', () => {
    cy.visit(baseUrl)

    // Realiza o Login padrão
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce{enter}')

    // Adiciona itens ao carrinho
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click().should('exist');
    cy.get(':nth-child(2) > .pricebar > .btn_primary').click().should('exist');
    cy.get(':nth-child(4) > .pricebar > .btn_primary').click().should('exist');

    // Verifica carrinho e finaliza a compra preenchendo os dados
    cy.get('#shopping_cart_container').click()
    cy.get('.btn_action').click()
    cy.get('[data-test="firstName"]').type('Testinho')
    cy.get('[data-test="lastName"]').type('Da Silva')
    cy.get('[data-test="postalCode"]').type('00000-000')
    cy.get('.btn_primary').click()
    cy.get('.subheader').should('have.text', 'Checkout: Overview');
    cy.get('.btn_action').click()
    cy.get('.subheader').should('have.text', 'Finish');

    // Desloga após a compra realizada
    cy.get('.bm-burger-button > button').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('.login_wrapper').should('exist');


  });
});






