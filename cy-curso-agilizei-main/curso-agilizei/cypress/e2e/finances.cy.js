

describe('Transações', () => {

    // hooks > executado antes ou depois de cada ou de todos os testes
    // hook ex: before - hook after - hook antes de cada teste (exemplo visit site - BeforeEach ou AfterEach)

    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app")
    });

    it('Cadastrar uma entrada', () => {
        

       criarTransacao("Freelance", 250)
       

        cy.get("tbody tr td.description").should("have.text", "Freelance")
    });

    it('Cadastrar uma saida', () => {
        
        criarTransacao("Cinema", -40)

        cy.get("tbody tr td.description").should("have.text", "Cinema")
    });

    it('Excluir Transação', () => {
        criarTransacao("Freelance", 100)
        criarTransacao("Mesada", 10)

        //metodo 1:
        //cy.contains(".description","Freelance") //td > coluna referencia
        //.parent()  // tr - linha
        //.find('img') // elemento que quero puxar 
        //.click()

        //metodo 2:
        cy.contains(".description","Freelance") 
        .siblings()
        .children('img')
        .click()
        cy.get('tbody tr').should("have.length", 1)
    });

    });

 
function criarTransacao(descricao, valor){
    cy.contains("Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2024-09-03") // yyyy-mm-dd

    cy.contains('button', 'Salvar').click()
}