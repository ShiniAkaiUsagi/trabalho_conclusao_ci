import checkout from "../checkout";

class Carrinho {
  acessarTelaCheckout() {
    cy.get(".btn-default.check_out").should("be.visible").click();
    return checkout;
  }
}
export default new Carrinho();
