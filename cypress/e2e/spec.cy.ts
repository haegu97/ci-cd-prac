describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it('should contain "Get started by ~" text', () => {
    cy.contains("Get started by editing");
  });
  it('should contain "Learn" heading anchor with correct href prop', () => {
    cy.contains("Learn")
      .should("have.attr", "href")
      .and("include", "https://nextjs.org/learn");
  });
});
