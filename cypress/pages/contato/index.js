import { faker } from '@faker-js/faker';

class Contato {
  preencherFormularioDeContato() {
    cy.get(`.contact-form h2`)
      .should('be.visible')
      .and('have.text', 'Get In Touch');

    cy.get('[data-qa="name"]').type(faker.person.fullName());
    cy.get('[data-qa="email"]').type(faker.internet.email());
    cy.get('[data-qa="subject"]').type(faker.lorem.words(3));
    cy.get('[data-qa="message"]').type(faker.lorem.paragraphs(1));

    cy.fixture('example.json').as('arquivo');
    cy.get('input[name="upload_file"]').selectFile('@arquivo');

    cy.get('[data-qa="submit-button"]').click();
    return this;
  }
  verificarSeMensagemFoiEnviada() {
    cy.get('.status').should(
      'have.text',
      'Success! Your details have been submitted successfully.'
    );
    return this;
  }
}

export default new Contato();
