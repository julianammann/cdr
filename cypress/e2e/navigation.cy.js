/// <reference types="cypress" />

context("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4173/");
    cy.get("nav").contains("Home").click();
    cy.get("nav").contains("Kleiderspende").click();
  });

  it("cy.go() - go back or forward in the browser's history", () => {
    // https://on.cypress.io/go

    cy.location("pathname").should("include", "clothing");

    cy.go("back");
    cy.location("pathname").should("not.include", "clothing");

    cy.go("forward");
    cy.location("pathname").should("include", "clothing");

    // clicking back
    cy.go(-1);
    cy.location("pathname").should("not.include", "clothing");

    // clicking forward
    cy.go(1);
    cy.location("pathname").should("include", "clothing");
  });

  it("cy.reload() - reload the page", () => {
    // https://on.cypress.io/reload
    cy.reload();

    // reload the page without using the cache
    cy.reload(true);
  });
});
