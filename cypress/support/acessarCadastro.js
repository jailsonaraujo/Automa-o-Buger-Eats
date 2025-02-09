import { faker } from '@faker-js/faker';
import { generate } from 'gerador-validador-cpf';

Cypress.Commands.add('gerarDadosDeCadastro', () => {
    return {
        nome: faker.person.fullName(),
        cpf: generate(),
        email: faker.internet.email(),
        telefone: faker.phone.number('(##) #####-####'),
    };
})

Cypress.Commands.add('acessarTelaDeCadastro', () => {
    cy.get('a')
        .should('contain.text', 'Cadastre-se para fazer entregas')
        .click()
})
Cypress.Commands.add('dadosEntregador', (nome, cpf, email, zap) => {
    cy.get('input[name="name"]')
        .type(nome)
    cy.get('input[name="cpf"]')
        .type(cpf)
    cy.get('input[name="email"]')
        .type(email)
    cy.get('input[name="whatsapp"]')
        .type(zap)
})

Cypress.Commands.add('enderecoEntregador', (cep, complemento, numero) => {
    cy.get('input[name="postalcode"]')
        .type(cep)
    cy.get('input[name="address-number"]')
        .type(complemento)
    cy.get('input[name="address-details"]')
        .type(numero)
    cy.get('input[value="Buscar CEP"]')
        .click()
})

Cypress.Commands.add('metodoDeEntrega', (metodo) => {
    switch (metodo) {
        case "Moto":
            cy.get('img[alt="Moto"]')
                .should('be.visible')
                .click()
            break
        case "Bicicleta":
            cy.get('img[alt="Bicicleta"]')
                .should('be.visible')
                .click()
            break
        case "vanCarro":
            cy.get('img[alt="Van/Carro"]')
                .should('be.visible')
                .click()
            break;
        default:
    }
})

Cypress.Commands.add('carregarFoto', () => {
    cy.get('.dropzone input[type="file"]')
        .selectFile('cypress/fixtures/cnh.jpg', { force: true })
})

Cypress.Commands.add('confirmarCadastro', (img) => {
    cy.get('button[type="submit"]')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('validaCadastroComSucesso',()=>{
    cy.get('#swal2-title')
    .should('contain.text','Aí Sim...')
    .and('be.visible')
    cy.get('#swal2-html-container')
    .should('contain.text','Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')
    .and('be.visible')
    cy.contains('button', 'Fechar')
    .should('be.visible')
    .click()
})