class Home {
  inscreverEmail(email) {
    cy.get('input#susbscribe_email').should('be.visible').type(email);
    cy.get('button#subscribe').click();
    return this;
  }

  verificarSucessoNaInscricao(mensagem) {
    cy.contains(mensagem).should('be.visible');
    return this;
  }
}

export default new Home();
