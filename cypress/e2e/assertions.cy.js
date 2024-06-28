describe("Assertions", () => {
    it("Implicit Assertion", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.url().should("include", "orangehrmlive")
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
})