describe("Logout functionality", () => {
    it("Is able to log out", () => {
        
        cy.visit("/start.html");
        cy.get('a[href="/"]').click();
        cy.url().should("include", Cypress.config().baseUrl).end();
    
    })


})