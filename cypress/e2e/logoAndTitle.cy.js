/// <reference types="cypress" />

context("Logo and Title", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4173/");
  });

  it("checks if the areas header main footer are present", () => {
    cy.get("#logo").should("be.visible");
    cy.get("#logo").should(
      "have.attr",
      "src",
      "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
    );
    cy.get("#title").should("be.visible");
    cy.get("#title").find("a").should("include.text", "Clothing Donation");
  });
});
