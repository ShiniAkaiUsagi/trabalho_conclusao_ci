import { faker } from '@faker-js/faker';
import menu from '../menu';

class Cadastro {
  preencherRegistroBasico(name, email) {
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.contains('button', 'Signup').click();
    return this;
  }

  preencherFormulario(usuario) {
    this.preencherRegistroBasico(usuario.nome, usuario.email);
    const rua = faker.location.street();
    Cypress.env('rua', rua);

    cy.get('input[type=radio]').check('Mrs');
    cy.get('input[type=radio]').eq(1).check();
    cy.get('[type=password]').type(usuario.senha);
    cy.get('[data-qa="days"]').select(
      String(faker.number.int({ min: 1, max: 28 }))
    );
    cy.get('[data-qa="months"]').select(faker.date.month());
    cy.get('[data-qa="years"]').select(
      String(faker.number.int({ min: 1950, max: 2020 }))
    );

    cy.get('input[type=checkbox]#newsletter').check();
    cy.get('input[type=checkbox]#optin').check();

    cy.get('[data-qa="first_name"]').type(usuario.primeiroNome);
    cy.get('[data-qa="last_name"]').type(usuario.ultimoNome);
    cy.get('[data-qa="company"]').type(faker.company.name());

    cy.get('[data-qa="address"]').type(Cypress.env('rua'));
    cy.get('[data-qa="country"]').select('Canada');
    cy.get('[data-qa="state"]').type('Ontario');
    cy.get('[data-qa="city"]').type('Ottawa');
    cy.get('[data-qa="zipcode"]').type(faker.location.zipCode('######'));
    cy.get('[data-qa="mobile_number"]').type(
      faker.string.numeric('+1 #### ####')
    );
    cy.get('[data-qa="create-account"]').click();

    cy.url().should('includes', 'account_created');
    cy.contains('Account Created');
    cy.get('[data-qa="account-created"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
    return this;
  }

  verificarSeCadastroFoiConcluido(nome) {
    cy.get('i.fa-user').parent().should('contain', nome);
    return menu;
  }

  verificarMensagemDeErroNoCadastro(mensagem) {
    cy.get(`.signup-form form p`).should('be.visible');
    cy.get(`.signup-form form p`).and('contain', mensagem);
    return this;
  }
}

export default new Cadastro();
