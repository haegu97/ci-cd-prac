describe("기본 테스트", () => {
  it("홈페이지 방문", () => {
    cy.visit("/");
    cy.contains("Get started by editing");
  });
});
