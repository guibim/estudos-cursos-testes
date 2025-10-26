//COMANDO cy.login criado com os parametros

/* Comando antigo sem a modificação de cache
Cypress.Commands.add('login', (
    user = Cypress.env('user_name'), // busca no arquivo cypress.env.json os dados
    password = Cypress.env('user_password'), // busca no arquivo cypress.env.json os dados
  ) => {
    const login = () => {
      cy.visit('/users/sign_in') // ja foi estabelecido o link do localhost, só preencher a continuidade
  
      cy.get("[data-qa-selector='login_field']").type(user)
      cy.get("[data-qa-selector='password_field']").type(password, { log: false }) //dado sensivel vai log false pra nao vazar
      cy.get("[data-qa-selector='sign_in_button']").click()
    }
  
    login();
  })
    */

  Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
    { cacheSession = true } = {},
  ) => {
    const login = () => {
      cy.visit('/users/sign_in')
  
      cy.get("[data-qa-selector='login_field']").type(user)
      cy.get("[data-qa-selector='password_field']").type(password, { log: false })
      cy.get("[data-qa-selector='sign_in_button']").click()
    }
  
    const validate = () => {
      cy.visit('/')
      cy.location('pathname', { timeout: 1000 })
        .should('not.eq', '/users/sign_in')
    }
  
    const options = {
      cacheAcrossSpecs: true,
      validate,
    }
  
    if (cacheSession) {
      cy.session(user, login, options)
    } else {
      login()
    }
  })
  
  
// comando de logout
  Cypress.Commands.add('logout', () => {
    cy.get('.qa-user-avatar').click() //identifica o avatar
    cy.contains('Sign out').click() 
  })

  // Criação de projetos
  Cypress.Commands.add('gui_createProject', project => {
    cy.visit('/projects/new')
  
    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.description)
    cy.get('.qa-initialize-with-readme-checkbox').check()
    cy.contains('Create project').click()
  })

  //cria issue
  Cypress.Commands.add('gui_createIssue', issue => {
    cy.visit(`/${Cypress.env('user_name')}/${issue.project.name}/issues/new`)
  
    cy.get('.qa-issuable-form-title').type(issue.title)
    cy.get('.qa-issuable-form-description').type(issue.description)
    cy.contains('Submit issue').click()
  })

  //cria label
  Cypress.Commands.add('gui_setLabelOnIssue', label => {
    cy.get('.qa-edit-link-labels').click()
    cy.contains(label.name).click()
    cy.get('body').click()
  })
// cria milestone
  Cypress.Commands.add('gui_setMilestoneOnIssue', milestone => {
    cy.get('.block.milestone .edit-link').click()
    cy.contains(milestone.title).click()
  })