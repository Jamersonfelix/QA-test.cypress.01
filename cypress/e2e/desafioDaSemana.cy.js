describe('Login', () => {
    it('TC01 - Login com credenciais validas', () => {
//visitar a pagina com assertion
cy.visit('https://www.saucedemo.com/v1/index.html')
cy.url().should('eq','https://www.saucedemo.com/v1/index.html')
// Preencher o campo username com assertion
    cy.get('input#user-name').type('standard_user')
    cy.get('input#user-name').should('have.value', 'standard_user')
// Preencher o campo password com assertion
    cy.get('input#password').type('secret_sauce')
    cy.get('input#password').should('have.value', 'secret_sauce')
// Clicar no botão Login
    cy.get('input.btn_action').click()
    })



it('TC02 - Login com username inavalido', () => {
//visitar a pagina
cy.visit('https://www.saucedemo.com/v1/index.html')
cy.url().should('eq','https://www.saucedemo.com/v1/index.html')
// Preencher o campo username invalido com assertion
    cy.get('input#user-name').type('standard_user1')
    cy.get('input#user-name').should('have.value', 'standard_user1')
// Preencher o campo password com assertion
    cy.get('input#password').type('secret_sauce')
    cy.get('input#password').should('have.value', 'secret_sauce')
// Clicar no botão Login
    cy.get('input.btn_action').click()
})



it('TC03 - login com senha invalida', () => {
//visitar a pagina
cy.visit('https://www.saucedemo.com/v1/index.html')
cy.url().should('eq','https://www.saucedemo.com/v1/index.html')
// Preencher o campo username com assertion
    cy.get('input#user-name').type('standard_user')
    //cy.get('input#user-name').should('have,value', 'standard_user')
// Preencher o campo password invalido com assertion
    cy.get('input#password').type('secret_user')
    //cy.get('input#password').should('have,value', 'secret_user')
// Clicar no botão Login
    cy.get('input.btn_action').click()
})


it('TC04 - Login com senha username vazio', () => {
//visitar a pagina
cy.visit('https://www.saucedemo.com/v1/index.html')
cy.url().should('eq','https://www.saucedemo.com/v1/index.html')
    // Preencher o campo password com assertion
    cy.get('input#password').type('secret_sauce')
   // cy.get('input#password').should('have,value','secret_sauce')
// Clicar no botão Login
    cy.get('input.btn_action').click()
})


it('TC05 - Login com senha vazia', () => {
//visitar a pagina 
cy.visit('https://www.saucedemo.com/v1/index.html')
cy.url().should('eq','https://www.saucedemo.com/v1/index.html')
// Preencher o campo username com assertion
    cy.get('input#user-name').type('standard_user')
    //cy.get('input#user-name').should('have,value','standard_user')
    // Clicar no botão Login
    cy.get('input.btn_action').click()
})
})

describe ('AddToCart', () => {

beforeEach(() => {
     //visitar a pagina
     cy.visit('https://www.saucedemo.com/v1/index.html')
     // Preencher o campo username
         cy.get('input#user-name').type('standard_user')
     // Preencher o campo password
         cy.get('input#password').type('secret_sauce')
     // Clicar no botão Login
         cy.get('input.btn_action').click()
 
})

it('TC06 - Adicionar um item ao carrinho', () => {
        // Adicionar um item ao carrinho
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
    })

it('TC07 - Remover um item do carrinho', () => {
    // Remover um item do carrinho
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').contains('REMOVE')
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').contains('ADD TO CART')
})

it('TC08 - Botão do carrinho esta visivel e se tem o valor 1', () => {
    // Adicionar um item ao carrinho
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
    // Botão esta visivel
    cy.xpath('/html/body/div/div[2]/div[1]/div[2]/a/span').should('be.visible')
    // se contem o valor "1 no carrinho"
    cy.xpath('/html/body/div/div[2]/div[1]/div[2]/a/span').contains('1')
})

})

describe ('CHECKOUT', () => {

it('TC09 - fazer checkout', () => {
    //visitar a pagina
     cy.visit('https://www.saucedemo.com/v1/index.html')
     // Preencher o campo username
    cy.get('input#user-name').type('standard_user')
     // Preencher o campo password
    cy.get('input#password').type('secret_sauce')
     // Clicar no botão Login
    cy.get('input.btn_action').click()
    // Adicionar um item ao carrinho
    cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
    // ir para o carrinho de compra
    cy.get('.fa-layers-counter').click()
    // fazer checkout
    cy.get('.btn_action').click()
    // colocar o primeiro nome
    cy.get('[data-test="firstName"]').type('Jamerson')
    // colocar o ultimo nome
    cy.get('[data-test="lastName"]').type('Felix')
    // colocando o codigo postal
    cy.get('[data-test="postalCode"]').type ('1234567')
    // finalizando o checkout
    cy.get('.btn_primary').click()
    // chekout
    cy.get('.btn_action').click()
    })
})