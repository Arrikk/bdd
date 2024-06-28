describe('XPath Locators', () => { 

        it("Login", () => {
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.get('input[name="username"]').type("Admin")
            cy.get('input[name="password"]').type("admin123")
            cy.get('button[type="submit"]').click()

            cy.xpath("//ul[@class='oxd-main-menu']/li").should("have.length", 12)
        })

 })