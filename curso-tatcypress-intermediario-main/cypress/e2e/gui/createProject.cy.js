import { faker } from '@faker-js/faker' //importa biblioteca faker

describe('Create Project', () => {
  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
  })

  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`, // template literals  - puxa do faker
      description: faker.random.words(5) // randomiza 5 letras pelo faker
    }

    cy.gui_createProject(project)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})