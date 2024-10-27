import cadastro from "../cadastro";
import login from "../login";
import contato from "../contato";
import produto from "../produto";
import carrinho from "../carrinho";
import contaDeletada from "../contaDeletada";

class Menu {
  paths = {
    Products: "products",
    Signup: "login",
    Login: "login",
    Logout: "login",
    Cart: "view_cart",
    "Contact us": "contact_us",
    "Delete Account": "delete_account",
  };

  acessarTela(menu) {
    cy.contains(menu).click();
    cy.url().should("contain", this.paths[menu]);
  }

  acessarTelaCadastro() {
    this.acessarTela("Signup");
    return cadastro;
  }

  acessarTelaLogin() {
    this.acessarTela("Login");
    return login;
  }

  acessarTelaProdutos() {
    this.acessarTela("Products");
    return produto;
  }

  acessarTelaCarrinho() {
    this.acessarTela("Cart");
    return carrinho;
  }

  acessarTelaContato() {
    this.acessarTela("Contact us");
    return contato;
  }

  acessarOpcaoDeletarConta() {
    this.acessarTela("Delete Account");
    return contaDeletada;
  }

  acessarOpcaoDeslogar() {
    this.acessarTela("Logout");
    return login;
  }
}

export default new Menu();
