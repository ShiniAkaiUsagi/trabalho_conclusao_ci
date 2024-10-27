/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

import menu from '../pages/menu';
import home from '../pages/telaInicial';

describe('Automation Exercise', () => {
  before(() => {
    cy.visit('https://automationexercise.com');

    const usuario = {
      primeiroNome: 'Teste',
      ultimoNome: 'QA',
      nome: 'Teste QA',
      email: faker.internet.email(),
      senha: faker.string.alphanumeric(5),
    };

    menu
      .acessarTelaCadastro()
      .preencherFormulario(usuario)
      .verificarSeCadastroFoiConcluido(usuario.nome)
      .acessarOpcaoDeslogar();

    Cypress.env('nameLogin', usuario.nome),
      Cypress.env('usernameLogin', usuario.email);
    Cypress.env('passLogin', usuario.senha);
  });

  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('Test Case 1: Cadastrar um usuário', () => {
    const usuario = {
      primeiroNome: 'Teste',
      ultimoNome: 'QA',
      nome: 'Teste QA',
      email: faker.internet.email(),
      senha: faker.string.alphanumeric(5),
    };

    menu
      .acessarTelaCadastro()
      .preencherFormulario(usuario)
      .verificarSeCadastroFoiConcluido(usuario.nome);
  });

  it('Test Case 2: Login User with correct email and password', () => {
    const usuario = {
      nome: Cypress.env('nameLogin'),
      email: Cypress.env('usernameLogin'),
      senha: Cypress.env('passLogin'),
    };

    menu
      .acessarTelaLogin()
      .preencherLogin(usuario)
      .verificarSeUsuarioFoiLogado(usuario.nome);
  });

  it('Test Case 3: Login User with incorrect email and password', () => {
    const usuario = {
      email: 'emailinvalido@emailinvalido.com',
      senha: 'senhainvalida123123123',
    };
    menu
      .acessarTelaLogin()
      .preencherLogin(usuario)
      .validarMensagemDeErro('Your email or password is incorrect!');
  });

  it('Test Case 4: Logout User', () => {
    const usuario = {
      email: Cypress.env('usernameLogin'),
      senha: Cypress.env('passLogin'),
    };

    menu.acessarTelaLogin().preencherLogin(usuario);
    menu.acessarOpcaoDeslogar().verificarSeUsuarioFoiDeslogado();
  });

  it('Test Case 5: Register User with existing email', () => {
    const usuario = {
      nome: 'Teste QA',
      email: Cypress.env('usernameLogin'),
    };

    menu
      .acessarTelaCadastro()
      .preencherRegistroBasico(usuario.nome, usuario.email)
      .verificarMensagemDeErroNoCadastro('Email Address already exist!');
  });

  it('Test Case 6: Contact Us Form', () => {
    menu
      .acessarTelaContato()
      .preencherFormularioDeContato()
      .verificarSeMensagemFoiEnviada();
  });

  it('Test Case 8: Verify All Products and product detail page', () => {
    menu
      .acessarTelaProdutos()
      .validarSeTelaProdutosFoiCarregada()
      .validarSeConstaPeloMenosUmProduto()
      .acessarPrimeiroProdutoDaPagina()
      .validarSeDadosDoProdutoSaoCarregados();
  });

  it('Test Case 9: Search Product', () => {
    menu
      .acessarTelaProdutos()
      .validarSeTelaProdutosFoiCarregada()
      .pesquisarProduto('Shirt')
      .validarSeProdutofoiPesquisadoEmNovaTela();
  });

  it('Test Case 10: Verify Subscription in home page', () => {
    home
      .inscreverEmail('tester-qa@mail.com')
      .verificarSucessoNaInscricao('You have been successfully subscribed');
  });

  it('Test Case 15: Place Order: Register before Checkout', () => {
    const usuario = {
      primeiroNome: 'Teste',
      ultimoNome: 'QA',
      nome: 'Teste QA',
      email: faker.internet.email(),
      senha: faker.string.alphanumeric(5),
    };

    menu
      .acessarTelaCadastro()
      .preencherFormulario(usuario)
      .verificarSeCadastroFoiConcluido(usuario.nome);
    menu.acessarTelaProdutos().adicionarPrimeiroProdutoNoCarrinho();
    menu
      .acessarTelaCarrinho()
      .acessarTelaCheckout()
      .validarDadosDoPedido(usuario.nome, Cypress.env('rua'))
      .fecharPedido()
      .efetuarCompraDoPedido(usuario.nome)
      .verificarSucessoNaCompra();
    menu.acessarOpcaoDeletarConta().validarContaDeletada();
  });
});
