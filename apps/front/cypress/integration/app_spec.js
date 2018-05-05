describe("Django REST framework / React quickstart app", () => {
  const organization = {
    name: "Alex",
  };
  before(() => {
    cy.exec("npm run dev");
    cy.exec("npm run flush");
  });
  it("should be able to fill a web form", () => {
    cy.visit("/");
    cy
      .get('input[name="name"]')
      .type(organization.name)
      .should("have.value", organization.name);
    cy.get("form").submit();
  });
  it("should be able to see the table", () => {
    cy.visit("/");
    cy.get("tr").contains(`${organization.name}`);
  });
});
