class Login {
  preencherLogin(usuario) {
    cy.get('[data-qa="login-email"]').type(usuario.email);
    cy.get('[data-qa="login-password"]').type(usuario.senha);
    cy.get('[data-qa="login-button"]').click();
    return this;
  }

  verificarSeUsuarioFoiLogado(nome) {
    cy.get("i.fa-user").parent().should("contain", nome);
    return this;
  }

  validarMensagemDeErro(mensagem) {
    cy.get("p").should("contain", mensagem);
    return this;
  }

  verificarSeUsuarioFoiDeslogado() {
    cy.contains("Login to your account").should("be.visible");
    return this;
  }
}

export default new Login();
