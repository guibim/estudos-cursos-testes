
 //LOGIN COM CACHE 
 describe('Login', () => {
  it('successfully', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false }

    cy.login(user, password, options)

    cy.get('.qa-user-avatar').should('be.visible')
  })
})

/* Login feito sem o log false (vazando dados)
describe('Login', () => {
  it('Login com sucesso', () => {
    cy.visit('http://localhost/')
    cy.get('#user_login').type('root');
    cy.get('#user_password').type('teste123');
    cy.get('#new_user > .submit-container > .btn').click()
    cy.get('.blank-state-row > [href="/projects/new"]').should('exist')
  })
})
  */

// Login realizado com comando novo de cy.login passando parametros pre estabelecidos e proteção de dados
/*
describe('Login', () => {
  it('successfully', () => {
    cy.login() // puxa o comando login criado no gui_commands.js

    cy.get('.qa-user-avatar').should('be.visible')
  })
})
*/
// passa o comando Login por variavel e define options - CACHE FALSE
/*
describe('Login', () => {
  it('successfully', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false }

    cy.login(user, password, options)

    cy.get('.qa-user-avatar').should('be.visible')
  })
})
  */