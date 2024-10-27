class Produto {
  validarSeTelaProdutosFoiCarregada() {
    cy.get(".title").should("be.visible").and("contain", "All Products");
    return this;
  }

  validarSeConstaPeloMenosUmProduto() {
    cy.get(".single-products")
      .should("be.visible")
      .and("have.length.at.least", 1);
    return this;
  }

  acessarPrimeiroProdutoDaPagina() {
    cy.contains("View Product").first().click();
    return this;
  }

  validarSeDadosDoProdutoSaoCarregados() {
    // product name, category, price, availability, condition, brand
    cy.get(".product-information > h2").should("be.visible");
    cy.get(".product-information > p")
      .should("be.visible")
      .and("have.length", 4);
    cy.get(".product-information > span > span").should("be.visible");
    return this;
  }

  pesquisarProduto(produto) {
    cy.get("input#search_product").type(produto);
    cy.get("button#submit_search").click();
    return this;
  }

  validarSeProdutofoiPesquisadoEmNovaTela() {
    cy.get(".title").should("be.visible").and("contain", "Searched Products");
    cy.get(".single-products")
      .should("be.visible")
      .and("have.length.at.least", 1);
    return this;
  }

  adicionarPrimeiroProdutoNoCarrinho() {
    cy.get('[data-product-id="1"]').contains("Add to cart").click();
    cy.get(".btn-success.close-modal.btn-block").click();
    return this;
  }
}

export default new Produto();
