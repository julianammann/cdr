context("Cloth Donation Form", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4173/clothing-donation");
  });

  it("checks if form is present", () => {
    cy.get("form").should("be.visible");
  });

  it("checks if form has option for pickUp and onSiteDelivery is present", () => {
    cy.get("[type=radio]").first().should("not.be.checked");
    cy.get("[type=radio]").first().should("have.value", "onSiteDelivery");
    cy.get("[type=radio]").last().should("be.checked");
    cy.get("[type=radio]").last().should("have.value", "pickUpService");
    cy.get("[type=radio]").first().check();
    cy.get("[type=radio]").first().should("be.checked");
    cy.get("[type=radio]").last().should("not.be.checked");
  });

  it("displays only necessary information by onSiteDelivery fills the form with success", () => {
    cy.get("[type=radio]").first().check();
    cy.get("form#onSite").get("#vs2__combobox").click();
    cy.get("#onSite #vs2__listbox").find("li").first().click();
    cy.get("form#onSite").get("#vs2__combobox").click();
    cy.get("#onSite #vs2__listbox").find("li").last().click();
    cy.get("#onSite select").select("UA", { force: true });
    cy.get("#onSite button#onSiteDeliverySubmit").should("be.visible");
    cy.get("#onSite button#onSiteDeliverySubmit").click();
    cy.location("pathname").should("include", "success");
  });

  it("displays only necessary information by onSiteDelivery with invalid form spending country", () => {
    cy.get("[type=radio]").first().check();
    cy.get("form#onSite").get("#vs2__combobox").click();
    cy.get("#onSite #vs2__listbox").find("li").first().click();
    cy.get("form#onSite").get("#vs2__combobox").click();
    cy.get("#onSite #vs2__listbox").find("li").last().click();
    cy.get("#onSite button#onSiteDeliverySubmit").should("be.visible");
    cy.get("#onSite button#onSiteDeliverySubmit").click();
    cy.get("#onSite select").should("have.class", "border-red-500");
  });

  it("displays only necessary information by onSiteDelivery with invalid form cloth selection", () => {
    cy.get("[type=radio]").first().check();
    cy.get("#onSite select").select("JP", { force: true });
    cy.get("#onSite button#onSiteDeliverySubmit").should("be.visible");
    cy.get("#onSite button#onSiteDeliverySubmit").click();
    cy.get("#onSite .v-select div")
      .first()
      .should("have.class", "text-red-500");
  });

  it("displays only necessary information by pickUpService fills the form with success", () => {
    cy.get("[type=radio]").last().should("be.checked");
    cy.get("form#pickUp #vorname").type("Julian", { force: true });
    cy.get("form#pickUp #nachname").type("Ammann", { force: true });
    cy.get("form#pickUp #e-mail").type("test@test.de", { force: true });
    cy.get("form#pickUp #countries").select("DE", { force: true });
    cy.get("form#pickUp #straße").type("Musterstraße 12", { force: true });
    cy.get("form#pickUp #postleitzahl").type("88279", { force: true });
    cy.get("form#pickUp #stadt").type("Amtzell", { force: true });
    cy.get("form#pickUp").get("#vs1__combobox").click();
    cy.get("#pickUp #vs1__listbox").find("li").first().click();
    cy.get("form#pickUp #crisisCountries").select("UA", { force: true });
    cy.get("#pickUp button#pickUpServiceSubmit").should("be.visible");
    cy.get("#pickUp button#pickUpServiceSubmit").click();
    cy.location("pathname").should("include", "success");
  });

  it("doesn't submit if zip is not in range and shows an error message", () => {
    cy.get("[type=radio]").last().should("be.checked");
    cy.get("form#pickUp #vorname").type("Julian", { force: true });
    cy.get("form#pickUp #nachname").type("Ammann", { force: true });
    cy.get("form#pickUp #e-mail").type("test@test.de", { force: true });
    cy.get("form#pickUp #countries").select("DE", { force: true });
    cy.get("form#pickUp #straße").type("Musterstraße 12", { force: true });
    cy.get("form#pickUp #postleitzahl").type("80279", { force: true });
    cy.get("form#pickUp #stadt").type("Amtzell", { force: true });
    cy.get("form#pickUp").get("#vs1__combobox").click();
    cy.get("#pickUp #vs1__listbox").find("li").first().click();
    cy.get("form#pickUp #crisisCountries").select("UA", { force: true });
    cy.get("#pickUp button#pickUpServiceSubmit").should("be.visible");
    cy.get("#pickUp button#pickUpServiceSubmit").click();
    cy.get("#pickUp #rangeError").should(
      "have.text",
      " Leider können wir Ihre Kleiderspende nicht entgegen nehmen da Sie zu weit von unserer Hauptstelle wohnen. "
    );
  });

  it("submits the form and shows everything on success view", () => {
    cy.get("[type=radio]").last().should("be.checked");
    cy.get("form#pickUp #vorname").type("Julian", { force: true });
    cy.get("form#pickUp #nachname").type("Ammann", { force: true });
    cy.get("form#pickUp #e-mail").type("test@test.de", { force: true });
    cy.get("form#pickUp #countries").select("DE", { force: true });
    cy.get("form#pickUp #straße").type("Musterstraße 12", { force: true });
    cy.get("form#pickUp #postleitzahl").type("88279", { force: true });
    cy.get("form#pickUp #stadt").type("Amtzell", { force: true });
    cy.get("form#pickUp").get("#vs1__combobox").click();
    cy.get("#pickUp #vs1__listbox").find("li").first().click();
    cy.get("form#pickUp #crisisCountries").select("UA", { force: true });
    cy.get("#pickUp button#pickUpServiceSubmit").should("be.visible");
    cy.get("#pickUp button#pickUpServiceSubmit").click();
    cy.location("pathname").should("include", "success");
    cy.get("h3").should("contain.text", "Julian Ammann");
    cy.get("h3").should("contain.text", "Ukraine");
    cy.get("p").should("contain.text", "Musterstraße 12");
    cy.get("p").should("contain.text", "88279 Amtzell");
    cy.get("p span").should("contain.text", "Hemd");
  });
});
