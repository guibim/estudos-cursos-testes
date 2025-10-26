const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`

// COMANDO PARA POST
Cypress.Commands.add('api_createProject', project => {
  cy.request({
    method: 'POST',
    url: `/api/v4/projects/`,
    body: {
      name: project.name,
      description: project.description,
      initialize_with_readme: true
    },
    headers: { Authorization: accessToken },
  })
})

// COMANDO PARA GET
Cypress.Commands.add('api_getAllProjects', () => {
    cy.request({
      method: 'GET',
      url: '/api/v4/projects/',
      headers: { Authorization: accessToken },
    })
  })
  
  // COMANDO PARA DELETE
  Cypress.Commands.add('api_deleteProjects', () => {
    cy.api_getAllProjects().then(res =>
      res.body.forEach(project => cy.request({
        method: 'DELETE',
        url: `/api/v4/projects/${project.id}`,
        headers: { Authorization: accessToken },
      }))
    )
  })

  // comando para criar issues
  Cypress.Commands.add('api_createIssue', issue => {
    cy.api_createProject(issue.project)  //primeiro cria um projeto
      .then(response => { //entao
        cy.request({
          method: 'POST', 
          url: `/api/v4/projects/${response.body.id}/issues`, // é criado uma issue para o projeto criado
          body: {
            title: issue.title,
            description: issue.description
          },
          headers: { Authorization: accessToken }, // precisa estar autorizado para executar
        })
    })
    // comando para criar labels
    Cypress.Commands.add('api_createLabel', (projectId, label) => {
        cy.request({
          method: 'POST',
          url: `/api/v4/projects/${projectId}/labels`,
          body: {
            name: label.name,
            color: label.color
          },
          headers: { Authorization: accessToken },   // precisa estar autorizado para executar
        })
      })

  })
  //cria uma milestone(marco)
  Cypress.Commands.add('api_createMilestone', (projectId, milestone) => {
    cy.request({
      method: 'POST',
      url: `/api/v4/projects/${projectId}/milestones`,
      body: { title: milestone.title },
      headers: { Authorization: accessToken },  // precisa estar autorizado para executar
    })
  })