class ContaDeletada {
  validarContaDeletada() {
    cy.get('b').should('contain', 'Account Deleted!');
    cy.get('[data-qa="continue-button"]').click();
    return this;
  }
}

export default new ContaDeletada();
