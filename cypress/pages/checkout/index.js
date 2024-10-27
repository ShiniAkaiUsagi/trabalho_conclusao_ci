import { faker } from "@faker-js/faker";

class Checkout {
  fecharPedido() {
    cy.get("#ordermsg").should("be.visible").type(faker.string.numeric(12));
    cy.get(".btn-default.check_out").click();
    return this;
  }

  validarDadosDoPedido(nome, rua) {
    cy.get('[class="heading"]')
      .contains("Address Details")
      .should("be.visible");
    cy.get('[class="heading"]')
      .contains("Review Your Order")
      .should("be.visible");
    cy.get('[class="address_firstname address_lastname"]')
      .contains(nome)
      .should("be.visible");
    cy.get('[class="address_address1 address_address2"]')
      .contains(rua)
      .should("be.visible");
    cy.get('[href="/product_details/1"]').should("be.visible");
    cy.get('[class="cart_price"]').should("be.visible");
    return this;
  }

  efetuarCompraDoPedido(nome) {
    cy.get("h2").contains("Payment");
    cy.get('[data-qa="name-on-card"]').type(nome);
    cy.get('[data-qa="card-number"]').type(faker.string.numeric(16));
    cy.get('[data-qa="cvc"]').type(faker.string.numeric(3));
    cy.get('[data-qa="expiry-month"]').type(
      faker.string.numeric({ length: 2 }, { max: 12 }),
    );
    cy.get('[data-qa="expiry-year"]').type(
      faker.string.numeric({ length: 4 }, { min: 2024, max: 2034 }),
    );
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[class="title text-center"]')
      .contains("Order Placed!")
      .should("be.visible");
    return this;
  }

  verificarSucessoNaCompra() {
    cy.get('[data-qa="order-placed"]').should("be.visible");
    return this;
  }
}

export default new Checkout();
