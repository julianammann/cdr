/// <reference types="cypress" />

context("Content areas", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4173/");
  });

  it("checks if the areas header main footer are present", () => {
    cy.get("header").should("be.visible");
    cy.get("#container").should("be.visible");
    cy.get("footer").should("be.visible");
  });

  it("checks if the footer area has the Imprint and DataProtection Links and a Copyright", () => {
    cy.get("footer")
      .find("span")
      .should("include.text", "© 2022 Julian Ammann. All Rights Reserved.");
    cy.get("footer").find("li").first().should("include.text", "Impressum");
    cy.get("footer").find("li").last().should("include.text", "Datenschutz");
  });
});
