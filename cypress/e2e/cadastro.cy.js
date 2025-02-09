describe('CADASTRO', () => {
    beforeEach('', () => {
        cy.visit('/')
        cy.fixture('dadosParaCadastro').as('dadosCadastro')
        cy.fixture('metodoRealizarEntrega').as('metodoRealizarEntrega')
    })
    context('Realizar Cadastro', function () {
        it('Validar cadastro com sucesso para método de entrega com Moto', function () {
            cy.acessarTelaDeCadastro()
            cy.gerarDadosDeCadastro().then((dados) => {
                cy.dadosEntregador(
                    dados.nome,
                    dados.cpf,
                    dados.email,
                    dados.telefone
                )
            })
            cy.enderecoEntregador(
                this.dadosCadastro.endereco.cep,
                this.dadosCadastro.endereco.numero,
                this.dadosCadastro.endereco.complemento
            )
            cy.metodoDeEntrega(
                this.metodoRealizarEntrega.moto
            )
            cy.carregarFoto()
            cy.confirmarCadastro()
            cy.validaCadastroComSucesso()
        })
        it('Validar cadastro com sucesso para método de entrega com Bicicleta', function () {
            cy.acessarTelaDeCadastro()
            cy.gerarDadosDeCadastro().then((dados) => {
                cy.dadosEntregador(
                    dados.nome,
                    dados.cpf,
                    dados.email,
                    dados.telefone
                )
            })
            cy.enderecoEntregador(
                this.dadosCadastro.endereco.cep,
                this.dadosCadastro.endereco.numero,
                this.dadosCadastro.endereco.complemento
            )
            cy.metodoDeEntrega(
                this.metodoRealizarEntrega.bicicleta
            )
            cy.carregarFoto()
            cy.confirmarCadastro()
            cy.validaCadastroComSucesso()
        })
        it('Validar cadastro com sucesso para método de entrega com Van/Carro', function () {
            cy.acessarTelaDeCadastro()
            cy.gerarDadosDeCadastro().then((dados) => {
                cy.dadosEntregador(
                    dados.nome,
                    dados.cpf,
                    dados.email,
                    dados.telefone
                )
            })
            cy.enderecoEntregador(
                this.dadosCadastro.endereco.cep,
                this.dadosCadastro.endereco.numero,
                this.dadosCadastro.endereco.complemento
            )
            cy.metodoDeEntrega(
                this.metodoRealizarEntrega.vanCarro
            )
            cy.carregarFoto()
            cy.confirmarCadastro()
            cy.validaCadastroComSucesso()
        })
    })
})