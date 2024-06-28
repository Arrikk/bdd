describe("Login To ORange", () => {

    it("Validate Title", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should("eq", "OrangeHRM")
    })

    it("Login", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()

        cy.get("h6.oxd-text.oxd-text--h6").contains("Dashboard")
    })
})